import React, { useCallback, useRef } from 'react';
import * as Yup from 'yup';

import { Link, useHistory } from 'react-router-dom';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';

import { Input, Button } from '../../components';

import { Container, Content, AnimatedContainer, Background } from './styles';

import { useToast } from '../../hooks/toast';

import getValidationErrors from '../../utils/getValidationErrors';

import api from '../../services/api';

import logo from '../../assets/logo.svg';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const history = useHistory();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Name is required.'),
          email: Yup.string()
            .email('Insert a valid email.')
            .required('Email is required.'),
          password: Yup.string().min(6, 'Minimum of 6 digits.'),
        });

        await schema.validate(data, { abortEarly: false });

        await api.post('/users', data);

        history.push('/');

        addToast({
          type: 'success',
          title: 'Signed up!',
          description: 'You can log in now.',
        });
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Registration error.',
          description: 'Error signing up. Please try again.',
        });
      }
    },
    [addToast, history],
  );

  return (
    <Container>
      <Background />

      <Content>
        <AnimatedContainer>
          <img src={logo} alt="GoBarber Logo" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Register</h1>

            <Input icon={FiUser} name="name" type="text" placeholder="Name" />
            <Input icon={FiMail} name="email" type="text" placeholder="Email" />
            <Input
              icon={FiLock}
              name="password"
              type="password"
              placeholder="Password"
            />

            <Button type="submit">Register</Button>
          </Form>

          <Link to="/">
            <FiArrowLeft />
            Back to logon
          </Link>
        </AnimatedContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
