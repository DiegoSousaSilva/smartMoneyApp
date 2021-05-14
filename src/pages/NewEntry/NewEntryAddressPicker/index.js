import React from 'react';
import {View, TouchableOpacity, StyleSheet, Alert} from 'react-native';

import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../../components/styles/Colors';

// import { Container } from './styles';

const NewEntryAddressPicker = () => {
  const getLocation = (latitude, longitude) => {
    Geocoder.init('AIzaSyC6zpxiveenHn5riKB_VbSh3X28eRAqeH0');

    Geocoder.from({latitude: latitude, longitude: longitude})
      .then(json => {
        const formatedAddress = json.results[0].formatted_address;

        Alert.alert('Formated  Address:', formatedAddress);
      })
      .catch(error => {
        console.error(
          'NewEntryAddressPicker :: GeoLocation: error on get address',
          error,
        );
        Alert.alert('Houve um erro ao recuparar sua Localização');
      });
  };

  const getPosition = () => {
    Geolocation.getCurrentPosition(
      pos => {
        const latitude = pos.coords.latitude;
        const longitude = pos.coords.longitude;

        //console.log(`Lat ${latitude} Lon ${longitude}`);
        getLocation(latitude, longitude);
      },
      error => {
        console.error(
          'NewEntryAddressPicker :: GetPosition: error on get address',
          error,
        );
        Alert.alert('Houve um erro ao recuparar sua posição');
      },
    );
  };

  const onButtonPress = () => {
    getPosition();
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
