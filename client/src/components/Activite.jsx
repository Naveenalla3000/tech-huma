import React from 'react'

const Activite = ({ activity }) => {
  return (
    <div className='group bg-white box-border m-4 overflow-hidden relative w-[400px] h-[30vh] cursor-pointer rounded-[4px]'>
      <img src={activity.image} alt="" className='w-full h-full object-cover group-hover:scale-125 group-hover:-rotate-3 transform transition-transform duration-700' />
      <div className='absolute top-0 left-0 w-full h-full bg-transparent group-hover:bg-[rgba(27,27,27,0.5)] group-hover:drop-shadow-sm transition-all duration-500'></div>
      <div className='absolute top-[50%]  left-[50%] transform -translate-x-1/2 -translate-y-1/2 pointer-events-none text-center group'>
        <h1 className='text-transparent group-hover:text-white text-2xl font-bold drop-shadow-sm group-hover:pointer-events-auto'>
          {activity.name}
        </h1>
        <p className='text-transparent group-hover:text-white text-lg group-hover:pointer-events-auto'>
          {activity.description}
        </p>
        <div className="">
          
        </div>
      </div>

    </div>

  )
}

export default Activite