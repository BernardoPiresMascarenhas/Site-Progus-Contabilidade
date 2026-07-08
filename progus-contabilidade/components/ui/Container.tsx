import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

/** Wrapper de largura máxima com padding horizontal consistente. */
export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl container-px", className)}>
      {children}
    </div>
  );
}
