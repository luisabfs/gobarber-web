import styled, { css } from 'styled-components';

interface ToastProps {
  type?: 'info' | 'success' | 'error';
  hasDescription: boolean;
}

const toastTypeVariation = {
  info: css`
    background: #3498db;
    color: #fff;
  `,
  success: css`
    background: #07bc0c;
    color: #fff;
  `,
  error: css`
    background: #e74c3c;
    color: #fff;
  `,
};

export const Container = styled.div<ToastProps>`
  display: flex;
  width: 360px;

  position: relative;
  padding: 16px 30px 16px 16px;

  border-radius: 7px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  background: #3498db;
  color: #fff;

  & + div {
    margin-top: 8px;
  }

  ${({ type }) => toastTypeVariation[type || 'info']}

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 15px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }

  ${({ hasDescription }) =>
    !hasDescription &&
    css`
      align-items: center;

      button {
        top: inherit;
      }
    `}
`;
