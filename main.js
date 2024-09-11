import { View, Text, Dimensions, ActivityIndicator } from "react-native";
import React from "react";
import { Image } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Main() {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          backgroundColor: "#ffffff",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ flex: 8 }}>
          <Image
            source={require("./assets/logo.png")}
            style={{ resizeMode: "contain", width: 250, marginTop: 240 }}
          />
        </View>
        <View style={{ flex: 1 }}>
          <ActivityIndicator size="large" color={"#057DCF"} />
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <Image
          source={require("./assets/main.png")}
          style={{ width: Dimensions.get("window").width, height: 400 }}
        />
      </View>
    </View>
  );
}
