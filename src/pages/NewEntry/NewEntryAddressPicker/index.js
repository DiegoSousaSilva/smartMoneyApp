import React from 'react';
import {View, TouchableOpacity, StyleSheet, Alert} from 'react-native';

import Geolocation from '@react-native-community/geolocation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../../components/styles/Colors';

// import { Container } from './styles';

const NewEntryAddressPicker = () => {
  const onButtonPress = () => {
    Geolocation.getCurrentPosition(
      pos => {
        const latitude = pos.coords.latitude;
        const longitude = pos.coords.longitude;

        const position = `Lat. ${latitude} Lon. ${longitude}`;

        Alert.alert('posição', position);
      },
      error => {
        console.error('NewEntryAddressPicker :: error on get address', error);
      },
    );
  };

  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onButtonPress}>
        <Icon name="person-pin" size={30} color={Colors.white} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 150,
    backgroundColor: Colors.asphalt,
    width: 59,
    height: 59,
    marginHorizontal: 3,
    margin: 10,
  },
});

export default NewEntryAddressPicker;
