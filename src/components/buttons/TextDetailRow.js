import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { WHITE, PRIMARY, ACCENT } from "../../constants/colors";
import Spacer from "../layout/Spacer";
import Icon from 'react-native-vector-icons/Ionicons';
import { BODY } from "../../constants/typography";
import TextDetail from "./TextDetail";

export default function TextDetailRow() {
    return (
        <View style={styles.container}>
            <TextDetail backgroundColor={PRIMARY} textColor={WHITE} iconColor={WHITE} icon="pencil" text="add details"/>
            <Spacer x={15}/>
            <TextDetail backgroundColor={ACCENT} textColor={PRIMARY} iconColor={PRIMARY} icon="arrow-up-outline" text="publish post"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 12,
        flexWrap: "wrap",
    },
});