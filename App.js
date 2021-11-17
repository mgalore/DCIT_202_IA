import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./screens/Login";
import Home from "./screens/Home";
import DetailsScreen from "./screens/DetailsScreen";
export default function App() {
 const MainNavigator = createStackNavigator();

  return (
    <View style={{flex:1}}>
      <NavigationContainer>
      <MainNavigator.Navigator screenOptions = {{headerShown : false}}>
        <MainNavigator.Screen name = "Login" component={Login}/>   
        <MainNavigator.Screen name = "Home" component={Home}/> 
        <MainNavigator.Screen name = "DetailsScreen" component={DetailsScreen}/>   
  

      </MainNavigator.Navigator>
      </NavigationContainer>
    </View>
  );
}   
  

