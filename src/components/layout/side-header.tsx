import MaxWidthWrapper from "../max-with-wrapper"
import { Button } from "../ui/button"
import { Navigation } from "./navigations"

export const SiteHeader = () => {

    return (
        <div className="w-full h-[70px] z-20 ">
     

 <MaxWidthWrapper className="flex items-center justify-between   h-[70px] ">
  <div className="h-full w-full flex items-center justify-start gap-x-4">
      <h1 className="font-bold text-2xl">Jethings</h1>
     <Navigation />
  </div>

  <div className="flex items-center justify-start gap-x-4 h-full">
    <Button >
        contact us
    </Button>
       <Button >
        request demo
    </Button>
  </div>
 </MaxWidthWrapper>
        </div>
    )
}