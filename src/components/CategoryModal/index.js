import React, {useEffect, useState} from 'react';
import ActionFooter, {ActionPrimaryButton} from '../Core/ActionFooter';

import {
  ModalCategory,
  ContainerModal,
  ModalItem,
  ModalItemText,
  ModalList,
} from './styles';

import useCategories from '../../hooks/useCategories';

const CategoryModal = ({categoryType, isVisible, onConfirm, onCancel}) => {
  const [debitCategories, creditCategories, allCategories] = useCategories();

  return (
    <ModalCategory
      animationType="slide"
      transparent={false}
      visible={isVisible}>
      <ContainerModal>
        <ModalList
          data={
            categoryType === 'all'
              ? allCategories
              : categoryType === 'debit'
              ? debitCategories
              : creditCategories
          }
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <ModalItem onPress={() => onConfirm(item)}>
              <ModalItemText>{item.name}</ModalItemText>
            </ModalItem>
          )}
        />

        <ActionFooter>
          <ActionPrimaryButton title="Fechar" onPress={onCancel} />
        </ActionFooter>
      </ContainerModal>
    </ModalCategory>
  );
};

export default CategoryModal;
