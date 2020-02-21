import React, { useState, createContext } from 'react';

export const FloorShowContext = createContext();

export function FloorShowProvider(props) {
  const [floorShow, setFloorShow] = useState('');

  return (
    <FloorShowContext.Provider value={[floorShow, setFloorShow]}>
      {props.children}
    </FloorShowContext.Provider>
  );
}
