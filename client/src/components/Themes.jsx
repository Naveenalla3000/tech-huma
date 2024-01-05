import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BsFillHouseGearFill, BsFillCloudFill } from 'react-icons/bs';
import { GiSettingsKnobs, GiBreakingChain, GiMechanicalArm } from 'react-icons/gi';
import { MdSportsTennis } from 'react-icons/md';
import { IoEarthSharp } from 'react-icons/io5';
// import { themes } from '../data/Themes'

const Themes = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    speed: 2000,
    cssEase: "linear"
  };

  const themeIcons = {
    BsFillHouseGearFill,
    GiSettingsKnobs,
    BsFillCloudFill,
    GiBreakingChain,
    GiMechanicalArm,
    MdSportsTennis,
    IoEarthSharp,
  };

  return (
    <div className='w-full h-auto relative'>
      <div className='py-10 bg-[#ffebd0]'>
        <h1 className='text-3xl font-semibold text-center'>THEMES</h1>
        <div className='w-[70%]  mx-auto my-10 flex flex-col justify-center '>
          <Slider {...settings} >
            {/* {Array.isArray(themes) &&
              themes.map((theme, index) => ( */}
                {/* 1 theme */}
                <div  className='bg-white w-[5rem] h-[10rem] rounded-md shadow text-center py-10 my-auto'>
                  <div className='relative z-0'>
                    <div className='my-2 z-30'>
                      <BsFillHouseGearFill size={35} className='m-auto -top-10 -z-20 text-[#f35060]'/>
                    </div>
                    <div className={`absolute h-16 w-16 border -top-[14px] rounded-full left-1/2 transform -translate-x-1/2 -z-10 bg-[#fddde1] `}></div>                    
                    <h3 className='text-lg font-semibold my-8 text-[#f35060]'>Diseaster Managemen</h3>
                  </div>
                </div>

                {/* 2 theme */}
                <div  className='bg-white w-[5rem] h-[10rem] rounded-md shadow text-center py-10 my-auto'>
                  <div className='relative z-0'>
                    <div className='my-2 z-30'>
                      <GiSettingsKnobs size={35} className='m-auto -top-10 -z-20 text-[#e97e2e]'/>
                    </div>
                    <div className={`absolute h-16 w-16 border -top-[14px] rounded-full left-1/2 transform -translate-x-1/2 -z-10 bg-[#fbe7d8] `}></div>                    
                    <h3 className='text-lg font-semibold my-8 text-[#e97e2e]'>Automation</h3>
                  </div>
                </div>

                {/* 3 theme */}
                <div  className='bg-white w-[5rem] h-[10rem] rounded-md shadow text-center py-10 my-auto'>
                  <div className='relative z-0'>
                    <div className='my-2 z-30'>
                      <BsFillCloudFill size={35} className='m-auto -top-10 -z-20 text-[#54c5c4]'/>
                    </div>
                    <div className={`absolute h-16 w-16 border -top-[14px] rounded-full left-1/2 transform -translate-x-1/2 -z-10 bg-[#d3f0f0] `}></div>                    
                    <h3 className='text-lg font-semibold my-8 text-[#54c5c4]'>IoT</h3>
                  </div>
                </div>

                {/* 4 theme */}
                <div  className='bg-white w-[5rem] h-[10rem] rounded-md shadow text-center py-10 my-auto'>
                  <div className='relative z-0'>
                    <div className='my-2 z-30'>
                      <GiBreakingChain size={35} className='m-auto -top-10 -z-20 text-[#419eff]'/>
                    </div>
                    <div className={`absolute h-16 w-16 border -top-[14px] rounded-full left-1/2 transform -translate-x-1/2 -z-10 bg-[#dbedff] `}></div>                    
                    <h3 className='text-lg font-semibold my-8 text-[#419eff]'>Blockchain</h3>
                  </div>
                </div>

                {/* 5 theme */}
                <div  className='bg-white w-[5rem] h-[10rem] rounded-md shadow text-center py-10 my-auto'>
                  <div className='relative z-0'>
                    <div className='my-2 z-30'>
                      <GiMechanicalArm size={35} className='m-auto -top-10 -z-20 text-[#f35060]'/>
                    </div>
                    <div className={`absolute h-16 w-16 border -top-[14px] rounded-full left-1/2 transform -translate-x-1/2 -z-10 bg-[#fddde1] `}></div>                    
                    <h3 className='text-lg font-semibold my-8 text-[#f35060]'>Machine Learning</h3>
                  </div>
                </div>

                {/* 6 theme */}
                <div  className='bg-white w-[5rem] h-[10rem] rounded-md shadow text-center py-10 my-auto'>
                  <div className='relative z-0'>
                    <div className='my-2 z-30'>
                      <MdSportsTennis size={35} className='m-auto -top-10 -z-20 text-[#e97e2e]'/>
                    </div>
                    <div className={`absolute h-16 w-16 border -top-[14px] rounded-full left-1/2 transform -translate-x-1/2 -z-10 bg-[#fbe7d8] `}></div>                    
                    <h3 className='text-lg font-semibold my-8 text-[#e97e2e]'>spotes and culturels</h3>
                  </div>
                </div>

                {/* 7 theme */}
                <div  className='bg-white w-[5rem] h-[10rem] rounded-md shadow text-center py-10 my-auto'>
                  <div className='relative z-0'>
                    <div className='my-2 z-30'>
                      <BsFillHouseGearFill size={35} className='m-auto -top-10 -z-20 text-[#54c5c4]'/>
                    </div>
                    <div className={`absolute h-16 w-16 border -top-[14px] rounded-full left-1/2 transform -translate-x-1/2 -z-10 bg-[#d3f0f0] `}></div>                    
                    <h3 className='text-lg font-semibold my-8 text-[#54c5c4]'>Clean And Green Socity</h3>
                  </div>
                </div>
              {/* ))} */}

          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Themes;
