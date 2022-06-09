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

function getLastUpdateTime(): Promise<number> {
  return new Promise<number>((resolve) => {
    if (Platform.OS === 'ios') {
      const time = NativeModules.RNPackageTimeModule.lastUpdateTime;
      resolve(new Date(time).getTime());
    } else {
      NativeModules.RNPackageTimeModule.getLastUpdateTime((result: string) => {
        resolve(Number(result));
      });
    }
  });
}

function getFirstInstallTime(): Promise<number> {
  return new Promise<number>((resolve) => {
    if (Platform.OS === 'ios') {
      const time = NativeModules.RNPackageTimeModule.firstInstallTime;
      resolve(new Date(time).getTime());
    } else {
      NativeModules.RNPackageTimeModule.getFirstInstallTime(
        (result: string) => {
          resolve(Number(result));
        }
      );
    }
  });
}

export { getFirstInstallTime, getLastUpdateTime, getPackageTime };
