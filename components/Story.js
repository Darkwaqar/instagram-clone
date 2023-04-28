import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import ProfilePicture from "./ProfilePicture";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";

const Story = (props) => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate("Story", { userId: id });
  };
  const {
    story: {
      user: { id, image, name },
    },
  } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <ProfilePicture uri={image} />
      <Text style={tw`text-center`}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Story;

const styles = StyleSheet.create({});
