import { cn } from "@/lib/utils";
import React from "react";

function Containers({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-6xl x;:max-w-7xl px-8", className)}>
      {children}
    </div>
  );
}

export default Containers;
