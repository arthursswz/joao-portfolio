"use client";

import {
  Home,
  User,
  FolderGit2,
  Briefcase,
  Mail,
  Cpu,
} from "lucide-react";

const links = [
  {
    name: "HOME",
    icon: Home,
    href: "#",
  },

  {
    name: "SOBRE",
    icon: User,
    href: "#about",
  },

  {
    name: "SKILLS",
    icon: Cpu,
    href: "#skills",
  },

  {
    name: "EXPERIÊNCIA",
    icon: Briefcase,
    href: "#experience",
  },

  {
    name: "PROJETOS",
    icon: FolderGit2,
    href: "#projects",
  },

  {
    name: "CONTATO",
    icon: Mail,
    href: "#contact",
  },
];

export default function Sidebar() {
  return (
    <aside
      className="
        fixed
        left-0
        top-0
        h-screen
        w-[260px]
        bg-black/40
        backdrop-blur-xl
        border-r
        border-cyan-400/10
        flex
        flex-col
        justify-between
        px-6
        py-8
        z-50
      "
    >

      {/* LOGO */}
      <div>

        <div
          className="
            border
            border-pink-500/30
            rounded-2xl
            p-6
            mb-10
            shadow-[0_0_30px_rgba(255,0,128,.15)]
          "
        >

          <h1
            className="
              text-5xl
              font-black
              text-pink-500
              tracking-widest
            "
          >
            JA
          </h1>

          <p className="text-cyan-400 mt-4 text-sm tracking-wider">
            SYSTEM ONLINE
          </p>

        </div>

        {/* NAV */}
        <nav className="space-y-3">

          {links.map((link) => {

            const Icon = link.icon;

            return (
              <a
                key={link.name}
                href={link.href}
                className="
                  group
                  flex
                  items-center
                  gap-4
                  px-4
                  py-4
                  rounded-xl
                  border
                  border-transparent
                  hover:border-pink-500/30
                  hover:bg-pink-500/5
                  transition
                  duration-300
                "
              >

                <Icon
                  size={20}
                  className="
                    text-zinc-400
                    group-hover:text-pink-400
                    transition
                  "
                />

                <span
                  className="
                    text-sm
                    tracking-wider
                    text-zinc-300
                    group-hover:text-pink-300
                  "
                >
                  // {link.name}
                </span>

              </a>
            );
          })}

        </nav>

      </div>

      {/* MINI TERMINAL */}
      <div
        className="
          border
          border-cyan-400/10
          rounded-2xl
          p-4
          bg-black/30
          text-xs
          font-mono
          text-cyan-400
          space-y-2
        "
      >

        <p>{">"} initializing portfolio...</p>
        <p>{">"} loading modules...</p>
        <p className="text-green-400">
          ✔ access granted
        </p>

      </div>

    </aside>
  );
}