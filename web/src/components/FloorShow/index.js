import React, { useContext } from 'react';

import { FloorShowContext } from '../../Context/FloorShowContext';

export default function FloorShow() {
  const [floorShow] = useContext(FloorShowContext);

  return (
    <div>
      <h1>FloorRooms</h1>
      {floorShow[0] &&
        floorShow.map(floor => <p key={floor.id}>{floor.number}</p>)}
    </div>
  );
}
