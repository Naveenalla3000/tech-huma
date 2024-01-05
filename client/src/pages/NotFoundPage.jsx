import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <>
    <Helmet>
        <title>Tech-Huma | Not found</title>
        <meta name='description' content='Login to Tech-Huma' />
        <meta name='keywords' content='Login, Tech-Huma' />
        <meta name='author' content='Tech-Huma' />
      </Helmet>
      <div className="flex h-screen flex-col justify-center items-center">
        <div className="">
          <h1 className='text-8xl text-slate-700'>404</h1>
        </div>
        <img src='/images/notFoundGif.gif' alt='not found' className='h-[45%]' />
        <div className="">
          <h1 className='text-center font-semibold text-2xl my-2'>Look like you're lost</h1>
          <h3 className='text-center text-xl my-2'>The page you are looking for not avaible!</h3>
          <button className='px-4 py-2 mx-auto my-2 w-full bg-[#f85c19] rounded-md text-white text-xl'>
            <Link to={'/'}>Bact to home</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
