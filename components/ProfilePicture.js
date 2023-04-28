import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";

import Image from "react-native-image-progress";
import * as Progress from "react-native-progress";

const ProfilePicture = ({ uri, size = 70 }) => {
  return (
    <View
      style={[
        tw`m-2 rounded-[40px] border-2 border-[#ae22e0]`,
        { width: size + 6, height: size + 6 },
      ]}
    >
      <Image
        indicator={Progress.Circle}
        source={{ uri }}
        indicatorProps={{
          size: size,
          color: "#ae22e0",
          unfilledColor: "#ffffff",
        }}
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
