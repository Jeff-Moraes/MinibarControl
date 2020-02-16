import React, { useState, createContext } from 'react';

export const ConsumedContext = createContext();

export function ConsumedProvider(props) {
  const [consumed, setConsumed] = useState();

  return (
    <ConsumedContext.Provider value={[consumed, setConsumed]}>
      {props.children}
    </ConsumedContext.Provider>
  );
}
