import { View, Text, ScrollView, Dimensions, StyleSheet } from "react-native";
import React from "react";
import Card from "../components/Card";
export default function Errors() {
  const deviceWidth = Dimensions.get("window").width;
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 2, backgroundColor: "#E8FFE2" }}></View>
      <View style={{ flex: 1, backgroundColor: "#ffffff" }}></View>
      <View style={deviceWidth > 500 ? styles.tablet : styles.mobile}>
        <ScrollView
          style={{ width: "100%" }}
          contentContainerStyle={{
            alignItems: "center",
          }}
        >
          <Card error={"설비에러재"} />
          <Card error={"관리재"} />
          <Card error={"정보이상재"} />
          <Card error={"설비에러재"} />
          <Card error={"관리재"} />
          <Card error={"정보이상재"} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mobile: {
    position: "absolute",
    top: "2%",
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  tablet: {
    flex: 1,
    position: "absolute",
    top: "3%",
    width: "80%",
    left: "10%",
    height: "87%",
    alignItems: "center",
  },
});
