import React from 'react';
import { Text, View } from 'react-native'
import { Tabs } from './router'
import { AppHeader } from './components/AppHeader'
import { Layout } from './styles/Global'

export default class App extends React.Component {
  render() {
    return (
      <View style={Layout.container}>
        <View style={Layout.headerView}>
          <AppHeader />
        </View>
        <View style={Layout.main}>
          <Tabs />
        </View>     
      </View>
    );
  }
}
