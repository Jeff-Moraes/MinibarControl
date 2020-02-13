import React, { useState, createContext } from 'react';

export const SessionContext = createContext();

export function SessionProvider(props) {
  const [session, setSession] = useState(null);

  return (
    <SessionContext.Provider value={[session, setSession]}>
      {props.children}
    </SessionContext.Provider>
  );
}
