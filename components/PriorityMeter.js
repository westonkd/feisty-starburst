import React from "react";
import PropTypes from "prop-types";
import {
  AnimatedGaugeProgress,
  GaugeProgress
} from "react-native-simple-gauge";
import AnimateNumber from "react-native-countup";

import { View } from "react-native";
import { Layout, Meter } from "../styles/Global";

export default class PriorityMeter extends React.Component {
  fill() {
    return this.props.complete / this.props.total * 100;
  }

  formatProgress(val) {
    return `${Math.floor(val)}%`;
  }

  render() {
    return (
      <View style={[Layout.centerContent, Layout.firstElement]}>
        <AnimatedGaugeProgress
          size={170}
          width={15}
          fill={this.fill()}
          rotation={90}
          cropDegree={90}
          tintColor="#4682b4"
          backgroundColor="#b0c4de"
          stroke={[2, 2]}
          strokeCap="circle"
        />
        <View style={Meter.percentageContainer}>
          <AnimateNumber
            value={this.fill()}
            formatter={this.formatProgress}
            interval={2}
            steps={15}
            style={[Meter.primaryColor, Meter.percentage]}
          />
        </View>
      </View>
    );
  }
}

PriorityMeter.propTypes = {
  total: PropTypes.number.isRequired,
  complete: PropTypes.number.isRequired
};
