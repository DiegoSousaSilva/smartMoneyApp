import React, {useState} from 'react';

import Colors from '../styles/Colors';

import {Container, MaskedText, Btn, TypeText} from './styles';

const IputMoney = ({
  value,
  startWithDebit = true,
  onChangeValue,
  onChangeDebit,
}) => {
  const setDefaultDebit = () => {
    if (value === 0) {
      return startWithDebit ? -1 : 1;
    } else {
      return value <= 0 ? -1 : 1;
    }
  };

  const setDefaultDebitPrefix = () => {
    if (value === 0) {
      return startWithDebit ? '-' : '';
    } else {
      return value <= 0 ? '-' : '';
    }
  };

  const [debitPrefix, setDebitPrefix] = useState(setDefaultDebitPrefix());
  const [debit, setDebit] = useState(setDefaultDebit());

  const onChangeDebitCredit = () => {
    if (debit < 0) {
      setDebit(1);
      setDebitPrefix('');
      onChangeDebit && onChangeDebit(false);
    } else {
      setDebit(-1);
      setDebitPrefix('-');
      onChangeDebit && onChangeDebit(true);
    }
    onChangeValue(value * -1);
  };

  return (
    <Container>
      <Btn onPress={onChangeDebitCredit}>
        <TypeText style={{color: debit <= 0 ? Colors.red : Colors.white}}>
          {`${debitPrefix}R$`}
        </TypeText>
      </Btn>
      <MaskedText
        type={'money'}
        options={{
          precision: 2,
          separator: ',',
          delimiter: '.',
          unit: '',
          suffixUnit: '',
        }}
        value={value}
        includeRawValueInChangeText={true}
        onChangeText={(maskedValue, rawValue) => {
          onChangeValue(rawValue * debit);
        }}
      />
    </Container>
  );
};

export default IputMoney;
