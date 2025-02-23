"use client";

import * as React from "react";
import {
  MonitorCog,
  Moon,
  MoonIcon,
  MoonStar,
  Sun,
  SunDim,
} from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-6 w-6 px-0 ml-2">
          <SunDim className="h-[1.2rem] w-[1.2rem] absolute rotate-0 scale-100 transition-all dark:opacity-0 text-orange-600" />
          <MoonIcon className="rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-orange-600" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")} className="gap-2">
          <Sun className="h-6 w-6" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className="gap-2">
          <MoonStar className="h-6 w-6" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} className="gap-2">
          <MonitorCog className="h-6 w-6" />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
