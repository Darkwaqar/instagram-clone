import { View, Text } from "react-native";
import React from "react";
import ProfilePicture from "./ProfilePicture";
import { useNavigation } from "@react-navigation/native";

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
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ProfilePicture uri={image} />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Story;
