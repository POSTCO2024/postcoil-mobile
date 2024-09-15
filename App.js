import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Header from "./components/Header";
import Main from "./pages/Main";
import Tabs from "./components/Tabs";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
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
  );
}
