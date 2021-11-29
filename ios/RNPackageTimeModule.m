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

  return @{ @"packageTime": packageTime };
}

@end
