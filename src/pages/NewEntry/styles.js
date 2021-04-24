import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

import Colors from '../../components/styles/Colors';

export const Container = styled.View`
  flex: 1;
  padding-top: 50px;
  background-color: ${Colors.background};
`;

export const Linear = styled(LinearGradient).attrs({
  colors: [Colors.blue, Colors.violet],
})`
  padding: 10px 20px;
  border-radius: 20px;
  width: 200px;
  align-self: center;
`;

export const FormContainer = styled.View`
  flex: 1;
  padding-top: 10px;
`;

export const FormActionContainer = styled.View`
  flex-direction: row;
  justify-content: center;
`;
