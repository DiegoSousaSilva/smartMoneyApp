import styled from 'styled-components/native';

import Colors from '../../styles/Colors';

export const Container = styled.View`
  flex-direction: row;
  background-color: ${Colors.background};
  padding: 10px;
  justify-content: space-evenly;
`;

export const PrimaryButton = styled.TouchableOpacity`
  padding: 10px 20px;
  margin: 10px;
  border-radius: 30px;
  border-style: solid;
  border-width: 1px;
  border-color: ${Colors.green};
  align-items: center;
  justify-content: center;
  align-self: center;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: ${Colors.white};
  text-align: center;
`;

export const SecondaryButton = styled.TouchableOpacity`
  padding: 10px 20px;
  margin: 10px;
  border-radius: 30px;
  border-style: solid;
  border-width: 1px;
  border-color: ${Colors.green};
  align-items: center;
  justify-content: center;
`;
