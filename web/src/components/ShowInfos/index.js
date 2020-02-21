import React, { useContext } from 'react';

import RoomCheckInfos from '../RoomCheckInfos';
import FloorShow from '../FloorShow';
import { ShowInfoContext } from '../../Context/ShowInfoContext';

import { Container } from './styles';

export default function ShowInfos() {
  const [showInfo] = useContext(ShowInfoContext);

  return (
    <Container>
      {showInfo === '' && <h2>Select Room</h2>}
      {showInfo === 'RoomCheckInfos' && <RoomCheckInfos />}
      {showInfo === 'FloorShow' && <FloorShow />}
    </Container>
  );
}
