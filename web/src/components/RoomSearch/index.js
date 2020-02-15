import React, { useState } from 'react';

import { Container } from './styles';

export default function RoomSearch() {
  const [roomNumber, setRoomNumber] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
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
