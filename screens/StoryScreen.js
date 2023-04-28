import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  ActivityIndicator,
  TextInput,
  TouchableWithoutFeedback,
  Dimensions,
  StyleSheet,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { API, graphqlOperation } from "aws-amplify";

// import { listStorys } from '../../graphql/queries';
import storiesData from "../data/stories";
import ProfilePicture from "../components/ProfilePicture";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import { listStories } from "../src/graphql/queries";
import tw from "twrnc";

import Image from "react-native-image-progress";
import * as Progress from "react-native-progress";

const StoryScreen = () => {
  const [stories, setStories] = useState([]);
  const [activeStoryIndex, setActiveStoryIndex] = useState(null);

  const route = useRoute();

  useEffect(() => {
    fetchStories();
    setActiveStoryIndex(0);
  }, []);

  const fetchStories = async () => {
    try {
      const storiesData = await API.graphql(graphqlOperation(listStories));
      console.log(storiesData.data.listStories.items);
      setStories(storiesData.data.listStories.items);
    } catch (e) {
      console.log("error fetching stories");
      console.log(e);
    }
  };

  const handleNextStory = () => {
    if (activeStoryIndex >= stories.length - 1) {
      return;
    }
    setActiveStoryIndex(activeStoryIndex + 1);
  };

  const handlePrevStory = () => {
    if (activeStoryIndex <= 0) {
      return;
    }
    setActiveStoryIndex(activeStoryIndex - 1);
  };

  const handlePress = (evt) => {
    const x = evt.nativeEvent.locationX;
    const screenWidth = Dimensions.get("window").width;

    if (x < screenWidth / 2) {
      handlePrevStory();
    } else {
      handleNextStory();
    }
  };

  if (!stories || stories.length === 0) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  const activeStory = stories[activeStoryIndex];
  return (
    <View style={tw`h-full`}>
      <Image
        indicator={Progress.Circle}
        indicatorProps={{
          color: "#ae22e0",
          unfilledColor: "#ffffff",
        }}
        source={{ uri: activeStory.image }}
        style={[
          tw`absolute top-0 left-0 right-0 bottom-0`,
          { resizeMode: "cover" },
        ]}
      />
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={tw`h-full`}>
          <View style={tw`mt-12 items-center flex-row`}>
            <ProfilePicture uri={activeStory.user.image} size={50} />
            <View>
              <Text style={tw`text-white text-sm font-bold`}>
                {activeStory.user.name}
              </Text>
              <Text style={tw`font-bold text-gray-700 text-xs`}>
                {new Date(activeStory.createdAt).toLocaleString()}
              </Text>
            </View>
          </View>

          <View style={tw`flex-row absolute bottom-0 mb-5 mx-2`}>
            <View
              style={tw`w-12 items-center justify-center border border-white rounded-full`}
            >
              <Feather name="camera" size={30} color={"#ffffff"} />
            </View>
            <View
              style={tw`flex-1 h-12 border  border-white  rounded-full mx-2 px-2`}
            >
              <TextInput
                style={tw`h-full text-white text-base pt-0`}
                editable
                placeholder="Send message"
                placeholderTextColor={"white"}
              />
            </View>
            <View style={tw`w-12 items-center justify-center `}>
              <Ionicons
                name="paper-plane-outline"
                size={35}
                color={"#ffffff"}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default StoryScreen;

const styles = StyleSheet.create({});
