import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";
import { BarChart } from "react-native-gifted-charts";
import { datas } from "./Data";
import ChartDetailMobile from "./ChartDetailMobile";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
export const ChartsMobile = ({ data }) => {
  console.log(data);
  const barData = data;
  const barDataItems = data.items.sort((a, b) => a.sequence - b.sequence);
  const barCount = data.items.length;
  const barWidth = barDataItems.map((coil) => ({
    id: coil.materialId,
    value: coil.initialGoalWidth,
    frontColor: "#9acd32",
  }));
  const barThickness = barDataItems.map((coil) => ({
    id: coil.materialId,
    value: coil.initialThickness,
    frontColor: "#9acd32",
  }));
  const [topChartData, setTopChartData] = useState(barWidth);
  const [bottomChartData, setBottomChartData] = useState(barThickness);
  const [clickedBar, setClickedBar] = useState();
  const [materialDetail, setMaterialDetail] = useState();

  const handleBarPress = (item, index) => {
    setMaterialDetail(barDataItems[index]);
    const updateTopData = [...topChartData];
    updateTopData[index] = { ...topChartData[index], frontColor: "#2caffe" };
    const updateBottomData = [...bottomChartData];
    updateBottomData[index] = {
      ...bottomChartData[index],
      frontColor: "#2caffe",
    };
    if (index != clickedBar) {
      updateTopData[clickedBar] = {
        ...updateTopData[clickedBar],
        frontColor: "#9acd32",
      };
      updateBottomData[clickedBar] = {
        ...updateBottomData[clickedBar],
        frontColor: "#9acd32",
      };
    }
    setClickedBar(index);
    setTopChartData(updateTopData);
    setBottomChartData(updateBottomData);
  };

  // 스케줄 데이터가 바뀔 때마다 차트 데이터를 업데이트하는 useEffect
  useEffect(() => {
    setTopChartData(barWidth);
    setBottomChartData(barThickness);
    setClickedBar(null); // 새 스케줄로 바뀔 때 클릭된 막대 초기화
    setMaterialDetail(null); // 새 스케줄로 바뀔 때 상세 정보 초기화
  }, [data]);

  return (
    <View
      style={{
        flex: 1,
        width: "90%",
        alignItems: "center",
        marginTop: "3%",
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
            width={screenWidth * 0.09 * (barCount + 2)}
            barWidth={screenWidth * 0.09}
            height={screenHeight * 0.23}
            barBorderTopLeftRadius={4}
            barBorderTopRightRadius={4}
            barBorderWidth={1}
            barBorderColor={"white"}
            spacing={0}
            onPress={(item, index) => handleBarPress(item, index)}
            disableScroll={true}
            yAxisThickness={0}
            xAxisLabelsHeight={0}
            maxValue={1800}
            yAxisColor={"#262627"}
            noOfSections={6}
            initialSpacing={10}
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
              width={screenWidth * 0.09 * (barCount + 2)}
              barWidth={screenWidth * 0.09}
              height={screenHeight * 0.23}
              barBorderTopLeftRadius={4}
              barBorderTopRightRadius={4}
              barBorderWidth={1}
              barBorderColor={"white"}
              spacing={0}
              onPress={(item, index) => handleBarPress(item, index)}
              disableScroll={true}
              yAxisThickness={0}
              mostNegativeValue={0}
              yAxisTextStyle={{ transform: [{ rotateX: "180deg" }] }}
              xAxisLabelsHeight={0}
              maxValue={3}
              yAxisColor={"#262627"}
              noOfSections={6}
              initialSpacing={10}
              yAxisLabelTexts={["0", "0.5", "1.0", "1.5", "2.0", "2.5", "3.0"]}
              xAxisLabelsVerticalShift={-60}
            />
          </View>
        </ScrollView>
      </View>
      <View style={styles.chartDetailContainer}>
        <ChartDetailMobile
          materialDetail={materialDetail}
          workInstructionId={barData.id}
        />
      </View>
    </View>
  );
};

export default ChartsMobile;

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
    backgroundColor: "#F5F5F5",
    width: "100%",
    flex: 5,
    marginTop: "3%",
    borderRadius: 6,
    elevation: 5,
    shadowColor: "#dddddd",
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 6,
  },
});
