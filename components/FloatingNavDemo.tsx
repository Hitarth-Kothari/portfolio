"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconUser, IconBriefcase, IconFileText, IconMessageCircle } from "@tabler/icons-react";

export function FloatingNavDemo() {
  const navItems = [
    {
      name: "About",
      link: "#about",
      icon: <IconUser className="h-4 w-4 text-neutral-200" />,
    },
    {
      name: "Projects",
      link: "#projects_page",
      icon: <IconBriefcase className="h-4 w-4 text-neutral-200" />,
    },
    {
      name: "Experience",
      link: "#experience",
      icon: <IconFileText className="h-4 w-4 text-neutral-200" />,
    },
  ];

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
