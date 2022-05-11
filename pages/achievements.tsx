import React, {useState} from 'react'
import Layout from '../components/Layout';
import { AchievementInt } from '../utils/interfaces';
import Image from 'next/image';
import robodub from '../assets/morerobo.jpg'
import htg from '../assets/htg.jpg'
import asg1 from '../assets/asg1.png'
import asg2 from '../assets/asg2.png'
import asg3 from '../assets/asg3.png'
import asg4 from '../assets/asg4.png'

const achievementlist:AchievementInt[] = [
    {
        title: "Hack the Globe Finalists",
        time: "2022",
        desc: "I got together with some friends in a group of 3 to complete in Hack the Globe, a Hackathon around sustainability and economic empowerment. Our idea, EmergentIQ, got us into the finals, for which I created the mobile demo",
        image:htg
    },
    {
        title: "VEX Robotics Champions",
        time: "2022",
        desc: "Lead team 901J to many success, as co-captain and programmer. Our final season (pre-COVID) had us going 22 wins and 2 losses, winning 2 competitions and runner-up in another. We placed into two international competitions and recieved numerous awards.",
        image:robodub
    },
    {
        title: "CommLab Assignment 1",
        time: "2022",
        desc: "Nathan and I made a video depicting the duality of man in a serious style, and we each made a website that displayed our video in an interactive manner",
        image:asg1,
        link:'https://nicholasraffone.github.io/commlab_asg1/'
    },
    {
        title: "CommLab Assignment 2",
        time: "2022",
        desc: "For our second assignment, we made an interactive web comic that told the story of soliders at war, with a slight twist at the end.",
        image:asg2,
        link:'https://dktpt44.github.io/ComLab-ComicStrip/'
    },
    {
        title: "CommLab Assignment 3",
        time: "2022",
        desc: "For our third assignment, we made an interactive stand up experience featuring Guy, an aspiring stand-up comedian. His stand up was not very well recieved when presented in class.",
        image:asg3,
        link:'https://nicholasraffone.github.io/CommLab-Asg3/'
    },
    {
        title: "CommLab Assignment 4",
        time: "2022",
        desc: "For our last assignment, we made a treasure hunt game based on a video we created, where the user goes on a quest to find some campus cash after they are found lacking.",
        image:asg4,
        link:'https://ava-creates.github.io/treasure_hunt/'
    },

]

const Achievements = () =>{
    const [selected, setSelected] = useState(-1);
    const upangle = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className='h-[7%] mx-auto scale-x-110 fill-slate-700'><path d="M352 352c-8.188 0-16.38-3.125-22.62-9.375L192 205.3l-137.4 137.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25C368.4 348.9 360.2 352 352 352z"/></svg>
    return(
        <Layout title='Achievements'>
            <div className={`min-h-screen pt-16 ${selected!==0?"overflow-hidden":""}`}>
                <h1 className="text-4xl text-center mt-5">What I've Worked On</h1>
                <h1 className="text-lg text-violet-500 text-center italic my-2">Stuff I've been up to</h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-20 px-12 my-8 justify-items-center">
                    {
                        achievementlist.map((a,index)=>{
                            return(
                                <div className="relative bg-red-50 w-72 h-72 flex flex-col items-center cursor-pointer group overflow-hidden shadow-xl rounded-t-xl" 
                                    key={index} onClick={()=>setSelected(index===selected?-1:index)}>
                                    <Image src={a.image} objectFit='cover' layout='fill'/>
                                    <div className={`${selected===index?"translate-y-0":"translate-y-[93%] group-hover:translate-y-[82%]"} duration-300 rounded-t-xl absolute bg-white h-full w-72 bottom-0 px-4`}>
                                        {upangle}
                                        <p className='text-md'>{a.title}</p>
                                        <p className='text-sm py-2'>{a.desc}</p>
                                        {a.link&&<p className='text-sm'>Click <a className="text-blue-700 underline" href={a.link} target="_blank">here</a> to find the website</p>}
                                    </div>
                                </div>
                            )
                        })
                        
                    }
                </div>
            </div>
        </Layout>
    )
}
export default Achievements;
