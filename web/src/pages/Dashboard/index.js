import React, { useContext, useEffect } from 'react';

import { ConsumedProvider } from '../../Context/ConsumedContext';
import { SessionContext } from '../../Context/SessionContext';

import Menu from '../../components/Menu';
import View from '../../components/View';

import { Container } from './styles';

export default function Dashboard() {
  const [session, setSession] = useContext(SessionContext);

  useEffect(() => {
    return () => setSession(null);
  }, [session, setSession]);

  return (
    <ConsumedProvider>
      <Container>
        <Menu />
        <View />
      </Container>
    </ConsumedProvider>
  );
}
