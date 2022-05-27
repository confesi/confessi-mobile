import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PostScreen from "../../screens/post/Post";

const PostStack = createNativeStackNavigator();

export default function PostStackScreen() {
    return (
      <PostStack.Navigator >
        <PostStack.Screen name="PostStack" component={PostScreen} options={{headerShown: false}}/>
        {/* Add more screens here */}
      </PostStack.Navigator>
    );
}