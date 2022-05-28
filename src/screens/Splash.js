// This screen is shown while loading fonts... so it shouldn't contain anything with text - preferably eventually an animated logo

import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { PINK, WHITE } from "../constants/colors";

export default function Splash() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Confessi</Text>
            <Text style={styles.smallText}>{`by\nMatthew Trent`}</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 3,
      alignItems: 'center',
      justifyContent: 'center',
      alignContent: "space-between",
      backgroundColor: PINK,
    },
    text: {
        flex: 1,
        fontWeight: "bold",
        color: WHITE,
        fontSize: 30,
        textAlign: "center",
        top: "25%",
    },
    smallText: {
        fontWeight: "300",
        color: WHITE,
        fontSize: 15,
        textAlign: "center",
    }
});