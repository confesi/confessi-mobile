// if it times out, just say no internet or something, don't redirect? Or just test timeouts in general
// timeout controller leads to no wifi message? idk, cuz that could also be beacuse toknen can't be found (or not cuz I have !token check on getAccessToken)
// Eitherway, this could help: https://stackoverflow.com/questions/46946380/fetch-api-request-timeout

import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Splash from "../screens/Splash";
import TabsNavigation from "./Tabs";
import Open from "../screens/auth/Open";
import { StatusBar } from "react-native";
import getAccessToken from "../helpers/auth/getAccessToken";
import { useDispatch, useSelector } from "react-redux";
import { selectAccessToken, setAccessToken } from "../redux/slices/tokenSlice";
import * as SecureStore from 'expo-secure-store';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function Root() {
  // starts loading, gets accessToken from redux store
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const accessToken = useSelector(selectAccessToken);

  // using the stored (or not stored if first time/token invalid) refresh token, fetch an accessToken from the server and send it to redux store
  useEffect(() => {
    async function getToken() {
        // this SecureStore line is added for testing
        await SecureStore.setItemAsync("refreshToken", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTW9uZ29PYmplY3RJRCI6IjYyOGRkMzM5OThhMGZiZjExZGYyNjIwNyIsImlhdCI6MTY1MzY0NzQ4NiwiZXhwIjoxNjg1MjA1MDg2fQ.3a8cpjFojZW2x5muXsVMV_IAv9mpTgckrPHw2lkbFxs");
        let tokenData = await getAccessToken();
        if (tokenData.error == false) dispatch(setAccessToken(tokenData.accessToken));
        // delays setting loading to false for x milliseconds as to not cause a super fast "jank" screen transition
        setTimeout(() => {
            setLoading(false);
        }, 400);
    }
    getToken();
  }, []);

  const RootStack = createNativeStackNavigator();

// if loading, display splash screen, else, if there exists an access token show home screen, else, show open screen
return (
    <NavigationContainer>
        <StatusBar barStyle="dark-content"/>
        <RootStack.Navigator>
            {loading ? <RootStack.Screen
                    name="Splash"
                    component={Splash}
                    options={{
                    animationTypeForReplace: "push",
                    headerShown: false,
                    }}
            /> : accessToken ? <RootStack.Screen
                name="Home"
                component={TabsNavigation}
                options={{
                animationTypeForReplace: "push",
                headerShown: false,
                }}
            /> : <RootStack.Screen
                name="Open"
                component={Open}
                options={{
                animationTypeForReplace: "push",
                headerShown: false,
                }}
            />}
        </RootStack.Navigator>
    </NavigationContainer>
  );
}