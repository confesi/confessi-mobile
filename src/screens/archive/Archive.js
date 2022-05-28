import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Archive() {
    return (
        <View style={styles.container}>
            <Text style={{ fontFamily: 'Montserrat_400Regular', fontSize: 16 }}>Archive Screen (testing font)</Text>
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