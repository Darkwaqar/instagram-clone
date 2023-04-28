import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomHomeNavigator from "./navigations/BottomHomeNavigator";
import StoryScreen from "./screens/StoryScreen";

import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react-native";
import { Amplify, Auth } from "aws-amplify";
import awsConfig from "./src/aws-exports";
Amplify.configure(awsConfig);

const Stack = createStackNavigator();

export default function App() {
  return (
    <Authenticator.Provider>
      <Authenticator>
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
      </Authenticator>
    </Authenticator.Provider>
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
