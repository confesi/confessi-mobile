import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import Root from './src/navigation/Root';
import { store } from './src/redux/store';

export default function App() {
  return (
    <Root/>
  );
}
