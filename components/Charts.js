import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import React, { useState } from "react";
import { BarChart } from "react-native-gifted-charts";
import { datas } from "./Data";
const barData = datas.result.slice(0, 50);
const barWidth = barData.map((coil) => ({
  id: coil.material.id,
  value: coil.material.width,
  frontColor: "black",
}));
const barThickness = barData.map((coil) => ({
  id: coil.material.id,
  value:
    coil.material.thickness > 0
      ? coil.material.thickness
      : -coil.material.thickness,
  frontColor: "black",
}));
export const Charts = () => {
  const [topChartData, setTopChartData] = useState(barWidth);
  const [bottomChartData, setBottomChartData] = useState(barThickness);
  const [clickedBar, setClickedBar] = useState();

  const handleBarPress = (item, index) => {
    console.log(item);
    const updateTopData = [...topChartData];
    updateTopData[index] = { ...topChartData[index], frontColor: "blue" };
    const updateBottomData = [...bottomChartData];
    updateBottomData[index] = { ...bottomChartData[index], frontColor: "blue" };
    if (index != clickedBar) {
      updateTopData[clickedBar] = {
        ...updateTopData[clickedBar],
        frontColor: "black",
      };
      updateBottomData[clickedBar] = {
        ...updateBottomData[clickedBar],
        frontColor: "black",
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
        backgroundColor: "lightgrey",
        width: "100%",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: "100%",
          backgroundColor: "white",
          flex: 12,
          paddingHorizontal: "5%",
          borderRadius: 7,
        }}
      >
        <ScrollView
          style={{ flex: 1, marginTop: "5%" }}
          horizontal={true}
          contentContainerStyle={{ flexDirection: "column" }}
        >
          <View style={{ zIndex: 999, pointerEvents: "box-none" }}>
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
              pointerEvents: "box-none",
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
      <View style={{ backgroundColor: "red", width: "90%", flex: 3 }}>
        <Text>awddaw</Text>
      </View>
    </View>
  );
};

export default Charts;

const styles = StyleSheet.create({
  child: {
    width: Dimensions.get("window").width * 0.2, // 각 자식 요소의 높이를 부모의 20%로 설정
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
    marginBottom: 10, // 자식 요소 간 간격 추가
  },
});
