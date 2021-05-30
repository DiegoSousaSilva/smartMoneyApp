import moment from 'moment';
import React from 'react';
import {View, Text, Button} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Currency from '../../Core/Currency';
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
            <Date>{moment(item.entryAt).calendar()}</Date>
          </FooterView>
          <FooterView>
            <Icon name="person-pin" size={12} color={Colors.metal} />
            <Local>{item.address}</Local>
          </FooterView>
        </FooterDescription>
      </Description>

      <Valor>
        <Currency value={item.amount} />
      </Valor>
    </Container>
  );
};

export default EntryListItem;
