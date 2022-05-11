import Link from 'next/link'
import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Image from 'next/image'
import VEX from '../assets/vex.jpeg'

const IndexPage = () => {
  const [loading, setLoading] = useState(false);
  const refresh = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-4 h-4 fill-gray-500 cursor-pointer'><path d="M464 16c-17.67 0-32 14.31-32 32v74.09C392.1 66.52 327.4 32 256 32C161.5 32 78.59 92.34 49.58 182.2c-5.438 16.81 3.797 34.88 20.61 40.28c16.89 5.5 34.88-3.812 40.3-20.59C130.9 138.5 189.4 96 256 96c50.5 0 96.26 24.55 124.4 64H336c-17.67 0-32 14.31-32 32s14.33 32 32 32h128c17.67 0 32-14.31 32-32V48C496 30.31 481.7 16 464 16zM441.8 289.6c-16.92-5.438-34.88 3.812-40.3 20.59C381.1 373.5 322.6 416 256 416c-50.5 0-96.25-24.55-124.4-64H176c17.67 0 32-14.31 32-32s-14.33-32-32-32h-128c-17.67 0-32 14.31-32 32v144c0 17.69 14.33 32 32 32s32-14.31 32-32v-74.09C119.9 445.5 184.6 480 255.1 480c94.45 0 177.4-60.34 206.4-150.2C467.9 313 458.6 294.1 441.8 289.6z"/></svg>
  const [songTitle, setSongTitle] = useState([] as string[])
  const [songArtist, setSongArtist] = useState([] as string[])
  const [songIMG, setSongIMG] = useState([] as string[])
  const getSongs = async() =>{
    try{
      const data = await fetch('https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=nraffone&api_key=94cf6de10f0575802817cba590017759&format=json')
      const jsonData = await data.json()
      const titlelist = [];
      const artistslist = [];
      const imglist = [];
      if(jsonData?.recenttracks?.track){
        for(const track of jsonData?.recenttracks?.track.slice(0,6)){
          titlelist.push(track.name)
          artistslist.push(track.artist['#text'])
          imglist.push(track.image[2]['#text'])
        }
        setSongTitle(titlelist)
        setSongArtist(artistslist)
        setSongIMG(imglist)
      }
    }catch(e){
      console.log(e)
    }
  }
 useEffect(()=>{getSongs()},[])
  return(
    <Layout title="Home">
      <div className="pt-16 md:pt-0 h-screen md:grid grid-cols-2 mb-5 md:mb-0">
        <div className='flex flex-col justify-center mx-20 w-fit md:h-auto h-96'>
          <h1 className='text-6xl mb-5 tracking-widest text-center md:text-left'>Hi! I'm Nicholas</h1>
          <p className='text-2xl text-violet-500 text-center md:text-left'>I like x, y, z</p>
          <div className="relative w-fit self-end md:my-0 my-2">
            <p className='cursor-pointer group'>
              <Link href="/about">
                <p className='text-violet-500 text-center md:text-left'>
                  Learn More <span className='transform animate-bouncex inline-block'>→</span>
                </p>
              </Link>
              <div className="h-[1px] w-0 group-hover:w-full absolute bottom-[2px] bg-violet-400 duration-300" />
            </p>
          </div>
          
        </div>
        <div className="md:border-l">
          <div className="flex justify-center items-center h-full">
            <div className="w-96 h-64 bg-gray-900 rounded-xl p-5">
                <div className="flex items-center">
                  <p className='text-gray-400 text-sm flex-1'>Currently Playing</p>
                  <div className={`${loading?"animate-rotate":""}`} onClick={()=>{setLoading(true);getSongs().then(()=>setLoading(false))}}>
                    {refresh}
                  </div>
                </div>
                <div className="flex items-center h-4/5">
                  <div className="h-24 w-24 relative shrink-0 bg-black">
                    {songIMG?.length>0&&<Image src={songIMG[0]} objectFit='cover' layout='fill'/>}
                  </div>
                  <div className='pl-3 overflow-hidden'>
                    <p className='text-white text-2xl whitespace-nowrap'>{songTitle.length>0?songTitle[0]:"nicho's mix"}</p>
                    <p className='text-gray-400 text-md whitespace-nowrap'>{songArtist.length>0?songArtist[0]:"nicho"}</p>
                  </div>
                </div>
                <div className="w-full h-1 bg-gray-500 my-auto relative">
                  <div className="absolute h-2 w-2 rounded-full bg-gray-500 top-[-2px] left-5"></div>
                </div>
            </div>
          </div>
          {/**img here */}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
