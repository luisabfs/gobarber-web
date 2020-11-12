import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  padding: 16px;
  background: #232129;

  border: 2px solid #232129;
  border-radius: 10px;
  color: #666360;

  input {
    flex: 1;
    border: 0;
    background: transparent;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }

  & + div {
    margin-top: 10px;
  }
`;
