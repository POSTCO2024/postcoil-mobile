import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import Charts from "../components/Charts";
const deviceWidth = Dimensions.get("window").width;
export const WorkInstruction = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 2, backgroundColor: "#E8FFE2" }}></View>
      <View style={{ flex: 1, backgroundColor: "#ffffff" }}></View>
      <View style={deviceWidth > 500 ? styles.tablet : styles.mobile}>
        <Charts />
      </View>
    </View>
  );
};

export default WorkInstruction;

const styles = StyleSheet.create({
  mobile: {
    position: "absolute",
    top: "2%",
    left: "5%",
    width: "90%",
    height: "100%",
    alignItems: "center",
    backgroundColor: "yellow",
  },
  tablet: {
    position: "absolute",
    top: "3%",
    width: "80%",
    left: "10%",
    height: "87%",
    alignItems: "center",
    backgroundColor: "yellow",
  },
});
