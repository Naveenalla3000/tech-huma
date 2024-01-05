import React from 'react'
import { activities } from '../data/Activites'
import Activite from './Activite'

const Activites = () => {
  return (
    <div className='w-full h-auto py-12 relative border'>
      <div className="px-16">
        <div className="">
          <h1 className='text-3xl font-semibold text-center'>Activities</h1>
          <p className='mt-8 font-normal text-lg px-16'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio necessitatibus odit et saepe aperiam? Quos iste iusto libero explicabo deleniti reiciendis quibusdam, repellendus at odit doloribus earum vitae doloremque? Laudantium assumenda aspernatur velit accusantium ducimus corrupti eos obcaecati quibusdam odio veritatis non laborum, eveniet porro unde reiciendis. Velit, temporibus veritatis!</p>
          <div className="px-16 mt-4">
            <input type='text' className='w-[30%] transition-all duration-500 outline-none border border-slate-100 h-10 px-3 py-1 rounded-md bg-slate-50' placeholder="Search for activity" />
          </div>
          <div className="flex flex-wrap justify-center mt-4">
            {
              Array.isArray(activities) && activities.map((activity, index) => (
                <Activite key={index} activity={activity} />
              ))
            }
          </div>
          <div className="px-16">
            <button onClick={() => { }} className='px-4 py-2 bg-[#f74a00] hover:bg-[#f74a00]/90 transition-all duration-300 ease-in-out text-white rounded-lg capitalize shadow-md'>View More</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Activites