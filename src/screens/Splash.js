import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";

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
      backgroundColor: "#448EF6",
    },
    text: {
        flex: 1,
        fontWeight: "bold",
        color: "white",
        fontSize: 30,
        textAlign: "center",
        top: "25%"
    },
    smallText: {
        fontWeight: "300",
        color: "white",
        fontSize: 15,
        textAlign: "center",
    }
});