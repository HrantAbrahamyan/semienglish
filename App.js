import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import ChooseQuestScreen from './src/screens/ChooseQuestScreen'
import DifficultyLevelScreen from './src/screens/DifficultyLevelScreen'
import SummaryScreen from './src/screens/SummaryScreen'
import CongratulationsScreen from './src/screens/CongratulationsScreen'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ChooseQuestScreen/>
        {/* <DifficultyLevelScreen /> */}
        {/* <SummaryScreen /> */}
        {/* <CongratulationsScreen /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
