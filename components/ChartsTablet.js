import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { BarChart } from "react-native-gifted-charts";
import { datas } from "./Data";
import ChartDetailTablet from "./ChartDetailTablet";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
export const ChartsTablet = ({ data }) => {
  // console.log("ChartTablet data : " + JSON.stringify(data));
  console.log(data);
  const coilSupply = data.coilSupply;
  const barData = data;
  const barDataItems = data.items.sort((a, b) => a.sequence - b.sequence);
  const barCount = data.items.length;
  let suppliedCnt = 0;
  const barWidth = barDataItems.map((coil) => {
    let color;
    switch (coil.workItemStatus) {
      case "COMPLETED":
        color = "#b3b3b3";
        break;
      case "PENDING":
        if (coilSupply.suppliedCoils > suppliedCnt) {
          color = "#9acd32";
          suppliedCnt++;
        } else {
          color = "#2caffe";
        }
        if (coil.isRejected === "Y") {
          color = "#F5004F";
        }
        break;
      case "IN_PROGRESS":
        color = "#9acd32";
        suppliedCnt++;
        break;
    }
    return {
      id: coil.materialId,
      value: coil.initialGoalWidth,
      frontColor: color,
    };
  });
  suppliedCnt = 0;
  const barThickness = barDataItems.map((coil) => {
    let color;
    switch (coil.workItemStatus) {
      case "COMPLETED":
        color = "#b3b3b3";
        break;
      case "PENDING":
        if (coilSupply.suppliedCoils > suppliedCnt) {
          color = "#9acd32";
          suppliedCnt++;
        } else {
          color = "#2caffe";
        }
        if (coil.isRejected === "Y") {
          color = "#F5004F";
        }
        break;
      case "IN_PROGRESS":
        color = "#9acd32";
        suppliedCnt++;
        break;
    }
    return {
      id: coil.materialId,
      value:
        // coil.initialThickness > 0
        //   ? coil.initialThickness
        //   : -coil.initialThickness,
        coil.initialThickness,
      frontColor: color,
    };
  });
  const [topChartData, setTopChartData] = useState(barWidth);
  const [bottomChartData, setBottomChartData] = useState(barThickness);
  const [clickedBar, setClickedBar] = useState();
  const [clickedBarColor, setClickedBarColor] = useState();
  const [materialDetail, setMaterialDetail] = useState();

  const handleBarPress = (item, index) => {
    if (clickedBar === index) return;
    console.log("itemClicked : " + JSON.stringify(item));
    setMaterialDetail(barDataItems[index]);
    const updateTopData = [...topChartData];
    updateTopData[index] = { ...topChartData[index], frontColor: "#ffd700" };
    const updateBottomData = [...bottomChartData];
    updateBottomData[index] = {
      ...bottomChartData[index],
      frontColor: "#ffd700",
    };
    if (index != clickedBar) {
      updateTopData[clickedBar] = {
        ...updateTopData[clickedBar],
        frontColor: clickedBarColor,
      };
      updateBottomData[clickedBar] = {
        ...updateBottomData[clickedBar],
        frontColor: clickedBarColor,
      };
    }
    setClickedBar(index);
    setClickedBarColor(item.frontColor);
    setTopChartData(updateTopData);
    setBottomChartData(updateBottomData);
  };

  // 스케줄 데이터가 바뀔 때마다 차트 데이터를 업데이트하는 useEffect
  useEffect(() => {
    setTopChartData(barWidth);
    setBottomChartData(barThickness);
    setClickedBar(null); // 새 스케줄로 바뀔 때 클릭된 막대 초기화
    setClickedBarColor(null);
    setMaterialDetail(null); // 새 스케줄로 바뀔 때 상세 정보 초기화
  }, [data]);

  return (
    <View
      style={{
        flex: 1,
        width: "80%",
        alignItems: "center",
        marginTop: "4%",
      }}
    >
      <View style={styles.scrollContainer}>
        <ScrollView
          style={{ flex: 1, marginTop: "5%" }}
          horizontal={true}
          contentContainerStyle={{ flexDirection: "column" }}
        >
          <BarChart
            data={topChartData}
            width={screenWidth * 0.07 * (barCount + 1)}
            barWidth={screenWidth * 0.07}
            height={screenHeight * 0.23}
            barBorderTopLeftRadius={4}
            barBorderTopRightRadius={4}
            barBorderWidth={1}
            barBorderColor={"white"}
            spacing={0}
            onPress={(item, index) => handleBarPress(item, index)}
            yAxisThickness={0}
            xAxisLabelsHeight={0}
            maxValue={1800}
            yAxisColor={"#262627"}
            noOfSections={6}
            initialSpacing={10}
            showScrollIndicator={true}
          />
          <View
            style={{
              marginTop: -10,
              transform: [{ rotateX: "180deg" }],
              zIndex: 1,
            }}
          >
            <BarChart
              data={bottomChartData}
              width={screenWidth * 0.07 * (barCount + 1)}
              barWidth={screenWidth * 0.07}
              height={screenHeight * 0.23}
              barBorderTopLeftRadius={4}
              barBorderTopRightRadius={4}
              barBorderWidth={1}
              barBorderColor={"white"}
              spacing={0}
              onPress={(item, index) => handleBarPress(item, index)}
              disableScroll={true}
              yAxisThickness={0}
              yAxisTextStyle={{ transform: [{ rotateX: "180deg" }] }}
              xAxisLabelsHeight={0}
              yAxisColor={"#262627"}
              initialSpacing={10}
              noOfSections={6}
              maxValue={3}
              yAxisLabelTexts={["0", "0.5", "1.0", "1.5", "2.0", "2.5", "3.0"]}
              xAxisLabelsVerticalShift={-60}
            />
          </View>
        </ScrollView>
      </View>
      <View style={styles.chartDetailContainer}>
        <ChartDetailTablet
          materialDetail={materialDetail}
          workInstructionId={barData.workInstructionId}
        />
      </View>
    </View>
  );
};

export default ChartsTablet;

const styles = StyleSheet.create({
  scrollContainer: {
    width: "100%",
    backgroundColor: "white",
    flex: 12,
    paddingHorizontal: "5%",
    borderRadius: 7,
    elevation: 5,
    shadowColor: "#dddddd",
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 6,
  },
  chartDetailContainer: {
    backgroundColor: "#f9f9f9",
    width: "100%",
    flex: 4,
    marginTop: "3%",
    borderRadius: 6,
    elevation: 5,
    shadowColor: "#dddddd",
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 6,
  },
});
