import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
};

export default function Button({
  children,
  className,
  variant = "primary",
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300",
        variant === "primary" &&
          "bg-blue-500 hover:bg-blue-600 text-white",
        variant === "secondary" &&
          "border border-white/10 hover:border-white/20 text-white",
        className
      )}
    >
      {children}
    </button>
  );
}