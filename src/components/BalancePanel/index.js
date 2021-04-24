import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import useBalance from '../../hooks/useBalance';
import Colors from '../styles/Colors';

import BalancePanelChart from './BalancePanelChart';
import BalancePanelLabel from './BalancePanelLabel';

// import { Container } from './styles';

const BalancePanel = ({onNewEntryPress}) => {
  const [balance] = useBalance();
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Colors.violet, Colors.blue]}
        style={styles.panel}>
        <BalancePanelLabel saldo={balance} />
        <BalancePanelChart />
      </LinearGradient>
      <TouchableOpacity onPress={onNewEntryPress} style={styles.button}>
        <Icon name="add" size={26} color={Colors.white} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  panel: {
    paddingVertical: 10,
  },
  button: {
    backgroundColor: Colors.green,
    borderRadius: 30,
    width: 50,
    height: 50,
    marginTop: -25,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginRight: 16,
    shadowColor: Colors.black,
    elevation: 5,
    zIndex: 5,
  },
});

export default BalancePanel;
