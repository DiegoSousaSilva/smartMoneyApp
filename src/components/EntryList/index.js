import React, {useState} from 'react';
import EntryListItem from './EntryListItem';
import {FlatList} from 'react-native';

import Container from '../Core/Container';

import useEntries from '../../hooks/useEntries';

const EntryList = ({days = 7, category, onEntryPress, onPressAction}) => {
  const [entries] = useEntries(days, category);

  return (
    <Container
      title="Últimos lançamentos"
      titleRodape={`Últimos ${days} dias`}
      more="Ver mais..."
      onPressAction={onPressAction}>
      <FlatList
        data={entries}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <EntryListItem item={item} onEntryPress={onEntryPress} />
        )}
      />
    </Container>
  );
};

export default EntryList;
