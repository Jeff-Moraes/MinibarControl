import React, { useContext } from 'react';

import { ConsumedContext } from '../../Context/ConsumedContext';

import { Container } from './styles';

export default function Index() {
  const [consumed, setConsumed] = useContext(ConsumedContext);

  return (
    <Container>
      <h1>{consumed}</h1>
      <h1>VIEW</h1>
    </Container>
  );
}
