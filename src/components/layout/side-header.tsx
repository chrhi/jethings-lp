"use client"

import { useState, useEffect } from "react"
import MaxWidthWrapper from "../max-with-wrapper"
import { Button } from "../ui/button"
import { Navigation } from "./navigations"

export const SiteHeader = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className={`w-full h-[70px] sticky top-0 z-50 bg-white overflow-visible transition-all duration-200 ${isScrolled ? "border-b" : ""}`}>
     

 <MaxWidthWrapper className="flex items-center justify-between h-[70px] relative overflow-visible gap-8">
  <div className="h-full w-fit flex items-center justify-start gap-x-4 overflow-visible">
      <h1 className="font-bold text-2xl">Jethings</h1>
  
  </div>


     <div className="flex-1 flex items-center justify-start ">
       <Navigation />
     </div>

  <div className="flex items-center justify-start gap-x-4 h-full">
    <Button  variant={"link"}>
        contact us
    </Button>
     


   
<button className="button-33 cursor-pointer" role="button">
  <span className="text">Request Demo</span>
</button>




  </div>
 </MaxWidthWrapper>
        </div>
    )
}