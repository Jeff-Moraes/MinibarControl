import React from 'react';

import { ConsumedProvider } from '../../Context/ConsumedContext';

import Menu from '../../components/Menu';
import View from '../../components/View';

export default function Dashboard() {
  return (
    <ConsumedProvider>
      <Menu />
      <View />
    </ConsumedProvider>
  );
}
