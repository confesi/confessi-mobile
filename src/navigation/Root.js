import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Splash from "../screens/Splash";
import TabsNavigation from "./Tabs";
import Open from "../screens/auth/Open";
import { StatusBar } from "react-native";

export default function Root() {
  const [loading, setLoading] = useState(true);
  const [refreshToken, setRefreshToken] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      setLoading(false);
    }, 1000);
    setTimeout(() => {
        setRefreshToken("xx");
    }, 2000);
  }, []);

  return (
    <NavigationContainer>
        <StatusBar barStyle="dark-content"/>
        {loading ? <Splash/> : refreshToken ? <TabsNavigation/> : <Open/>}
    </NavigationContainer>
  );
}