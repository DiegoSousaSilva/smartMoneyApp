import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet, Modal} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../../components/styles/Colors';
import {RNCamera} from 'react-native-camera';
// import { Container } from './styles';

const NewEntryCameraPicker = () => {
  const [showModal, setShowModal] = useState();
  const [camera, setCamera] = useState();

  const onTakePicture = () => {};

  const onDelete = () => {
    setShowModal(false);
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setShowModal(true);
        }}>
        <Icon name="photo-camera" size={30} color={Colors.white} />
      </TouchableOpacity>

      <Modal animationType="slide" transparent={false} visible={showModal}>
        <RNCamera
          ref={ref => setCamera(ref)}
          style={{flex: 1}}
          type={RNCamera.Constants.Type.back}
          autoFocus={RNCamera.Constants.AutoFocus.on}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permissão para usar a câmera',
            message: 'Precisamos da sua permissão para usar a câmera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancelar',
          }}
          captureAudio={false}>
          <Icon
            name="photo-camera"
            size={40}
            color={Colors.white}
            onPress={onTakePicture}
            style={styles.buttonTakePicture}
          />

          <Icon
            name="close"
            size={50}
            color={Colors.white}
            onPress={onDelete}
            style={styles.buttonDeletePicture}
          />
        </RNCamera>
      </Modal>
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

  buttonTakePicture: {
    flex: 0,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
  },

  buttonDeletePicture: {
    flex: 0,
    position: 'absolute',
    top: 20,
    right: 20,
  },
});

export default NewEntryCameraPicker;
