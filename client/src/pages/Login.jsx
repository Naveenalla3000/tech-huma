import React from 'react'

import NavbarLogin from '../components/NavbarLogin'
import { Helmet } from 'react-helmet-async'
import LoginForm from '../components/LoginForm'

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Tech-Huma | Login</title>
        <meta name='description' content='Login to Tech-Huma' />
        <meta name='keywords' content='Login, Tech-Huma' />
        <meta name='author' content='Tech-Huma' />
      </Helmet>
      <div className='relative'>
        <NavbarLogin />
        <LoginForm />
      </div>
    </>
  )
}

export default Login