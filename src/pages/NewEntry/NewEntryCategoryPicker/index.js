import React, {useState} from 'react';
import CategoryModal from '../../../components/CategoryModal';

import {CategoryPicker, Container, Label} from './styles';

const NewEntryCategoryPicker = ({debit, category, onChangeCategory}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const onClosePress = () => {
    setModalVisible(false);
  };

  const onCategoryPress = item => {
    onChangeCategory(item);
    onClosePress();
  };

  return (
    <Container>
      <CategoryPicker onPress={() => setModalVisible(true)}>
        <Label>{category.name}</Label>
      </CategoryPicker>

      <CategoryModal
        categoryType={debit ? 'debit' : 'credit'}
        isVisible={modalVisible}
        onConfirm={onCategoryPress}
        onCancel={onClosePress}
      />
    </Container>
  );
};

export default NewEntryCategoryPicker;
