import Image from "next/image";
import MaxWidthWrapper from "./max-with-wrapper";
import { Button } from "./ui/button";

interface HeaderProps {}

export default function Header() {
  return (
    <div className={"w-full h-[70px]  overflow-y-hidden"}>
      <MaxWidthWrapper className="h-full flex overflow-y-hidden items-center justify-between">
        <Image
          src={"/logos/3.svg"}
          alt={"loading the data"}
          width={100}
          height={50}
        />

        <Button>Rejoindre la liste d’attente</Button>
      </MaxWidthWrapper>
    </div>
  );
}
