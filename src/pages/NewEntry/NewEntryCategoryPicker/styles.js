import styled from 'styled-components/native';

import Colors from '../../../components/styles/Colors';

export const Container = styled.View``;

export const CategoryPicker = styled.TouchableOpacity`
  background-color: ${Colors.asphalt};
  border-radius: 15px;
  margin: 10px 20px;
  padding: 20px;
`;

export const Label = styled.Text`
  font-size: 28px;
  color: ${Colors.white};
  text-align: center;
`;
