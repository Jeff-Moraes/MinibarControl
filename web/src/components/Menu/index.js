import React, { useContext } from 'react';
import { Container } from './styles';

import { ConsumedContext } from '../../Context/ConsumedContext';
import hotelLogo from '../../assets/hotel-logo.png';

import RoomCheckSearch from '../RoomCheckSearch';

export default function Menu() {
  const [consumed, setConsumed] = useContext(ConsumedContext);

  return (
    <Container>
      <img src={hotelLogo} alt="Hotel Logo" />
      <RoomCheckSearch />
    </Container>
  );
}
