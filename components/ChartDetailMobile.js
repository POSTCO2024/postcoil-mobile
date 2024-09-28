import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

export const ChartDetailMobile = ({ materialDetail }) => {
  console.log(materialDetail);
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
            {materialDetail ? materialDetail.material.no : " "}
          </Text>
        </View>
        <View style={styles.rowStyle}>
          <Text>
            <Text style={{ fontWeight: 700, lineHeight: 20 }}>
              생산기한일 :{" "}
            </Text>
            {materialDetail ? materialDetail.order.dueDate.split(" ")[0] : " "}
          </Text>
        </View>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text>
            <Text style={{ fontWeight: 700, lineHeight: 20 }}>롤유닛 : </Text>
            {materialDetail ? materialDetail.rollUnitName : ""}
          </Text>
        </View>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <TouchableOpacity style={styles.touchableOpacity}>
            <Text style={{ color: "white", fontWeight: 600, lineHeight: 20 }}>
              보급요구
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flexDirection: "column", flex: 1, marginLeft: "3%" }}>
        <View style={styles.rowStyle}>
          <Text>
            <Text style={{ fontWeight: 700, lineHeight: 20 }}>현공정 : </Text>
            {materialDetail ? materialDetail.material.currProc : ""}
          </Text>
        </View>
        <View style={styles.rowStyle}>
          <Text>
            <Text style={{ fontWeight: 700, lineHeight: 20 }}>후공정 : </Text>
            {materialDetail ? materialDetail.material.nextProc : ""}
          </Text>
        </View>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text>
            <Text style={{ fontWeight: 700, lineHeight: 20 }}>온도 : </Text>
            {materialDetail ? materialDetail.material.temperature : ""}
          </Text>
        </View>
        <View style={{ flex: 1, justifyContent: "center" }}>
          {/* <TouchableOpacity style={styles.touchableOpacity}>
            <Text style={{ color: "white", fontWeight: 600 }}>REJECT</Text>
          </TouchableOpacity> */}
        </View>
      </View>
      <View style={{ flexDirection: "column", flex: 1, marginLeft: "3%" }}>
        <View style={styles.rowStyle}>
          <Text>
            <Text style={{ fontWeight: 700, lineHeight: 20 }}>폭 : </Text>
            {materialDetail ? materialDetail.material.width : ""}
          </Text>
        </View>
        <View style={styles.rowStyle}>
          <Text>
            <Text style={{ fontWeight: 700, lineHeight: 20 }}>두께 : </Text>
            {materialDetail ? materialDetail.material.thickness : ""}
          </Text>
        </View>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text>
            <Text style={{ fontWeight: 700, lineHeight: 20 }}>단중 : </Text>
            {materialDetail ? materialDetail.material.weight : ""}
          </Text>
        </View>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <TouchableOpacity
            style={[styles.touchableOpacity, { backgroundColor: "#F5004F" }]}
          >
            <Text style={{ color: "white", fontWeight: 600, lineHeight: 20 }}>
              REJECT
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ChartDetailMobile;

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
    height: "70%",
    borderRadius: 6,
  },
  rowStyle: {
    flex: 1,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderColor: "#eeeeee",
  },
});
