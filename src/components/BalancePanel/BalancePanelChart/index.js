import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {BarChart} from 'react-native-svg-charts';

// import { Container } from './styles';

const BalancePanelChart = () => {
  const data = [100, 80, -30, 120, 250, 35, 70];
  return (
    <View style={styles.container}>
      <BarChart
        data={data}
        style={styles.chart}
        svg={{
          fill: 'rgba(0,0,0, .1)',
          stroke: 'rgba(0,0,0, .1)',
          strokeWidth: 1,
        }}
        contentInset={{top: 0, bottom: 0}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: -20,
    marginBottom: 3,
  },
  chart: {
    height: 60,
  },
});

export default BalancePanelChart;
