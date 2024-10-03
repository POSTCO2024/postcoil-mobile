import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import axios from "axios";
import { operationUrl } from "../config/Url";
import Toast from "react-native-toast-message";

export const ChartDetailTablet = ({ materialDetail, workInstructionId }) => {
  console.log(workInstructionId);
  console.log(materialDetail);

  const requestCoil = async () => {
    try {
      const response = await axios.post(
        operationUrl +
          "/api/coil-work/request-supply/" +
          workInstructionId +
          "?supplyCount=1"
      );
    } catch (errors) {
      console.log(errors);
    }
  };

  const rejectCoil = async () => {
    let message = null;
    switch (materialDetail.workItemStatus) {
      case "COMPLETED":
        message = "이미 작업완료된 코일입니다";
        break;
      case "IN_PROGRESS":
        message = "작업중인 코일입니다";
        break;
    }
    if (materialDetail.isRejected === "Y") {
      message = "REJECT된 코일입니다";
    }
    if (message) {
      Toast.show({
        type: "error",
        text1: message,
        position: "bottom",
        bottomOffset: 200,
        text1Style: { fontWeight: 600, fontSize: 20 },
        swipeable: true,
      });
      return;
    }
    try {
      const response = await axios.post(
        operationUrl +
          "/api/coil-work/reject/" +
          workInstructionId +
          "/" +
          materialDetail.workItemId
      );
    } catch (errors) {
      console.log(errors);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: "3%",
        flexDirection: "row",
      }}
    >
      <View style={{ flexDirection: "column", flex: 1 }}>
        <View style={styles.rowStyle}>
          <Text>
            <Text style={{ fontWeight: 700, lineHeight: 20 }}>코일번호 : </Text>
            {materialDetail ? materialDetail.materialNo : " "}
          </Text>
        </View>
        <View style={styles.rowStyle}>
          <Text>
            <Text style={{ fontWeight: 700, lineHeight: 20 }}>단중 : </Text>
            {materialDetail ? materialDetail.weight : ""}
          </Text>
        </View>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text>
            <Text style={{ fontWeight: 700, lineHeight: 20 }}>예상시간 : </Text>
            {materialDetail ? materialDetail.expectedItemDuration + " 분" : ""}
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: "column", flex: 1, marginLeft: "6%" }}>
        <View style={styles.rowStyle}>
          <Text>
            <Text style={{ fontWeight: 700, lineHeight: 20 }}>전공정 : </Text>
            {materialDetail ? materialDetail.preProc : ""}
          </Text>
        </View>
        <View style={styles.rowStyle}>
          <Text>
            <Text style={{ fontWeight: 700, lineHeight: 20 }}>후공정 : </Text>
            {materialDetail ? materialDetail.nextProc : ""}
          </Text>
        </View>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text>
            <Text style={{ fontWeight: 700, lineHeight: 20 }}>온도 : </Text>
            {materialDetail ? materialDetail.temperature : ""}
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: "column", flex: 1, marginLeft: "3%" }}>
        <View style={styles.rowStyle}>
          <Text>
            <Text style={{ fontWeight: 700, lineHeight: 20 }}>목표폭 : </Text>
            {materialDetail ? materialDetail.initialGoalWidth : ""}
          </Text>
        </View>
        <View style={styles.rowStyle}>
          <Text>
            <Text style={{ fontWeight: 700, lineHeight: 20 }}>두께 : </Text>
            {materialDetail ? materialDetail.initialThickness : ""}
          </Text>
        </View>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text>
            <Text style={{ fontWeight: 700, lineHeight: 20 }}>길이 : </Text>
            {materialDetail ? materialDetail.length : ""}
          </Text>
        </View>
      </View>
      <View style={{ flex: 0.7, justifyContent: "space-around" }}>
        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={workInstructionId ? requestCoil : null}
        >
          <Text style={{ color: "white", fontWeight: 600 }}>보급요구</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.touchableOpacity, { backgroundColor: "#F5004F" }]}
          onPress={workInstructionId && materialDetail ? rejectCoil : null}
        >
          <Text style={{ color: "white", fontWeight: 600 }}>REJECT</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.touchableOpacity}>
          <Text style={{ color: "white", fontWeight: 600 }}>긴급정지</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default ChartDetailTablet;

const styles = StyleSheet.create({
  oneRowDetail: {
    flex: 2,
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#eeeeee",
    justifyContent: "center",
    height: "50%",
  },
  touchableOpacity: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1677FF",
    height: "20%",
    borderRadius: 6,
  },
  rowStyle: {
    flex: 1,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderColor: "#eeeeee",
  },
});
