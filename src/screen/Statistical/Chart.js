import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

import {Notifier, Easing, NotifierComponents} from 'react-native-notifier';
import PieChart from 'react-native-pie-chart';
import {ScrollView} from 'react-native-gesture-handler';

const Chart = () => {
  const widthAndHeight = 250;
  const series = [10, 20, 70,];
  const sliceColor = ['#F44336', '#2196F3', '#FFEB3B'];

  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.title}>Thống kê</Text>
        <PieChart
          widthAndHeight={widthAndHeight}
          series={series}
          
          sliceColor={sliceColor}
        />
      </View>
    </ScrollView>
  );
};

export default Chart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    margin: 10
  }
});
