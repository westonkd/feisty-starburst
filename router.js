import React from "react";
import { StackNavigator } from "react-navigation";

import TodayScreen from "./screens/TodayScreen";
import HistoryScreen from "./screens/HistoryScreen";
import { Backgrounds } from "./styles/Global";

export const Stack = StackNavigator({
  Today: {
    screen: TodayScreen,
    navigationOptions: ({ navigation }) => ({
      headerTransparent: true
      // headerTitle: "Title"
      // you can set left and right components
    })
  }
});
