import React, {useState} from 'react';

import Colors from '../../../components/styles/Colors';

import {Container, MaskedText, Btn, TypeText} from './styles';

function NewEntryInput({value, onChangeValue, onChangeDebit}) {
  const [debitPrefix, setDebitPrefix] = useState(value <= 0 ? '-' : '');
  const [debit, setDebit] = useState(value <= 0 ? -1 : 1);

  const onChangeDebitCredit = () => {
    if (debit < 0) {
      setDebit(1);
      setDebitPrefix('');
      onChangeDebit(false);
    } else {
      setDebit(-1);
      setDebitPrefix('-');
      onChangeDebit(true);
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
}

export default NewEntryInput;
