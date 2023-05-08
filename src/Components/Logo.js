import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Rishabh2 from "../../public/images/profile/Rishabh2.jpg"
import { motion } from 'framer-motion'

const MotionLogo = motion(Link);
const Logo = () => {
  return(
  <div className="flex items-center justify-center mt-2">
    <MotionLogo href="/" className='w-24 h-24 bg-dark text-light flex items-center justify-center rounded-full border border-solid border-transparent dark:border-light '
    whileHover={
        {backgroundColor:["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
        transition:{duration:2, repeat:Infinity}
        }
    }
    >
     <Image 
        src={Rishabh2}
        alt='Rishabh'
        width={90}
        height={90}
      className='rounded-full'
      priority  
     />    
     
    </MotionLogo>
  </div>
  )
  
}

export default Logo
