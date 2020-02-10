import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { Container } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  password: Yup.string()
    .min(6, 'Minimum is 6 characters')
    .required('Password is required'),
});

function LogIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <h1>Log in</h1>
        <Input name="name" type="text" placeholder="User Name" />
        <Input name="password" type="password" placeholder="Password" />

        <button type="submit">Log in</button>
      </Form>
    </Container>
  );
}

export default LogIn;
