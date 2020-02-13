import { logIn } from '../services/session';
import history from '../services/history';

export async function sessionLogIn(name, password) {
  const response = await logIn(name, password);

  if (!response) {
    console.tron.log('User not found');
    return;
  }

  history.push('/dashboard');

  return response;
}
