"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Terminal() {
    const lines = [
  "> initializing portfolio...",
  "> loading developer profile...",
  "> checking technologies...",
  "✔ access granted"
];

const [displayedLines, setDisplayedLines] = useState([]);

useEffect(() => {
  let currentLine = 0;
  let currentChar = 0;

  const interval = setInterval(() => {

    setDisplayedLines(prev => {
      const updated = [...prev];

    if (lines[currentLine]) {
  updated[currentLine] =
    lines[currentLine].slice(0, currentChar);
}

      return updated;
    });

    currentChar++;

    if (currentChar > lines[currentLine].length) {
      currentLine++;
      currentChar = 0;
    }

    if (currentLine >= lines.length) {
      clearInterval(interval);
    }

  }, 40);

  return () => clearInterval(interval);

}, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
                scale: 1.01,
                  boxShadow: "0 0 80px rgba(0,255,255,.25)"}}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="
      max-w-4xl
      mx-auto
      mt-32
      border
      border-cyan-400/20
      rounded-2xl
      overflow-hidden
      shadow-[0_0_60px_rgba(0,217,255,.18)]
      backdrop-blur-xl
      bg-[#050816]/90
      "
    >
      {/* TOP BAR */}
      <div
        className="
        flex
        items-center
        gap-2
        px-4
        py-3
        border-b
        border-cyan-400/40
        bg-black/30
        "
      >
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>

            <div className="space-y-2">

  {displayedLines.map((line, index) => (

    <p
      key={index}
      className={
        line.includes("✔")
          ? "text-green-400"
          : "text-cyan-400"
      }
    >
      {line}
    </p>

  ))}

</div>
        <div className="pt-4 space-y-3 text-zinc-300">

          <p>
            <span className="text-cyan-400">$</span> Nome:
            João Arthur de Oliveira Silva
          </p>

          <p>
            <span className="text-cyan-400">$</span> Formação:
            Engenharia da Computação
          </p>

          <p>
            <span className="text-cyan-400">$</span> Foco:
            Frontend • Hardware • Automação
          </p>

          <p>
            <span className="text-cyan-400">$</span> Stack:
            JavaScript • React • Next.js • Tailwind
          </p>

          <p>
             <span className="text-cyan-400">$</span>
                Status: Building futuristic interfaces...
                <span className="animate-pulse text-cyan-400">
    █
                </span>
          </p>

        </div>
      </div>
    </motion.div>
  );
}