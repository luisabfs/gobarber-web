import React, { useCallback } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';

import { Input, Button } from '../../components';

import { Container, Content, Background } from './styles';

import logo from '../../assets/logo.svg';

const SignUp: React.FC = () => {
  const handleSubmit = useCallback(async data => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Name is required.'),
        email: Yup.string()
          .email('Insert a valid email.')
          .required('Email is required.'),
        password: Yup.string().min(6, 'Minimum of 6 digits.'),
      });

      await schema.validate(data, { abortEarly: false });
    } catch (error) {
      console.log(error);
    }
  }, []);

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
