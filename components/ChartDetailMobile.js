import { StyleSheet, Text, View, Pressable, Modal } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { operationUrl } from "../config/Url";
import { TouchableOpacity } from "react-native";
import Toast from "react-native-toast-message";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export const ChartDetailMobile = ({
  materialDetail,
  workInstructionId,
  endSuppliedCoils,
}) => {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (materialDetail) {
      let newMessage = null; // 새로운 메시지 임시 저장

      switch (materialDetail.workItemStatus) {
        case "COMPLETED":
          newMessage = "이미 작업완료된 코일입니다";
          break;
        case "IN_PROGRESS":
          newMessage = "작업중인 코일입니다";
          break;
      }
      if (materialDetail.isRejected === "Y") {
        newMessage = "REJECT된 코일입니다";
      }

      // 상태를 업데이트
      setMessage(newMessage);
    }
  }, [materialDetail]);

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
    try {
      const response = await axios.post(
        operationUrl +
          "/api/coil-work/reject/" +
          workInstructionId +
          "/" +
          materialDetail.id
      );
    } catch (errors) {
      console.log(errors);
    }
  };

  const [modalVisible, setModalVisible] = useState(false);
  const handleVisible = () => setModalVisible(!modalVisible);
  const [modalText, setModalText] = useState(null);
  const [modalFunction, setModalFunction] = useState(null);

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: "3%",
        flexDirection: "row",
      }}
    >
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
            {modalText === "REJECT" ? (
              <MaterialCommunityIcons name="alert" size={50} color="#F5004F" />
            ) : (
              <MaterialCommunityIcons
                name="alarm-check"
                size={50}
                color="#2196F3"
              />
            )}
            <Text style={{ fontSize: 20, fontWeight: 600, marginTop: "5%" }}>
              {modalText} 하시겠습니까?
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
                  modalFunction();
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
        <View style={{ flex: 1, justifyContent: "center" }}>
          <TouchableOpacity
            style={styles.touchableOpacity}
            // onPress={materialDetail ? requestCoil : null}
            onPress={
              workInstructionId
                ? () => {
                    if (endSuppliedCoils) {
                      Toast.show({
                        type: "error",
                        text1: "보급할 코일이 존재하지 않습니다",
                        position: "bottom",
                        bottomOffset: 100,
                        text1Style: { fontWeight: 600, fontSize: 20 },
                        swipeable: true,
                      });
                      return;
                    }
                    handleVisible();
                    setModalText("보급요구");
                    setModalFunction(() => requestCoil);
                  }
                : null
            }
          >
            <Text style={{ color: "white", fontWeight: 600, lineHeight: 20 }}>
              보급요구
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flexDirection: "column", flex: 1, marginLeft: "3%" }}>
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
        <View style={{ flex: 1, justifyContent: "center" }}>
          {/* <TouchableOpacity style={styles.touchableOpacity}>
            <Text style={{ color: "white", fontWeight: 600 }}>긴급정지</Text>
          </TouchableOpacity> */}
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
        <View style={{ flex: 1, justifyContent: "center" }}>
          <TouchableOpacity
            style={[styles.touchableOpacity, { backgroundColor: "#F5004F" }]}
            // onPress={materialDetail ? rejectCoil : null}
            onPress={
              workInstructionId && materialDetail
                ? () => {
                    if (message) {
                      Toast.show({
                        type: "error",
                        text1: message,
                        position: "bottom",
                        bottomOffset: 100,
                        text1Style: { fontWeight: 600, fontSize: 16 },
                      });
                      return;
                    }
                    handleVisible();
                    setModalText("REJECT");
                    setModalFunction(() => rejectCoil);
                  }
                : () =>
                    Toast.show({
                      type: "error",
                      text1: "코일을 선택해주세요",
                      position: "bottom",
                      bottomOffset: 100,
                      text1Style: { fontWeight: 600, fontSize: 20 },
                      swipeable: true,
                    })
            }
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
  centeredView: {
    backgroundColor: "rgba(213, 213, 213, 0.6)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: "70%",
    marginTop: "10%",
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
