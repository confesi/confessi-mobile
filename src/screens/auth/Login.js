import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React, { useState } from "react";
import loginAndSetTokens from "../../helpers/auth/loginAndSetTokens";
import { useDispatch } from "react-redux";


export default function Login({ navigation }) {

    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function login() {
        const data = await loginAndSetTokens(username, password, dispatch);
        console.log(data);
        if (data?.error == false) {
            setPassword("");
            setUsername("");
            navigation.replace("Home"); // add not able to go back
        } else {
            console.log("NO NAVIGATE, cuz ERROR");
        }
    }

    return (
        <View style={styles.container}>
            <Text>{`Enter login details:\n`}</Text>
            <TextInput
                onChangeText={setUsername}
                value={username}
                placeholder="Enter username"
                autoCorrect={false}
            />
            <TextInput
                onChangeText={setPassword}
                value={password}
                placeholder="Enter password"
                autoCorrect={false}
            />
            <Button title="Submit" onPress={login}/>
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