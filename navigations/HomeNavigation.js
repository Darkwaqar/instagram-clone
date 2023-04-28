import React from "react";
import { Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";

import HomeScreen from "../screens/HomeScreen";
import StoryScreen from "../screens/StoryScreen";
import logo from "../assets/logo.png";

const HomeStack = createStackNavigator();

export default function HomeNavigation() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Instagram",
          headerLeftContainerStyle: {
            marginLeft: 15,
          },
          headerRightContainerStyle: {
            marginRight: 15,
          },
          headerLeft: () => (
            <Feather
              name="camera"
              size={25}
              color={"#000"}
              style={{ marginLeft: 15 }}
            />
          ),
          headerTitle: () => (
            <Image
              source={logo}
              resizeMode="contain"
              style={{ width: 135, height: 50 }}
            />
          ),
          headerRight: () => (
            <Ionicons
              name="paper-plane-outline"
              size={25}
              color={"#545454"}
              style={{ marginRight: 15 }}
            />
          ),
        }}
      />
    </HomeStack.Navigator>
  );
}
