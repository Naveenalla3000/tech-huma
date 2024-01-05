import React from 'react'

const About = () => {
    return (
        <div className='w-full h-auto relative bg-[#ffebd0]'>
            <div className=" px-16 py-12 mx-auto">
                <h1 className='font-semibold text-3xl text-center bg-[#ffebd0]'>ABOUT THE TECH TROPOLIS HACKTON JUNIOR 2024</h1>
                <div className="flex justify-between items-center px-20 mt-8">
                    <div className="col-span-4 place-self-center mt-2 lg:mt-4 pb-10 mr-[40px] relative flex justify-center items-center">
                        <div className="w-72 h-72 rounded-full bg-[#ffa348] blur-[1px] lg:mt-12"/>
                        <div className="absolute -top-10">
                            <img
                                alt='heroImage'
                                src='images/director_of_sac.png'
                                width={300}
                                height={300}
                                className=''
                            />
                            <hr className='h-px dark:bg-[#ff7348]' />
                            <h1 className='text-2xl font-bold text-center'>Director of SAC</h1>
                            <p className='text-center text-xl font-semibold'>Sai Vijay Pisini</p>
                        </div>
                    </div>
                    <div className="w-[70%] text-center mt-10">
                        <div className="text-gray-700">
                            <p className='text-lg text-start'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor tempore tempora, veniam aut laboriosam aperiam, dolore odio ullam soluta ex consectetur ad. Voluptatem voluptate voluptates deserunt, atque corrupti deleniti ducimus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et neque facilis aliquam, cupiditate dolor eveniet repellat unde. Ratione, saepe veniam?</p>
                            <p className='text-lg text-start mt-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor tempore tempora, veniam aut laboriosam aperiam, dolore odio ullam soluta ex consectetur ad. Voluptatem voluptate voluptates deserunt, atque corrupti deleniti ducimus! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque excepturi accusamus provident at sequi fugiat magni ullam autem cum voluptates.</p>
                        </div>
                        <div className="flex items-center justify-start mt-8">
                            <button className='bg-[#ff8b48] hover:bg-[#ff8b48] text-white px-4 py-2 rounded-lg mt-4'> Student guidelines</button>
                            <button className='bg-[#ff8b48] hover:bg-[#ff8b48] text-white px-4 py-2 rounded-lg mt-4 ml-4'>SPOC guidlines</button>
                        </div>
                    </div>
                </div>
            </div>
            <img src='images/dotabout.webp' alt='' className='absolute top-[45%] left-0' />
        </div>
    )
}

export default About