import React from 'react';
import {View} from 'react-native';
import EntrySummaryList from './EntrySummaryList';

import EntrySummaryChart from './EntrySummaryChart';
import Container from '../Core/Container';
import useBalanceSumByCategory from '../../hooks/useBalanceSumByCategory';

// import { Container } from './styles';

const EntrySmumary = ({days = 7, onPressAction}) => {
  const [balanceSum] = useBalanceSumByCategory(days);

  return (
    <Container
      title="Categorias"
      titleRodape={`Últimos ${days} dias`}
      more="Ver mais..."
      onPressAction={onPressAction}>
      <View style={{flexDirection: 'row', paddingVertical: 10}}>
        <EntrySummaryChart data={balanceSum} />
        <EntrySummaryList data={balanceSum} />
      </View>
    </Container>
  );
};

export default EntrySmumary;
