import React, {useState} from 'react';
import {View, Modal, StyleSheet, Alert, ImageBackground} from 'react-native';
import {RNCamera} from 'react-native-camera';
import Colors from '../../../../components/styles/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import { Container } from './styles';

const NewEntryCameraPickerModal = ({
  photo,
  isVisible,
  onChangePhoto,
  onDelete,
  onClose,
}) => {
  const [camera, setCamera] = useState();

  const onTakePicture = async () => {
    try {
      const {uri} = await camera.takePictureAsync({
        quality: 0.5,
        forceUpOrientation: true,
        fixOrientation: true,
        skipProcessing: true,
      });
      onChangePhoto(uri);
    } catch (error) {
      console.error(
        'NewEntryCameraPickerModal :: onTakePicture error on take picture',
        error,
      );
      Alert.alert('Erro, ouve um erro ao  tirar foto');
    }
  };

  return (
    <View>
      <Modal animationType="slide" transparent={false} visible={isVisible}>
        {photo ? (
          <ImageBackground source={{uri: photo}} style={styles.imagePreview}>
            <View style={styles.pictureButtonActions}>
              <Icon
                name="delete"
                size={50}
                color={Colors.white}
                onPress={onDelete}
                style={styles.buttonClose}
              />

              <Icon
                name="check"
                size={50}
                color={Colors.white}
                onPress={onClose}
                style={styles.buttonClose}
              />
            </View>
          </ImageBackground>
        ) : (
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
        )}
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
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
  imagePreview: {
    width: '100%',
    height: '100%',
  },
  pictureButtonActions: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    bottom: 16,
  },
  buttonClose: {
    marginLeft: 16,
  },
  buttonCheck: {
    marginRight: 16,
  },
});

export default NewEntryCameraPickerModal;
