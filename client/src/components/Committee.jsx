import React from 'react';
import { motion, useInView } from 'framer-motion'

const Committee = () => {
  const partnersRef = React.useRef(null);
  const isPartnorsInView = useInView(partnersRef, { once: true });
  const partnreVarients = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  const membersVarients = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  const membersRef = React.useRef(null);
  const isMembersInView = useInView(membersRef, { once: true });
  const partnerArray = ["item1", "item2", "item3", "item4", "item5", "item6", "item7", "item8"];
  const memberArray = ["item1", "item2"];
  return (
    <div className='w-full h-auto relative'>
      <img src={'images/curves/upperCurve.webp'} alt='' className='transform -scale-y-100 absolute top-0' />
      <div className="px-16 pt-24">
        <h1 className='text-3xl text-center font-semibold'>COMMITTEE</h1>

        <div ref={membersRef} className="mx-auto">
          {
            memberArray && Array.isArray(memberArray) && memberArray.map((item, index) => (
              <motion.div
                key={index}
                variants={membersVarients}
                initial="initial" animate={isMembersInView ? "animate" : "initial"}
                transition={{ duration: .3, delay: index * .7 }}

              >
                <div className="mt-8 h-[300px] bg-white flex flex-col justify-center items-center rounded-lg relative scale-100 hover:scale-105 transition-all duration-500">
                  <img src={'images/avatar.png'} alt='' className='w-[150px] h-[150px] object-cover z-20 ' />
                  <hr className='w-[15%] h-[1px] bg-blue-100' />
                  <div className='absolute w-[150px] h-[150px] rounded-full bg-blue-100 top-6 z-10' />
                  <div className="mt-4 text-center">
                    <h1 className='text-xl font-semibold text-slate-800'>Dr. S.K. Mishra</h1>
                    <p className='text-slate-700'>Chairman, Board of Governors</p>
                  </div>
                </div>
                {
                  memberArray.length - 1 > index && (
                    <>
                      <hr className='h-[1px] w-[50%] mx-auto bg-slate-100 my-2' />
                    </>
                  )
                }
              </motion.div>
            ))
          }
        </div>
        <hr className='w-[80%] h-[1px] bg-slate-100 my-4 mx-auto' />
        <h2 className='text-2xl text-center font-semibold mt-8 mb-2'>CO-PARTONS</h2>
        <div ref={partnersRef} className="mx-auto flex justify-center items-center flex-wrap w-[80%] gap-x-16">
          {
            partnerArray && Array.isArray(partnerArray) && partnerArray.map((item, index) => (
              <motion.div key={index} variants={partnreVarients} initial="initial" animate={isPartnorsInView ? "animate" : "initial"} transition={{ duration: .3, delay: index * .3 }}>
                <div className="h-[300px] flex flex-col justify-center items-center rounded-lg relative scale-100 hover:scale-105 transition-all duration-500">
                  <img src={'images/avatar.png'} alt='' className='w-[150px] h-[150px] object-cover z-20 ' />
                  <hr className='w-[100%] h-[1px] bg-blue-100' />
                  <div className='absolute w-[150px] h-[150px] rounded-full bg-blue-100 top-6 z-10' />
                  <div className="mt-4 text-center">
                    <h1 className='text-xl font-semibold text-slate-800'>Dr. S.K. Mishra</h1>
                    <p className='text-slate-700'>Chairman, Board of Governors</p>
                  </div>
                </div>
              </motion.div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Committee