import React from 'react';

import InputMoney from '../../../components/IputMoney';

import * as S from './styles';

const WelcomeBalanceInput = ({amount, onChangeValue}) => {
  return (
    <S.Container>
      <S.Label>Informe seu saldo</S.Label>
      <InputMoney
        startWithDebit={false}
        value={amount}
        onChangeValue={onChangeValue}
      />
    </S.Container>
  );
};

export default WelcomeBalanceInput;
