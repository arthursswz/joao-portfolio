"use client";

import { motion } from "framer-motion";

export default function ArduinoAutomation() {
  return (
    <main className="min-h-screen bg-[#050816] text-white px-6 md:px-20 py-24">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >

        {/* TITLE */}
        <p className="text-cyan-400 tracking-[0.4em] uppercase text-sm mb-5">
          // Hardware Project
        </p>

        <h1
          className="
            text-5xl
            md:text-7xl
            font-black
            text-fuchsia-500
            mb-10
          "
        >
          Arduino Automation
        </h1>

        {/* IMAGE */}
        <img
          src="/arduino.jpg"
          alt="Arduino Automation"
          className="
            w-full
            rounded-3xl
            border
            border-cyan-500/20
            mb-14
          "
        />

        {/* CONTENT */}
        <div
          className="
            border
            border-cyan-500/20
            bg-black/30
            backdrop-blur-xl
            rounded-3xl
            p-10
            space-y-8
          "
        >

          {/* ABOUT */}
          <div>

            <h2 className="text-3xl font-bold text-cyan-400 mb-4">
              Sobre o Projeto
            </h2>

            <p className="text-zinc-300 leading-relaxed text-lg">
              Projeto de automação desenvolvido utilizando Arduino,
              sensores eletrônicos e programação em C para monitoramento
              e controle de componentes físicos em tempo real.
            </p>

          </div>

          {/* TECH */}
          <div>

            <h2 className="text-3xl font-bold text-cyan-400 mb-4">
              Tecnologias
            </h2>

            <div className="flex flex-wrap gap-3">

              {[
                "Arduino",
                "C",
                "Sensores",
                "Eletrônica",
                "Automação",
              ].map((tech) => (

                <span
                  key={tech}
                  className="
                    px-4
                    py-2
                    rounded-full
                    bg-cyan-400/10
                    border
                    border-cyan-400/20
                    text-cyan-300
                  "
                >
                  {tech}
                </span>

              ))}

            </div>

          </div>

          {/* FEATURES */}
          <div>

            <h2 className="text-3xl font-bold text-cyan-400 mb-4">
              Funcionalidades
            </h2>

            <ul className="space-y-3 text-zinc-300 text-lg">

              <li>✔ Leitura de sensores</li>
              <li>✔ Controle eletrônico em tempo real</li>
              <li>✔ Integração hardware/software</li>
              <li>✔ Programação embarcada em C</li>
              <li>✔ Estrutura modular</li>

            </ul>

          </div>

          {/* BUTTON */}
          <a
            href="https://github.com/arthursswz"
            target="_blank"
            className="
              inline-block
              mt-4
              px-8
              py-4
              rounded-2xl
              border
              border-fuchsia-500/40
              text-fuchsia-400
              hover:bg-fuchsia-500/10
              transition
            "
          >
            VIEW REPOSITORY →
          </a>

        </div>

      </motion.div>

    </main>
  );
}