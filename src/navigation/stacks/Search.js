import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from "../../screens/search/Search";

const SearchStack = createNativeStackNavigator();

export default function SearchStackScreen() {
    return (
      <SearchStack.Navigator >
        <SearchStack.Screen name="SearchStack" component={SearchScreen} options={{headerShown: false}}/>
        {/* Add more screens here */}
      </SearchStack.Navigator>
    );
}