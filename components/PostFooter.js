import React, { useState, useEffect } from "react";
import { View, Text, TouchableWithoutFeedback, StyleSheet } from "react-native";
import ADIcon from "@expo/vector-icons/AntDesign";
import FontistoIcon from "@expo/vector-icons/Fontisto";
import IoniconsIcon from "@expo/vector-icons/Ionicons";
import FAIcon from "@expo/vector-icons/FontAwesome";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
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
    <View style={tw`m-1`}>
      <View style={tw`flex-row p-1`}>
        <View style={tw`flex-row  justify-between flex-1`}>
          <View style={tw`flex-row  w-24 justify-between items-center`}>
            <TouchableWithoutFeedback onPress={onLikePressed}>
              {isLiked ? (
                <ADIcon name="heart" size={25} color={"#e73838"} />
              ) : (
                <ADIcon name="hearto" size={25} color={"#545454"} />
              )}
            </TouchableWithoutFeedback>
            <Ionicons name="chatbubble-outline" size={24} color="545454" />
            {/* <FontistoIcon name="comment" size={23} color={"#545454"} /> */}
            <Feather name="send" size={24} color="545454" />
            {/* <IoniconsIcon
              name="paper-plane-outline"
              size={25}
              color={"#545454"}
            /> */}
          </View>
          <FAIcon name="bookmark-o" size={25} color={"#545454"} />
        </View>
      </View>

      <Text style={tw`font-bold m-1`}>{likesCount} Likes</Text>
      <Text style={tw`m-1`}>{caption}</Text>
      <Text style={tw`text-[#8c8c8c] m-1`}>
        {new Date(postedAt).toLocaleString()}
      </Text>
    </View>
  );
};

export default PostFooter;

const styles = StyleSheet.create({});
