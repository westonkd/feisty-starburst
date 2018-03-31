import React from "react";
import { Text, View } from "react-native";
import { Layout } from "../styles/Global";
import PriorityMeter from "../components/PriorityMeter";
export default class TodayScreen extends React.Component {
  render() {
    return (
      <View style={Layout.container}>
        <View style={Layout.top}>
          <PriorityMeter total={3} complete={2} />
        </View>
        <View style={Layout.main} />
      </View>
    );
  }
}
