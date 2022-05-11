import { useState, useEffect } from "react"

export default function useOnScreen(ref:React.RefObject<HTMLDivElement>) {

    const [isIntersecting, setIntersecting] = useState(false)
  
  
    useEffect(() => {    
    const observer = new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting)
      )
    if(ref.current)
        observer.observe(ref.current)
      // Remove the observer as soon as the component is unmounted
      return () => { observer.disconnect() }
    }, [])
  
    return {isIntersecting}
  }

