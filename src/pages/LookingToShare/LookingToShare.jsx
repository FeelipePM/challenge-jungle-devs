import React, { useState, useCallback } from 'react';
import { Form } from '@unform/web';

import * as yup from 'yup';

import api from '../../services/api';

import Input from '../../components/Input/Input';
import Toast from '../../components/ToastContainer/Toast/Toast';
import Button from '../../components/Button/Button';
import './LookingToShare.css';

const LookingToShare = () => {
  const [message, setMessage] = useState();
  const [currentClass, setCurrentClass] = useState();

  const hideToast = () => {
    setTimeout(() => {
      setMessage(null);
      setCurrentClass(null);
    }, 5000);
  };

  const handleSubmit = useCallback(async inputValue => {
    try {
      const { name, email } = inputValue;

      const schema = yup.object().shape({
        email: yup
          .string()
          .email('write a valid email')
          .required('email is required'),
        name: yup.string().required('name is required'),
      });

      await schema.validate({ name, email }, { abortEarly: true });
      await api.post('challenge-newsletter/', {
        name,
        email,
      });

      setMessage('registered successfully');
      setCurrentClass('success');
      hideToast();
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        setMessage(error.message);
        setCurrentClass('error');
        hideToast();
      }
    }
  }, []);

  return (
    <section className="lookingToShare">
      <div className="messageArea">
        <h3>Are you a parent without a nanny and looking to share?</h3>
        <p>
          Leave us your name and email and we’ll update you as soon as a share
          becomes available in your area!
        </p>
      </div>
      <div className="inputShare">
        <Form onSubmit={handleSubmit}>
          <Toast className={currentClass} description={message} />
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            required
          />
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            required
          />
          <Button type="submit" className="sendButton">
            Send
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default LookingToShare;
