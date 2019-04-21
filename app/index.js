// import core js is een tijdelijke fix
import 'core-js';
import React from 'react';
import { AppRegistry, YellowBox /* , StatusBar */ } from 'react-native';
// import { Provider } from 'react-redux';

// import store from '../shared/redux/createStore';
import App from './App';

// TODO: Remove bottom 2 warnings when react-native-gesture-handler has a new release
// Warnings that can be hidden from emulator (will show up in console)
YellowBox.ignoreWarnings([
  'Remote debugger is in a background tab which may cause apps to perform slowly. Fix this by foregrounding the tab (or opening it in a separate window).',
  "Warning: Slider has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-community/slider' instead of 'react-native'. See https://github.com/react-native-community/react-native-slider",
  "Warning: ViewPagerAndroid has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-community/viewpager' instead of 'react-native'. See https://github.com/react-native-community/react-native-viewpager",
]);

const AppContainer = () => (
  // <Provider store={store}>
  <App />
  // </Provider>
);

AppRegistry.registerComponent('reactnative_boilerplate', () => AppContainer);
