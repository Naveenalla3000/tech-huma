import React from 'react'
import { FaLinkedin, FaTwitter } from 'react-icons/fa'
import { PiInstagramLogoFill } from 'react-icons/pi';
import { FaPhoneAlt } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import {FaXTwitter} from 'react-icons/fa6'

const Contact = () => {
    return (
        <div className='pb-8 px-24'>
            <div className="flex justify-around gap-4 items-center w-full">
                <div className="mx-auto">
                    <div className="">
                        <div>
                            <h1 className='text-3xl font-semibold text-center pb-2'>CONTACT US</h1>
                        </div>
                        <div className="my-2">
                            <div className="flex justify-start items-center gap-x-4">
                                <FaPhoneAlt/>
                                <p>+91 9876543219</p>
                            </div>
                        </div>
                        <div className="my-2">
                            <h2 className='font-semibold text-[16px] text-[#f74a00]'>For Support</h2>
                            <div className="flex justify-start items-center gap-x-4">
                                <IoMdMail />
                                <p>support@techhuma.com</p>
                            </div>
                        </div>
                        <div className="my-2">
                            <h2 className='font-semibold text-[16px] text-[#f74a00]'>For Tech Support</h2>
                            <div className="flex justify-start items-center gap-x-4">
                                <IoMdMail />
                                <p>techsupport@techhuma.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16">
                        <h1 className='text-3xl font-semibold text-center my-4'>FOLLOW US</h1>
                        <div className="flex justify-center gap-x-4 items-center mt-4">
                            <div className="">
                                <FaLinkedin size={30} className='text-[#0a66c2] cursor-pointer' />
                            </div>
                            <div className="">
                                <PiInstagramLogoFill size={30} className='text-pink-600 cursor-pointer' />
                            </div>
                            <div className="">
                                <FaXTwitter size={30} className='text-[#000] cursor-pointer' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[27%]"></div>
                <div className="w-[40%]">
                    <h1 className='text-3xl font-semibold text-center'>Get in Touch</h1>
                    <form className='flex flex-col gap-4 mt-4 w-full'>
                        <input type="text" placeholder='Enter your name' className='border border-gray-300 p-2 outline-none rounded-md shadow-[inset_0_-2px_4px_rgba(0,0,0,0.05)]' />
                        <input type="text" placeholder='Enter your email' className='border border-gray-300 p-2 outline-none rounded-md shadow-[inset_0_-2px_4px_rgba(0,0,0,0.05)]' />
                        <input type="text" placeholder='Enter your subject' className='border border-gray-300 p-2 outline-none rounded-md shadow-[inset_0_-2px_4px_rgba(0,0,0,0.05)]' />
                        <textarea name="" id="" cols="30" rows="4" placeholder='Enter your message' className='border outline-none border-gray-300 p-2 rounded-md shadow-[inset_0_-2px_4px_rgba(0,0,0,0.05)]'></textarea>
                        <button className='bg-[#f74a00] hover:bg-[#f74a00]/90 transition-all duration-300 ease-in-out text-white py-2 px-4 rounded-md text-xl'>Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact