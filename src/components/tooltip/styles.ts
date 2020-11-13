import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    background: #ff9000;
    padding: 8px;
    width: 160px;
    border-radius: 4px;

    color: #312e38;
    font-size: 14px;
    font-weight: 500;

    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: calc(100% + 12px);

    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s;

    &::before {
      position: absolute;
      content: '';

      border-style: solid;
      border-width: 6px 6px 0 6px;
      border-color: #ff9000 transparent;

      top: 100%;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
