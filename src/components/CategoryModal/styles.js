import styled from 'styled-components/native';

import Colors from '../../components/styles/Colors';

export const ModalCategory = styled.Modal``;

export const ContainerModal = styled.View`
  flex: 1;
  background-color: ${Colors.background};
`;

export const ModalItem = styled.TouchableOpacity`
  background-color: ${Colors.asphalt};
  border-radius: 15px;
  margin: 10px 20px;
  padding: 20px;
`;

export const ModalItemText = styled.Text`
  font-size: 22px;
  color: ${Colors.white};
  text-align: center;
`;

export const ModalList = styled.FlatList``;
