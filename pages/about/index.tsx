import Link from 'next/link'
import Layout from '../../components/Layout'
import AboutSection from '../../components/AboutSection'
import { useEffect, useState, useRef } from 'react'
import robo from '../../assets/robo.jpg'
import cinma from '../../assets/cinma.jpg'
import face from '../../assets/face.jpg'

const AboutSections = [
    {
      title:'About Me',
      image:face,
      imgtitle:"Joy From A Hat Purchase",
      imgdesc:"Hokkaido, Japan",
      content:"My name is Nicholas Raffone and I'm a Japanese/Italian student studying computer science at NYU Abu Dhabi. I love designing and building webapps, as well as just coding dumb programs for fun. I'm mostly self-taught in the full-stack world, completing little projects as I kept growing my knowledge in the React world. These days, I'm getting into powerlifting and I hope to break the UAE record for the 66kg weight class by 2024."
    },
    {
      title:'Exploring Computers',
      image:robo,
      imgtitle:"ASIJ VEX Robotics Competition",
      imgdesc:"Tokyo, Japan",
      content:"I got into programming when I was around 16, just because of my interest in computers. I started coding in Python and made a bunch of small projects for fun. Then, getting involved in the robotics club in high school, I was able to put my code into something that mattered to me. I've been sharpening my skills ever since and working on projects that get released to the whole world."
    },
    {
      title:'Moving Forwards',
      image:cinma,
      imgtitle:"Candid Candid",
      imgdesc:"Abu Dhabi, UAE",
      content:"I don't really know where I want to end up in the future, but it'd probably be somwhere quaint. I've always dreamed of opening my own tech-themed cafe and owning a ferret, so I'm looking forward to finding the intersection between those. I want to keep engaging myself in the tech ecosystem and build lasting connections that allow me to make an impact on this world."
    }
]

const AboutPage = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [curr, setCurr] =  useState(0)
  const Downarrow = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className='h-5 w-5 fill-gray-700'>
    <path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"/></svg>
  const Uparrow = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className='h-5 w-5 rotate-180 fill-gray-700'>
  <path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"/></svg>

  useEffect(() => {
    if(ref?.current)
      ref.current.addEventListener("scroll", ()=>setCurr(Math.round(AboutSections.length * Math.floor((ref.current?.scrollTop||0))/(ref.current?.scrollHeight||1))), { passive: true });

    return () => {
      if(ref?.current)
        ref.current.removeEventListener("scroll", ()=>setCurr(Math.round(AboutSections.length * Math.floor((ref.current?.scrollTop||0))/(ref.current?.scrollHeight||1))));
    };
  }, []);
  return(
    <Layout title="About">
      <div className="min-h-screen md:grid grid-cols-2">
        <div className='hidden md:block mx-20 w-fit py-20'>
          <h1 className={`text-6xl mb-5 tracking-widest `}>{AboutSections[curr].title}</h1>
          <p className='text-xl'>{AboutSections[curr].content}</p>
        </div>

        <div className="border-l flex-col md:px-5 overflow-scroll h-screen snap-y snap-mandatory relative" ref={ref}>

          {
            AboutSections.map((section,index)=><AboutSection key={index} reversed={index%2===1} image={section.image} imgtitle={section.imgtitle} imgdesc={section.imgdesc} content={section.content}/>)
          }

        <div className={`${curr===AboutSections.length-1?"opacity-0":"opacity-100"} fixed right-4 bottom-4 animate-bounce duration-300`}>
          {Downarrow}
        </div>

        <div className={`${curr===0?"opacity-0":"opacity-100"} fixed top-[4em] md:top-12 ml-4 md:ml-0 left-50 animate-bounce duration-300`}>
          {Uparrow}
        </div>

        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
