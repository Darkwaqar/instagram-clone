import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
// import { API, graphqlOperation } from "aws-amplify";
// import Story from "./Story";
// import { listStorys } from '../../graphql/queries';

// import stories from "../data/stories";
import Story from "./Story";
import tw from "twrnc";
import { listStories } from "../src/graphql/queries";
import { API, graphqlOperation } from "aws-amplify";
const Stories = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetchStories();
  }, []);

  const fetchStories = async () => {
    try {
      const storiesData = await API.graphql(graphqlOperation(listStories));
      setStories(storiesData.data.listStories.items);
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <FlatList
      data={stories}
      keyExtractor={({ user: { id } }) => id}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={tw`mb-1`}
      renderItem={({ item }) => <Story story={item} />}
    />
  );
};

export default Stories;

const styles = StyleSheet.create({});
