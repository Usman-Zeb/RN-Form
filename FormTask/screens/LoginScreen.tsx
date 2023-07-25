import React from 'react';
import Form from '../components/Form';

interface propsType {
  isLogin: boolean;
}

const LoginScreen: React.FC<propsType> = () => {
  return (
    <>
      <Form isLogin />
    </>
  );
};

export default LoginScreen;
