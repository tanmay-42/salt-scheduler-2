import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import CalendarScreen from './screens/CalendarScreen';
import SchedulerScreen from './screens/SchedulerScreen';

const AppNavigator = createStackNavigator(
  {
    Calendar: { screen : CalendarScreen },
    Scheduler: { screen : SchedulerScreen }
  },
  {
    headerMode: false,
    initialRouteName: 'Calendar'
  }
);

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return <AppContainer/>;
}

//const styles = StyleSheet.create();

export default App;

