import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import axios from "axios";
import { url } from "../config/Url";
export const Card = ({ error, getErrors }) => {
  const [text, setText] = useState(error.order.remarks);

  async function postComments(id, comment) {
    console.log(id + "     " + comment);
    try {
      const response = await axios.post(
        url + "/api/v1/target-materials/comment/" + id,
        {
          comment: comment,
        }
      );
      getErrors("1CAL");
    } catch (errors) {
      console.log(errors);
    }
  }

  const color = (errorType) => {
    switch (errorType) {
      case "설비이상에러재":
        return styles.facilityError;
      case "관리재":
        return styles.managementError;
      case "정보이상재":
        return styles.infoError;
    }
  };

  const errorColor = color(error.errorType);
  console.log(text);
  return (
    <View style={styles.card}>
      <View style={styles.materialView}>
        <View>
          <Text style={[styles.materialNo, { fontWeight: 800 }]}>
            재료번호 : {error.material.no}
          </Text>
        </View>
        <View style={errorColor}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 600,
            }}
          >
            {error.errorType}
          </Text>
        </View>
      </View>
      <View style={styles.line}></View>
      <View style={{ marginTop: "2%", flexDirection: "row" }}>
        <View style={{ flexDirection: "column", flex: 1 }}>
          <Text style={[styles.info, { fontWeight: 800 }]}>
            공정 : {error.material.currProc}
          </Text>
          <Text style={styles.infoColor}>{error.order.no}</Text>
          <Text style={styles.info}>{error.order.customer}</Text>
          <Text style={styles.infoColor}>
            생산 기한일 : {error.order.dueDate.split(" ")[0]}
          </Text>
          <Text style={styles.info}>
            코일 타입 : {error.material.coilTypeCode}
          </Text>
          <Text style={styles.infoColor}>
            저장위치 : {error.material.storageLoc}
          </Text>
        </View>
        <View style={styles.verticalLine}></View>
        <View style={{ flexDirection: "column", flex: 1 }}>
          <Text style={styles.info}>계획공정: {error.processPlan}</Text>
          <Text style={styles.infoColor}>전공정: {error.material.preProc}</Text>
          <Text style={styles.info}>잔공정: {error.material.remProc}</Text>
          <Text style={styles.infoColor}>두께: {error.material.thickness}</Text>
          <Text style={styles.info}>폭: {error.material.width}</Text>
          <Text style={styles.infoColor}>단중: {error.material.weight}</Text>
        </View>
      </View>
      <View style={styles.line}></View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TextInput
          style={styles.input}
          multiline={true}
          onChangeText={(a) => setText(a)}
          value={text}
        />
        <TouchableOpacity
          style={styles.enrollBtn}
          onPress={() => postComments(error.material.id, text)}
        >
          <Text
            style={{ textAlign: "center", color: "#ffffff", fontWeight: 800 }}
          >
            등록
          </Text>
        </TouchableOpacity>
      </View>

      {/*수정 등록버튼 card */}
      {/* <View
        style={{
          flexDirection: "row",
          paddingBottom: "3%",
          justifyContent: "space-between",
        }}
      > */}
      {/* <TouchableOpacity
          style={{
            width: "49%",
            borderWidth: 1,
            borderRadius: 6,
            borderColor: "#83DB89",
            height: "100%",
            paddingVertical: "1%",
          }}
        >
          <Text
            style={{ textAlign: "center", color: "#83DB89", fontWeight: 800 }}
          >
            수정
          </Text>
        </TouchableOpacity> */}
      {/* <TouchableOpacity
        style={{
          width: "49%",
          borderRadius: 6,
          backgroundColor: "#83DB89",
          height: "100%",
          paddingVertical: "1%",
        }}
      >
        <Text
          style={{ textAlign: "center", color: "#ffffff", fontWeight: 800 }}
        >
          등록
        </Text>
      </TouchableOpacity> */}
    </View>
    // </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderColor: "#BFF6C3",
    borderRadius: 10,
    width: "90%",
    paddingHorizontal: "5%",
    marginTop: "5%",
    shadowColor: "#dddddd",
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 6,
  },
  facilityError: {
    backgroundColor: "#A7C7E7",
    width: "30%",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  managementError: {
    backgroundColor: "#FFB3B3",
    width: "30%",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  infoError: {
    backgroundColor: "#FFF597",
    width: "30%",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  materialView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: "5%",
  },
  materialNo: {
    fontSize: 20,
    textAlign: "center",
    color: "#262627",
  },
  line: {
    width: "100%",
    backgroundColor: "grey",
    height: 1,
    alignSelf: "center",
    marginTop: "3%",
    opacity: 0.3,
  },
  infoColor: {
    marginTop: "2%",
    backgroundColor: "#E8FFE2",
  },
  info: {
    marginTop: "2%",
  },
  verticalLine: {
    width: 1,
    backgroundColor: "grey",
    height: "100%",
    opacity: 0.3,
    marginLeft: "3%",
    marginRight: "3%",
    marginTop: "1%",
  },
  input: {
    height: "50%",
    flex: 7,
    borderColor: "grey",
    borderWidth: 1,
    padding: "1%",
    marginTop: "3%",
    marginBottom: "3%",
    borderRadius: 5,
  },
  enrollBtn: {
    flex: 1,
    marginLeft: "2%",
    borderRadius: 6,
    backgroundColor: "#83DB89",
    height: "50%",
    paddingVertical: "1%",
  },
});
