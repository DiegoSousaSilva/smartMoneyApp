import React, {useEffect} from 'react';
import * as S from './styles';
import {ActivityIndicator} from 'react-native';
import Colors from '../../components/styles/Colors';
import {isInitialized} from '../../services/Welcome';

const Loading = ({navigation}) => {
  useEffect(() => {
    async function maheRedirect() {
      (await isInitialized())
        ? navigation.navigate('Home')
        : navigation.navigate('Welcome');
    }
    maheRedirect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.Container>
      <ActivityIndicator color={Colors.violet} size={60} />
    </S.Container>
  );
};

export default Loading;
