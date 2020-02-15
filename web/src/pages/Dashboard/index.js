import React from 'react';

import { ConsumedProvider } from '../../Context/ConsumedContext';

import Menu from '../../components/Menu';
import View from '../../components/View';

export default function Dashboard() {
  // const [consumed, setConsumed] = useContext(ConsumedContext);

  return (
    <ConsumedProvider>
      <Menu />
      <View />
    </ConsumedProvider>
  );
}
