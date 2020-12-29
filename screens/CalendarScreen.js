import React from 'react';
import { StyleSheet } from 'react-native';
import { CalendarList } from 'react-native-calendars';

const CalendarScreen = (props) => {
  return <CalendarList 
    current={Date()}
    scrollEnabled={true}
    pastScrollRange={0}
    futureScrollRange={2}
    onDayPress = {(day)=> {
      console.log(day);
      return props.navigation.navigate('Scheduler', { date: day.dateString }) }}/>
};
// this.props.navigation.navigate('Calendar', { date: day })
// TODO styles
const styles = StyleSheet.create({ });

export default CalendarScreen;