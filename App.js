import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Header from "./Header";
import Errors from "./Errors";
import Main from "./Main";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      {/* <StatusBar hidden={true} /> */}
      <Stack.Navigator
        screenOptions={{
          headerTitle: () => <Header />,
          // headerStyle: { backgroundColor: "#E8FFE2" },
        }}
      >
        <Stack.Screen
          name="main"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="error" component={Errors} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
