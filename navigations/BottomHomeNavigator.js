import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Foundation from "@expo/vector-icons/Foundation";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";

import DiscoveryScreen from "../screens/DiscoveryScreen";
import CreatePostScreen from "../screens/CreatePostScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import HomeNavigation from "./HomeNavigation";

const Tab = createBottomTabNavigator();

export default function BottomHomeNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
            return <Foundation name="home" size={size} color={color} />;
          }
          if (route.name === "Discovery") {
            return <Feather name="search" size={size} color={color} />;
          }
          if (route.name === "Post") {
            return <Feather name="plus-square" size={size} color={color} />;
          }
          if (route.name === "Notifications") {
            return <AntDesign name="hearto" size={size} color={color} />;
          }
          if (route.name === "Profile") {
            return <Ionicons name="person-outline" size={size} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: "#000",
        inactiveTintColor: "gray",
        showLabel: false,
      }}
    >
      <Tab.Screen name="Home" component={HomeNavigation} />
      <Tab.Screen name="Discovery" component={DiscoveryScreen} />
      <Tab.Screen name="Post" component={CreatePostScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
