import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import IconButton from "../buttons/IconButton";
import { GREEN, WHITE } from "../../constants/colors";

export default function Appbar() {
    return (
        <View style={styles.canvas}>
            <TouchableOpacity>
                <Text style={styles.text}>University of Victoria</Text>
            </TouchableOpacity>
            <IconButton icon="options-outline"/>
        </View>
    );
}

const styles = StyleSheet.create({
    canvas: {
      paddingRight: 15,
      paddingLeft: 15,
      height: 55,
      backgroundColor: GREEN,
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row",
    },
    text: {
        fontSize: 18,
        color: WHITE,
        fontWeight: "500",
        fontFamily: "Montserrat_700Bold",
    }
});