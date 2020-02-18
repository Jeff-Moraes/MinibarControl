import styled from 'styled-components';

export const Container = styled.div`
  padding: 50px;

  .total {
    display: flex;
    justify-content: flex-end;

    p {
      padding-right: 5px;
    }
  }
`;

export const Table = styled.table`
  width: 100%;

  padding: 50px 0;
  text-align: left;

  tr {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    background: #ddd;
    th {
      padding: 10px;
      background: #777;
      color: #fff;
    }
    td {
      padding: 10px;

      & + td {
        border-left: 1px solid #fff;
      }
    }
    & + tr {
      background: #ccc;
    }
  }
`;
