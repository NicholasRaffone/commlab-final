import { useRef, useEffect } from "react";
import useOnScreen from "../utils/useOnScreen";
import {ExperienceInt} from '../utils/interfaces'
import Image from 'next/image'

interface ExperienceItemInt extends ExperienceInt{
    reversed:boolean
}

const ExperienceItem = ({reversed, company, position, time, desc, location, image}:ExperienceItemInt) =>{
    const ref = useRef<HTMLDivElement>(null)
    const {isIntersecting} = useOnScreen(ref);
    return(
        <>
        {
            !reversed&&
            <div className="md:block hidden h-64 w-full" />
        }

        <div className={`duration-500 delay-200 h-64 w-full flex ${reversed?"flex-row-reverse":""} items-center border-none ${isIntersecting?"":reversed?"opacity-0 -translate-x-5":"opacity-0 translate-x-5"}`}>
            <div className="w-40 h-40 relative shrink-0">
                <Image src={image} objectFit='cover' layout='fill'/>
            </div>
            <div className="flex flex-col justify-center px-5">
              <p ref={ref} className={`text-3xl ${reversed?"text-right":""}`}>{company} <span className="text-gray-700 text-lg">{location}</span></p>
              <p className={`text-lg italic text-gray-600 ${reversed?"text-right":""}`}>{position}</p>
              <p className={`${reversed?"text-right":""}`}>{desc}</p>
            </div>
        </div>
        {
            reversed&&
            <div className="md:block hidden h-64 w-full" />
        }
        </>
    )

}
export default ExperienceItem;
