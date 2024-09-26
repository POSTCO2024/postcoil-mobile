import { StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useState } from "react";
import { TableChart } from "../components/Table";
import DropDownPicker from "react-native-dropdown-picker";

const deviceWidth = Dimensions.get("window").width;
export const Targets = () => {
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
                  setValue(item.value);
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
        <TableChart facility={value} />
      </View>
    </View>
  );
};

export default Targets;

const styles = StyleSheet.create({
  mobile: {
    position: "absolute",
    // top: "5%",
    // left: "10%",
    width: "100%",
    height: "95%",
    alignItems: "center",
  },
  tablet: {
    flex: 1,
    position: "absolute",
    // top: "10%",
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
