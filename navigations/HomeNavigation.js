import React from "react";
import { Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";

import HomeScreen from "../screens/HomeScreen";
import StoryScreen from "../screens/StoryScreen";
import logo from "../assets/icon.png";

const HomeStack = createStackNavigator();

export default function HomeNavigation() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Instagram",
          headerLeftContainerStyle: {
            marginLeft: 15,
          },
          headerRightContainerStyle: {
            marginRight: 15,
          },
          headerLeft: () => <Feather name="camera" size={25} color={"#000"} />,
          headerTitle: () => (
            <Image
              source={logo}
              resizeMode="contain"
              style={{ width: 135, height: 50 }}
            />
          ),
          headerRight: () => (
            <Ionicons name="paper-plane-outline" size={25} color={"#545454"} />
          ),
        }}
      />
    </HomeStack.Navigator>
  );
}
