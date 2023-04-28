import React, { useState, useEffect } from "react";
import { View, Text, TouchableWithoutFeedback, StyleSheet } from "react-native";
import ADIcon from "@expo/vector-icons/AntDesign";
import FontistoIcon from "@expo/vector-icons/Fontisto";
import IoniconsIcon from "@expo/vector-icons/Ionicons";
import FAIcon from "@expo/vector-icons/FontAwesome";
import tw from "twrnc";

const PostFooter = ({ likesCount: likesCountProp, caption, postedAt }) => {
  const [isLiked, setIsLike] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  const onLikePressed = () => {
    const amount = isLiked ? -1 : 1;
    setLikesCount(likesCount + amount);

    setIsLike(!isLiked);
  };

  useEffect(() => {
    setLikesCount(likesCountProp);
  }, []);
  return (
    <View style={tw` m-1`}>
      <View style={tw`flex-row content-between p-1`}>
        <View style={tw`flex-row w-28 justify-between`}>
          <TouchableWithoutFeedback onPress={onLikePressed}>
            {isLiked ? (
              <ADIcon name="heart" size={25} color={"#e73838"} />
            ) : (
              <ADIcon name="hearto" size={25} color={"#545454"} />
            )}
          </TouchableWithoutFeedback>
          <FontistoIcon name="comment" size={23} color={"#545454"} />
          <IoniconsIcon
            name="paper-plane-outline"
            size={25}
            color={"#545454"}
          />
        </View>
        <FAIcon name="bookmark-o" size={25} color={"#545454"} />
      </View>

      <Text style={tw`font-bold m-1`}>{likesCount} Likes</Text>
      <Text style={tw`m-1`}>{caption}</Text>
      <Text style={tw`text-[#8c8c8c] m-1`}>{postedAt}</Text>
    </View>
  );
};

export default PostFooter;

const styles = StyleSheet.create({});
