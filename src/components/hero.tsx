"use client";

import Image from "next/image";
import MaxWidthWrapper from "./max-with-wrapper";
import { Button } from "./ui/button";

export default function Hero() {
  return (
 <>
    <section className="relative   py-20   curved-edge  ">
      <MaxWidthWrapper className="h-fit ">
        <div className="flex flex-col items-center  text-center gap-y-8 ">
          {/* HEADLINE */}
          <h1 className="relative font-caveat text-[4.8rem] md:text-[5.2rem] font-bold leading-tight text-[#0F1117]">
           Pushing commerce further and {" "}
            <span className="relative inline-block">
              <span className="relative z-10">beyond.</span>
              <Image
                src="/odoo-assets/highlights/yellow_highlight_bold_05.svg"
                alt="highlight"
                width={600}
                height={60}
                className="absolute bottom-[12%] left-0 w-full z-0"
                priority
              />
            </span>
          </h1>

          {/* SUBHEADLINE */}
          <p className="relative font-semibold font-caveat text-[1.8rem] md:text-[4.6rem] text-[#0F1117]">
           Powerful, intuitive, yet{" "}
            <span className="relative inline-block">
              <span className="relative z-10">affordable!</span>
              <Image
                src="/odoo-assets/highlights/blue_highlight_01.svg"
                alt="highlight"
                width={300}
                height={40}
                className="absolute bottom-[10%] left-0 w-full z-0"
                priority
              />
            </span>
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button className="button-33 cursor-pointer font-medium px-8 py-2 rounded-md transition text-lg">
              Start now – It’s free
            </button>
            <Button className=" cursor-pointer " variant={"ghost"}>
              Meet an advisor
            </Button>
          </div>

          {/* PRICE LABEL WITH ARROW */}
          <div className="absolute mt-64 right-36  ">
           <Image src={"/odoo-assets/arrow_doodle_1.svg"} width={50} height={100} alt="arrow"/>

            {/* price text */}
            <div className="text-[#45ACAB] font-caveat text-2xl md:text-3xl rotate-[-6deg] ">
              <span className="italic text-3xl !font-[700]">50 DZD / commond</span>
              <br />
              <span className="text-xl md:text-2xl !font-[700]">for each customer</span>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>



      
    </section>



 </>
  );
}
