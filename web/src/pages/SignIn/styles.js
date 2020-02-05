import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: linear-gradient(-90deg, #7159c1, #ab59c1);
  width: 75%;
  height: 100%;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: flex-end;

  form {
    display: flex;
    flex-direction: column;

    /* width: 50%; */
    width: 50%;
    min-width: 210px;
    height: 50%;
    margin-right: 5%;

    color: #fff;

    h1 {
      margin: 30px auto;
    }

    input {
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 4px;
      height: 40px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 15px;
      text-align: center;
      transition: font-size 0.2s;

      &:hover {
        font-size: 1.05em;
      }

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    button {
      height: 40px;
      background: #3d9eff;
      color: #fff;
      font-weight: bold;
      font-size: 16px;
      border: 0;
      border-radius: 4px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#3d9eff')};
      }
    }
  }
`;
