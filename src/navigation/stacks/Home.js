import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../../screens/home/Home";

const HomeStack = createNativeStackNavigator();

export default function HomeStackScreen() {
    return (
      <HomeStack.Navigator >
        <HomeStack.Screen name="HomeStack" component={HomeScreen} options={{headerShown: false}}/>
        {/* Add more screens here */}
      </HomeStack.Navigator>
    );
}