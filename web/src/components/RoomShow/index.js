import React, { useContext } from 'react';

import RoomCheckInfos from '../RoomCheckInfos';
import { ConsumedContext } from '../../Context/ConsumedContext';

import { Container } from './styles';

export default function RoomShow() {
  const [consumed] = useContext(ConsumedContext);

  console.log(consumed);

  return (
    <Container>
      <h1>Room Number</h1>
      {consumed ? <RoomCheckInfos /> : <h2>Select a Room</h2>}
    </Container>
  );
}
