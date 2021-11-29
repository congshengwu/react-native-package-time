import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { getPackageTime } from 'react-native-package-time';

const App = () => {
  const [packageTime, setPackageTime] = useState<number>();

  useEffect(() => {
    getPackageTime().then(async (result) => {
      console.log(result);
      setPackageTime(result);
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
    </View>
  );
};

export default App;
