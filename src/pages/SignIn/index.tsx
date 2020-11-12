import React from 'react';

import { FiLogIn } from 'react-icons/fi';
import logo from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logo} alt="GoBarber Logo" />

      <form>
        <h1>Login</h1>

        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button type="submit">Enter</button>

        <a href="forgot">Forgot password</a>
      </form>

      <a href="login">
        <FiLogIn />
        Create account
      </a>
    </Content>
    <Background />
  </Container>
);

export default SignIn;
