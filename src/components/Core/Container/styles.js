import styled from 'styled-components/native';

import Colors from '../../styles/Colors';

export const Container = styled.View`
  background-color: ${Colors.asphalt};
  margin: 10px;
  border-radius: 6px;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(255, 255, 255, 0.2);
  padding: 8px;
`;

export const Title = styled.Text`
  color: ${Colors.white};
  font-size: 14px;
  margin-bottom: 8px;
`;

export const Rodape = styled.View`
  margin-top: 3px;
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleRodape = styled.Text`
  color: ${Colors.white};
  font-size: 12px;
`;

export const TouchableMore = styled.TouchableOpacity`
  flex-direction: row;
`;

export const More = styled.Text`
  color: ${Colors.white};
  font-size: 12px;
  margin-left: 8px;
`;
