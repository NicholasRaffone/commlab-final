import React from 'react'
import Image from 'next/image'

interface AboutSectionInt{
    reversed:boolean;
    image:any; //<- smth wrong about can't find staticimagedata type
    imgtitle:string;
    imgdesc:string;
    content:string;
}

const AboutSection = ({reversed, image, imgtitle, imgdesc, content}:AboutSectionInt) =>{
    return(
        <div className="flex-1 h-screen md:flex items-center snap-center pt-10" >
            <div className={`py-12 md:py-0 md:flex items-center w-full duration-300 group h-fit ${reversed?"flex-row-reverse":""}`}>
              <div className="w-full h-64 md:h-48 lg:h-80 md:w-48 lg:w-80 flex items-center object-cover overflow-hidden mb-3 md:mb-0 relative">
                  <Image src={image} objectFit='cover' layout='fill'/>
              </div>
              <div className={`${reversed?"pr-5":"pl-5"} flex-1 ${reversed?"md:group-hover:-translate-x-3":"md:group-hover:translate-x-3"} duration-300 `}>
                <h1 className={`text-4xl cursor-default text-gray-600 group-hover:text-gray-800 ${reversed?"text-right":""}`}>{imgtitle}</h1>
                <h2 className={`text-xl cursor-default italic text-gray-500 group-hover:text-gray-600 ${reversed?"text-right":""}`}>{imgdesc}</h2>
                <p className="block md:hidden p-2">{content}</p>
              </div>
            </div>
          </div>
    )
}
export default AboutSection;
