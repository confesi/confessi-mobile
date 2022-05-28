import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

export default function IconButton(props) {
    return (
        <TouchableOpacity>
            <Icon name={props.icon} size={25} color="white"/>
        </TouchableOpacity>
    );
}

