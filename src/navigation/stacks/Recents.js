import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecentsScreen from "../../screens/recents/Recents"

const RecentsStack = createNativeStackNavigator();

export default function ArchiveStackScreen() {
    return (
      <RecentsStack.Navigator >
        <RecentsStack.Screen name="RecentsStack" component={RecentsScreen} options={{headerShown: false}}/>
        {/* Add more screens here */}
      </RecentsStack.Navigator>
    );
}