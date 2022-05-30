// THOUGHTS
// if it times out, just say no internet or something, don't redirect? Or just test timeouts in general
// timeout controller leads to no wifi message? idk, cuz that could also be beacuse toknen can't be found (or not cuz I have !token check on getAccessToken)
// Eitherway, this could help: https://stackoverflow.com/questions/46946380/fetch-api-request-timeout

import React, { useState, useEffect } from "react";
import Splash from "../screens/Splash";
import TabsNavigation from "./Tabs";
import Open from "../screens/auth/Open";
import { StatusBar } from "react-native";
import getAccessToken from "../helpers/auth/getAccessToken";
import { useDispatch, useSelector } from "react-redux";
import { selectAccessToken, setAccessToken } from "../redux/slices/tokenSlice";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../screens/auth/Login";
import { ACCESS_TOKEN_LIFETIME } from "../constants/setup";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { 
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black 
} from '@expo-google-fonts/inter'
import { WHITE } from "../constants/colors";

export default function Root() {
  // starts loading, gets accessToken from redux store
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const accessToken = useSelector(selectAccessToken);
  const [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black 
  });

  // using the stored (or not stored if first time/token invalid) refresh token, fetch an accessToken from the server and send it to redux store
  useEffect(() => {
    async function getToken() {
        let tokenData = await getAccessToken();
        if (tokenData.error == false) {
            dispatch(setAccessToken(tokenData.accessToken));
        } else {
            dispatch(setAccessToken(null));
        }
        // delays setting loading to false for x milliseconds as to not cause a super fast "jank" screen transition
        setTimeout(() => {
            setLoading(false);
        }, 400);
        // refreshes the access token using the refresh token directly before the old access token would expire
        setTimeout(() => {
            getToken();
        }, ACCESS_TOKEN_LIFETIME - 500);
    }
    getToken();
  }, []);

  const RootStack = createNativeStackNavigator();

// The theme React Navigation uses to add color to our components if we don't - setting default background color here to my constant (there's is a white-gray)
const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: WHITE,
    },
};

// if loading, display splash screen, else, if there exists an access token show home screen, else, show open screen
return (
    <NavigationContainer theme={MyTheme}>
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
                // animationTypeForReplace: "push",
                animation: "fade",
                headerShown: false,
                }}
            /> : <RootStack.Screen
                name="Open"
                component={Open}
                options={{
                // animationTypeForReplace: "pop",
                animation: "fade",
                headerShown: false,
                }}
            />}
            <RootStack.Screen
                name="Login"
                component={Login}
                options={{
                animationTypeForReplace: "push",
                // animation: "fade",
                headerShown: false,
                }}
            />
        </RootStack.Navigator>
    </NavigationContainer>
  );
}