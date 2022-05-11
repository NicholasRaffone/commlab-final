import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {Twirl as Hamburger} from 'hamburger-react'

const Navbar = () =>{
    const router = useRouter()
    const [contactOpen, setContactOpen] = useState(false)
    const [isOpen, setOpen] = useState(false)
    const angleDown = <svg xmlns="http://www.w3.org/2000/svg" className={`fill-violet-500 inline w-2 ${contactOpen?"":"-rotate-90"} duration-300 ml-1`} viewBox="0 0 384 512"><path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"/></svg>
    const spotify = <path d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"/>
    const linkedin = <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
    const instagram = <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
    const email = <path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"/>
    
    const getSVG = (path:JSX.Element, small:boolean) =>{
        return(
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={`inline ${small?"w-4":"w-7"} fill-violet-500`}>
                {path}
            </svg>
        )
    }
    
    const contactItems = [
        {
            title:"Email",
            img:email,
            href:"mailto:nr2302@nyu.edu",
            delay:'delay-0'
        },
        {
            title:"LinkedIn",
            img:linkedin,
            href:"https://www.linkedin.com/in/nicholasraffone/",
            delay:'delay-75'
        },
        {
            title:"Instagram",
            img:instagram,
            href:"https://instagram.com/iamchechalaga",
            delay:'delay-150'
        },
        {
            title:"Spotify",
            img:spotify,
            href:"https://open.spotify.com/user/nicholas.raffone?si=daf1d1c5d5ef4fdd",
            delay:'delay-225'
        },
    ]
    
    return(
        <>
            <div className={`${isOpen?"opacity-100":'opacity-0 invisible'} z-10 duration-500 flex md:hidden fixed h-screen w-screen bg-white bg-opacity-70 backdrop-blur px-10 py-14 flex-col divide-y divide-violet-500`}>
                <Link href="/">
                    <a className='text-xl py-5 tracking-widest text-violet-500' onClick={()=>setOpen(false)}>
                        Home
                    </a>
                </Link>
                <Link href="/about">
                    <a className='text-xl py-5 tracking-widest text-violet-500' onClick={()=>setOpen(false)}>
                        About
                    </a>
                </Link>
                <Link href="/experience">
                    <a className='text-xl py-5 tracking-widest text-violet-500' onClick={()=>setOpen(false)}>
                        Experience
                    </a>
                </Link>
                <Link href='/achievements'>
                    <a className='text-xl py-5 tracking-widest text-violet-500' onClick={()=>setOpen(false)}>
                        Achievements
                    </a>
                </Link>
                {
                    contactItems.map((item, index)=>(
                        <a href={item.href} key={index} rel="noreferrer" className='flex items-center' target="_blank" onClick={()=>setOpen(false)}>
                            <span className='text-xl py-5 tracking-widest text-violet-500 flex-1'>{item.title}</span>
                            {getSVG(item.img, false)}
                        </a>
                    ))
                }
                
            </div>
        <div className='w-screen flex space-x-10 py-2 px-5 lg:px-16 fixed justify-end bg-white z-50'>
            <div className="block md:hidden">
                <Hamburger toggled={isOpen} toggle={setOpen} color="#8b5cf6"/>
            </div>
            <Link href="/">
                <div className='hidden md:block cursor-pointer relative group'>
                    <a className="text-violet-500 text-md" onClick={()=>setContactOpen(false)}>Home</a>
                    <div className={`h-[1px] ${router.pathname==='/'?"w-full":'w-0'} bg-violet-500 bottom-[2px] absolute duration-300 group-hover:w-full`}></div>
                </div>
            </Link>
            <Link href="about">
                <div className='hidden md:block cursor-pointer relative group'>
                    <a className="text-violet-500 text-md" onClick={()=>setContactOpen(false)}>About</a>
                    <div className={`h-[1px] ${router.pathname==='/about'?"w-full":'w-0'} bg-violet-500 bottom-[2px] absolute duration-300 group-hover:w-full`}></div>
                </div>
            </Link>
            <Link href="experience" >
                <div className='hidden md:block cursor-pointer relative group'>
                    <a className="text-violet-500 text-md" onClick={()=>setContactOpen(false)}>Experience</a>
                    <div className={`h-[1px] ${router.pathname==='/experience'?"w-full":'w-0'} bg-violet-500 bottom-[2px] absolute duration-300 group-hover:w-full`}></div>
                </div>
            </Link>
            <Link href="achievements">
                <div className='hidden md:block cursor-pointer relative group'>
                    <a className="text-violet-500 text-md" onClick={()=>setContactOpen(false)}>Achievements</a>
                    <div className={`h-[1px] ${router.pathname==='/achievements'?"w-full":'w-0'} bg-violet-500 bottom-[2px] absolute duration-300 group-hover:w-full`}></div>
                </div>
            </Link>
            <div className='hidden md:block relative'> 
                <p className='text-violet-500 text-md cursor-pointer select-none flex items-center' onClick={()=>setContactOpen(!contactOpen)}>Contact {angleDown}</p>
                <div className={`bg-white duration-300 absolute shadow-xl border border-gray-100 flex flex-col right-0 mt-2 ${contactOpen?"opacity-100":"opacity-0 invisible"}`} onClick={()=>setContactOpen(false)}>
                    {
                        contactItems.map((item, index)=>{
                            return(
                                <div className={`cursor-pointer ${contactOpen?"translate-y-0 opacity-100":"-translate-y-1 opacity-0 invisible"} duration-200 ${item.delay}`} key={index}>
                                    <a href={item.href} target="_blank" rel="noreferrer" className='duration-200 hover:bg-gray-100 text-sm text-violet-500 hover:text-violet-700 p-2 flex items-center space-x-2'>
                                        <span className='flex-1'>{item.title}</span>
                                        {getSVG(item.img, true)}
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
        </>
    )
}
export default Navbar;
