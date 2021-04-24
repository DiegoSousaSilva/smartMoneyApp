import React from 'react';
import {View} from 'react-native';
import BalanceLabel from '../../BalanceLabel';

// import { Container } from './styles';
const sizeLabel = 14;
const sizeValue = 36;
const BalancePanelLabel = ({saldo}) => {
  return (
    <BalanceLabel saldo={saldo} sizeLabel={sizeLabel} sizeValue={sizeValue} />
  );
};

export default BalancePanelLabel;
