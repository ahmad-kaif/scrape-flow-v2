"use client";
import React, { ReactNode } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Props {
  children: ReactNode;
  content: ReactNode;
  side?: "top" | "bottom" | "left" | "right";
}

function TooltipWrapper(props: Props) {
  if (!props.content){
    console.log('heloooo')
    return props.children;
  }
  return (
    <div>
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>{props.children}</TooltipTrigger>
          <TooltipContent side={props.side}>{props.content}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

export default TooltipWrapper;
