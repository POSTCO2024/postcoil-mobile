import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from "react-native-table-component";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";

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
  "",
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
const widthArr = new Array(11).fill(160);
const heightArr = new Array(11).fill("9%");
export const TableChart = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: "row", width: "90%" }}>
        <Table
          borderStyle={{
            borderWidth: 1,
          }}
          style={{ width: "20%", height: "100%" }}
        >
          <Col data={materialNo} textStyle={{ textAlign: "center" }} />
        </Table>
        <ScrollView horizontal={true}>
          <Table borderStyle={{ borderWidth: 1 }} style={{ height: "9%" }}>
            <Row
              data={headerData}
              widthArr={widthArr}
              style={{ height: "9%" }}
            />
          </Table>
          <Table borderStyle={{ borderWidth: 1 }}>
            <Rows data={data} widthArr={widthArr} style={{ height: "9%" }} />
          </Table>
        </ScrollView>
      </View>
    </View>
  );
};

export default TableChart;

const styles = StyleSheet.create({});
