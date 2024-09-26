import { View, Text, ScrollView, Dimensions, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";
import { url } from "../config/Url";
import { datas } from "../components/Data";
import DropDownPicker from "react-native-dropdown-picker";

const deviceWidth = Dimensions.get("window").width;

export default function Errors() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("1CAL");
  const items = [
    { label: "1CAL", value: "1CAL" },
    { label: "2CAL", value: "2CAL" },
    { label: "1EGL", value: "1EGL" },
    { label: "2EGL", value: "2EGL" },
    { label: "1CGL", value: "1CGL" },
    { label: "2CGL", value: "2CGL" },
  ];

  const firstError = datas.result.filter(
    (item) => item.isError === "Y" && item.material.currProc === value
  );

  const [error, setError] = useState(firstError);

  async function getErrors(facility) {
    try {
      const response = await axios.get(
        url + "/api/v1/target-materials/error-by-curr-proc?currProc=" + value
      );
      setError(response.data.result);
    } catch (errors) {
      console.log(errors);
    }
  }

  // useEffect(() => {
  //   getErrors("1CAL");
  //   const filteredData = datas.result.filter((item) => item.isError === "Y");
  //   setError(filteredData);
  // }, []);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 2, backgroundColor: "#E8FFE2" }}></View>
      <View style={{ flex: 1, backgroundColor: "#ffffff" }}></View>
      <View style={deviceWidth > 500 ? styles.tablet : styles.mobile}>
        <View style={styles.picker}>
          <View
            style={{
              width: "60%",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={{ width: "20%" }}>
              <Text>공정명 : </Text>
            </View>
            <View style={{ width: "80%" }}>
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                onSelectItem={(item) => {
                  const facilityData = datas.result.filter(
                    (data) =>
                      data.material.currProc === item.value &&
                      data.isError === "Y"
                  );
                  setError(facilityData);
                }}
                style={{ borderWidth: 1, borderColor: "#EBEBEB" }}
                dropDownContainerStyle={{
                  borderWidth: 1,
                  borderColor: "#EBEBEB",
                }}
              />
            </View>
          </View>
        </View>
        <ScrollView
          style={{ width: deviceWidth > 500 ? "80%" : "100%" }}
          contentContainerStyle={{
            alignItems: "center",
          }}
        >
          {error ? (
            error.map((item) => (
              <Card key={item.material.no} error={item} /> // 오류가 없을 때만 Card를 렌더링합니다.
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
    // top: "2%",
    width: "100%",
    height: "95%",
    alignItems: "center",
  },
  tablet: {
    flex: 1,
    position: "absolute",
    // top: "3%",
    width: "100%",
    // left: "10%",
    height: "95%",
    alignItems: "center",
  },
  picker: {
    width: "100%",
    backgroundColor: "#f8f8f8",
    height: deviceWidth > 500 ? "8%" : "10%",
    zIndex: 999,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
