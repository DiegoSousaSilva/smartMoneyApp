import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../styles/Colors';
import {
  Container,
  Title,
  Rodape,
  TitleRodape,
  TouchableMore,
  More,
} from './styles';

const ContainerIndex = ({
  title,
  titleRodape,
  more,
  onPressAction,
  children,
}) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      {children}

      {(titleRodape || More) && (
        <Rodape>
          {titleRodape && <TitleRodape>{titleRodape}</TitleRodape>}
          {more && (
            <TouchableMore onPress={onPressAction}>
              <Icon name="insert-chart" size={20} color={Colors.white} />
              <More>{more}</More>
            </TouchableMore>
          )}
        </Rodape>
      )}
    </Container>
  );
};

export default ContainerIndex;
