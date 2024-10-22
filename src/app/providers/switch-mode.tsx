"use client";

import * as React from "react";
import { Moon, MoonIcon, MoonStarIcon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SunIcon } from "@radix-ui/react-icons";
import { Switch } from "@radix-ui/react-switch";

export function ModeSwitch() {
  const { setTheme } = useTheme();

  return (
    <Switch>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-6 w-6 px-0 ml-2">
          <SunIcon className="h-[1.2rem] w-[1.2rem] absolute rotate-0 scale-100 transition-all dark:opacity-0 text-yellow-500" />
          <MoonIcon className="rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-blue-600" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </Switch>
  );
}
