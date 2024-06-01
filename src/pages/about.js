import Animatedtext from '@/Components/Animatedtext'
import Layout from '@/Components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Rishabh2 from "../../public/images/profile/rishabh3.jpg"
import Handles from '@/Components/Handles'
import Skills from '@/Components/Skill'
import Exprince from '@/Components/Exprince'
import Education from '../Components/Education'
const about = () => {
  return (
    <>
      <Head>
        <title>About ME</title>
        <meta name='description' content='About me' />
      </Head>
      <main className='flex flex-col items-center justify-center w-full dark:text-light'>
  <Layout className='pt-16 md:pt-0'>
    <Animatedtext
      text='Innovation Drives My Web Development.'
      className='mb-16 text-center md:md-0 sm:mt-5' />
    <div className="grid w-full grid-cols-8 gap-16 lg:flex lg:flex-col lg:grid-cols-1">
      <div className='flex flex-col items-start justify-start col-span-3 lg:col-span-8'>
        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>BioGraphy</h2>
        <p className='font-medium'> Hi, I&apos;m Rishabh Gupta, a web developer and UI/UX designer with a passion for creating beautiful, functional,
          and user-centered digital experiences. I&apos;m beginner in the field. I am always looking for
          new and innovative ways to bring my clients&apos; visions to life.
        </p>
        <p className='my-4 font-medium'> I believe that design is about more than just making things look pretty – it&apos;s about solving problems and
          creating intuitive, enjoyable experiences for users.
        </p>
        <p className='my-4 font-medium'>Whether I&apos;m working on a website, mobile app, or
          other digital product, I bring my commitment to design excellence and user-centered thinking to
          every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
        </p>
      </div>

      <div className='relative self-center col-span-3 p-8 border-2 border-solid h-[50vh] md:w-[50vw] lg:w-[45vw] w-[30vw] md:h-[40vh] sm:h-[25vh] rounded-2xl border-dark bg-light dark:border-light dark:bg-dark lg:col-span-8'>
        {/* <div className='absolute top-0 -right-3 -z-10 w-[80vw] h-full rounded-[2rem] bg-dark dark:border-light' /> */}
        <div className='flex justify-center h-full'>
          <Image src={Rishabh2} alt="Rishabh" className='w-auto h-full rounded-2xl' />
        </div>
      </div>

      <div className='flex flex-col items-center justify-center col-span-2 lg:col-span-8 dark:text-light'>
        <Handles />
      </div>
    </div>
    <Skills />
  </Layout>
  <Exprince />
  <Education />
</main>

    </>
  )
}

export default about
