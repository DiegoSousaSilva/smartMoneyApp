import styled from 'styled-components/native';

import Colors from '../../styles/Colors';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
`;

export const Description = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: ${Colors.white};
`;

export const FooterDescription = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 2px;
`;

export const FooterView = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Date = styled.Text`
  font-size: 12px;
  color: ${Colors.metal};
  margin-left: 5px;
`;

export const Local = styled.Text`
  font-size: 12px;
  color: ${Colors.metal};
  margin-left: 5px;
`;

export const Valor = styled.Text`
  padding: 2px;
  align-self: center;
  font-size: 14px;
  color: ${Colors.white};
  font-weight: bold;
`;
