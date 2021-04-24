import React from 'react';
import ActionFooter, {ActionPrimaryButton} from '../Core/ActionFooter';

import {Container, ModalPicker, ModalList, Item, ItemLabel} from './styles';

const RelativeDaysModal = ({isVisible, onConfirm, onCancel}) => {
  const relativeDays = [1, 3, 7, 15, 21, 30, 45, 60, 90, 120];

  return (
    <ModalPicker animationType="slide" transparent={false} visible={isVisible}>
      <Container>
        <ModalList
          data={relativeDays}
          keyExtractor={item => item.toString()}
          renderItem={({item}) => (
            <Item onPress={() => onConfirm(item)}>
              <ItemLabel>{`${item} dias`}</ItemLabel>
            </Item>
          )}
        />
      </Container>
      <ActionFooter>
        <ActionPrimaryButton title="Fechar" onPress={onCancel} />
      </ActionFooter>
    </ModalPicker>
  );
};

export default RelativeDaysModal;
