import { View, Text, ScrollView, Dimensions, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";
import { url } from "../config/Url";

export default function Errors() {
  const [error, setError] = useState(null);

  const deviceWidth = Dimensions.get("window").width;

  async function getErrors(facility) {
    try {
      const response = await axios.get(
        url + "/api/v1/target-materials/error-by-curr-proc?currProc=" + facility
      );
      setError(response.data.result);
    } catch (errors) {
      console.log(errors);
    }
  }

  useEffect(() => {
    getErrors("1CAL");
  }, []);

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
          {error ? (
            error.map((item, index) => (
              <Card key={index} error={item} /> // 오류가 없을 때만 Card를 렌더링합니다.
            ))
          ) : (
            <></>
          )}
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
