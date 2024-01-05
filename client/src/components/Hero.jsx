import React, { useEffect, useState } from 'react';
import { LiaAngleLeftSolid, LiaAngleRightSolid } from 'react-icons/lia';

const Hero = () => {
    const [activeSlide, setActiveSlide] = useState(1);
    const slideCount = 5;
    const increasing = React.useRef(true);

    useEffect(() => {
        const interval = setInterval(() => {
            if (increasing.current) {
                setActiveSlide((prev) => {
                    if (prev < slideCount) {
                        return prev + 1;
                    } else {
                        increasing.current = false;
                        return prev - 1;
                    }
                });
            } else {
                setActiveSlide((prev) => {
                    if (prev > 1) {
                        return prev - 1;
                    } else {
                        increasing.current = true;
                        return prev + 1;
                    }
                });
            }
        }, 5000);
        return () => clearInterval(interval);
    }, []);


    return (
        <div className="w-screen relative">
            <div className="overflow-hidden relative">
                <div
                    className="whitespace-nowrap transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${(activeSlide - 1) * 100}%)` }}
                >
                    <div className="inline-block">
                        <img src="images/1.jpg" alt="" className="w-screen !h-[100vh]" />
                    </div>

                    <div className="inline-block w-full">
                        <img src="images/2.jpg" alt="" className="w-screen !h-[100vh]" />
                    </div>

                    <div className="inline-block">
                        <img src="images/1.jpg" alt="" className="w-screen !h-[100vh]" />
                    </div>

                    <div className="inline-block w-full">
                        <img src="images/2.jpg" alt="" className="w-screen !h-[100vh]" />
                    </div>

                    <div className="inline-block">
                        <img src="images/1.jpg" alt="" className="w-screen !h-[100vh]" />
                    </div>

                </div>

                <div className="absolute inset-0 flex items-center justify-between px-14">
                    {
                    ['left', 'right'].map((direction, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveSlide((prev) => (direction === 'left' ? (prev > 1 ? prev - 1 : slideCount) : (prev < slideCount ? prev + 1 : 1)))}
                            className="w-10 h-10 flex items-center justify-center rounded-full border-[.5px] border-white"
                        >
                            {direction === 'left' ? <LiaAngleLeftSolid size={30} className="text-white" /> : <LiaAngleRightSolid size={30} className="text-white" />}
                        </button>
                    ))}
                </div>

                <div className="absolute left-0 bottom-0 right-0 mb-14 flex justify-center space-x-2 p-4">
                    {Array.from({ length: slideCount }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveSlide(index + 1)}
                            className={`h-2 rounded-full transition-all duration-500 ${activeSlide === index + 1 ? 'bg-[#f75700] w-4' : 'bg-white w-2'
                                }`}
                        ></button>
                    ))}
                </div>
            </div>
            {/* <img src='' alt='robo' className='w-[200px] h-[200px] absolute bottom-32 left-20'/> */}
            <img src='images/curves/upperCurve.webp' alt='' className=' absolute bottom-0 transform' />
        </div>
    );
};

export default Hero;
