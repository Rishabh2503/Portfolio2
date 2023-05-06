import React from 'react'
import Layout from './Layout'
import Link from 'next/link'
import Button from './Button'
const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg'>
      <Layout className='py-8 flex items-center justify-between'>
      <span>{new Date().getFullYear()}&copy;All Rights Reserved.</span>
      <div className='flex items-center'>Made With <span className='text-primary text-2xl px-1'>💖</span>by&nbsp;<Link href="/Home" className='underline underline-offset-2'>Rishabh Gupta</Link>
      </div>
      <Button className="text-light" />

      </Layout>
    </footer>
  )
}

export default Footer
