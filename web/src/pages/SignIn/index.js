import React from 'react';

import { Container } from './styles';

export default function SignIn() {
  return (
    <Container>
      <form>
        <h1>Log in</h1>
        <input type="name" placeholder="User Name" />
        <input type="password" placeholder="Password" />

        <button type="submit">Log in</button>
      </form>
    </Container>
  );
}
