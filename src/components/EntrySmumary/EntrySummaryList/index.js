import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import EntrySummaryListItem from './EntrySummaryListItem';

// import { Container } from './styles';

const EntrySummaryList = ({data}) => {
  return (
    <FlatList
      style={styles.container}
      data={data}
      keyExtractor={item => item.category.id}
      renderItem={({item}) => <EntrySummaryListItem entry={item} />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 16,
  },
});

export default EntrySummaryList;
