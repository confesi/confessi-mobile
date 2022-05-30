import React from "react";
import { View } from "react-native";
import { LIGHT } from "../../constants/colors";

export default function HorizontalLine() {
    return (
        <View style={{backgroundColor: LIGHT, height: 1, width: "100%"}}/>
    );
}