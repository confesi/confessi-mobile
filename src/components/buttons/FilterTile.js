import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { GREEN, LIGHT_GREEN, OFF_WHITE, WHITE } from "../../constants/colors";

export default function FilterTile(props) {

    let styles = StyleSheetFactory.getSheet(props.backgroundColor, props.textColor);

    return (
        <View style={styles.container}>
            <Text numberOfLines={1} style={styles.text}>{props.text}</Text>
        </View>
    );
}

class StyleSheetFactory {
    static getSheet(backgroundColor, textColor) {
        return StyleSheet.create({
            container: {
                paddingLeft: 15,
                paddingTop: 15,
                backgroundColor: WHITE,
                justifyContent: "flex-start",
                // flex: 1,
            },
            text: {
                alignItems: "flex-start",
                backgroundColor: backgroundColor,
                color: textColor,
                paddingHorizontal: 12,
                paddingVertical: 10,
                borderRadius: 10,
                overflow: "hidden",
                fontFamily: "Poppins_600SemiBold",
            }
        })
    }
}