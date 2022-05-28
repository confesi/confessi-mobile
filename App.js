import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import Root from './src/navigation/Root';
import { store } from './src/redux/store';
import getAccessToken from './src/helpers/auth/getAccessToken';
import { useEffect } from "react";


export default function App() { 
  return (
    <Provider store={store}>
      <Root/>
    </Provider>
  );
}
