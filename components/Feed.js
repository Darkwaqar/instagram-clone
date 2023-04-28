import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

// import posts from "../data/stories";
import Post from "./Post";
import Stories from "./Stories";
import { API, graphqlOperation } from "aws-amplify";
import { listPosts } from "../src/graphql/queries";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);
  const fetchPosts = async () => {
    try {
      const postsData = await API.graphql(graphqlOperation(listPosts));
      setPosts(postsData.data.listPosts.items);
    } catch (e) {
      console.log(e);
    }
  };
  console.log(posts);
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <Post post={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={Stories}
    />
  );
};

export default Feed;

const styles = StyleSheet.create({});
