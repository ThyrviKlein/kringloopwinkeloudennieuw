import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface LinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "type"> {
  href: string;
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  children?: React.ReactNode;
  icon?: LucideIcon;
}

export default function TLink({
  href,
  variant,
  size = "default",
  className,
  children,
  icon: Icon,
  ...props
}: LinkProps) {
  return (
    <Button
      asChild
      variant={variant}
      size={size}
      className={cn(buttonVariants({ variant, size }), className)}
    >
      <Link href={href} {...props}>
        {Icon && <Icon className="h-4 w-4" />}
        {children}
      </Link>
    </Button>
  );
}
