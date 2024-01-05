import React from 'react';
import NavbarLogin from '../components/NavbarLogin';
import { Helmet } from 'react-helmet-async';
import ResetPasswordForm from '../components/ResetPasswordForm';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const navigate = useNavigate();
  const [forgotPasswordToken, setForgotPasswordToken] = React.useState(null);

  React.useEffect(() => {
    const tokenFromCookie = document.cookie
      .split('; ')
      .find((cookie) => cookie.startsWith('reset_password_token='));
    if (!tokenFromCookie) {
      navigate('/forgot_password');
    } else {
      const [, token] = tokenFromCookie.split('=');
      setForgotPasswordToken(token);
    }
  }, []);
  
  return (
    <>
      <Helmet>
        <title>Tech-Huma | Reset password</title>
        <meta name='description' content='Reset password' />
        <meta name='keywords' content='Login, Tech-Huma' />
        <meta name='author' content='Tech-Huma' />
      </Helmet>
      <div className='relative'>
        <NavbarLogin />
        <ResetPasswordForm />
      </div>
    </>
  );
};

export default ResetPassword;
