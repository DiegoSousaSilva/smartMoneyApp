import React, {useState} from 'react';
import BalanceLabel from '../../components/BalanceLabel';
import NewEntryDatePicker from './NewEntryDatePicker';

import NewEntryCategoryPicker from './NewEntryCategoryPicker';
import NewEntryInput from './NewEntryInput';
import {Container, FormActionContainer, Linear, FormContainer} from './styles';
import NewEntryDeleteAction from './NewEntryDeleteAction';
import ActionFooter, {
  ActionPrimaryButton,
  ActionSecondaryButton,
} from '../../components/Core/ActionFooter';
import useBalance from '../../hooks/useBalance';
import useEntries from '../../hooks/useEntries';

const NewEntry = ({navigation, route}) => {
  //Var to BalanceLabel
  const sizeLabel = 12;
  const sizeValue = 16;
  const [saldo] = useBalance();

  const entry = route.params?.entry
    ? route.params.entry
    : {
        id: null,
        amount: 0,
        category: {id: null, name: 'Selecione'},
        entryAt: new Date(),
      };

  const [entries, saveEntry, deleteEntry] = useEntries();

  const [debit, setDebit] = useState(entry.amount <= 0);
  const [amount, setAmount] = useState(entry.amount);
  const [category, setCategory] = useState(entry.category);
  const [entryAt, setEntryAt] = useState(entry.entryAt);

  const isValid = () => {
    if (parseFloat(amount) !== 0) {
      return true;
    }
    return false;
  };

  const onSave = () => {
    const data = {
      id: entry.id ? entry.id : `${Math.floor(Math.random() * 1000)}`,
      amount: parseFloat(amount),
      category: category,
      entryAt: entryAt,
    };
    saveEntry(data);
    setAmount('0');
    onClose();
  };

  const onDelete = () => {
    deleteEntry(entry);
    onClose();
  };

  const onClose = () => {
    navigation.navigate('Home');
  };

  const onAdd = () => {
    isValid && onSave();
  };

  return (
    <Container>
      <Linear>
        <BalanceLabel
          saldo={saldo}
          sizeLabel={sizeLabel}
          sizeValue={sizeValue}
        />
      </Linear>

      {/*Form*/}
      <FormContainer>
        <NewEntryInput
          value={amount}
          onChangeValue={setAmount}
          onChangeDebit={setDebit}
        />

        <NewEntryCategoryPicker
          debit={debit}
          category={category}
          onChangeCategory={setCategory}
        />

        <FormActionContainer>
          <NewEntryDatePicker onChange={setEntryAt} value={entryAt} />
          <NewEntryDeleteAction onOkPress={onDelete} entry={entry} />
        </FormActionContainer>
      </FormContainer>

      <ActionFooter>
        <ActionPrimaryButton
          title={entry.id ? 'Atualizar' : 'Adcionar'}
          onPress={onAdd}
        />
        <ActionSecondaryButton title="Cancelar" onPress={onClose} />
      </ActionFooter>
    </Container>
  );
};

export default NewEntry;
