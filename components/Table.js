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
import { DataTable } from "react-native-paper";

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
      <ScrollView horizontal={true}>
        <DataTable>
          <DataTable.Header style={{ borderColor: "black" }}>
            {headerData.map((header, index) => (
              <DataTable.Title
                key={index}
                style={{
                  borderColor: "black",
                  width: 200,
                  borderRightWidth: 1,

                  justifyContent: "center",
                }}
                textStyle={{
                  textAlign: "center",
                  fontSize: 20,
                  fontWeight: 800,
                }}
              >
                {header}
              </DataTable.Title>
            ))}
          </DataTable.Header>

          {data.map((rowData, rowIndex) => (
            <DataTable.Row key={rowIndex} style={{ borderColor: "black" }}>
              {rowData.map((cellData, cellIndex) => (
                <DataTable.Cell
                  key={cellIndex}
                  style={{
                    borderColor: "black",
                    width: 200,
                    borderRightWidth: 1,
                    justifyContent: "center",
                  }}
                  textStyle={{ textAlign: "center" }}
                >
                  {cellData}
                </DataTable.Cell>
              ))}
            </DataTable.Row>
          ))}
        </DataTable>
      </ScrollView>
    </View>
  );
};

export default TableChart;

const styles = StyleSheet.create({});
