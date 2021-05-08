import React, {useState} from 'react';
import BalanceLabel from '../../components/BalanceLabel';
import EntryList from '../../components/EntryList';
import EntrySmumary from '../../components/EntrySmumary';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CategoryModal from '../../components/CategoryModal';
import {
  Container,
  Linear,
  Rolagem,
  Option,
  OptionPicker,
  OptionLabel,
} from './styles';

import ActionFooter, {
  ActionPrimaryButton,
} from '../../components/Core/ActionFooter';
import Colors from '../../components/styles/Colors';
import RelativeDaysModal from '../../components/RelativeDaysModal';
import useBalance from '../../hooks/useBalance';

const Report = ({navigation}) => {
  const sizeLabel = 12;
  const sizeValue = 16;
  const [saldo] = useBalance();

  const [relativeDaysModalVisible, setRelativeDaysModalVisible] = useState(
    false,
  );
  const [categoryModalVisible, setCategoryModalVisible] = useState(false);

  const [relativeDays, setRelativeDays] = useState(7);
  const [category, setCategory] = useState({
    id: null,
    name: 'Todas as Categoria',
  });

  const onCategoryPress = item => {
    setCategory(item);
    onCategoryClosePress();
  };

  const onCategoryClosePress = () => {
    setCategoryModalVisible(false);
  };

  const onRelativeDaysPress = item => {
    setRelativeDays(item);
    onRelativeDaysClosePress();
  };

  const onRelativeDaysClosePress = () => {
    setRelativeDaysModalVisible(false);
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

      <Option>
        <OptionPicker
          onPress={() => {
            setRelativeDaysModalVisible(true);
          }}>
          <OptionLabel>{`Últimos ${relativeDays} dias`}</OptionLabel>
          <Icon name="keyboard-arrow-down" size={20} color={Colors.champagne} />
        </OptionPicker>

        <RelativeDaysModal
          isVisible={relativeDaysModalVisible}
          onConfirm={onRelativeDaysPress}
          onCancel={onRelativeDaysClosePress}
        />

        <OptionPicker
          onPress={() => {
            setCategoryModalVisible(true);
          }}>
          <OptionLabel>{category.name}</OptionLabel>
          <Icon name="keyboard-arrow-down" size={20} color={Colors.champagne} />
        </OptionPicker>

        <CategoryModal
          categoryType="all"
          isVisible={categoryModalVisible}
          onConfirm={onCategoryPress}
          onCancel={onCategoryClosePress}
        />
      </Option>

      <Rolagem>
        <EntrySmumary days={relativeDays} />
        <EntryList days={relativeDays} category={category} />
      </Rolagem>

      <ActionFooter>
        <ActionPrimaryButton
          title="Fechar"
          onPress={() => navigation.goBack()}
        />
      </ActionFooter>
    </Container>
  );
};

export default Report;
