import React from 'react';
import {View, StyleSheet} from 'react-native';
import BalancePanel from '../../components/BalancePanel';
import EntryList from '../../components/EntryList';
import EntrySmumary from '../../components/EntrySmumary';
import Colors from '../../components/styles/Colors';

// import { Container } from './styles';

const Main = ({navigation}) => {
  return (
    <View style={styles.container}>
      <BalancePanel onNewEntryPress={() => navigation.navigate('NewEntry')} />
      <View style={{}}>
        <EntrySmumary
          onPressAction={() => {
            navigation.navigate('Report');
          }}
        />
      </View>
      <View style={{flex: 1}}>
        <EntryList />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1,
    paddingTop: 30,
  },
});

export default Main;
