import React from 'react'
import { CardWrapper } from './CardWrapper';

const LoginForm = () => {
  return (
    <CardWrapper 
        headerLabel='Welcome Back'
        backButtonLabel="Don't have an account"
        backButtonHref='/auth/register'
        showSocial
    >
        <div>Login Form!</div>
    </CardWrapper>
  )
}

export default LoginForm;