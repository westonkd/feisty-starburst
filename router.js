import React from 'react'
import { TabNavigator, StackNavigation, DrawerNavigator } from 'react-navigation'

import TodayScreen from './screens/TodayScreen'
import HistoryScreen from './screens/HistoryScreen'
import { Backgrounds } from './styles/Global'

export const Tabs = TabNavigator({
    Today: {
        screen: TodayScreen
    },
    History: {
        screen: HistoryScreen
    }
}, {
    tabBarOptions: {
        style: Backgrounds.primaryColor 
    } 
})