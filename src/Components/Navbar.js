import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { useRouter } from 'next/router'
import { TwitterIcon,GithubIcon,LinkedInIcon, PinterestIcon, InstaIcon, SunIcon, MoonIcon } from './icons'
import { motion } from 'framer-motion'
import useThemeSwitch from './hooks/useThemeSwitch'



const CustomLink = ({href,title,className=""}) =>{
    const router = useRouter();
    return(
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`
            h-[1px] inline-block  bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 
            ${router.asPath === href ? 'w-full' : 'w-0'} dark:bg-light
            `}>
                &nbsp;
            </span>
        </Link>
    )
}
const CustomMobileLink = ({href,title,className="",toggle}) =>{
  const router = useRouter();
  const handleClick = () =>{
    toggle()
    router.push(href)

  }
  return(
      <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
          {title}
          <span className={`
          h-[1px] inline-block  bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 
          ${router.asPath === href ? 'w-full' : 'w-0'} dark:bg-light
          `}>
              &nbsp;
          </span>
      </button>
  )
}
const Navbar = () => {
  const[mode,setMode] = useThemeSwitch();
  const[isOpen,setIsOpen] = useState(false)
  useEffect(() => {
    // Function to update the state based on window width
    const handleResize = () => {
      if (window.innerWidth > 1023) {
        setIsOpen(false);
      }
    };

    // Check the window width when the component mounts
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const handleClick = () => {
    if (window.innerWidth > 1023) {
      setIsOpen(false);
    }
    setIsOpen(!isOpen);
  };

  return (
    <header className='relative flex items-center justify-between w-full px-32 py-8 font-medium bg-light dark:text-light dark:bg-dark'>
    <button className='flex-col justify-center items-center hidden lg:flex z-50 sm:absolute sm:left-[10%] sm:z-90 ' onClick={handleClick}>
      <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm  sm:dark:bg-primaryDark  ${isOpen ? "rotate-45 translate-y-1":"-translate-y-0.5"}`}></span>
      <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm  sm:dark:bg-primaryDark my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
      <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm  sm:dark:bg-primaryDark ${isOpen ? '-rotate-45 -translate-y-1 ':'-translate-y-0.5'}`}></span>
    </button>
    
    <div className='flex items-center justify-between w-full lg:hidden'>
    <nav>
        <CustomLink href="/" title="Home" className='mr-4'/>
        <CustomLink href="/about" title="About" className='mx-4'/>
        <CustomLink href="/projects"  title="Projects" className='mx-4'/>
        <CustomLink href="/blog"  title="Blog" className='ml-4'/>
    </nav>
    
    <nav className='flex flex-wrap items-center justify-center'>
        <motion.a whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mr-3' href="https://twitter.com/Rishabh78043032" target={"_blank"} ><TwitterIcon /></motion.a>
        <motion.a whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mx-3' href="https://github.com/Rishabh2503" target={"_blank"} ><GithubIcon /></motion.a>
        <motion.a whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mx-3' href="https://www.linkedin.com/in/rishabh-gupta-863968244" target={"_blank"} ><LinkedInIcon /></motion.a>
        <motion.a whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mx-3 rounded-full bg-light' href="https://in.pinterest.com/guptarish2501/" target={"_blank"} ><PinterestIcon /></motion.a>
        <motion.a whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-8 ml-3' href="https://www.instagram.com/i_am_rishabh25/" target={"_blank"} ><InstaIcon /></motion.a>

    <button
    onClick={() => setMode(mode ==="light" ? "dark" : "light" )}
    className={`ml-3 flex items-center justify-center rounded-full p-1
     ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
    >
    {
      mode === "dark" ?
      <SunIcon className={"fill-dark"} />
      : <MoonIcon className={"fill-dark"} />
    }
    </button>
    </nav>
    </div>

    {
      isOpen ?
      
    <motion.div
    initial={{scale:0,opacity:0, x:"-50%",y:"-50%"}}
    animate={{scale:1,opacity:1}}
     className='min-w-[70vw] flex flex-col justify-between items-center z-30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-light
    bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32 dark:text-dark sm:h-[100vh] sm:w-[100vh]
    '>
    <nav className='flex flex-col items-center justify-center'>
        <CustomMobileLink href="/" title="Home" className='' toggle={handleClick}/>
        <CustomMobileLink href="/about" title="About" className='' toggle={handleClick}/>
        <CustomMobileLink href="/projects"  title="Projects" className='' toggle={handleClick}/>
        <CustomMobileLink href="/blog"  title="Blog" className='' toggle={handleClick}/>
    </nav>
    
    <nav className='flex flex-wrap items-center justify-center mt-2'>
        <motion.a whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mr-3 sm:mx-1' href="https://twitter.com/Rishabh78043032" target={"_blank"} ><TwitterIcon /></motion.a>
        <motion.a whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mx-3 sm:mx-1' href="https://github.com/Rishabh2503" target={"_blank"} ><GithubIcon /></motion.a>
        <motion.a whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mx-3 sm:mx-1' href="https://www.linkedin.com/in/rishabh-gupta-863968244" target={"_blank"} ><LinkedInIcon /></motion.a>
        <motion.a whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mx-3 rounded-full sm:mx-1 bg-light' href="https://in.pinterest.com/guptarish2501/" target={"_blank"} ><PinterestIcon /></motion.a>
        <motion.a whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-8 ml-3 sm:mx-1' href="https://www.instagram.com/i_am_rishabh25/" target={"_blank"} ><InstaIcon /></motion.a>

    <button
    onClick={() => setMode(mode ==="light" ? "dark" : "light" )}
    className={`ml-3 flex items-center justify-center rounded-full p-1
     ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
    >
    {
      mode === "dark" ?
      <SunIcon className={"fill-dark"} />
      : <MoonIcon className={"fill-dark"} />
    }
    </button>
    </nav>
    </motion.div>
      

      : null
    }

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  )
}

export default Navbar
