import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";

const PostBody = ({ imageUri }) => {
  return <Image source={{ uri: imageUri }} style={styles.image} />;
};

export default PostBody;

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").width,
  },
});
