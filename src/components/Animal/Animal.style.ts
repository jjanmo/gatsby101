import styled from 'styled-components';

export const Container = styled.div`
  width: 40rem;
  margin: auto;
`;
export const Title = styled.h3`
  text-align: center;
`;
export const Table = styled.table`
  width: 80%;
  margin: 2rem auto;

  td {
    width: 8rem;
    padding: 10px 5px;
    border: 1px solid black;
    text-align: center;
    font-weight: 600;
  }
  .label {
    color: white;
    background-color: #bdc3c7;
  }
  .value {
    color: #2c3e50;
    font-family: var(--font-heading);
  }
`;
