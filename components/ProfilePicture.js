import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";

const ProfilePicture = ({ uri, size = 70 }) => {
  return (
    <View
      style={[
        tw`m-2 rounded-[40px] border-2 border-[#ae22e0]`,
        { width: size + 6, height: size + 6 },
      ]}
    >
      <Image
        source={{ uri }}
        style={[
          tw`rounded-[40px] border border-white`,
          { width: size, height: size },
        ]}
      />
    </View>
  );
};

export default ProfilePicture;

const styles = StyleSheet.create({});
