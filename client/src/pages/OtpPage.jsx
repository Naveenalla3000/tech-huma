import React from 'react'
import { Helmet } from 'react-helmet-async'
import OtpForm from '../components/OtpForm'
import NavbarLogin from '../components/NavbarLogin'
import { useNavigate } from 'react-router-dom'

const OtpPage = () => {
  const navigate = useNavigate();
  const [forgotPasswordToken, setForgotPasswordToken] = React.useState(null);

  React.useEffect(() => {
    const tokenFromCookie = document.cookie
      .split('; ')
      .find((cookie) => cookie.startsWith('forgot_password_token='));
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
        <title>Tech-Huma | otp verification</title>
        <meta name='description' content='Login to Tech-Huma' />
        <meta name='keywords' content='Login, Tech-Huma' />
        <meta name='author' content='Tech-Huma' />
      </Helmet>
      <div className='relative'>
        <NavbarLogin/>
        <OtpForm />
      </div>
    </>
  )
}

export default OtpPage