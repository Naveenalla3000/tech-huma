import React from 'react'
import { FaRegCopyright } from 'react-icons/fa'
import { useResetPasswordMutation } from '../redux/services/auth/authApi';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ResetPasswordForm = () => {
  const [resetPassword, { error, isSuccess }] = useResetPasswordMutation();
  const navigate = useNavigate();
  const [data, setData] = React.useState({
    newPassword: '',
    confirmNewPassword: ''
  });
  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      // console.log(data);
      resetPassword(data);
    } catch (error) {
      console.log(error);
    }
  }
  React.useEffect(() => {
    if (isSuccess) {
      toast.success('Password reset successfully');
      navigate('/login');
    }
    if (error) {
      console.log(error);
      toast.error(error.data.message);
    }
    return () => {
      setData({
        newPassword: '',
        confirmNewPassword: '',
      });
    }
  }, [isSuccess, error]);

  return (
    <div className='lg:px-16 min-w-[320px] px-8 pt-24 bg-[#fff] h-[90vh] relative mx-auto'>
      <div className="lg:w-[35%] w-[100%] lg:mt-16 md:mt-8 md:w-[60%] mt-0 mx-auto px-0 lg:px-4 py-4">
        <div className="">
          <h1 className='text-3xl font-semibold text-center pt-4 pb-2 text-slate-700'>Reset your password</h1>
          <p className='text-center text-gray-500 py-4'>Please enter new password and continue to login</p>
        </div>
        <form className='flex flex-col gap-5 w-full' onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder='Enter your new password'
            autoComplete='false'
            onChange={onChange}
            name='newPassword'
            value={data.newPassword}
            className='shadow-[inset_0_-2px_4px_rgba(0,0,0,0.05)] border border-gray-300 p-2 outline-none rounded-md bg-[#fff]'
          />
          <input
            type="password"
            placeholder='confirm new password'
            autoComplete='false'
            onChange={onChange}
            name='confirmNewPassword'
            value={data.confirmNewPassword}
            className='shadow-[inset_0_-2px_4px_rgba(0,0,0,0.05)] border border-gray-300 p-2 outline-none rounded-md bg-[#fff]'
          />
          <button type='submit' className=' bg-[#f74a00] hover:bg-[#f74a00]/90 transition-all duration-300 ease-in-out w-full text-center font-semibold text-white py-2 px-4 rounded-md text-xl'>Continue</button>
        </form>
        {/* <p className='text-right text-gray-500 py-2'>Forgot password ? <span className='text-[#f74a00] cursor-pointer'>Click here</span></p> */}
      </div>
      <div className='absolute pl-4 -bottom-8 lg:left-5 lg:text-center lg:text-base text-xs font-normal'>
        <div className="flex justify-start items-center gap-1 pr-8">
          <FaRegCopyright size={17} />
          <h3 className='hidden lg:block'>TECH TROPOLIS Hackathon |</h3>
          <h3>Tech-Huma 2024-25. All Rights Reserved</h3>
        </div>
        <div className="flex justify-center items-center text-center pr-8">
          <h3 className='lg:text-center lg:pb-2 lg:pt-4 pb-0 pt-2'>Conceived and meticulously forged by the adept artisans of Team Tech-Huma.</h3>
        </div>
      </div>
    </div>
  )
}

export default ResetPasswordForm