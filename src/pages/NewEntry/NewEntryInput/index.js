import React, {useState} from 'react';

import InputMoney from '../../../components/IputMoney';

function NewEntryInput({value, onChangeValue, onChangeDebit}) {
  return (
    <InputMoney
      value={value}
      onChangeDebit={onChangeDebit}
      onChangeValue={onChangeValue}
    />
  );
}

export default NewEntryInput;
