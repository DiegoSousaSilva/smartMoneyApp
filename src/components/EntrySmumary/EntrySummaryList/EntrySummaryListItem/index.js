import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Svg, {Circle} from 'react-native-svg';
import Currency from '../../../Core/Currency';
import Colors from '../../../styles/Colors';

// import { Container } from './styles';

const EntrySummaryListItem = ({entry}) => {
  const bulletColor = entry.category.color || Colors.white;

  return (
    <View style={styles.container}>
      <Svg height="20" width="22">
        <Circle
          cx="10"
          cy="10"
          r="8"
          stroke={Colors.background}
          strokeWidth="0.5"
          fill={bulletColor}
        />
      </Svg>
      <Text style={styles.txtCategory}>{entry.category.name}</Text>
      <Text style={styles.txtAmount}>
        <Currency value={entry.amount} />
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  txtCategory: {
    fontSize: 12,
    color: Colors.white,
    marginTop: 2,
  },
  txtAmount: {
    flex: 1,
    fontSize: 12,
    color: Colors.white,
    textAlign: 'right',
    marginTop: 2,
  },
});

export default EntrySummaryListItem;
