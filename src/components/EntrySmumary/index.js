import React from 'react';
import {} from 'react-native';
import EntrySummaryList from './EntrySummaryList';

import EntrySummaryChart from './EntrySummaryChart';
import Container from '../Core/Container';

// import { Container } from './styles';

const EntrySmumary = ({onPressAction}) => {
  const categories = [
    {key: '1', description: 'Alimentação', amount: '100'},
    {key: '2', description: 'Combustivel', amount: '60'},
    {key: '3', description: 'Alguel', amount: '250'},
    {key: '4', description: 'Lazer', amount: '100'},
    {key: '5', description: 'Outros', amount: '150'},
  ];

  return (
    <Container
      title="Categorias"
      titleRodape="Últimos 7 dias"
      more="Ver mais..."
      onPressAction={onPressAction}>
      <EntrySummaryChart />
      <EntrySummaryList categories={categories} />
    </Container>
  );
};

export default EntrySmumary;
