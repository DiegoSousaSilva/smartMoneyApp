import React from 'react';
import {View, Text, Button} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../styles/Colors';

import {
  Container,
  Description,
  FooterDescription,
  Title,
  Valor,
  Date,
  Local,
  FooterView,
} from './styles';

const EntryListItem = ({item, onEntryPress}) => {
  return (
    <Container
      onPress={() => {
        onEntryPress && onEntryPress(item);
      }}>
      <Description>
        <Title>{item.description}</Title>
        <FooterDescription>
          <FooterView>
            <Icon name="access-time" size={12} color={Colors.metal} />
            <Date>{item.entryAt.toString()}</Date>
          </FooterView>
          <FooterView>
            <Icon name="person-pin" size={12} color={Colors.metal} />
            <Local>Rua 2, imperatriz</Local>
          </FooterView>
        </FooterDescription>
      </Description>

      <Valor>R${item.amount}</Valor>
    </Container>
  );
};

export default EntryListItem;
