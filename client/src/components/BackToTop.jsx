import React, { useState, useEffect } from 'react';

const BackToTop = () => {
    const [backToTop, setBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setBackToTop(true);
            } else {
                setBackToTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollUp = () => {
        const scrollStep = -window.scrollY / (500 / 15);
        const scrollInterval = setInterval(() => {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval);
            }
        }, 15);
    };

    return (
        <div className={`transform ${backToTop ? 'translate-y-0' : 'translate-y-60'} transition-transform ease-in-out duration-1000 fixed bottom-[10px] right-[20px]`}>
            <button
                className='w-6 h-6 md:w-14 md:h-14 bg-primary-500 hover:bg-primary-600 text-black 
                      border-2 border-black rounded-full focus:outline-none'
                onClick={scrollUp}
            >
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    className='w-6 h-6 mx-auto my-auto'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M5 10l7-7m0 0l7 7m-7-7v18'
                    />
                </svg>
            </button>
        </div>
    );
};

export default BackToTop;