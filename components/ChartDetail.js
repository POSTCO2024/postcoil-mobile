import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

export const ChartDetail = ({ materialDetail }) => {
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
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            borderBottomWidth: 1,
            borderColor: "#eeeeee",
          }}
        >
          <Text>
            코일번호 : {materialDetail ? materialDetail.material.no : " "}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            borderBottomWidth: 1,
            borderColor: "#eeeeee",
          }}
        >
          <Text>
            생산기한일 :{" "}
            {materialDetail ? materialDetail.order.dueDate.split(" ")[0] : " "}
          </Text>
        </View>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text>
            롤유닛 : {materialDetail ? materialDetail.rollUnitName : ""}
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: "column", flex: 1, marginLeft: "3%" }}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            borderBottomWidth: 1,
            borderColor: "#eeeeee",
          }}
        >
          <Text>
            현공정 : {materialDetail ? materialDetail.material.currProc : ""}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            borderBottomWidth: 1,
            borderColor: "#eeeeee",
          }}
        >
          <Text>
            후공정 : {materialDetail ? materialDetail.material.nextProc : ""}
          </Text>
        </View>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text>
            온도 : {materialDetail ? materialDetail.material.temperature : ""}
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: "column", flex: 1, marginLeft: "3%" }}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            borderBottomWidth: 1,
            borderColor: "#eeeeee",
          }}
        >
          <Text>
            폭 : {materialDetail ? materialDetail.material.width : ""}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            borderBottomWidth: 1,
            borderColor: "#eeeeee",
          }}
        >
          <Text>
            두께 : {materialDetail ? materialDetail.material.thickness : ""}
          </Text>
        </View>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text>
            단중 : {materialDetail ? materialDetail.material.weight : ""}
          </Text>
        </View>
      </View>
      <View style={{ flex: 0.7, justifyContent: "space-around" }}>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#2caffe",
            height: "20%",
            borderRadius: 6,
          }}
        >
          <Text style={{ color: "white", fontWeight: 600 }}>보급요구</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#2caffe",
            height: "20%",
            borderRadius: 6,
          }}
        >
          <Text style={{ color: "white", fontWeight: 600 }}>REJECT</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#2caffe",
            height: "20%",
            borderRadius: 6,
          }}
        >
          <Text style={{ color: "white", fontWeight: 600 }}>긴급정지</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChartDetail;

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
});
