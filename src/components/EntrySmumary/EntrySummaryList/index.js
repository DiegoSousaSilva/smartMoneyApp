import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

// import { Container } from './styles';

const EntrySummaryList = ({categories}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({item}) => (
          <Text>
            {item.description} - R$ {item.amount}
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 16,
  },
});

export default EntrySummaryList;
