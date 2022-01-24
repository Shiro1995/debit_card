# Debit Card App

This is a simple repository for building a mobile app by React Native framework. It follows the requirement in the coding challenge of my interview.

## How To Use?

After cloning the repository, get all project-dependencies by running the command above at terminal:
```
 yarn install
```
Then run app on the simulator or your real-device.



**for iOS:**
```
 yarn ios
```
Noted: I don't have a Mac OS device so it still has a small issue with Fonts when running. I found many solutions in this link and I think it's not a big issue to evaluate this project:
https://stackoverflow.com/questions/42410354/unrecognized-font-family-on-ios-simulator-with-react-native  
**for Android:**
```
 yarn android
```



## Testing
Run command:

```
 yarn test
```
## Tech-Stack
- React-Navigation
- Redux, Redux-saga
- Unit test
- Javascript

## Screens in app
There are two screens I have to do in this challenge.
- [x] Debit card screen for show card's information and setting features.
- [x] Weekly Spending limit setting.

![alt](https://i.imgur.com/vF5QsAu.jpg)
![alt](https://i.imgur.com/rwRFfbM.jpg)

## Mock data
This app using miragejs for fetching data.

Document: 
https://miragejs.com/quickstarts/react-native/development/

## Structure

This is a simple project, so I separate every single folder in concordance with its feature. Basically, it will have UI and logic follow redux-state management.

## Current dependencies added at *package.json*:

```
"dependencies": {
    "@react-navigation/bottom-tabs": "^6.0.9",
    "@react-navigation/native": "^6.0.6",
    "@react-navigation/native-stack": "^6.2.5",
    "native": "^0.3.3",
    "native-base": "^3.3.3",
    "react": "^17.0.2",
    "react-native": "^0.67.1",
    "react-native-offline": "^6.0.0",
    "react-native-safe-area-context": "^3.3.2",
    "react-native-safe-area-view": "^1.1.1",
    "react-native-screens": "^3.10.2",
    "react-native-svg": "^12.1.1",
    "react-navigation": "^4.4.4",
    "react-redux": "^7.2.6",
    "redux": "^4.1.2",
    "redux-actions": "^2.6.5",
    "redux-saga": "^1.1.3"
  },

```
## Thank you
