# react-native-package-time

Get some state timestamps of app.

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

| Method                |      Param      |     Return Type     |   iOS   | Android  | Description                                                                           |
|:----------------------|:---------------:|:-------------------:|:-------:|:--------:|:--------------------------------------------------------------------------------------|
| getPackageTime()      |        -        |  `Promise<number>`  |  true   |   true   | The packaging(build / compile) time of App                                            |
| getFirstInstallTime() |        -        |  `Promise<number>`  |  true   |   true   | The first install time of App (It will not change until uninstallation)               |
| getLastUpdateTime()   |        -        |  `Promise<number>`  |  true   |   true   | The update install time of App (On iOS, **Version** or **Build** changes is required) |

## How to run the example project

1. Clone the code from master branch.
2. Go into the root directory of this project, and run `yarn` or `npm install`.
3. Go into the `/example/ios` directory, and run `pod install`. (Optional, only for running example on iOS device)
4. Under the directory `/example`, run `yarn android` or `npm run android` for Android device, and `yarn ios` or `npm run ios` for iOS device.

## Todo

- [x] Get the first installation time of the app.
- [x] Get the update installation time of the app.

## License

MIT
