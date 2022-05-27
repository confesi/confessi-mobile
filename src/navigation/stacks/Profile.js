import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from "../../screens/profile/Profile";

const ProfileStack = createNativeStackNavigator();

export default function ProfileStackScreen() {
    return (
      <ProfileStack.Navigator >
        <ProfileStack.Screen name="ProfileStack" component={ProfileScreen} options={{headerShown: false}}/>
        {/* Add more screens here */}
      </ProfileStack.Navigator>
    );
}