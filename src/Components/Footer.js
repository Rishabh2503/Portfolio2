import React from 'react'
import Layout from './Layout'
import Link from 'next/link'
import Button from './Button'
const Footer = () => {
  return (
    <footer className='w-full text-lg font-medium border-t-2 border-solid border-dark dark:text-light dark:border-light'>
      <Layout className='flex justify-between py-8 md:py-4 md:justify-center md:flex-col md:items-center'>
      <span className='md:my-1'>{new Date().getFullYear()}&copy;All Rights Reserved.</span>
      <div className='flex items-center md:my-1'>Made With <span className='px-1 text-2xl text-primary'>💖</span>by&nbsp;<Link href="/Home" className='underline underline-offset-2'>Rishabh Gupta</Link>
      </div>
      <Button className="text-light" />

      </Layout>
    </footer>
  )
}

export default Footer
