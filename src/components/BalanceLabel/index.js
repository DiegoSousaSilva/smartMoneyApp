import React from 'react';

import {Container, Label, Value} from './styles';

const BalanceLabel = ({saldo, sizeLabel, sizeValue}) => {
  return (
    <Container>
      <Label sizeLabel={sizeLabel} style={{fontSize: sizeLabel}}>
        Saldo atual
      </Label>
      <Value sizeValue={sizeValue} style={{fontSize: sizeValue}}>
        R$ {saldo}
      </Value>
    </Container>
  );
};

export default BalanceLabel;
