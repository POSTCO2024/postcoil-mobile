import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { Image } from "react-native";

export default function Header() {
  return (
    <View>
      <Image
        source={require("./assets/logo.png")}
        style={{
          resizeMode: "contain",
          width: 100,
          height: 40,
        }}
      />
    </View>
  );
}
