import React from 'react';
import { FaRegCopyright } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useSendOtpMutation } from '../redux/services/auth/authApi';
import { useNavigate } from 'react-router-dom';

const OtpForm = () => {
    const inputRefs = Array.from({ length: 4 }, () => React.useRef(null));
    const [sendOtp] = useSendOtpMutation();
    const navigate = useNavigate();

    const [verifyNumber, setVerifyNumber] = React.useState({
        0: '',
        1: '',
        2: '',
        3: '',
    });
    const [invalidError, setInvalidError] = React.useState(false);

    const handleInputChange = (index, value) => {
        setInvalidError(false);
        const newVerifyNumber = { ...verifyNumber, [index]: value };
        setVerifyNumber(newVerifyNumber);
        if (value === '' && index > 0) {
            inputRefs[index - 1].current?.focus();
        } else if (value.length === 1 && index < 3) {
            inputRefs[index + 1].current?.focus();
        }
    };
    const handleSubmit = async () => {
        try {
            const verificationNumber = Object.values(verifyNumber).join('');
            const data = {
                otp: verificationNumber
            }
            const res = await sendOtp(data)
            if(res.data){
                toast.success(res.data.message);
                navigate('/reset_password');
            }
            else if(res.error){
                setInvalidError(true)
                toast.error(res?.error?.data?.message);
            }
        } catch (error) {

        }
    }

    return (
        <div className='lg:px-16 min-w-[320px] px-8 pt-24 bg-[#fff] h-[90vh] relative mx-auto'>
            <div className="lg:w-[35%] w-[100%] lg:mt-16 md:mt-8 md:w-[60%] mt-0 mx-auto px-0 lg:px-4 py-4">
                <div className="">
                    <h1 className='text-3xl font-semibold text-center pt-4 pb-2 text-slate-700'>Enter OTP</h1>
                    <p className='text-center text-gray-500 py-4'>Please enter the OTP that we have sent to your email.</p>
                </div>
                <div className='flex flex-col gap-5 w-full'>
                    <div className="flex w-full justify-center gap-x-8">
                        {Object.keys(verifyNumber).map((key, index) => (
                            <input
                                type='number'
                                key={key}
                                ref={inputRefs[index]}
                                className={`w-[55px] h-[55px] bg-transparent border-[1px] rounded-[8px] flex items-center text-black dark:text-white justify-center text-[18px] font-Poppins outline-none text-center ${invalidError ? 'shake border-red-500' : 'dark:border-white border-[#0000004a]'
                                    }`}
                                placeholder=''
                                maxLength={1}
                                value={verifyNumber[key]}
                                onChange={(e) => handleInputChange(index, e.target.value)}
                            />
                        ))}
                    </div>
                    <button onClick={handleSubmit} className='bg-[#f74a00] hover:bg-[#f74a00]/90 transition-all duration-300 ease-in-out w-full text-center font-semibold text-white py-2 px-4 rounded-md text-xl'>verify</button>
                </div>
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
    );
};

export default OtpForm;
