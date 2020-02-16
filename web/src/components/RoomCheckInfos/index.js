import React, { useContext } from 'react';

import { ConsumedContext } from '../../Context/ConsumedContext';

export default function RoomCheckInfos() {
  const [consumed] = useContext(ConsumedContext);

  return (
    <>
      <h1>{consumed[0].Room.number}</h1>
      <table>
        <thead>
          <tr>
            <th>Status</th>
            <th>Consumed Items</th>
            <th>Notes</th>
            <th>Checker</th>
          </tr>
        </thead>
        <tbody>
          {consumed.map(consum => (
            <tr>
              <td>{consum.status}</td>
              <td>
                <ul>
                  {consum.consumed_items.map(item => (
                    <li>item</li>
                  ))}
                </ul>
              </td>
              <td>{consum.note}</td>
              <td>{consum.User.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
