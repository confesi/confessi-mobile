import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TEXT } from "../../constants/colors";

export default function TwoTextHorizontal() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Confessi</Text>
            <View style={{height: 20, width: 1, backgroundColor: TEXT, marginHorizontal: 10}}/>
            <Text style={styles.text}>Matthew</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    text: {
        marginHorizontal: 10, 
    }
});