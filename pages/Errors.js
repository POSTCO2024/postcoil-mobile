import { View, Text, ScrollView } from "react-native";
import React from "react";
import Card from "../components/Card";
export default function Errors() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 2, backgroundColor: "#E8FFE2" }}></View>
      <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
        <Text>Errors</Text>
      </View>
      <View
        style={{
          flex: 1,
          position: "absolute",
          top: "10%",
          width: "80%",
          left: "10%",
          height: "80%",
          backgroundColor: "red",
          alignItems: "center",
        }}
      >
        <ScrollView
          style={{ width: "90%", backgroundColor: "black" }}
          contentContainerStyle={{ alignItems: "center" }}
        >
          <Card />
        </ScrollView>
      </View>
    </View>
  );
}
