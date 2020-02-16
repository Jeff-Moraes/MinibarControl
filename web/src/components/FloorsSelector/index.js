import React from 'react';

import { FloorsNumbers } from './styles';

export default function FloorsSelector() {
  const floors = [1, 2, 3, 4, 5, 6, 7];
  return (
    <FloorsNumbers>
      {floors.map(floor => (
        <button key={floor} type="button">
          {floor}
        </button>
      ))}
    </FloorsNumbers>
  );
}
