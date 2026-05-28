"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["HOME", "#home"],
    ["SOBRE", "#about"],
    ["SKILLS", "#skills"],
    ["EXPERIÊNCIA", "#experience"],
    ["PROJETOS", "#projects"],
    ["CONTATO", "#contact"],
  ];

  return (
    <>
      {/* BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="
          fixed
          top-5
          right-5
          z-[100]
          lg:hidden
          p-3
          rounded-xl
          bg-black/40
          border
          border-cyan-400/20
          backdrop-blur-xl
        "
      >
        <Menu className="text-cyan-400" />
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="
                fixed
                inset-0
                bg-black/70
                backdrop-blur-sm
                z-[90]
              "
            />

            {/* MENU */}
            <motion.div
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: 300 }}
              transition={{ duration: 0.4 }}
              className="
                fixed
                top-0
                right-0
                h-screen
                w-[280px]
                bg-[#050816]
                border-l
                border-cyan-400/20
                z-[100]
                p-8
                flex
                flex-col
              "
            >
              <div className="flex justify-between items-center mb-12">

                <h2 className="text-2xl font-black text-fuchsia-500">
                  MENU
                </h2>

                <button onClick={() => setOpen(false)}>
                  <X className="text-cyan-400" />
                </button>

              </div>

              <div className="flex flex-col gap-5">

                {links.map(([name, href]) => (
                  <a
                    key={name}
                    href={href}
                    onClick={() => setOpen(false)}
                    className="
                      border
                      border-cyan-400/10
                      rounded-xl
                      p-4
                      hover:border-fuchsia-500
                      hover:bg-fuchsia-500/10
                      transition
                      tracking-widest
                    "
                  >
                    {name}
                  </a>
                ))}

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}