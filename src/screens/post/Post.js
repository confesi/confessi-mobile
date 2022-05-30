import { Platform, View, StyleSheet, SafeAreaView, TextInput, ScrollView, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, Touchable } from "react-native";
import React, { useState } from "react";
import HeaderWithBody from "../../components/text/HeaderWithBody";
import HorizontalLine from "../../components/layout/HorizontalLine";
import Spacer from "../../components/layout/Spacer";
import { BODY, TITLE } from "../../constants/typography";
import { LIGHT, WHITE } from "../../constants/colors";
import TextDetailRow from "../../components/buttons/TextDetailRow";
// import { useHeaderHeight } from "@react-navigation/elements";


export default function Post() {
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0

    const [text, setText] = useState("");
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
           <Spacer y={10}/>
            <HeaderWithBody headerText="Create an anonymous confession" bodyText="Please be civil, but have fun. Posts are never linked to your account."/>
            <TextDetailRow/>
            <Spacer y={15}/>
            <HorizontalLine/>
            <Spacer y={15}/>
            <ScrollView keyboardDismissMode="on-drag" style={styles.scroll} alwaysBounceVertical={true} horizontal={false} directionalLockEnabled={true}>

            <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={0}>
                <View>
                <TextInput placeholderTextColor={LIGHT} maxLength={3000} style={[styles.textfield, BODY]} placeholder="spill your guts..." multiline={true} onChangeText={(newVal) => setText(prev => {prev + newVal})} value={text}/>
                </View>
           </KeyboardAvoidingView>
           </ScrollView>

        </SafeAreaView>
        </TouchableWithoutFeedback>

    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: WHITE,
      alignItems: 'center',
      justifyContent: 'flex-center',
      alignItems: "center",
      marginHorizontal: 15,
      height: "100%",
    },
    textfield: {
        textAlign: "left",
        textAlignVertical: "top",
        backgroundColor: "lavender",
    },
    scroll: {
        // height: "100%",
        width: "100%"
    }
});