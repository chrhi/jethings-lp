"use client";

import MaxWidthWrapper from "./max-with-wrapper";
import { Button } from "./ui/button";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="relative mt-20 py-12 overflow-hidden">
      <MaxWidthWrapper>
        <div className="w-full min-h-[600px] flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 w-full items-start">
            {/* Left Column */}
            <div className="flex flex-col justify-center lg:col-span-3">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Pushing 
                commerce{" "}
                <span className="text-[#45acab] inline-block min-w-[250px]">
                  <TypeAnimation
                    sequence={[
                      "further and beyond",
                      2000,
                      "to new heights",
                      2000,
                      "into the future",
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                Optimize your inventory, track your products in real time, and
                make informed decisions with our intuitive stock management
                platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
            
                <button className="button-33 cursor-pointer" role="button">
  <span className="text">
    Join the waitlist
  </span>
</button>
                <Button disabled variant="outline">
                  View demo
                </Button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex items-center justify-center lg:col-span-2">
              <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px]">
                <Image
                  alt="all apps"
                  src="/all-apps.svg"
                  fill
                  priority
                  sizes="(max-width: 768px) 350px, (max-width: 1200px) 450px, 450px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
