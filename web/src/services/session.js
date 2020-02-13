import api from './api';

export const logIn = (name, password) => {
  return api
    .post('/sessions', {
      name,
      password,
    })
    .then(response => {
      // console.log(response);
      return response.data;
    })
    .catch(err => {
      // console.log(err);
      return err.response.data;
    });
};

export const logOut = () => {
  api.delete('/sessions');
};
