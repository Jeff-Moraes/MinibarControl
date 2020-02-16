import styled from 'styled-components';
// import { darken } from 'polished';

export const FloorsNumbers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  min-width: 40px;

  button {
    color: #fff;
    font-weight: bold;
    height: 100%;
    width: 100%;
    background: linear-gradient(-90deg, #7159c1, #ab59c1);
    border: none;

    & + button {
      border-top: 1px solid #fff;
    }
  }
`;
