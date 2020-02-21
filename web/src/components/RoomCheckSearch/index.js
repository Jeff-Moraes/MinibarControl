import React, { useState, useContext } from 'react';
import api from '../../services/api';

import { ConsumedContext } from '../../Context/ConsumedContext';
import { ShowInfoContext } from '../../Context/ShowInfoContext';
import { Container } from './styles';

export default function RoomCheckSearch() {
  const [roomNumber, setRoomNumber] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [consumed, setConsumed] = useContext(ConsumedContext);
  const [showInfo, setShowInfo] = useContext(ShowInfoContext);

  function handleSubmit(event) {
    event.preventDefault();
    if (!roomNumber) {
      setShowInfo('');
      return;
    }
    api
      .get(`/checks/${roomNumber}`, {
        params: { startDate, endDate },
      })
      .then(response => {
        if (response.data.length > 0) {
          setConsumed(response.data);
          setShowInfo('RoomCheckInfos');
        } else {
          setConsumed([]);
        }
      })
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
