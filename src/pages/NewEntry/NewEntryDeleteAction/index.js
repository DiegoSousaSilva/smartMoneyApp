import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, DeleteBtn} from './styles';
import Colors from '../../../components/styles/Colors';
import {Alert} from 'react-native';

const NewEntryDeleteAction = ({entry, onOkPress}) => {
  const onDelete = () => {
    Alert.alert(
      'Apagar?',
      'Você deseja realmente apagar este lançamento?',
      [
        {text: 'Não', style: 'cancel'},
        {text: 'Sim', onPress: () => onOkPress()},
      ],
      {cancelable: false},
    );
  };
  return (
    entry.id && (
      <Container>
        <DeleteBtn onPress={onDelete}>
          <Icon name="delete" size={30} color={Colors.white} />
        </DeleteBtn>
      </Container>
    )
  );
};

export default NewEntryDeleteAction;
