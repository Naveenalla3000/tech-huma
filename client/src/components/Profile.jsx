import React from 'react';
import { FaRegCopyright } from 'react-icons/fa';
import { MdAccountCircle } from 'react-icons/md';
import { useSelector } from 'react-redux';

const Profile = () => {
    const { user } = useSelector((state) => state.auth);
    return (
        <div className='px-0 mx-auto'>
            <div className=" mx-auto px-4 py-4">
                <div className="ml-52">
                    <h1 className='text-3xl font-semibold pb-2 text-slate-700'>My Account</h1>
                    <p className='text-gray-500'>Profile view</p>
                </div>
                <div className='flex justify-center items-center mt-8 gap-x-16'>
                    <div className="">
                        <MdAccountCircle size={100} />
                        <div className="mt-4">
                            <h2 className='text-[#f74a00] text-lg font-semibold'>Full Name</h2>
                            <div className="w-fit">
                                <p className='text-gray-500 pt-2 text-xl font-medium'>{user.name}</p>
                                <hr className='bg-slate-400 h-[2px]' />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col mx-auto justify-center gap-y-12">
                        <div className="">
                            <h2 className='text-[#f74a00] text-lg font-semibold'>Email Id</h2>
                            <div className="w-max">
                                <p className='text-gray-500 pt-2 text-xl font-medium'>{user.email}</p>
                                <hr className='max-h-min bg-slate-400 h-[2px]' />
                            </div>
                        </div>
                        <div className="">
                            <h2 className='text-[#f74a00] text-lg font-semibold'>Designation</h2>
                            <div className="w-max">
                                <p className='text-gray-500 pt-2 text-xl font-medium'>{user.role}</p>
                                <hr className='max-h-min bg-slate-400 h-[2px]' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute bottom-0 text-center font-normal'>
                <div className="flex justify-start items-center gap-1">
                    <FaRegCopyright size={17} />
                    <h3>TECH TROPOLIS Hackton | Tech-Huma 2024-25. All Rights Reserved</h3>
                </div>
                <div className="flex justify-center items-center">
                    <h3 className='text-center pb-2 pt-4'>Conceived and meticulously forged by the adept artisans of Team Tech-Huma.</h3>
                </div>
            </div>
        </div>
    );
};

export default Profile;
