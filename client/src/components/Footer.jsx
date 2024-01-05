import React from 'react'
import { FaRegCopyright} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='px-24'>
        <div className="flex justify-start items-center gap-1">
            <FaRegCopyright size={18}/>
            <h3>TECH TROPOLIS Hackton | Tech-Huma 2024-25. All Rights Reserved</h3>
        </div>
        <div className="">
            <h3 className='text-center pb-4 pt-8'>Conceived and meticulously forged by the adept artisans of Team Tech-Huma.</h3>
        </div>
    </div>
  )
}

export default Footer