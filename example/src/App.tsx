import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { getPackageTime } from 'react-native-package-time';

const App = () => {
  const [packageTime, setPackageTime] = useState<string>('');

  useEffect(() => {
    getPackageTime().then(async (result) => {
      setPackageTime(result);
    });
  }, []);

  return (
    <View>
      <Text>{`packageTime: ${packageTime}`}</Text>
    </View>
  );
};

export default App;
