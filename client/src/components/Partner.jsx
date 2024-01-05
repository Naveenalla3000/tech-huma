import React from 'react'

const Partner = () => {
  return (
    <div className='w-full'>
        <img src='images/curves/grayUpperCurve.webp' alt='' className='bottom-0 transform' />
        <div className="px-16 py-10 bg-[#fafafa]">
            <h1 className='text-3xl font-semibold text-center'>THE SUPPORTERS OF TECH TROPOLIS HACKTON JUNIOR 2024 </h1>
            <div className="w-full">
                <h2 className='text-center font-semibold text-xl text-[#acacac] mt-12 mb-4'>ORGANIZING COMMITTEE</h2>
                <div className="w-[60%] flex flex-wrap justify-center items-center p-4 mx-auto gap-12">
                        <div className="">
                            <img src='images/klu_logo.svg' alt='' className='w-[150px]' />
                        </div>
                        <div className="">
                            <img src='images/klu_logo.svg' alt='' className='w-[150px]' />
                        </div>
                        <div className="">
                            <img src='images/klu_logo.svg' alt='' className='w-[150px]' />
                        </div>
                        <div className="">
                            <img src='images/klu_logo.svg' alt='' className='w-[150px]' />
                        </div>
                </div>
            </div>
            <div className="w-full">
                <h2 className='text-center font-semibold text-xl text-[#acacac] mt-12 mb-4'>KNOWLEDGE PARTNER</h2>
                <div className="w-[60%] flex flex-wrap justify-center items-center p-4 mx-auto gap-12">
                        <div className="">
                            <img src='images/klu_logo.svg' alt='' className='w-[150px]' />
                        </div>
                        <div className="">
                            <img src='images/klu_logo.svg' alt='' className='w-[150px]' />
                        </div> 
                </div>
            </div>
        </div>
        <img src='images/curves/grayUpperCurve.webp' alt='' className='bottom-0 transform -scale-y-100' />
    </div>
  )
}

export default Partner