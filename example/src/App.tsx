import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import {
  getFirstInstallTime,
  getLastUpdateTime,
  getPackageTime,
} from 'react-native-package-time';

const App = () => {
  const [packageTime, setPackageTime] = useState<number>();
  const [firstInstallTime, setFirstInstallTime] = useState<number>();
  const [lastUpdateTime, setLastUpdateTime] = useState<number>();

  useEffect(() => {
    getPackageTime().then(async (result) => {
      console.log(`Package time: ${result}`);
      setPackageTime(result);
    });
    getFirstInstallTime().then(async (result) => {
      console.log(`First install time: ${result}`);
      setFirstInstallTime(result);
    });
    getLastUpdateTime().then(async (result) => {
      console.log(`Last update time: ${result}`);
      setLastUpdateTime(result);
    });
  }, []);

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>{`packageTime: ${packageTime}`}</Text>
      <Text>{`firstInstallTime: ${firstInstallTime}`}</Text>
      <Text>{`lastUpdateTime: ${lastUpdateTime}`}</Text>
    </View>
  );
};

export default App;
