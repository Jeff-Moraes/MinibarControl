import React, { useState, createContext } from 'react';

export const ShowInfoContext = createContext();

export function ShowInfoProvider(props) {
  const [showInfo, setShowInfo] = useState('');

  return (
    <ShowInfoContext.Provider value={[showInfo, setShowInfo]}>
      {props.children}
    </ShowInfoContext.Provider>
  );
}
