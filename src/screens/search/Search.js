import { View, Text, StyleSheet, SafeAreaView, StatusBar, Platform } from "react-native";
import React from "react";
import Appbar from "../../components/layout/Appbar";
import FilterTile from "../../components/buttons/FilterTile";
import { GREEN, LIGHT_GREEN, OFF_WHITE, WHITE } from "../../constants/colors";

export default function Search() {
    return (
        <SafeAreaView style={styles.canvas}>
            <Appbar/>
            <View style={styles.body}>
                <FilterTile text="Trending" backgroundColor={GREEN} textColor={WHITE}/>
                <FilterTile text="Controversial" backgroundColor={LIGHT_GREEN} textColor={GREEN}/>
                <FilterTile text="New" backgroundColor={LIGHT_GREEN} textColor={GREEN}/>
                <FilterTile text="Hottest" backgroundColor={LIGHT_GREEN} textColor={GREEN}/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    canvas: {
        backgroundColor: GREEN,
    },  
    body: {
      backgroundColor: WHITE,
      flexDirection: "row",
    },
});