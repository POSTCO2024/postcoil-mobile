import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";

export const Card = () => {
  return (
    <View style={styles.card}>
      <Text
        style={{
          fontWeight: 800,
          fontSize: 20,
          textAlign: "center",
          paddingTop: "5%",
          color: "#262627",
        }}
      >
        재료번호 : CZ299150
      </Text>
      <View
        style={{
          width: "80%",
          backgroundColor: "grey",
          height: 1,
          alignSelf: "center",
          marginTop: "3%",
          opacity: 0.3,
        }}
      ></View>
      <Text style={{ marginLeft: "10%", marginTop: "3%" }}>공정 : 1PCM</Text>
      <Text>고객사 : D사</Text>
      <Text>Card</Text>
      <Text>Card</Text>
      <Text>Card</Text>
      <Text>Card</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderColor: "#BFF6C3",
    borderRadius: 20,
    height: Dimensions.get("window").height * 0.25,
    width: "90%",
  },
});
