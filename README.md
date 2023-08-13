# Food-Allergy-Smart-App

Universal app for scanning a barcode on a packet of food to return the allergens contained in the food.

---

# Steps to Create a React Native Application using Expo

_Note: Running the project with React Native CLI requires XCode or Android Studio which needs around an hour for installation and configuration._
For the aforementioned reason, we can use `Expo` to create a new project and run it.

1. To create a new project

```
npm create-expo-app <app-name>
```

2. Start the project

```
npx expo start
```

Follow the official documentation if any issues occur: [reactnative.dev/docs/environment-setup](https://www.reactnative.dev/docs/environment-setup)

---

# Steps taken to run the react native app in web browser

3. Install the following dependencies to run the react-native application in web browser.

```
npx expo install react-native-web
npx expo install react-dom
npx expo install @expo/webpack-config
```

If there is an issue while installing the `@expo/webpack-config` then add the following in `app.json` file under `web` as mentioned in (GitHub-issues)[https://www.github.com/expo/expo-cli/issues/4729]

```
"bundler" : "metro"
```
