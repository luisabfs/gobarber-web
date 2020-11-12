import React from 'react';

import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import logo from '../../assets/logo.svg';

import { Input, Button } from '../../components';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img src={logo} alt="GoBarber Logo" />

      <form>
        <h1>Register</h1>

        <Input icon={FiUser} name="name" type="text" placeholder="Name" />
        <Input icon={FiMail} name="email" type="email" placeholder="Email" />
        <Input
          icon={FiLock}
          name="password"
          type="password"
          placeholder="Password"
        />

        <Button type="submit">Register</Button>
      </form>

      <a href="login">
        <FiArrowLeft />
        Back to logon
      </a>
    </Content>
  </Container>
);

export default SignUp;
