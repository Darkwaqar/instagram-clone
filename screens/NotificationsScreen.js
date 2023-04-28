import { View, Text } from "react-native";
import React from "react";

const NotificationsScreen = () => {
  return (
    <View style={{ height: 1500 }}>
      <Text
        style={{
          textAlign: "center",
          marginTop: 300,
          fontSize: 30,
          color: "gray",
        }}
      >
        Notifications
      </Text>
    </View>
  );
};

export default NotificationsScreen;
