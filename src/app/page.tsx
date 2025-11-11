import { Features } from "@/components/feature"
import Hero from "@/components/hero"
import Image from "next/image"

export default function Page() {
  return (
    <>
      <div className="flex flex-col items-center min-h-screen h-fit ">
        <div className="w-full h-[70px] bg-white" />

        <Hero />
        <Features />

        <div className="flex flex-col gap-y-4 items-center px-4 text-center relative">
          <div className="absolute -left-8 sm:-left-12 top-0 hidden md:block">
            <Image
              src="/odoo-assets/arrow_doodle_3.svg"
              alt="decorative arrow"
              width={80}
              height={80}
              className="opacity-60"
            />
          </div>
          <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl max-w-4xl">
            Imagine a vast collection of business features at your disposal.
          </h2>
          <div className="flex flex-col items-center gap-y-2">
            <p className="text-base sm:text-lg md:text-xl">
              Got something to improve? There is feature for that.
            </p>
            <p className="text-base sm:text-lg md:text-xl">
              No complexity, no cost, just a one-click setup.
            </p>
          </div>
          <div className="flex flex-col items-center my-4 gap-y-2">
            <p className="text-sm sm:text-base md:text-lg">
              Each feature simplifies a process and empowers more people.
            </p>
            <p className="text-sm sm:text-base md:text-lg">
              Imagine the impact when everyone gets the right tool for the job,
              with perfect integration.
            </p>
          </div>
        </div>

        <div className="w-full rounded-l-none md:rounded-l-full bg-white shadow-2xl min-h-[600px] md:h-[900px] md:ml-0 lg:ml-[4.5rem] relative my-16 sm:my-24 md:my-32 flex flex-col gap-y-6 md:gap-y-8 items-center pt-12 sm:pt-16 md:pt-20 px-4 sm:px-6 md:px-0">
          <div className="w-full sm:w-[500px] md:w-[700px] h-auto md:h-[150px] absolute right-0 -top-12 sm:-top-16 md:-top-20 px-4 sm:px-0">
            <div className="relative flex items-center justify-start ">
              <Image
                src={"/odoo-assets/highlights/bg_yellow.svg"}
                alt="yellow image"
                width={250}
                height={100}
                className="w-auto h-auto"
              />
              <div className="w-fit max-w-[200px] sm:max-w-none h-fit py-3 sm:py-4 px-4 sm:px-6 shadow-lg rounded-full bg-white z-10 absolute left-4 sm:left-12 md:left-20">
                <p className="text-sm sm:text-base md:text-lg text-start">
                  If you simplify everything, you can do anything!
                </p>

                <span className="text-gray-400 text-[10px] sm:text-xs">
                  - Bill McDermott, former CEO of SAP
                </span>
              </div>
            </div>
          </div>

          <h1 className="relative font-caveat text-3xl sm:text-4xl md:text-[4.8rem] lg:text-[5.2rem] font-bold leading-tight text-[#0F1117] px-4 text-center">
            Level up your quality of{" "}
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

          <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] max-w-4xl rounded-lg overflow-hidden shadow-2xl relative">
            <div className="absolute -bottom-4 -right-4 hidden md:block z-10">
              <Image
                src="/odoo-assets/fireworks_01a.svg"
                alt="decorative fireworks"
                width={100}
                height={100}
                className="opacity-40"
              />
            </div>
            <div className="grid grid-cols-2 gap-2 h-full p-2">
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="/app-screenshots/pos-order-management.png"
                  alt="POS Order Management"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="/app-screenshots/purchase-invoice.png"
                  alt="Purchase Invoice"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="/app-screenshots/sync-order.png"
                  alt="Sync Order"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="/app-screenshots/purchase-confirm.png"
                  alt="Purchase Confirm"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full min-h-[400px] px-4 py-16 relative">
          <div className="absolute top-0 right-0 hidden lg:block">
            <Image
              src="/odoo-assets/arrow_doodle_4.svg"
              alt="decorative arrow"
              width={120}
              height={120}
              className="opacity-50"
            />
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F1117]">
                  See our apps in action
                </h2>
                <p className="text-lg sm:text-xl text-gray-600">
                  Discover how our suite of business apps can transform your
                  workflow and boost productivity.
                </p>
              </div>
              <div className="flex-1 grid grid-cols-2 gap-4 max-w-md">
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <Image
                    src="/app-screenshots/pos-shifts.png"
                    alt="POS Shifts"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <Image
                    src="/app-screenshots/supplier-table.png"
                    alt="Supplier Table"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <Image
                    src="/app-screenshots/chose-fromold-new.png"
                    alt="Choose Form"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <Image
                    src="/app-screenshots/pos-openning.png"
                    alt="POS Opening"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
