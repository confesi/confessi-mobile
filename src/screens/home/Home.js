import { View, Text, StyleSheet, Button } from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAccessToken, selectAccessToken } from "../../redux/slices/tokenSlice";
import * as SecureStore from 'expo-secure-store';
import { DOMAIN } from "../../constants/setup";
import logout from "../../helpers/auth/logout";

export default function Home() {
    const dispatch = useDispatch();
    const token = useSelector(selectAccessToken);
    const [user, setUser] = useState("");

    async function getUserAPI(token) {
        const response = await fetch(`${DOMAIN}/api/posts`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token, 
            },
        });
        const data = await response.json();
        setUser(data);
    }

    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button title={`remove token (logout). Token: ${token}`} onPress={() => {logout(dispatch)}}></Button>
            <Button title={`Get user: ${user}`} onPress={() => {getUserAPI(token)}}></Button>
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