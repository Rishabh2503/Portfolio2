import React, { useRef } from 'react'
import { motion,useScroll, } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({type,time,place,info}) =>{
    const ref = useRef(null);
    return <li ref={ref} className='my-6 first:mt-0 last:mt-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
       <LiIcon refrence = {ref}/>
       <motion.div
       initial={{y:50}}
       whileInView={{y:0}}
       transition={{duration:0.5,type:"spring"}}
       >
        <h3 className='text-2xl font-bold capitalize'>{type}</h3>
        <span className='font-medium capitalize text-dark/75 dark:text-light/75'> 
            {time} | {place}
        </span>
        <p className='w-full font-medium'>
            {info}
        </p>
       </motion.div> 
    </li>
}
const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset : ["start end","center start"]
    })
  return (
    <div className='my-64'>
      <h2 className="w-full mb-32 font-bold text-center md:text-[15vw] lg:text-[10vw] text-[6vw]">
      Education
      </h2> 
      <div ref = {ref} className='w-[95%] mx-auto relative'>
      <motion.div 
      style={{scaleY : scrollYProgress}}
      className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light'/>
        <ul className='flex flex-col items-start justify-between w-full ml-4'>
            <Details 
                type="Bachelor of Technology In Information technology"
                time="2021-2025"
                place = "Ajay Kumar Garg Engineering College, Ghaziabad"
                info="Currently in 2nd Year,Focusing on Course and its practical practices. Scored 8.75 Scgpa in 1st Year."
            />
             <Details 
                 type="Intermediate(Class-12th)"
                time="2020-2021"
                place = "Sunbeam School Varuna,Varanasi"
                info="Passed Intermediate with Science Branch with 95% in CBSE Boards"
            />
            <Details 
                 type="High School(Class-10th)"
                time="2018-2019"
                place = "Sunbeam School Varuna,Varanasi"
                info="Passed High School with Science Branch with 91% in CBSE Boards"
            />
             
        </ul>
      </div>
    </div>
  )
}

export default Education
