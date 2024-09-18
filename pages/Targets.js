import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { TableChart } from "../components/Table";
const deviceWidth = Dimensions.get("window").width;
export const Targets = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 2, backgroundColor: "#E8FFE2" }}></View>
      <View style={{ flex: 1, backgroundColor: "#ffffff" }}></View>
      <View style={deviceWidth > 500 ? styles.tablet : styles.mobile}>
        <TableChart />
      </View>
    </View>
  );
};

export default Targets;

const styles = StyleSheet.create({
  mobile: {
    position: "absolute",
    top: "5%",
    left: "10%",
    width: "80%",
    height: "85%",
    alignItems: "center",
  },
  tablet: {
    flex: 1,
    position: "absolute",
    top: "10%",
    width: "80%",
    left: "10%",
    height: "80%",
    alignItems: "center",
  },
});
