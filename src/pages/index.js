import Layout from '@/Components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Rishabh from "../../public/images/profile/Rishabh4.png"
import Animatedtext from '../Components/Animatedtext'
import Link from 'next/link'
import { LinkArrow } from '@/Components/icons'

export default function Home() {
  return (
    <>
      <Head>
        <title>Rishabh Portflio</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
      <Layout className='pt-0 md:p-16 sm:pt-8'>
        <div className="flex items-center justify-between w-full sm:none lg:flex-col">
        <div className='w-[50%] flex flex-col items-center self-center lg:w-full lg:text-center'>
          <Animatedtext text="Creating innovative digital experiences with Code and Design." className='!text-6xl xl:text-5xl !text-left lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'/>
          <p className='my-4 text-base font-medium text-justify'>As a full-stack developer, I bring ideas to life through innovative web apps. My expertise in React.js and web development is showcased in my latest projects and articles. Let&apos;s build something amazing together!</p>
        <div className='flex items-center self-start mt-2 ml-[30%] lg:self-center'>
          <Link href="/Resume.pdf" target={"_blank"} className='flex items-center bg-black text-light p-2.5 px-6 rounded-lg textlg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light' download={true}>Resume <LinkArrow className={"w-6 ml-1"}/></Link>
          <Link href="mailto:gupta.rish2501@gmail.com" target={"_blank"} className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light'>Contact</Link>
        </div>
        </div>
          <div className='w-1/2 ml-16 md:w-full sm:ml-0'>
            <Image  src={Rishabh} alt="Rishabh Gupta" className='rounded-full h-auto  md:inline-block md:w-full md:mt-4' priority sizes="(max-width : 768px) 100vw,
            (max-width : 1200px) 50vw,
            50vw"/>
          </div>
        </div>
      </Layout>
    
      </main>
      
    </>
  )
}
