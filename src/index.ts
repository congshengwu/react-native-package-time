import { NativeModules, Platform } from 'react-native';

function getPackageTime(): Promise<string> {
  return new Promise<string>((resolve) => {
    if (Platform.OS === 'ios') {
    } else {
      NativeModules.RNPackageTimeModule.getPackageTime((result: string) => {
        resolve(result);
      });
    }
    return null;
  });
}

export { getPackageTime };

// import * as React from 'react';
// import { Button, NativeModules, StyleSheet, Text, View } from 'react-native';

// export const addOne = (input: number) => input + 1;
//
// export const Counter = () => {
//   const [count, setCount] = React.useState(0);
//
//   return (
//     <View style={styles.container}>
//       <Text>You pressed {count} times</Text>
//       <Button onPress={() => setCount(addOne(count))} title='Press Me' />
//     </View>
//   );
// };
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: 200,
//   },
// });
//
// export default NativeModules.RNPackageTimeModule;
