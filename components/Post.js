import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PostHeader from "./PostHeader";
import PostBody from "./PostBody";
import PostFooter from "./PostFooter";

const Post = ({ post }) => {
  return (
    <View>
      <PostHeader imageUri={post.user.image} name={post.user.name} />
      <PostBody imageUri={post.image} />
      <PostFooter
        likesCount={post.likes}
        caption={post.caption}
        postedAt={post.createdAt}
      />
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({});
