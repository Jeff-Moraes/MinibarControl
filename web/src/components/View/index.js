import React from 'react';

import { FloorShowProvider } from '../../Context/FloorShowContext';

import { Container } from './styles';
import FloorsSelector from '../FloorsSelector';
import ShowInfos from '../ShowInfos';

export default function View() {
  return (
    <Container>
      <FloorShowProvider>
        <FloorsSelector />
        <ShowInfos />
      </FloorShowProvider>
    </Container>
  );
}
