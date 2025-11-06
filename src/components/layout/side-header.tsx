import MaxWidthWrapper from "../max-with-wrapper"
import { Button } from "../ui/button"
import { Navigation } from "./navigations"

export const SiteHeader = () => {

    return (
        <div className="w-full h-[70px] sticky top-0 z-50 bg-white border-b overflow-visible">
     

 <MaxWidthWrapper className="flex items-center justify-between h-[70px] relative overflow-visible">
  <div className="h-full w-full flex items-center justify-start gap-x-4 overflow-visible">
      <h1 className="font-bold text-2xl">Jethings</h1>
     <div className="overflow-visible">
       <Navigation />
     </div>
  </div>

  <div className="flex items-center justify-start gap-x-4 h-full">
    <Button  variant={"link"}>
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