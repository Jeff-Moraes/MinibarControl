import React, { useContext, useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import api from '../../services/api';
import { SessionContext } from '../../Context/SessionContext';

import { Container } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  password: Yup.string()
    .min(6, 'Minimum is 6 characters')
    .required('Password is required'),
});

function LogIn() {
  const [session, setSession] = useContext(SessionContext);
  const [error, setError] = useState(false);
  async function handleSubmit({ name, password }) {
    api
      .post('/sessions', {
        name,
        password,
      })
      .then(response => {
        setSession(response.data);
        localStorage.setItem('userSession', JSON.stringify(response.data));
        return response.data;
      })
      .catch(err => {
        setError(true);
        return err.response.data;
      });
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <h1>Log in</h1>
        <Input name="name" type="text" placeholder="User Name" />
        <Input name="password" type="password" placeholder="Password" />

        {error && (
          <span>Please check your username and password and try again.</span>
        )}
        <button type="submit">Log in</button>
      </Form>
    </Container>
  );
}

export default LogIn;
