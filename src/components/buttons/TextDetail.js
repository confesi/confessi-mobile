import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Touchable } from "react-native";
import { PRIMARY, WHITE } from "../../constants/colors";
import Spacer from "../layout/Spacer";
import Icon from 'react-native-vector-icons/Ionicons';
import { BODY } from "../../constants/typography";

export default function TextDetail(props) {
    return (
        <TouchableOpacity style={styles.button}>
        <View style={[styles.container, {backgroundColor: props.backgroundColor}]}>
            <Icon name={props.icon} color={props.iconColor} size={20}/>
            <Spacer x={15}/>
            <Text style={[styles.text, {...BODY, color: props.textColor}]}>{props.text}</Text>
        </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 7,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10,
    },
    button: {
        paddingTop: 15,
    }
});