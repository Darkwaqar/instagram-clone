import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
// import { API, graphqlOperation } from "aws-amplify";
import Story from "./Story";
// import { listStorys } from '../../graphql/queries';

import stories from "../data/stories";
const Stories = () => {
  // const [stories, setStories] = useState([]);

  // useEffect(() => {
  //   fetchStories();
  // }, []);

  // const fetchStories = async () => {
  //   try {
  //     const storiesData = await API.graphql(graphqlOperation(listStorys));
  //     setStories(storiesData.data.listStorys.items);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  return (
    <FlatList
      data={stories}
      keyExtractor={({ user: { id } }) => id}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      renderItem={({ item }) => <Story story={item} />}
    />
  );
};

export default Stories;

const styles = StyleSheet.create({});
