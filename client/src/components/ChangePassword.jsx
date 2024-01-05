import React, { useEffect } from 'react'
import { FaRegCopyright} from 'react-icons/fa'
import { useChangePasswordMutation } from '../redux/services/user/userApi';
import {toast} from 'react-toastify'

const ChangePassword = () => {
  const [changePassword,{error,isSuccess}] = useChangePasswordMutation();
  const [data,setData] = React.useState({
    newPassword:'',
    confirmNewPassword:'',
  });
  const onChange = (e) => {
    setData({...data,[e.target.name]:e.target.value})
  }
  const onSubmit = async(e) => {
    e.preventDefault();
    try {
      // console.log(data)
      await changePassword(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
    if(error){
      toast.error(error?.data?.message)
    }
    if(isSuccess){
      toast.success("Password updated");
    }
    return () => {
      setData({
        newPassword:'',
        confirmNewPassword:'',
      })
    } 
  },[error,isSuccess])
  return (
    <div className='px-0 mx-auto'>
      <div className="w-[70%] mt-16 px-4 py-4">
        <div className="">
          <h1 className='text-3xl font-semibold text-center pt-4 pb-2 text-slate-700'>Change your password</h1>
          <p className='text-center text-gray-500 py-4'>Please enter new password to change your password</p>
        </div>
        <form className='flex flex-col gap-5 w-full' onSubmit={onSubmit}>
          <input 
            type="password" 
            name='newPassword'
            value={data.newPassword}
            placeholder='Enter your new password' 
            autoComplete='false'
            className='shadow-[inset_0_-2px_4px_rgba(0,0,0,0.05)] border border-gray-300 p-2 outline-none rounded-md bg-[#fff]'
            onChange={onChange}
          />
          <input 
            type="password"
            name='confirmNewPassword'
            value={data.confirmNewPassword}
            autoComplete='false'
            placeholder='confirm new password' 
            className='shadow-[inset_0_-2px_4px_rgba(0,0,0,0.05)] border border-gray-300 p-2 outline-none rounded-md bg-[#fff]'
            onChange={onChange}
          />
          <button 
            type='submit'
            className=' bg-[#f74a00] hover:bg-[#f74a00]/90 transition-all duration-300 ease-in-out w-full text-center font-semibold text-white py-2 px-4 rounded-md text-xl'>Change password</button>
        </form>
        {/* <p className='text-right text-gray-500 py-2'>Forgot password ? <span className='text-[#f74a00] cursor-pointer'>Click here</span></p> */}
      </div>
      <div className='absolute bottom-0 text-center font-normal'>
      <div className="flex justify-start items-center gap-1">
            <FaRegCopyright size={17}/>
            <h3>TECH TROPOLIS Hackton | Tech-Huma 2024-25. All Rights Reserved</h3>
        </div>
        <div className="flex justify-center items-center">
            <h3 className='text-center pb-2 pt-4'>Conceived and meticulously forged by the adept artisans of Team Tech-Huma.</h3>
        </div>
      </div>
    </div>
  )
}

export default ChangePassword