import React from 'react';
import Colors from '../../styles/Colors';

import {Container, PrimaryButton, SecondaryButton, Title} from './styles';

const ActionFooter = ({children}) => {
  return <Container>{children}</Container>;
};

export const ActionPrimaryButton = ({title, onPress}) => {
  return (
    <PrimaryButton onPress={onPress}>
      <Title style={{color: Colors.green}}>{title}</Title>
    </PrimaryButton>
  );
};

export const ActionSecondaryButton = ({title, onPress}) => {
  return (
    <SecondaryButton style={{borderColor: Colors.red}} onPress={onPress}>
      <Title style={{color: Colors.red}}>{title}</Title>
    </SecondaryButton>
  );
};

export default ActionFooter;
