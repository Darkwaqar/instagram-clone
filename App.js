import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Feed from "./components/Feed";
import Stories from "./components/Stories";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomHomeNavigator from "./navigations/BottomHomeNavigator";
import StoryScreen from "./screens/StoryScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={"Home"}
          component={BottomHomeNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Story"
          component={StoryScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
