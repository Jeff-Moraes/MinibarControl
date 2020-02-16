import React, { useState, useContext } from 'react';
import api from '../../services/api';

import { ConsumedContext } from '../../Context/ConsumedContext';
import { Container } from './styles';

export default function RoomSearch() {
  const [roomNumber, setRoomNumber] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [consumed, setConsumed] = useContext(ConsumedContext);

  function handleSubmit(event) {
    event.preventDefault();
    api
      .get(`/checks/${roomNumber}`)
      .then(response => setConsumed(response.data))
      .catch(err => err.response.data);
  }

  return (
    <Container>
      <h1>Select Room</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="roomNumber"
          value={roomNumber}
          placeholder="Room Number"
          onChange={event => setRoomNumber(event.target.value)}
        />
        <input
          type="date"
          name="startDate"
          value={startDate}
          onChange={event => setStartDate(event.target.value)}
        />
        <input
          type="date"
          name="endDate"
          value={endDate}
          onChange={event => setEndDate(event.target.value)}
        />
        <button type="submit">SHOW</button>
      </form>
    </Container>
  );
}
