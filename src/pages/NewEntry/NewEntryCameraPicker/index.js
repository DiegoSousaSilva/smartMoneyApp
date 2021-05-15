import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet, Modal} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../../components/styles/Colors';
import NewEntryCameraPickerModal from './NewEntryCameraPickerModal';

// import { Container } from './styles';

const NewEntryCameraPicker = ({photo, onChangePhoto}) => {
  const [modalVisible, setMoldalVisible] = useState(false);

  const onChangePhotoPress = newPhoto => {
    onChangePhoto(newPhoto);
    onClosePress();
  };

  const onDeletePicturePress = () => {
    onChangePhoto(null);
    onClosePress();
  };

  const onClosePress = () => {
    setMoldalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity
        style={[styles.button, photo ? styles.buttonActived : '']}
        onPress={() => {
          setMoldalVisible(true);
        }}>
        <Icon name="photo-camera" size={30} color={Colors.white} />
      </TouchableOpacity>
      <NewEntryCameraPickerModal
        photo={photo}
        isVisible={modalVisible}
        onChangePhoto={onChangePhotoPress}
        onDelete={onDeletePicturePress}
        onClose={onClosePress}
      />
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
  buttonActived: {
    backgroundColor: Colors.blue,
  },
});

export default NewEntryCameraPicker;
