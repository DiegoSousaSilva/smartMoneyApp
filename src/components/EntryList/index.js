import React, {useState} from 'react';
import EntryListItem from './EntryListItem';
import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Container from '../Core/Container';

import useEntries from '../../hooks/useEntries';

const EntryList = ({days = 7, category}) => {
  const navigation = useNavigation();
  const [entries] = useEntries(days, category);

  return (
    <Container
      title="Últimos lançamentos"
      titleRodape={`Últimos ${days} dias`}
      more="Ver mais..."
      onPressAction={() => {
        navigation.navigate('Report');
      }}>
      <FlatList
        data={entries}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <EntryListItem
            item={item}
            onEntryPress={entry => {
              const entryToJson = JSON.parse(JSON.stringify(entry));
              navigation.navigate('NewEntry', {
                entry: entryToJson,
              });
            }}
          />
        )}
      />
    </Container>
  );
};

export default EntryList;
