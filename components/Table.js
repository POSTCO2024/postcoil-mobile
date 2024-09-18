import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const headerData = [
  "현공정",
  "후공정",
  "전체공정",
  "공장코드",
  "목표두께",
  "두께",
  "목표폭",
  "폭",
  "단중",
  "롤유닛",
  "저장위치",
];

const materialNo = [
  "CZ299150",
  "CE855821",
  "CX390337",
  "CZ407389",
  "CR504850",
  "CG699600",
  "CG699600",
  "CG699600",
  "CG699600",
  "CG699600",
];

const data = [
  [
    "1CAL",
    "1EGL",
    "1PCM2CAL1EGL101",
    "f_code",
    "1.8",
    "2.2",
    "871.0",
    "900",
    "0.003534",
    "AA",
    "awdawddwaa",
  ],
  [
    "1CAL",
    "1EGL",
    "1PCM2CAL1EGL101",
    "f_code",
    "1.8",
    "2.2",
    "871.0",
    "900",
    "0.003534",
    "AA",
    "awdawddwaa",
  ],
  [
    "1CAL",
    "1EGL",
    "1PCM2CAL1EGL101",
    "f_code",
    "1.8",
    "2.2",
    "871.0",
    "900",
    "0.003534",
    "AA",
    "awdawddwaa",
  ],
  [
    "1CAL",
    "1EGL",
    "1PCM2CAL1EGL101",
    "f_code",
    "1.8",
    "2.2",
    "871.0",
    "900",
    "0.003534",
    "AA",
    "awdawddwaa",
  ],
  [
    "1CAL",
    "1EGL",
    "1PCM2CAL1EGL101",
    "f_code",
    "1.8",
    "2.2",
    "871.0",
    "900",
    "0.003534",
    "AA",
    "awdawddwaa",
  ],
  [
    "1CAL",
    "1EGL",
    "1PCM2CAL1EGL101",
    "f_code",
    "1.8",
    "2.2",
    "871.0",
    "900",
    "0.003534",
    "AA",
    "awdawddwaa",
  ],
  [
    "1CAL",
    "1EGL",
    "1PCM2CAL1EGL101",
    "f_code",
    "1.8",
    "2.2",
    "871.0",
    "900",
    "0.003534",
    "AA",
    "awdawddwaa",
  ],
  [
    "1CAL",
    "1EGL",
    "1PCM2CAL1EGL101",
    "f_code",
    "1.8",
    "2.2",
    "871.0",
    "900",
    "0.003534",
    "AA",
    "awdawddwaa",
  ],
  [
    "1CAL",
    "1EGL",
    "1PCM2CAL1EGL101",
    "f_code",
    "1.8",
    "2.2",
    "871.0",
    "900",
    "0.003534",
    "AA",
    "awdawddwaa",
  ],
  [
    "1CAL",
    "1EGL",
    "1PCM2CAL1EGL101",
    "f_code",
    "1.8",
    "2.2",
    "871.0",
    "900",
    "0.003534",
    "AA",
    "awdawddwaa",
  ],
];

export const TableChart = () => {
  return (
    <View style={{ flex: 1, width: "100%" }}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          backgroundColor: "#ffffff",
          borderRadius: 10,
          borderColor: "#BFF6C3",
          borderWidth: 2,
          elevation: 5,
          shadowColor: "#dddddd",
          shadowOpacity: 1,
          shadowOffset: { width: 0, height: 0 },
          shadowRadius: 6,
        }}
      >
        <View style={{ flex: 3 }}>
          <View
            style={{
              height: "10%",
              justifyContent: "center",
              borderBottomWidth: 1,
              borderRightWidth: 1,
              borderColor: "#dddddd",
              backgroundColor: "#83DB89",
              borderTopLeftRadius: 8,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: 600,
                textAlign: "center",
                textAlignVertical: "center",
                color: "white",
              }}
            >
              {" "}
              재료 번호
            </Text>
          </View>
          {materialNo.map((material, index) => (
            <View
              key={index}
              style={[
                {
                  height: "9%",
                  justifyContent: "center",
                  borderBottomWidth: 1,
                  borderRightWidth: 1,
                  borderColor: "#dddddd",
                },
                index == materialNo.length - 1 && { borderBottomWidth: 0 },
                index % 2 != 0 && { backgroundColor: "#E8FFE2" },
                //  회색 #eeeeee
              ]}
            >
              <Text
                key={index}
                style={{
                  textAlign: "center",
                  textAlignVertical: "center",
                  fontSize: 16,
                  fontWeight: 600,
                }}
              >
                {material}
              </Text>
            </View>
          ))}
        </View>
        <View style={{ flex: 8 }}>
          <View>
            <ScrollView horizontal={true}>
              <View style={{ flexDirection: "column" }}>
                <View
                  style={{
                    flexDirection: "row",
                    height: "10%",
                    backgroundColor: "#83DB89",
                    borderTopRightRadius: 8,
                  }}
                >
                  {headerData.map((header, index) => (
                    <View
                      key={index}
                      style={[
                        index == 2
                          ? {
                              width: 300,
                              justifyContent: "center",
                              borderBottomWidth: 1,
                              borderColor: "#dddddd",
                            }
                          : styles.cell,
                        { backgroundColor: "#83DB89", borderTopRightRadius: 8 },
                      ]}
                    >
                      <Text
                        key={index}
                        style={{
                          textAlign: "center",
                          textAlignVertical: "center",
                          fontSize: 18,
                          fontWeight: 700,
                          color: "white",
                        }}
                      >
                        {header}
                      </Text>
                    </View>
                  ))}
                </View>

                {/* 각 행의 시작 */}
                <View style={{ flexDirection: "column", height: "90%" }}>
                  {data.map((row, index) => (
                    <View
                      key={index}
                      style={{ flexDirection: "row", height: "10%" }}
                    >
                      {row.map((rowData, cellIndex) => (
                        <View
                          key={cellIndex}
                          style={[
                            cellIndex == 2
                              ? {
                                  width: 300,
                                  justifyContent: "center",
                                  borderBottomWidth: 1,
                                  borderColor: "#dddddd",
                                }
                              : styles.cell,
                            index == data.length - 1 && {
                              borderBottomWidth: 0,
                            },
                            index % 2 != 0 && { backgroundColor: "#E8FFE2" },
                            //  회색 #eeeeee
                          ]}
                        >
                          <Text
                            style={{
                              textAlign: "center",
                              textAlignVertical: "center",
                              fontSize: 16,
                            }}
                          >
                            {rowData}
                          </Text>
                        </View>
                      ))}
                    </View>
                  ))}
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
      <View
        style={{
          height: "8%",
          marginTop: "5%",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          paddingHorizontal: "25%",
        }}
      >
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="chevron-left"
            size={30}
            color="#262627"
          />
        </TouchableOpacity>
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <TouchableOpacity
              key={index}
              style={{
                height: 30,
                width: 30,
                borderRadius: 6,
                justifyContent: "center",
              }}
            >
              <Text
                style={[
                  { textAlign: "center", color: "#262627", fontSize: 16 },
                  index === 2 && { color: "#83DB89", fontWeight: 800 },
                ]}
              >
                {index + 1}
              </Text>
            </TouchableOpacity>
          ))}
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="chevron-right"
            size={30}
            color="black"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TableChart;

const styles = StyleSheet.create({
  cell: {
    width: 100,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderColor: "#dddddd",
  },
});
