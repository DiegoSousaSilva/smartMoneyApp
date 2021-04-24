import React, {useState} from 'react';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Datetime} from './styles';
import Colors from '../../../components/styles/Colors';

const NewEntryDatePicker = ({value, onChange}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const onChangeValue = date => {
    onChange(date);
    onCancel();
  };

  const onCancel = () => {
    setModalVisible(false);
  };

  return (
    <Container>
      <Datetime onPress={() => setModalVisible(true)}>
        <Icon name="today" size={30} color={Colors.white} />
      </Datetime>

      <DateTimePicker
        mode="date"
        datePickerModeAndroid="calendar"
        titleIOS="Date de Vencimento"
        cancelTextIOS="Cancelar"
        confirmTextIOS="OK"
        date={value}
        isVisible={modalVisible}
        onConfirm={onChangeValue}
        onCancel={onCancel}
      />
    </Container>
  );
};

export default NewEntryDatePicker;
