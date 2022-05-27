import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";

export default function Splash() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Confessi</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "#448EF6",
    },
    text: {
        fontWeight: "bold",
        color: "white",
        fontSize: 30,
        bottom: "15%",
    }
});