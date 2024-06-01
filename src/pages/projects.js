import Head from 'next/head'
import React from 'react'
import Layout from '../Components/Layout'
import Animatedtext from '../Components/Animatedtext'
import Image from 'next/image'
import Link from 'next/link'
import { GithubIcon } from '../Components/icons'
import Cloud from "../../public/images/projects/ccc.png"
import Tindog from "../../public/images/projects/dog.png"
import Simon from "../../public/images/projects/simon.png"
import mysite from "../../public/images/projects/mysite2.png"
import Dicee from "../../public/images/projects/Dice.png"
import EchoVision from "../../public/images/projects/echo.png"
import Drum from "../../public/images/projects/drum.png"
import TuneTide from "../../public/images/projects/tune.png"

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className='flex items-center justify-between w-[87vw] p-12  border border-solid shadow-2xl lg:flex-col rounded-3xl border-dark bg-light dark:bg-dark dark:border-light'>
      {/* <div className=' top-0 -right-3 md:flex md:justify-center m-auto -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light' /> */}
      <Link href={link} target="_blank" className='w-full overflow-hidden rounded-lg cursor-pointer '>
        <Image src={img} alt={title} className='w-[40vw] lg:w-full lg:h-full h-[50vh]' priority />
      </Link>
      <div className='flex flex-col items-start justify-between w-[80vw] md:pl-[7vw] pl-6  '>
        <div className=''>
          <span className='text-xl font-medium text-primary dark:text-primaryDark'>{type}</span>
          <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
            <h2 className='w-full m-auto my-2 text-4xl font-bold text-left md:text-xl dark:text-lime-50'>{title}</h2>
          </Link>
          <p className='my-2 font-medium md:text-sm md:w-[63vw] text-dark dark:text-light'>{summary}</p>
        </div>
        <div className='flex items-center mt-2 md:mt-0'>
          <Link href={github} target="_blank" className='w-10' ><GithubIcon /></Link>
          <Link href={link} target="_blank" className='p-2 px-6 text-lg font-semibold rounded-lg ml-14 bg-dark text-light dark:bg-light dark:text-dark'>Visit Project</Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link, github }) => {

  return (
    <article className='relative flex flex-col items-center justify-between w-full p-6 border border-solid rounded-2xl border-dark bg-light dark:bg-dark dark:border-light' >
      <Link href={link} target="_blank" className='w-full overflow-hidden rounded-lg cursor-pointer'>
        <Image src={img} alt={title} className='w-full h-auto'/>
      </Link>
      <div className='flex flex-col items-start justify-between max-w-full '>
        <span className='m-auto text-xl font-medium md:text-lg text-primary dark:text-primaryDark'>{type}</span>
        <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
          <h2 className='w-full my-2 text-4xl font-bold text-left md:text-[5vw] md:text-center dark:text-lime-50'>{title}</h2>
        </Link>
        <div className='flex items-center justify-center w-full h-full md:gap-[2vh] gap-[5vw] m-auto mt-2 md:flex-col'>
          <Link href={github} target="_blank" className='w-10'><GithubIcon className='w-full h-auto' /></Link>
          <Link href={link} target="_blank" className='p-2 px-6 text-lg font-semibold rounded-lg bg-dark text-light dark:bg-light dark:text-dark'>Visit</Link>
        </div>

      </div>
    </article>
  )
}




const project = () => {
  return (
    <>
      <Head>
        <title>Rishabh | Project</title>
        <meta name="description" content="Projects" />
      </Head>
      <main className="flex flex-col items-center justify-center w-full mb-16 dark:text-light">
        <Layout className="pt-16">
          <Animatedtext text="Pioneering Innovation in Web Development" className="mb-16 text-center" />
          <div className="grid flex-wrap grid-cols-auto gap-[7.9vw] md:grid-cols-12">
            <div className="col-span-12">
              <FeaturedProject
                title="Cloud Computing Cell Website"
                img={Cloud}
                summary="As a ReactJS developer I contributed to a college society project, I enhanced the website's visual appeal in several ways. Consider refining the color scheme, typography, and layout to create a more aesthetically pleasing design. I also incorporate graphics and animations to elevate the user experience. Additionally, optimizing the website's performance to ensure fast loading times and responsive functionality can further improve its overall quality."
                link="/"
                github="/"
                type="Feature Project"
              />
            </div>
            <div className="col-span-6 md:col-span-12">
              <Project
                title="Game"
                img={Simon}
                link="/"
                github="/"
                type="Learning Project"
              />
            </div>
            <div className="col-span-6 md:col-span-12">
              <Project
                title="TingDog"
                img={Tindog}
                link="/"
                github="/"
                type="Learning Project"
              />
            </div>
            <div className="col-span-6 md:col-span-12">
              <Project
                title="Portfolio"
                img={mysite}
                link="/"
                github="/"
                type="Learning Project"
              />
            </div>
            <div className="col-span-6 md:col-span-12">
              <Project
                title="Virtual Drum"
                img={Drum}
                link="/"
                github="/"
                type="Learning Project"
              />
            </div>
            <div className="col-span-6 md:col-span-12">
              <Project
                title="Dicee Game"
                img={Dicee}
                link="/"
                github="/"
                type="Learning Project"
              />
            </div>
            <div className="col-span-6 md:col-span-12">
              <Project
                title="E-commerce"
                img={EchoVision}
                link="/"
                github="/"
                type="Future Project"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="TuneTide"
                img={TuneTide}
                summary="TuneTide is my ongoing project to build a music player website using ReactJS hooks, API functions, Redux, and Tailwind. Through this project, I am expanding my skills and knowledge in web development and refining my design and development abilities. TuneTide reflects my commitment to excellence in software development, and I am dedicated to delivering a high-quality product that meets and exceeds the expectations of its users."
                link="/"
                github="/"
                type="Feature Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};


export default project
