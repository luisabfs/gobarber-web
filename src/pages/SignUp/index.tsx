import React from 'react';
import { Form } from '@unform/web';

import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';

import { Input, Button } from '../../components';

import { Container, Content, Background } from './styles';

import logo from '../../assets/logo.svg';

const SignUp: React.FC = () => {
  function handleSubmit(data: {
    name: string;
    email: string;
    password: string;
  }): void {
    console.log(data);
  }

  return (
    <Container>
      <Background />
      <Content>
        <img src={logo} alt="GoBarber Logo" />

        <Form onSubmit={handleSubmit}>
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
        </Form>

        <a href="login">
          <FiArrowLeft />
          Back to logon
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
