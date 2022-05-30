import React from "react";
import { View } from "react-native";

export default function Spacer(props) {
    return (
        <View style={{marginTop: props.y, marginLeft: props.x}}/>
    );
}