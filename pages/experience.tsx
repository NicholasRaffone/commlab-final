import Layout from '../components/Layout'
import ExperienceItem from '../components/ExperienceItem';
import {ExperienceInt} from '../utils/interfaces'
import Callback from '../assets/callback.png'
import Hokan from '../assets/hokan.png'
import Faithwise from '../assets/faithwise.png'
import VEX from '../assets/vex.jpeg'

const Experience = () => {
  
  const down = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className='w-4 h-auto'><path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"/></svg>  

  const ExperienceList:ExperienceInt[] = [
    {
      company:'Callback',
      position:'Full Stack Developer',
      time:'Mar 2022 - Present',
      desc:'Building Callback\'s website and handling purchases through Stripe',
      location:'Tokyo, Japan',
      image:Callback
    },
    {
      company:'Faithwise',
      position:'Tech Lead',
      time:'Jan 2022 - Mar 2022',
      desc:'Developed a MERN & Cloud solution for a crypto education startup',
      location:'Abu Dhabi, UAE',
      image:Faithwise
    },
    {
      company:'Hokan',
      position:'Data Engineer Intern',
      time:'Oct 2020 - May 2021',
      desc:'Building serverless apps and AWS cloud infrastracture',
      location:'Tokyo, Japan',
      image:Hokan
    },
    {
      company:'VEX Robotics',
      position:'Club Leader & Co-Captain',
      time:'Oct 2018 - May 2020',
      desc:'Coding robots for international competitions',
      location:'Tokyo, Japan',
      image:VEX
    },
  ]

  return(
  <Layout title="Experience">
      <div className="flex flex-col justify-center pt-[40vh] pb-[20vh] relative">
        <h1 className='text-center text-4xl'>Where I've done tech stuff at</h1>
        <h1 className='text-center text-lg italic text-violet-500 mt-2'>Fullstack, cloud computing, and more</h1>
        <div className="absolute bottom-5 w-screen flex justify-center animate-bounce">{down}</div>
      </div>
      <div className="mx-auto md:grid grid-cols-2 w-11/12 md:w-full lg:w-5/6 mb-12 justify-items-center md:gap-x-5 lg:gap-x-20">
        {
          ExperienceList.map((e, index)=>
            <ExperienceItem reversed={index%2!==0} company={e.company} position={e.position} time={e.time} desc={e.desc} location={e.location} image={e.image}/>
          )
        }
      </div>
  </Layout>
  )
}

export default Experience
