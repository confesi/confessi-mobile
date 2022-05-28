import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

export default function Open({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Open Screen</Text>
            <Button title="go to login screen" onPress={() => {navigation.navigate("Login")}}></Button>
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