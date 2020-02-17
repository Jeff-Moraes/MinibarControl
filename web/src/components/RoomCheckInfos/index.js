import React, { useContext } from 'react';
import { format } from 'date-fns';

import { Container, Table } from './styles';

import { ConsumedContext } from '../../Context/ConsumedContext';

export default function RoomCheckInfos() {
  const [consumed] = useContext(ConsumedContext);

  return (
    <Container>
      <span>Room Number</span>
      <h1>{consumed[0].Room.number}</h1>
      <Table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Status</th>
            <th>Consumed Items</th>
            <th>Notes</th>
            <th>Checker</th>
          </tr>
        </thead>
        <tbody>
          {consumed.map(consum => (
            <tr key={consum.id}>
              <td>{format(new Date(consum.updatedAt), 'dd/MM/yyyy')}</td>
              <td>{consum.status}</td>
              <td>
                <ul>
                  {consum.consumed_items.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </td>
              <td>{consum.note}</td>
              <td>{consum.User.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
