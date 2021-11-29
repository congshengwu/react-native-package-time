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
  console.log(time);
});

```

## API

|       Method      |  Param          |   Return Type       | iOS     |  Android      |                         Description                     |
| ----------------- | ------          | -----------         | ------- |  ---          | --------------------------------------------------------|
| getPackageTime()  |        -        | `Promise<number>`   |    true |    true       |  The packaging(build / compile) time of the App         |

## License

MIT
