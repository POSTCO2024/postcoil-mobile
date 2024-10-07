import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Pressable,
  Modal,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../config/Url";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Toast from "react-native-toast-message";

const deviceWidth = Dimensions.get("window").width;

export const Card = ({ error, getErrors, value }) => {
  const [text, setText] = useState(error.remarks);
  console.log("Card error : " + JSON.stringify(error));

  useEffect(() => {
    setText(error.remarks);
  }, [error]);

  async function postComments(id, comment, materialNo, currProc) {
    console.log(id + "     " + comment);
    try {
      const response = await axios.post(
        url + "/api/v1/control/error-materials/comment/" + id,
        {
          comment: comment,
          materialNo: materialNo,
          currProc: currProc,
        }
      );
      getErrors(value);
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
  const [modalVisible, setModalVisible] = useState(false);
  const handleVisible = () => setModalVisible(!modalVisible);
  // console.log(text);
  return (
    <View style={styles.card}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          handleVisible();
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <MaterialCommunityIcons
              name="comment-text-outline"
              size={50}
              color="#83DB89"
            />
            <Text style={{ marginTop: "5%" }}>"{text}"</Text>
            <Text style={{ fontSize: 20, fontWeight: 600, marginTop: "5%" }}>
              비고를 등록하시겠습니까?
            </Text>
            <View
              style={{
                flexDirection: "row",
                marginTop: "10%",
                width: "100%",
                paddingHorizontal: "10%",
                justifyContent: "space-evenly",
              }}
            >
              <Pressable
                style={[styles.button]}
                onPress={() => {
                  handleVisible();
                  postComments(
                    error.material.id,
                    text,
                    error.material.no,
                    error.material.currProc
                  );
                }}
              >
                <Text style={styles.textStyle}>예</Text>
              </Pressable>
              <Pressable
                style={[
                  styles.button,
                  {
                    backgroundColor: "#ffffff",
                    borderWidth: 1,
                    borderColor: "#D5D5D5",
                  },
                ]}
                onPress={handleVisible}
              >
                <Text style={[styles.textStyle, { color: "#262627" }]}>
                  아니요
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
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
              lineHeight: 24,
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

          <Text
            style={[
              styles.infoColor,
              !error.order && { color: "red", fontWeight: 800 },
            ]}
          >
            {error.order
              ? `주문번호 : ${error.order.no}`
              : "주문이 존재하지 않습니다"}
          </Text>
          <Text style={styles.info}>
            고객사 : {error.order ? error.order.customer : ""}
          </Text>
          <Text style={styles.infoColor}>
            생산 기한일 : {error.order ? error.order.dueDate.split(" ")[0] : ""}
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
          value={text != "null" ? text : ""}
        />
        <TouchableOpacity
          style={styles.enrollBtn}
          onPress={() => {
            if (text === "null" || text === "") {
              Toast.show({
                type: "error",
                text1: "내용을 입력해주세요",
                position: "bottom",
                bottomOffset: 200,
                text1Style: { fontWeight: 600, fontSize: 20 },
                swipeable: true,
              });
              return;
            }
            handleVisible();
            // postComments(error.material.id, text, error.material.no)
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#ffffff",
              fontWeight: 800,
              lineHeight: 20,
            }}
          >
            등록
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    // {/*수정 등록버튼 card */}
    // {/* <View
    //   style={{
    //     flexDirection: "row",
    //     paddingBottom: "3%",
    //     justifyContent: "space-between",
    //   }}
    // > */}
    // {/* <TouchableOpacity
    //     style={{
    //       width: "49%",
    //       borderWidth: 1,
    //       borderRadius: 6,
    //       borderColor: "#83DB89",
    //       height: "100%",
    //       paddingVertical: "1%",
    //     }}
    //   >
    //     <Text
    //       style={{ textAlign: "center", color: "#83DB89", fontWeight: 800 }}
    //     >
    //       수정
    //     </Text>
    //   </TouchableOpacity> */}
    // {/* <TouchableOpacity
    //   style={{
    //     width: "49%",
    //     borderRadius: 6,
    //     backgroundColor: "#83DB89",
    //     height: "100%",
    //     paddingVertical: "1%",
    //   }}
    // >
    //   <Text
    //     style={{ textAlign: "center", color: "#ffffff", fontWeight: 800 }}
    //   >
    //     등록
    //   </Text>
    // </TouchableOpacity> */}

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
    width: deviceWidth > 500 ? "30%" : "35%",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  managementError: {
    backgroundColor: "#FFB3B3",
    width: deviceWidth > 500 ? "30%" : "35%",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  infoError: {
    backgroundColor: "#FFF597",
    width: deviceWidth > 500 ? "30%" : "35%",
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
  centeredView: {
    backgroundColor: "rgba(213, 213, 213, 0.6)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: deviceWidth > 500 ? "40%" : "70%",
    backgroundColor: "white",
    borderRadius: 20,
    paddingTop: "3%",
    paddingBottom: "3%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#2196F3",
    width: "30%",
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
