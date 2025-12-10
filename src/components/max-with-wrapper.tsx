import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-7xl overflow-x-hidden px-4 sm:px-6 md:px-8",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
