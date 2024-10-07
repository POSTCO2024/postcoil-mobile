import { StyleSheet, Text, View, Pressable, Modal } from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const ModalView = ({ modalVisible, handleVisible, text, modalFunction }) => {
  return (
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
          {text === "REJECT" ? (
            <MaterialCommunityIcons name="alert" size={50} color="#F5004F" />
          ) : (
            <MaterialCommunityIcons
              name="alarm-check"
              size={50}
              color="#2196F3"
            />
          )}
          <Text style={styles.modalText}>{text} 하시겠습니까?</Text>
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
  );
};

export default ModalView;

const styles = StyleSheet.create({
  centeredView: {
    backgroundColor: "rgba(213, 213, 213, 0.6)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: "40%",
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
  modalText: { fontSize: 20, fontWeight: "600", marginTop: "5%" },
});
