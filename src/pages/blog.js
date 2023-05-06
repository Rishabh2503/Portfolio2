import Animatedtext from '@/Components/Animatedtext'
import Layout from '@/Components/Layout'
import Head from 'next/head'
import React from 'react'


const blog = () => {
  return (
    <>
      <Head >
        <title>Rishabh | Blog</title>
        <meta name="description" content='Blog'/>
      </Head>
      <main className='w-full mb-16 flex flex-col items-center justify-center'>
        <Layout className='pt-16'>
            <Animatedtext text="Coming Soon.... Stay Tuned!" className='mb-16'/>
            </Layout>
            </main>
    </>
  )
}

export default blog
