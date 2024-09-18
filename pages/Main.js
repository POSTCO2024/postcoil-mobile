import { View, Text, Dimensions, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import { Image } from "react-native";
export default function Main({ navigation }) {
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     navigation.replace("tabs");
  //   }, 3000);
  //   return () => clearTimeout(timer);
  // }, [navigation]);
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
            source={require("../assets/logo.png")}
            style={{ resizeMode: "contain", width: 250, marginTop: 240 }}
          />
        </View>
        <View style={{ flex: 1 }}>
          <ActivityIndicator size="large" color={"#057DCF"} />
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <Image
          source={require("../assets/main.png")}
          style={{ resizeMode: "cover", height: "100%", width: "100%" }}
        />
      </View>
    </View>
  );
}
