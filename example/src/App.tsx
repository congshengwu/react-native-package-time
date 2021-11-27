import React, { useEffect } from 'react';
import RNPackageTimeModule, { Counter } from 'react-native-package-time';

const App = () => {
  useEffect(() => {
    console.log(RNPackageTimeModule);
  });

  return <Counter />;
};

export default App;
