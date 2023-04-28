import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "@expo/vector-icons/Entypo";
import ProfilePicture from "./ProfilePicture";
import tw from "twrnc";

const PostHeader = ({ imageUri, name }) => {
  return (
    <View style={tw`flex-row justify-between items-center`}>
      <View style={tw`flex-row`}>
        <ProfilePicture uri={imageUri} size={40} />
        <Text style={tw`self-center font-bold text-[#3c3c3c]`}>{name}</Text>
      </View>

      <View style={tw`mr-4`}>
        <Icon name="dots-three-vertical" size={16} />
      </View>
    </View>
  );
};

export default PostHeader;

const styles = StyleSheet.create({});
