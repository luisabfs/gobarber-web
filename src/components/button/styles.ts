import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  width: 100%;
  height: 45px;
  background: #ff9000;

  padding: 0 16px;
  margin-top: 16px;

  border: 0;
  border-radius: 10px;
  color: #312e38;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;
