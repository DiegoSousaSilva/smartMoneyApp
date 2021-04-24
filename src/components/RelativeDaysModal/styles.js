import styled from 'styled-components/native';

import Colors from '../../components/styles/Colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.background};
`;

export const ModalPicker = styled.Modal``;

export const Option = styled.View``;

export const ModalList = styled.FlatList``;

export const Item = styled.TouchableOpacity`
  background-color: ${Colors.asphalt};
  border-radius: 15px;
  margin: 10px 20px;
  padding: 20px;
`;

export const ItemLabel = styled.Text`
  font-size: 22px;
  color: ${Colors.white};
  text-align: center;
`;
