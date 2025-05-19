import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

interface TooltipsProps {
  children: React.ReactNode;
  description: string;
  side: "left" | "right" | "top" | "bottom";
}

const Tooltips = ({ children, description, side = "top" }: TooltipsProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent side={side}>
          <span className="text-sm">{description}</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Tooltips;
