import Hero from "@/components/hero";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";

export default function Page() {
  return (
    <>
    <div className="flex flex-col gap-y-8 items-center min-h-screen h-fit">

        <Hero />
      <div className="w-full  min-h-[400px] h-fit">
       <div className="max-w-2xl mx-auto grid grid-cols-6 gap-8">

        {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24].map(item => {

        return (
       <div className="flex flex-col gap-y-2">
      <div className="w-[100px] h-[100px] bg-orange-600 rounded-xl"> </div>
          <p className="text-xs font-bold text-center">item Name</p>
        </div>
        )
       })}
        </div>


      </div>




       <div className="w-full h-[100px] max-w-2xl my-8  mx-auto flex items-center justify-between relative">
<div className="flex items-center justify-start gap-2 relative ">
  <Image src={"/odoo-assets/corner_4.svg"} alt="the image " width={70} height={70} className="mb-8  absolute -left-10 -top-10"  />

<Switch />
<p className="text-sm text-start font-bold ">continue without jethings</p>
</div>

<div className="text-green-800 font-bold text-end flex items-center justify-end gap-x-4 ">
  <p className="font-bold text-sm">View all Apps </p>
 <Image src={"/odoo-assets/secondary_arrow_sm_03.svg"} alt="the image " width={40} height={40} />
</div>
</div>


         

         <div className="flex flex-col gap-y-4 items-center">
          <h2 className="font-semibold text-4xl ">Imagine a vast collection of business apps at your disposal.</h2>
         <div className="flex flex-col items-center gap-y-2">
           <p className="text-xl">
            Got something to improve? There is an app for that.
          </p>
          <p className="text-xl">No complexity, no cost, just a one-click install.</p>
         </div>
         <div className="flex flex-col items-center my-4 gap-y-2">
           <p className="text-lg">Each app simplifies a process and empowers more people.</p>
          <p className="text-lg">Imagine the impact when everyone gets the right tool for the job, with perfect integration.</p>
         </div>
         </div>



         <div className="w-full rounded-l-full bg-white  shadow-2xl h-[900px] ml-18 relative my-32 flex flex-col gap-y-8 items-center pt-20 ">

          <div className="w-[700px] h-[150px]  absolute right-0 -top-20 ">
                  <div className="relative flex items-center justify-start ">


                    {/* <Avatar className="w-[70px] h-[70px] absolute top-5 left-15 z-20"  >
  <AvatarImage src="/jethings-openghraf.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar> */}

      <Image src={"/odoo-assets/highlights/bg_yellow.svg"} alt="yellow image" width={250} height={100} />
       <div className="w-fit h-fit py-4 px-6  shadow-lg rounded-full bg-white z-10 absolute left-20 ">

            <p className="text-lg text-start  ">If you simplify everything, you can do anything!</p>

            <span className="text-gray-400 text-xs">- Bill McDermott, former CEO of SAP</span>
       </div>
             

                  </div>
          </div>





           <h1 className="relative font-caveat text-[4.8rem] md:text-[5.2rem] font-bold leading-tight text-[#0F1117]">
                     Level up your quality of  {" "}
                      <span className="relative inline-block">
                        <span className="relative z-10">work</span>
                        <Image
                          src="/odoo-assets/highlights/green_highlight_03.svg"
                          alt="highlight"
                          width={600}
                          height={60}
                          className="absolute bottom-[12%] left-0 w-full z-0"
                          priority
                        />
                      </span>
                    </h1>


                    <div className="w-full h-[600px] max-w-4xl bg-blue-600">

                    </div>

         </div>



         <div className="w-full h-[400px]">

         </div>



    </div>
    </>
  );
}
