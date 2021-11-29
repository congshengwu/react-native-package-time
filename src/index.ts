import { NativeModules, Platform } from 'react-native';

function getPackageTime(): Promise<number> {
  return new Promise<number>((resolve) => {
    if (Platform.OS === 'ios') {
      const time = NativeModules.RNPackageTimeModule.packageTime;
      resolve(new Date(time).getTime());
    } else {
      NativeModules.RNPackageTimeModule.getPackageTime((result: string) => {
        resolve(new Date(result).getTime());
      });
    }
  });
}

export { getPackageTime };
