import React from 'react'
import { GithubIcon, InstaIcon, LinkedInIcon, TwitterIcon } from './icons'
import Link from 'next/link'


const Handles = () => {
  return (
    <div>
    <h2 className='mb-5 h-[2rem] text-lg font-bold uppercase text-dark/75 dark:text-light text-center'>Handles</h2>
      <div className="main2">
  <div className="up2">
    <button className="card12" >
    <Link href="https://www.instagram.com/i_am_rishabh25/" target={"_blank"}>
    <InstaIcon className='instagram2'  />
    </Link>
      </button>
    <button className="card22">
    <Link href="https://twitter.com/Rishabh78043032" target={"_blank"}>
      <TwitterIcon className='twitter2'/>
      </Link>
      </button>
  </div>
  <div className="down2">
    <button className="card32 dark:text-dark">
    <Link href="https://github.com/Rishabh2503" target={"_blank"}>
      <GithubIcon className='github2'/>
      </Link>
      </button>
    <button className="card42">
    <Link href="https://www.linkedin.com/in/rishabh-gupta-863968244" target={"_blank"}>
      <LinkedInIcon className='discord2'/>
      </Link>
      </button>
  </div>
</div>
    </div>
  )
}

export default Handles
