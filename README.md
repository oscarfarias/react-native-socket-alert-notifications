This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.



## This project extends from [NextJs Notifications](https://github.com/oscarfarias/notifications)

The infrastructure for handling notifications is in my [nextjs project](https://github.com/oscarfarias/notifications).

This project consists of consuming the functionalities of:

- Send and receive notifications
- Detect devices

All this using react native


![](https://user-images.githubusercontent.com/62184285/285442128-f293b766-90e4-4a76-a99c-dbb5e8bfabb7.gif)


## Setup

In both projects you must put the .env file

SOCKET_CLIENT = your local ip address for example

```bash
NO_FLIPPER=1
SOCKET_CLIENT=http://192.168.1.100:3000
SOCKET_CLIENT_PATH=/api/socketio
```

## Install all dependencies

```bash
# using npm
npm install

# usgin yarn
yarn install

```


## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.