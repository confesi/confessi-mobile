// This screen is shown while loading fonts... so it shouldn't contain anything with text - preferably eventually an animated logo

import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import React from "react";
import { PRIMARY, WHITE } from "../constants/colors";
import TwoTextHorizontal from "../components/text/TwoTextHorizontal";

export default function Splash() {
    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.img} source={require("../../assets/logo.png")}></Image>
            <TwoTextHorizontal/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
      alignContent: "space-between",
      backgroundColor: WHITE,
    },
    img: {
        width: 220,
        height: 220
    }
});