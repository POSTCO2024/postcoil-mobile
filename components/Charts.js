import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import React, { useState } from "react";
import { BarChart } from "react-native-gifted-charts";
import { datas } from "./Data";
import ChartDetail from "./ChartDetail";
const barData = datas.result.slice(0, 50);
const barWidth = barData.map((coil) => ({
  id: coil.material.id,
  value: coil.material.width,
  frontColor: "#9acd32",
}));
const barThickness = barData.map((coil) => ({
  id: coil.material.id,
  value:
    coil.material.thickness > 0
      ? coil.material.thickness
      : -coil.material.thickness,
  frontColor: "#9acd32",
}));
export const Charts = () => {
  const [topChartData, setTopChartData] = useState(barWidth);
  const [bottomChartData, setBottomChartData] = useState(barThickness);
  const [clickedBar, setClickedBar] = useState();
  const [materialDetail, setMaterialDetail] = useState();

  const handleBarPress = (item, index) => {
    setMaterialDetail(barData[index]);
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

  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        alignItems: "center",
      }}
    >
      <View style={styles.scrollContainer}>
        <ScrollView
          style={{ flex: 1, marginTop: "5%" }}
          horizontal={true}
          contentContainerStyle={{ flexDirection: "column" }}
        >
          <View style={{ zIndex: 999 }}>
            <BarChart
              data={topChartData}
              barWidth={Dimensions.get("window").width * 0.07}
              height={Dimensions.get("window").height * 0.25}
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
          </View>
          <View
            style={{
              marginTop: -10,
              transform: [{ rotateX: "180deg" }],
              zIndex: 1,
            }}
          >
            <BarChart
              data={bottomChartData}
              barWidth={Dimensions.get("window").width * 0.07}
              height={Dimensions.get("window").height * 0.25}
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
              maxValue={8}
              yAxisColor={"#262627"}
              noOfSections={6}
              initialSpacing={10}
            />
          </View>
        </ScrollView>
      </View>
      <View style={styles.chartDetailContainer}>
        <ChartDetail materialDetail={materialDetail} />
      </View>
    </View>
  );
};

export default Charts;

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
