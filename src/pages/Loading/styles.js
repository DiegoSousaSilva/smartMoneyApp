import styled from 'styled-components/native';
import Colors from '../../components/styles/Colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.background};
  padding-top: 30px;
  align-items: center;
  justify-content: center;
`;

export const TextLoading = styled.Text`
  color: ${Colors.white};
`;
