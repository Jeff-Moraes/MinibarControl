import React, { useContext } from 'react';

import { ConsumedContext } from '../../Context/ConsumedContext';

import { Container } from './styles';

export default function RoomShow() {
  const [consumed, setConsumed] = useContext(ConsumedContext);

  console.log(consumed);

  return (
    <Container>
      <h1>Room Number</h1>
      {consumed && <h2>{consumed.Room.number}</h2>}
    </Container>
  );
}
