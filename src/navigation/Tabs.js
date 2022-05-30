import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, TouchableOpacity, Text, Button, Pressable } from "react-native";
import HomeStackScreen from "./stacks/Home";
import Icon from 'react-native-vector-icons/Ionicons';
import ProfileStackScreen from "./stacks/Profile";
import ArchiveStackScreen from "./stacks/Recents";
import PostStackScreen from "./stacks/Post";
import SearchStackScreen from "./stacks/Search";
import { LIGHT, WHITE } from "../constants/colors";

export default function TabsNavigation() {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false, tabBarStyle: {backgroundColor: WHITE, borderTopColor: LIGHT, borderTopWidth: 0.5}}}>
                <Tab.Screen name="HomeTab" component={HomeStackScreen} options={({ navigation }) => ({
                      tabBarButton: (props) => {
                          return (
                          <Pressable {...props} onPress={() => navigation.navigate("HomeTab")} style={styles.btn}>
                            <Icon name={props.accessibilityState.selected ? "home" : "home-outline"} size={30} color="black"/>
                          </Pressable>
                          );
                      }
                })}/>
                <Tab.Screen name="RecentsTab" component={ArchiveStackScreen} options={({ navigation }) => ({
                      tabBarButton: (props) => {
                          return (
                          <Pressable {...props} onPress={() => navigation.navigate("RecentsTab")} style={styles.btn}>
                            <Icon name={props.accessibilityState.selected ? "compass" : "compass-outline"} size={30} color="black"/>
                          </Pressable>
                          );
                      }
                })}/>
                <Tab.Screen name="PostTab" component={PostStackScreen} options={({ navigation }) => ({
                      tabBarButton: (props) => {
                          return (
                          <Pressable {...props} onPress={() => navigation.navigate("PostTab")} style={styles.btn}>
                            <Icon name={props.accessibilityState.selected ? "add-circle" : "add-circle-outline"} size={30} color="black"/>
                          </Pressable>
                          );
                      }
                })}/>
                <Tab.Screen name="SearchTab" component={SearchStackScreen} options={({ navigation }) => ({
                      tabBarButton: (props) => {
                          return (
                          <Pressable {...props} onPress={() => navigation.navigate("SearchTab")} style={styles.btn}>
                            <Icon name={props.accessibilityState.selected ? "search" : "search-outline"} size={30} color="black"/>
                          </Pressable>
                          );
                      }
                })}/>
                <Tab.Screen name="ProfileTab" component={ProfileStackScreen} options={({ navigation }) => ({
                      tabBarButton: (props) => {
                          return (
                          <Pressable {...props} onPress={() => navigation.navigate("ProfileTab")} style={styles.btn}>
                            <Icon name={props.accessibilityState.selected ? "person-circle" : "person-circle-outline"} size={30}/>
                          </Pressable>
                          );
                      }
                })}/>
        </Tab.Navigator>
    );
}


const styles = StyleSheet.create({
    btn: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  