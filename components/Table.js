import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import axios from "axios";
import { url } from "../config/Url";
import { datas } from "./Data";
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
  "야드",
];
const deviceWidth = Dimensions.get("window").width;
export const TableChart = ({ facility }) => {
  const [normals, setNormals] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageRange, setPageRange] = useState([]);
  const postSize = 10;

  useEffect(() => {
    getNormals(facility);
    // const filteredData = datas.result.filter(
    //   (item) => item.isError === "N" && item.material.currProc === facility
    // );
    setCurrentPage(1);
    // setNormals(filteredData);
    // updatePageRange(filteredData.length);
  }, [facility]);
  const indexOfLastPost = currentPage * postSize;
  const indexOfFirstPost = indexOfLastPost - postSize;

  const currentPosts = normals
    ? normals.slice(indexOfFirstPost, indexOfLastPost)
    : null;
  const totalPages = normals ? Math.ceil(normals.length / postSize) : "";

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleNext = () => {
    if (pageRange[pageRange.length - 1] < totalPages) {
      const newRange = pageRange.map((num) => num + 1);
      setPageRange(newRange);
      setCurrentPage(currentPage + 1);
    } else if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // 이전 페이지 범위로 이동
  const handlePrev = () => {
    if (pageRange[0] > 1) {
      const newRange = pageRange.map((num) => num - 1);
      setPageRange(newRange);
      setCurrentPage(currentPage - 1);
    } else if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const rows = currentPosts
    ? currentPosts.map((item) => {
        return [
          item.material.currProc,
          item.material.nextProc,
          item.processPlan,
          item.material.factoryCode,
          item.order.thickness,
          item.material.thickness,
          item.order.width,
          item.material.width,
          item.material.weight,
          item.rollUnitName,
          item.material.yard.replace(/A$/, "입측").replace(/B$/, "출측"),
        ];
      })
    : "";
  console.log(rows);

  async function getNormals(facility) {
    try {
      const response = await axios.get(
        url +
          "/api/v1/control/target-materials/normal-by-curr-proc?currProc=" +
          facility
      );
      console.log(response.data.result);
      setNormals(response.data.result);
      updatePageRange(response.data.result.length);
    } catch (errors) {
      console.log(errors);
    }
  }
  const updatePageRange = (length) => {
    const totalPages = Math.ceil(length / 10);
    const newRange =
      totalPages > 5
        ? Array.from({ length: 5 }, (_, i) => i + 1)
        : Array.from({ length: totalPages }, (_, i) => i + 1);
    setPageRange(newRange);
  };

  return (
    <View
      style={{
        flex: 1,
        width: deviceWidth > 500 ? "80%" : "90%",
        marginTop: "6%",
      }}
    >
      {normals ? (
        <View style={styles.tableFrame}>
          <View style={{ flex: deviceWidth > 500 ? 3 : 4 }}>
            <View style={styles.materialColumn}>
              <Text style={styles.materialColumnText}> 재료 번호</Text>
            </View>
            {currentPosts.map((material, index) => (
              <View
                key={index}
                style={[
                  styles.materialNo,
                  index == currentPosts.length - 1 && { borderBottomWidth: 0 },
                  index % 2 != 0 && { backgroundColor: "#eeeeee" },
                  //  회색 #eeeeee
                ]}
              >
                <Text key={index} style={styles.materialNoText}>
                  {material.material.no}
                </Text>
              </View>
            ))}
          </View>

          <View style={{ flex: 8 }}>
            <View>
              <ScrollView horizontal={true}>
                <View style={{ flexDirection: "column" }}>
                  <View style={styles.headerView}>
                    {headerData.map((header, index) => (
                      <View
                        key={index}
                        style={index == 2 ? styles.header : styles.cell}
                      >
                        <Text key={index} style={styles.headerText}>
                          {header}
                        </Text>
                      </View>
                    ))}
                  </View>

                  {/* 각 행의 시작 */}
                  <View style={{ flexDirection: "column", height: "90%" }}>
                    {rows.map((row, index) => (
                      <View
                        key={index}
                        style={[
                          styles.rowView,
                          index == rows.length - 1 && {
                            borderBottomWidth: 0,
                          },
                          index % 2 != 0 && { backgroundColor: "#eeeeee" },
                        ]}
                      >
                        {row.map((rowData, cellIndex) => (
                          <View
                            key={cellIndex}
                            style={[
                              cellIndex == 2
                                ? {
                                    width: 300,
                                    justifyContent: "center",
                                  }
                                : styles.cell,
                            ]}
                          >
                            <Text style={styles.cellText}>{rowData}</Text>
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
      ) : (
        <></>
      )}
      {normals ? (
        <View style={styles.pagingView}>
          <TouchableOpacity onPress={handlePrev} disabled={currentPage === 1}>
            <MaterialCommunityIcons
              name="chevron-left"
              size={30}
              color={currentPage === 1 ? "lightgrey" : "#262627"}
            />
          </TouchableOpacity>
          {/* {Array(5)
          .fill(0)
          .map((_, index) => (
            <TouchableOpacity key={index} style={styles.pagingBtn}>
              <Text
                style={[
                  styles.pagingText,
                  index === 2 && { color: "#83DB89", fontWeight: 800 },
                ]}
              >
                {index + 1}
              </Text>
            </TouchableOpacity>
          ))} */}
          {pageRange.map((number) => (
            <TouchableOpacity
              key={number}
              onPress={() => paginate(number)}
              style={[styles.pageButton]}
              hitSlop={{ top: 10, bottom: 10, left: 15, right: 15 }}
            >
              <Text
                style={[
                  styles.pageText,
                  currentPage === number && {
                    color: "#83DB89",
                    fontWeight: 800,
                  },
                ]}
              >
                {number}
              </Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            onPress={handleNext}
            disabled={currentPage === totalPages}
          >
            <MaterialCommunityIcons
              name="chevron-right"
              size={30}
              color={currentPage === totalPages ? "lightgrey" : "#262627"}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <></>
      )}
    </View>
  );
};

export default TableChart;

const styles = StyleSheet.create({
  cell: {
    width: 100,
    justifyContent: "center",
  },
  tableFrame: {
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
  },
  materialColumn: {
    height: "10%",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: "#dddddd",
    backgroundColor: "#83DB89",
    borderTopLeftRadius: 8,
  },
  materialColumnText: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    textAlignVertical: "center",
    color: "white",
  },
  materialNo: {
    height: "9%",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: "#dddddd",
  },
  materialNoText: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 16,
    fontWeight: "600",
  },
  headerView: {
    flexDirection: "row",
    height: "10%",
    backgroundColor: "#83DB89",
    borderTopRightRadius: 8,
    borderBottomWidth: 1,
    borderColor: "#dddddd",
  },
  header: {
    width: 300,
    justifyContent: "center",
    backgroundColor: "#83DB89",
    borderTopRightRadius: 8,
  },
  headerText: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 18,
    fontWeight: "700",
    color: "white",
  },
  rowView: {
    flexDirection: "row",
    height: "10%",
    borderBottomWidth: 1,
    borderColor: "#dddddd",
  },
  cellText: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 16,
  },
  pagingView: {
    height: "8%",
    marginTop: "5%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: deviceWidth > 500 ? "20%" : "0",
  },
  pagingBtn: {
    height: 30,
    width: 30,
    borderRadius: 6,
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 2,
  },
  pagingText: {
    textAlign: "center",
    color: "#262627",
    fontSize: 16,
  },
});
