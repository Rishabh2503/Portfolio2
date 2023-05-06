import Layout from '@/Components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Rishabh from "../../public/images/profile/Rishabh4.png"
import Animatedtext from '../Components/Animatedtext'
import Link from 'next/link'
import { LinkArrow } from '@/Components/icons'
import Footer from '@/Components/Footer'
import Handles from '@/Components/Handles'

export default function Home() {
  return (
    <>
      <Head>
        <title>Rishabh Portflio</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen'>
      <Layout className='pt-0'>
        <div className="flex item-center justify-between w-full">
        <div className='w-[50%] flex flex-col items-center self-center'>
          <Animatedtext text="Creating innovative digital experiences with Code and Design." className='!text-6xl'/>
          <p className='my-4 text-base font-medium text-justify'>As a full-stack developer, I bring ideas to life through innovative web apps. My expertise in React.js and web development is showcased in my latest projects and articles. Let&apos;s build something amazing together!</p>
        <div className='flex items-center self-start mt-2 ml-[30%]'>
          <Link href="/Resume.pdf" target={"_blank"} className='flex items-center bg-black text-light p-2.5 px-6 rounded-lg textlg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark ' download={true}>Resume <LinkArrow className={"w-6 ml-1"}/></Link>
          <Link href="mailto:gupta.rish2501@gmail.com" target={"_blank"} className='ml-4 text-lg font-medium capitalize text-dark underline'>Contact</Link>
        </div>
        </div>
          <div className='w-1/2 ml-32'>
            <Image  src={Rishabh} alt="Rishabh Gupta" className='rounded-full'/>
          </div>
        </div>
      </Layout>
    
      </main>
      
    </>
  )
}