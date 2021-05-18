import styled from 'styled-components/native';
import {TextInputMask} from 'react-native-masked-text';
import Colors from '../styles/Colors';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${Colors.asphalt};
  margin: 20px 20px;
  border-radius: 12px;
  justify-content: center;
`;

export const Btn = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 20px 20px;
`;

export const TypeText = styled.Text`
  font-size: 28px;
  color: ${Colors.white};
`;

export const MaskedText = styled(TextInputMask)`
  flex: 1;
  font-size: 28px;
  color: ${Colors.white};
  text-align: center;
`;
