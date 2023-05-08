import React from 'react'
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
const Navbar = () => {
  const[mode,setMode] = useThemeSwitch();
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between bg-light dark:text-light dark:bg-dark'>
    <nav>
        <CustomLink href="/" title="Home" className='mr-4'/>
        <CustomLink href="/about" title="About" className='mx-4'/>
        <CustomLink href="/projects"  title="Projects" className='mx-4'/>
        <CustomLink href="/blog"  title="Blog" className='ml-4'/>
    </nav>
    
    <nav className='flex items-center justify-center flex-wrap'>
        <motion.a whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mr-3' href="https://twitter.com/Rishabh78043032" target={"_blank"} ><TwitterIcon /></motion.a>
        <motion.a whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mx-3' href="https://github.com/Rishabh2503" target={"_blank"} ><GithubIcon /></motion.a>
        <motion.a whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mx-3' href="https://www.linkedin.com/in/rishabh-gupta-863968244" target={"_blank"} ><LinkedInIcon /></motion.a>
        <motion.a whileHover={{y:-2}} whileTap={{scale:0.9}} className='w-6 mx-3 bg-light rounded-full' href="https://in.pinterest.com/guptarish2501/" target={"_blank"} ><PinterestIcon /></motion.a>
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
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  )
}

export default Navbar
