//
//  RNPackageTimeModule.m
//  RNPackageTimeModule
//
//  Copyright © 2021 Shengwu Cong. All rights reserved.
//

#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(RNPackageTimeModule, NSObject)

#pragma mark - get package time
- (NSDictionary *)constantsToExport
{
  // package time
  NSString *buildDate = [NSString stringWithFormat:@"%s %s",__DATE__, __TIME__];

  NSDateFormatter *dateFormatter = [[NSDateFormatter alloc] init];
  // input date format
  [dateFormatter setDateFormat:@"MMM dd yyyy HH:mm:ss"];

  NSDate *dateFormatted = [dateFormatter dateFromString:buildDate];
  NSTimeZone *timeZone = [NSTimeZone timeZoneWithName:@"UTC"];
  [dateFormatter setTimeZone:timeZone];

  // output date format
  [dateFormatter setDateFormat:@"yyyy-MM-dd\'T\'HH:mm:ss.SSS"];
  NSString *dateString = [dateFormatter stringFromDate:dateFormatted];

  NSString *packageTime = [dateString stringByAppendingString:@"Z"];

  // first install time
  NSURL* urlToDocumentsFolder = [[[NSFileManager defaultManager] URLsForDirectory:NSDocumentDirectory inDomains:NSUserDomainMask] lastObject];
  __autoreleasing NSError *error;
  NSDate *installDate = [[[NSFileManager defaultManager] attributesOfItemAtPath:urlToDocumentsFolder.path error:&error] objectForKey:NSFileCreationDate];

  NSDateFormatter*df = [[NSDateFormatter alloc]init];
  [df setDateFormat:@"yyyy-MM-dd\'T\'HH:mm:ss.SSS"];
  NSString *installTime = [df stringFromDate:installDate];

  return @{ @"packageTime": packageTime, @"firstInstallTime": installTime };
}

@end
