import React from "react";
import {View, Text, StyleSheet} from "react-native";
import { TITLE, BODY } from "../../constants/typography";
import Spacer from "../layout/Spacer";

export default function HeaderWithBody(props) {
    return (
        <View style={styles.container}>
            <Text style={[styles.text, TITLE]}>{props.headerText}</Text>
            <Spacer y={10}/>
            <Text style={[styles.text, BODY]}>{props.bodyText}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        maxWidth: 500,
    },
    text: {
        textAlign: "center",
    }
});