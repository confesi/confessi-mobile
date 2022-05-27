import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAccessToken } from "../../redux/slices/tokenSlice";

export default function Home() {
    const dispatch = useDispatch();
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button title="remove token (logout)" onPress={() => {dispatch(setAccessToken(null))}}></Button>
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
});