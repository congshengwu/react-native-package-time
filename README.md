# react-native-package-time

Get the packaging(build / compile) time for your app.

## Installation

`yarn add react-native-package-time`

or

`npm i react-native-package-time`

Don't forget to run `pod install` under your project `/ios` folder.

## Usage

```typescript
import PackageTime from 'react-native-package-time';

// or

import { getPackageTime } from 'react-native-package-time';

// Unix timestamp, in milliseconds.
getPackageTime().then((time): nubmer => {
  console.log(time); // 1638201352000
});

```

## API

|       Method      |  Param          |   Return Type       | iOS     |  Android      |                         Description                     |
| ----------------- | ------          | -----------         | ------- |  ---          | --------------------------------------------------------|
| getPackageTime()  |        -        | `Promise<number>`   |    true |    true       |  The packaging(build / compile) time of the App         |

## how to run example

1. Clone the code from master branch.
2. Go into the root directory of this project, and run `yarn` or `npm install`.
3. Go into the `/example/ios` directory, and run `pod install`. (Optional, only for running example on iOS device)
4. Under the directory `/example`, run `yarn android` or `npm run android` for Android device, and `yarn ios` or `npm run ios` for iOS device.

## License

MIT
