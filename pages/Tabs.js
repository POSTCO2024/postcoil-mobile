import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Errors from "./Errors";
import Targets from "./Targets";
import WorkInstruction from "./WorkInstruction";
const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "error") {
            iconName = focused ? "alert-octagon" : "alert-octagon-outline";
          } else if (route.name === "targets") {
            iconName = focused
              ? "clipboard-check-multiple"
              : "clipboard-check-multiple-outline";
          } else if (route.name === "workInstruction") {
            iconName = "format-list-numbered";
          }
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: "#83DB89",
        tabBarInactiveTintColor: "gray",
        tabBarLabelStyle: { fontSize: 12, fontWeight: 700 },
        tabBarStyle: { paddingBottom: 5 },
      })}
    >
      <Tab.Screen
        name="error"
        component={Errors}
        options={{ headerShown: false, tabBarLabel: "에러재" }}
      />
      <Tab.Screen
        name="targets"
        component={Targets}
        options={{ headerShown: false, tabBarLabel: "정상재" }}
      />
      <Tab.Screen
        name="workInstruction"
        component={WorkInstruction}
        options={{ headerShown: false, tabBarLabel: "작업지시문" }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({});
