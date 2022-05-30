import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Archive() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Recents Screen (font: inter)</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        fontFamily: "Inter_600SemiBold",
        fontSize: 16,
    }
});