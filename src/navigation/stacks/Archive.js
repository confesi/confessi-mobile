import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ArchiveScreen from "../../screens/archive/Archive";

const ArchiveStack = createNativeStackNavigator();

export default function ArchiveStackScreen() {
    return (
      <ArchiveStack.Navigator >
        <ArchiveStack.Screen name="ArchiveStack" component={ArchiveScreen} options={{headerShown: false}}/>
        {/* Add more screens here */}
      </ArchiveStack.Navigator>
    );
}