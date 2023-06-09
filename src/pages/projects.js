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

const FeaturedProject = ({type ,title, summary,img,link,github}) => {

    return(
        <article className='w-full flex items-center justify-between relative rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light'>
        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light'/>
            <Link href={link} target="_blank" className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
            <Image src={img} alt={title} className='w-full h-auto' priority sizes="(max-width : 768px) 100vw,
            (max-width : 1200px) 50vw,
            33vw"/>
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-lime-50'>{title}</h2>
                </Link>
             <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>
             <div className='mt-2 flex items-center'>
                <Link href={github} target="_blank" className='w-10' ><GithubIcon /></Link>
                <Link href={link} target="_blank" className='ml-14 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark'>Visit Project</Link>
             </div>
            </div>
        </article>
    )
}
const Project = ({type ,title,img,link,github}) => {

    return(
        <article className='w-full flex flex-col items-center justify-between relative rounded-2xl border border-solid border-dark bg-light p-6 dark:bg-dark dark:border-light' >
            <Link href={link} target="_blank" className='w-full cursor-pointer overflow-hidden rounded-lg'>
            <Image src={img} alt={title} className='w-full h-auto priority sizes="(max-width : 768px) 100vw,
            (max-width : 1200px) 50vw,
            33vw"'/>
            </Link>
            <div className='w-full flex flex-col items-start justify-between pl-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-lime-50'>{title}</h2>
                </Link>
             <div className='mt-2 flex items-center'>
                <Link href={github} target="_blank" className='w-10 ' ><GithubIcon /></Link>
                <Link href={link} target="_blank" className='ml-14 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark'>Visit</Link>
             </div>
            </div>
        </article>
    )
}




const project = () => {
  return (
    <>
      <Head >
        <title>Rishabh | Project</title>
        <meta name="description" content='Projects'/>
      </Head>
      <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
            <Animatedtext text="Pioneering Innovation in Web Development" className='mb-16'/>
            <div className='grid grid-cols-12 gap-24'>
                <div className='col-span-12'>
                 <FeaturedProject 
                 title="Cloud Computing Cell Website"
                 img={Cloud}
                 summary="As a ReactJS developer I contributed to a college society project, I enhanced the website's visual appeal in several ways. Consider refining the color scheme, typography, and layout to create a more aesthetically pleasing design. I also incorporate graphics and animations to elevate the user experience. Additionally, optimizing the website's performance to ensure fast loading times and responsive functionality can further improve its overall quality."
                 link ="/"
                 github="/"
                 type ="Feature Project"


                 />
                </div>
                <div className="col-span-6">
                <Project 
                 title="Game"
                 img={Simon}
                 link ="/"
                 github="/"
                 type ="Learning Project"


                 />
                </div>
                <div className='col-span-6'>
                <Project 
                 title="TingDog"
                 img={Tindog}
                 link ="/"
                 github="/"
                 type ="Learning Project"


                 />
                </div>
                <div className="col-span-6">
                <Project 
                 title="Portfolio"
                 img={mysite}
                 link ="/"
                 github="/"
                 type ="Learning Project"


                 />
                </div>
                <div className='col-span-6'>
                <Project 
                 title="Virtual Drum"
                 img={Drum}
                 link ="/"
                 github="/"
                 type ="Learning Project"


                 />
                </div>
                <div className="col-span-6">
                <Project 
                 title="Dicee Game"
                 img={Dicee}
                 link ="/"
                 github="/"
                 type ="Learning Project"


                 />
                </div>
                <div className='col-span-6'>
                <Project 
                 title="E-commerce"
                 img={EchoVision}
                 link ="/"
                 github="/"
                 type ="Future Project"


                 />
                </div>
                <div className='col-span-12'>
                 <FeaturedProject 
                 title="TuneTide"
                 img={TuneTide}
                summary="TuneTide is my ongoing project to build a music player website using ReactJS hooks, API functions, Redux, and Tailwind. Through this project, I am expanding my skills and knowledge in web development and refining my design and development abilities. TuneTide reflects my commitment to excellence in software development, and I am dedicated to delivering a high-quality product that meets and exceeds the expectations of its users."
                link ="/"
                 github="/"
                 type ="Feature Project"


                 />
                </div>
            </div>
        </Layout>
      </main>
    </>
  )
}

export default project
