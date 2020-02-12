import React, { useContext } from 'react';

import { ConsumedContext } from '../../Context/ConsumedContext';

export default function Index() {
  const [consumed, setConsumed] = useContext(ConsumedContext);

  return (
    <div>
      <h1>{consumed}</h1>
      <h1>VIEW</h1>
    </div>
  );
}
