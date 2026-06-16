"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Terminal() {

  const lines = [
  "> booting backend environment...",
  "> loading API services...",
  "> connecting to database...",
  "> checking automation modules...",
  "✔ backend system online"
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

      if (
        lines[currentLine] &&
        currentChar > lines[currentLine].length
      ) {
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
        boxShadow: "0 0 80px rgba(0,255,255,.25)"
      }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="
        max-w-5xl
        mx-auto
        mt-32
        border
        border-cyan-400/20
        rounded-3xl
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
          px-5
          py-4
          border-b
          border-cyan-400/20
          bg-black/40
        "
      >

        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>

        <p className="ml-4 text-sm text-cyan-400 tracking-[0.3em] uppercase">
          arthur@portfolio:~$
        </p>

      </div>

      {/* TERMINAL CONTENT */}
      <div className="p-8 md:p-10 font-mono">

        {/* TYPING LINES */}
        <div className="space-y-2 mb-10">

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

        {/* INFO */}
        <div className="space-y-4 text-zinc-300">

         <p>
  <span className="text-cyan-400">$</span>{" "}
  Nome: João Arthur de Oliveira Silva
</p>

<p>
  <span className="text-cyan-400">$</span>{" "}
  Formação: Engenharia da Computação
</p>

<p>
  <span className="text-cyan-400">$</span>{" "}
  Área: Backend • Automação • Banco de Dados • Infraestrutura
</p>

<p>
  <span className="text-cyan-400">$</span>{" "}
  Stack: Node.js • TypeScript • MySQL • Java • Git
</p>

<p>
  <span className="text-cyan-400">$</span>{" "}
  Serviços: APIs REST • RPAs • Integrações • Sistemas internos
</p>

<p>
  <span className="text-cyan-400">$</span>{" "}
  Status: Building backend solutions...
  <span className="animate-pulse text-cyan-400 ml-2">
    █
  </span>
</p>

        </div>

      </div>

    </motion.div>
  );
}