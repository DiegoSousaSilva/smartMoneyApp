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

export const Rolagem = styled.ScrollView``;

export const Option = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const OptionPicker = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  border-color: ${Colors.champagneDark};
  border-width: 1px;
  border-radius: 100px;
  padding: 5px 10px;
  margin: 5px;
  align-self: center;
`;

export const OptionLabel = styled.Text`
  color: ${Colors.champagneDark};
  text-align: center;
`;
