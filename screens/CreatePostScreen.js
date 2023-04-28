import { View, Text } from "react-native";
import React from "react";

const CreatePostScreen = () => {
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
        Create Post
      </Text>
    </View>
  );
};

export default CreatePostScreen;
