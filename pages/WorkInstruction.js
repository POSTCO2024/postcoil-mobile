import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";

export const WorkInstruction = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 2, backgroundColor: "#E8FFE2" }}>
        <WebView source={{ uri: "https://naver.com" }}></WebView>
      </View>
      <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
        <Text>WorkInstruction</Text>
      </View>
    </View>
  );
};

export default WorkInstruction;

const styles = StyleSheet.create({});
