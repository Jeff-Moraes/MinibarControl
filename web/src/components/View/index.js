import React from 'react';

import { Container } from './styles';
import FloorsSelector from '../FloorsSelector';
import RoomShow from '../RoomShow';

export default function View() {
  return (
    <Container>
      <FloorsSelector />
      <RoomShow />
    </Container>
  );
}
