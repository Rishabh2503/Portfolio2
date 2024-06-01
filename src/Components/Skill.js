import React from 'react';
import { motion } from 'framer-motion';

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className='absolute flex items-center justify-center px-6 py-3 font-semibold rounded-full cursor-pointer md:px-2 md:text-[1vh] md:py-2 bg-dark text-light shadow-dark dark:text-dark dark:bg-light'
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="items-center w-full mt-64 font-bold text-center md:text-3xl text-8xl">Skills</h2>
      <div className="relative flex flex-wrap items-center justify-center m-auto  w-[80vw] h-[100vh] md:h-[30vh] bg-circularLight dark:bg-circularDark">
        <motion.div
          className='flex items-center justify-center p-8 font-semibold rounded-full cursor-pointer bg-dark text-light shadow-dark dark:text-dark dark:bg-light'
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="HTML" x="-25vw" y="2vw" />
        <Skill name="Css" x="-5vw" y="-11vw" />
        <Skill name="JavaScript" x="24vw" y="6vw" />
        <Skill name="ReactJS" x="0vw" y="11vw" />
        <Skill name="NextJs" x="0vw" y="-19vw" />
        <Skill name="Figma" x="-29vw" y="-15vw" />
        <Skill name="Firebase" x="15vw" y="-12vw" />
        <Skill name="Tailwind-Css" x="32vw" y="-5vw" />
        <Skill name="Bootstrap" x="-18vw" y="20vw" />
      </div>
    </>
  );
};

export default Skills;
