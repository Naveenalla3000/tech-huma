import React from 'react'
import NavbarLogin from '../components/NavbarLogin'
import { Helmet } from 'react-helmet-async'
import ForgotPasswdForm from '../components/ForgotPasswdForm'

const ForgotPassword = () => {
    return (
        <>
            <Helmet>
                <title>Tech-Huma | Forgot password</title>
                <meta name='description' content='Login to Tech-Huma' />
                <meta name='keywords' content='Login, Tech-Huma' />
                <meta name='author' content='Tech-Huma' />
            </Helmet>
            <div className='relative'>
                <NavbarLogin />
                <ForgotPasswdForm/>
            </div>
        </>
    )
}

export default ForgotPassword