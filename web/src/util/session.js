import { logIn } from '../services/session';

export async function sessionLogIn(name, password) {
  const response = await logIn(name, password);

  return response;
}
