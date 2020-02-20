import React, { useContext } from 'react';
import { format } from 'date-fns';

import { Container, Table } from './styles';

import { ConsumedContext } from '../../Context/ConsumedContext';

export default function RoomCheckInfos() {
  const [consumed] = useContext(ConsumedContext);

  return (
    <Container>
      {consumed[0] ? (
        <>
          <span>Room Number</span>
          <h1>{consumed[0].Room.number}</h1>
          <Table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Status</th>
                <th>Consumed</th>
                <th>Notes</th>
                <th>Checker</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {consumed.map(consum => (
                <tr key={consum.id}>
                  <td>{format(new Date(consum.createdAt), 'dd/MM/yyyy')}</td>
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
                  <td>value</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="total">
            <p>Total</p>
            <h2>TOTAL VALUE</h2>
          </div>
        </>
      ) : (
        <h2>This Room has no information to show</h2>
      )}
    </Container>
  );
}
