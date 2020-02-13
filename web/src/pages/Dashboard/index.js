import React, { useContext, useMemo } from 'react';

import { ConsumedProvider } from '../../Context/ConsumedContext';
import { SessionContext } from '../../Context/SessionContext';

import Menu from '../../components/Menu';
import View from '../../components/View';

export default function Dashboard() {
  const [session, setSession] = useContext(SessionContext);

  const value = useMemo(() => ({ session, setSession }), [session, setSession]);

  return (
    <ConsumedProvider value={value}>
      <Menu />
      <View />
    </ConsumedProvider>
  );
}
