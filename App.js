import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native";
import Header from "./components/Header";
import Main from "./pages/Main";
import Tabs from "./components/Tabs";
import Toast from "react-native-toast-message";

const defaultText = Text.defaultText || {};
Text.defaultText = { ...defaultText, style: { color: "#262627" } };
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <NavigationContainer>
        {/* <StatusBar hidden={true} /> */}
        <Stack.Navigator
          screenOptions={{
            headerTitle: () => <Header />,
            headerTitleAlign: "left",
            // headerStyle: { backgroundColor: "#E8FFE2" },
          }}
        >
          <Stack.Screen
            name="main"
            component={Main}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="tabs" component={Tabs} />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </>
  );
}
