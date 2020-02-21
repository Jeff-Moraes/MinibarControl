import React, { useContext } from 'react';
import api from '../../services/api';

import { ShowInfoContext } from '../../Context/ShowInfoContext';
import { FloorShowContext } from '../../Context/FloorShowContext';

import { FloorsNumbers } from './styles';

export default function FloorsSelector() {
  const [showInfo, setShowInfo] = useContext(ShowInfoContext);
  const [floorShow, setFloorShow] = useContext(FloorShowContext);

  const floors = [1, 2, 3, 4, 5, 6, 7];

  function handleClick(event) {
    api
      .get(`rooms/${event.target.value}`)
      .then(response => {
        setFloorShow(response.data);
        setShowInfo('FloorShow');
      })
      .catch(err => err.response.data);
  }

  return (
    <FloorsNumbers>
      {floors.map(floor => (
        <button key={floor} type="button" onClick={handleClick} value={floor}>
          {floor}
        </button>
      ))}
    </FloorsNumbers>
  );
}
