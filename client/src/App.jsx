import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ForgotPassword from './pages/ForgotPassword';
import OtpPage from './pages/OtpPage';
import ResetPassword from './pages/ResetPassword';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  // const { user } = useSelector((state) => state.auth);
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/forgot_password' element={<ForgotPassword />} />
        <Route path='/enter_otp' element={<OtpPage />} />
        <Route path='/reset_password' element={<ResetPassword />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
