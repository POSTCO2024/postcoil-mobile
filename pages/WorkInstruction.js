import { StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useState } from "react";
import ChartsTablet from "../components/ChartsTablet";
import ChartsMobile from "../components/ChartsMobile";
import DropDownPicker from "react-native-dropdown-picker";

const deviceWidth = Dimensions.get("window").width;
export const WorkInstruction = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("1CAL");
  const items = [
    { label: "1CAL", value: "1CAL" },
    { label: "2CAL", value: "2CAL" },
  ];
  const [schedule, setSchedule] = useState([]);
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [scheduleValue, setScheduleValue] = useState(null);
  console.log(value + "   " + schedule);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 2, backgroundColor: "#E8FFE2" }}></View>
      <View style={{ flex: 1, backgroundColor: "#ffffff" }}></View>
      <View style={deviceWidth > 500 ? styles.tablet : styles.mobile}>
        <View style={styles.picker}>
          <View
            style={{
              width: "40%",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={{ width: deviceWidth > 500 ? "20%" : "30%" }}>
              <Text>공정명 : </Text>
            </View>
            <View style={{ width: deviceWidth > 500 ? "80%" : "70%" }}>
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                onSelectItem={(item) => {
                  console.log(item);
                }}
                style={{ borderWidth: 1, borderColor: "#EBEBEB" }}
                dropDownContainerStyle={{
                  borderWidth: 1,
                  borderColor: "#EBEBEB",
                }}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              width: deviceWidth > 500 ? "40%" : "50%",
              alignItems: "center",
            }}
          >
            <View style={{ width: deviceWidth > 500 ? "20%" : "30%" }}>
              <Text>스케줄명 : </Text>
            </View>
            <View style={{ width: deviceWidth > 500 ? "80%" : "70%" }}>
              <DropDownPicker
                open={scheduleOpen}
                value={scheduleValue}
                items={schedule}
                setOpen={setScheduleOpen}
                setValue={setScheduleValue}
                setSchedule={setSchedule}
                onSelectItem={(item) => {
                  console.log(item);
                }}
                style={{
                  borderWidth: 1,
                  borderColor: "#EBEBEB",
                }}
                dropDownContainerStyle={{
                  borderWidth: 1,
                  borderColor: "#EBEBEB",
                }}
                disabled={schedule.length === 0}
                placeholder=""
              />
            </View>
          </View>
        </View>
        {deviceWidth > 500 ? <ChartsTablet /> : <ChartsMobile />}
      </View>
    </View>
  );
};

export default WorkInstruction;

const styles = StyleSheet.create({
  mobile: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "97%",
    alignItems: "center",
  },
  tablet: {
    position: "absolute",
    top: 0,
    width: "100%",
    // left: "10%",
    height: "95%",
    alignItems: "center",
  },
  picker: {
    width: "100%",
    backgroundColor: "#f8f8f8",
    height: "8%",
    zIndex: 999,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
