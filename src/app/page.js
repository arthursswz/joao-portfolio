"use client";

import React from "react";
import { motion } from "framer-motion";

import Terminal from "@/components/uy/ui/terminal";
import Projects from "@/components/uy/sections/projects";
import CyberRain from "@/components/uy/ui/cyber-rain";
import MobileNavbar from "@/components/uy/ui/mobile-navbar";
import CursorGlow from "@/components/uy/ui/cursor-glow";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { useGlitch } from "@/hooks/useGlitch";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const experiences = [
  {
    title: "LC Promotora",
    role: "Estagiário de Desenvolvimento e TI",
    period: "05/2026 - Atualmente",
    description: [
      "Atuação no desenvolvimento de soluções internas para otimização de processos.",
      "Contato prático com TypeScript, Node.js, Puppeteer, MySQL, Git e sistemas corporativos.",
      "Apoio em demandas de TI, infraestrutura, redes e automação de rotinas internas.",
      "Aprendizado contínuo em desenvolvimento web, APIs, banco de dados e boas práticas de código.",
    ],
  },
  {
    title: "FIEMA",
    role: "Estagiário de Comunicação Interna",
    period: "10/2024 - 05/2025",
    description: [
      "Produção de textos, comunicados e conteúdos institucionais.",
      "Apoio em campanhas internas, organização de informações e comunicação corporativa.",
    ],
  },
  {
    title: "G20 Brazil",
    role: "Intérprete Freelancer",
    period: "2024",
    description: [
      "Atuação como intérprete em ambiente internacional.",
      "Comunicação em inglês com participantes e suporte durante atividades do evento.",
    ],
  },
  {
    title: "Fotosombra",
    role: "Estagiário de Marketing Digital",
    period: "02/2024 - 10/2024",
    description: [
      "Apoio na criação de conteúdos digitais, edição visual e presença online.",
      "Contato com rotinas de marketing, design, comunicação e redes sociais.",
    ],
  },
];

const skills = [
  ["JavaScript", "90%"],
  ["React / Next.js", "85%"],
  ["TypeScript", "80%"],
  ["HTML / CSS", "90%"],
  ["Tailwind CSS", "85%"],
  ["Node.js", "70%"],
  ["MySQL", "65%"],
  ["Git & GitHub", "75%"],
  ["C", "75%"],
  ["Java", "45%"],
];

const learning = [
  "TypeScript avançado",
  "React e Next.js",
  "APIs REST",
  "Banco de dados MySQL",
  "Redes de computadores",
  "Java e Spring Boot",
];

export default function Home() {

  return (
    <div className="min-h-screen bg-[#050816] text-white flex overflow-hidden relative">
      {/* BACKGROUND COMPONENTS */}
      <CyberRain />
      <CursorGlow />
      <div className="crt"></div>
      <MobileNavbar />

      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* CYBER LINES */}
        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(to_right,#00ffff08_1px,transparent_1px),linear-gradient(to_bottom,#00ffff08_1px,transparent_1px)]
            bg-[size:80px_80px]
            opacity-30
          "
        />

        {/* NOISE */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.03]
            mix-blend-screen
            bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]
          "
        />

        {/* GRID */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.08]
            bg-[linear-gradient(to_right,#00ffff22_1px,transparent_1px),linear-gradient(to_bottom,#00ffff22_1px,transparent_1px)]
            bg-[size:60px_60px]
          "
        />

        {/* GLOW TOP */}
        <div className="absolute top-[-300px] left-[-300px] w-[700px] h-[700px] bg-fuchsia-600 rounded-full blur-[220px] opacity-20" />

        {/* GLOW BOTTOM */}
        <div className="absolute bottom-[-300px] right-[-300px] w-[700px] h-[700px] bg-cyan-500 rounded-full blur-[220px] opacity-20" />
      </div>

      {/* SIDEBAR */}
      <aside
        className="
          w-[260px]
          min-h-screen
          border-r
          border-cyan-500/20
          bg-black/40
          backdrop-blur-xl
          p-6
          sticky
          top-0
          hidden
          lg:flex
          flex-col
          justify-between
          z-50
        "
      >
        <div>
          {/* LOGO */}
          <div className="mb-16">
            <h1
              className="
                cyber-font
                text-5xl
                font-black
                text-fuchsia-500
                tracking-widest
                drop-shadow-[0_0_25px_rgba(217,70,239,.7)]
              "
            >
              JA
            </h1>

            <div className="flex items-center gap-3 mt-5">
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />

              <p className="cyber-font text-cyan-400 text-xs tracking-[0.3em] uppercase">
                System Online
              </p>
            </div>
          </div>

          {/* NAVIGATION */}
          <nav className="space-y-4">
            {[
              ["// HOME", "#home"],
              ["// SOBRE", "#about"],
              ["// SKILLS", "#skills"],
              ["// EXPERIENCE", "#experience"],
              ["// PROJECTS", "#projects"],
            ].map(([name, link]) => (
              <motion.a
                key={name}
                href={link}
                whileHover={{ x: 8, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="
                  cyber-font
                  block
                  border
                  border-cyan-500/20
                  rounded-xl
                  px-5
                  py-4
                  hover:border-fuchsia-500
                  hover:shadow-[0_0_35px_rgba(217,70,239,.25)]
                  hover:text-fuchsia-400
                  hover:bg-fuchsia-500/10
                  transition
                  duration-300
                  tracking-widest
                  text-sm
                "
              >
                {name}
              </motion.a>
            ))}
          </nav>
        </div>

        {/* FOOTER SIDEBAR */}
        <div className="border-t border-cyan-500/10 pt-6">
          <div className="space-y-2 text-sm text-zinc-500">
            <p>© 2026 João Arthur</p>

            <p className="text-cyan-400">
              futuristic portfolio system
            </p>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 overflow-hidden relative z-10">
        {/* HERO */}
        <motion.header
          id="home"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="
            min-h-screen
            flex
            flex-col
            justify-center
            px-6
            md:px-20
            relative
          "
        >
          <div className="max-w-6xl grid lg:grid-cols-2 gap-16 items-center">
            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              className="relative flex justify-center lg:order-2"
            >
              {/* GLOW */}
              <div
                className="
                  absolute
                  w-[320px]
                  h-[320px]
                  rounded-full
                  bg-fuchsia-500/20
                  blur-[120px]
                "
              />

              {/* IMAGE */}
              <motion.div
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.3 }}
                className="
                  relative
                  w-[300px]
                  h-[300px]
                  rounded-full
                  overflow-hidden
                  border
                  border-cyan-400/30
                  shadow-[0_0_40px_rgba(0,255,255,.2)]
                  hover:shadow-[0_0_60px_rgba(217,70,239,.3)]
                "
              >
                <img
                  src="/foto.jpg"
                  alt="João Arthur"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>

            {/* TEXT */}
            <div className="lg:order-1">
              <p
                className="
                  cyber-font
                  uppercase
                  tracking-[0.4em]
                  text-cyan-400
                  text-sm
                  mb-8
                "
              >
                // SYSTEM OVERVIEW
              </p>

              <h1
                className="
                  cyber-font
                  text-5xl
                  md:text-8xl
                  font-black
                  leading-tight
                  tracking-wide
                  drop-shadow-[0_0_30px_rgba(255,255,255,.15)]
                "
              >
                João Arthur
              </h1>

              <h2
                className="
                  cyber-font
                  text-3xl
                  md:text-5xl
                  font-black
                  text-fuchsia-500
                  mt-2
                  tracking-[0.2em]
                  uppercase
                "
              >
                de Oliveira Silva
              </h2>

              <p
                className="
                  mt-10
                  text-zinc-400
                  text-lg
                  max-w-3xl
                  leading-relaxed
                "
              >
                Estudante de Engenharia da Computação e estagiário de TI,
                com foco em desenvolvimento web, integração com sistemas,
                automação de processos, banco de dados e soluções que conectam
                software, dados e infraestrutura.
              </p>

              {/* BUTTONS */}
              <div className="mt-12 flex flex-col items-start gap-4">
                <div className="flex gap-4 flex-wrap">
                  <motion.a
                    href="#projects"
                    whileHover={{ scale: 1.06, y: -4 }}
                    whileTap={{ scale: 0.96 }}
                    className="
                      cyber-font
                      px-8
                      py-4
                      border
                      border-fuchsia-500
                      rounded-xl
                      text-fuchsia-400
                      hover:bg-fuchsia-500/10
                      hover:border-fuchsia-500
                      hover:shadow-[0_0_35px_rgba(217,70,239,.35)]
                      transition
                      duration-300
                      tracking-widest
                    "
                  >
                    VIEW PROJECTS
                  </motion.a>

                  <motion.a
                    href="#about"
                    whileHover={{ scale: 1.06, y: -4 }}
                    whileTap={{ scale: 0.96 }}
                    className="
                      cyber-font
                      px-8
                      py-4
                      border
                      border-cyan-500/30
                      rounded-xl
                      text-cyan-400
                      hover:bg-cyan-500/10
                      hover:shadow-[0_0_35px_rgba(34,211,238,.25)]
                      transition
                      duration-300
                      tracking-widest
                    "
                  >
                    ABOUT SYSTEM
                  </motion.a>

                  <motion.a
                    href="https://github.com/SEU-USUARIO"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.06, y: -4 }}
                    whileTap={{ scale: 0.96 }}
                    className="
                      cyber-font
                      px-8
                      py-4
                      border
                      border-cyan-400
                      rounded-xl
                      text-cyan-300
                      hover:bg-cyan-500/10
                      hover:shadow-[0_0_35px_rgba(34,211,238,.35)]
                      transition
                      duration-300
                      tracking-widest
                    "
                  >
                    GITHUB
                  </motion.a>
                </div>

                <div className="w-full flex justify-center md:justify-start">
                  <motion.a
                    href="/curriculo.pdf"
                    whileHover={{ scale: 1.08, y: -4 }}
                    whileTap={{ scale: 0.96 }}
                    className="
                      cyber-font
                      px-10
                      py-4
                      border
                      border-fuchsia-500/50
                      rounded-xl
                      text-fuchsia-400
                      hover:bg-fuchsia-500/10
                      hover:shadow-[0_0_40px_rgba(217,70,239,.35)]
                      transition
                      duration-300
                      tracking-widest
                    "
                  >
                    DOWNLOAD CV
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </motion.header>

        {/* TERMINAL */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="px-6 md:px-20 -mt-20 relative z-10"
        >
          <Terminal />
        </motion.div>

        {/* ABOUT */}
        <motion.section
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-6xl mx-auto px-6 md:px-20 py-28"
        >
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="
              border
              border-cyan-500/20
              rounded-3xl
              bg-black/30
              backdrop-blur-xl
              p-10
              hover:border-fuchsia-500
              hover:shadow-[0_0_35px_rgba(217,70,239,.18)]
              transition
              duration-300
            "
          >
            <p className="cyber-font text-cyan-400 tracking-[0.3em] text-sm mb-6">
              // PROFILE_DATA
            </p>

            <h2 className="cyber-font text-4xl font-bold mb-8 text-fuchsia-500">
              Sobre Mim
            </h2>

            <p className="text-zinc-300 leading-relaxed text-lg max-w-4xl">
              Sou estudante de Engenharia da Computação e atuo como estagiário
              na área de TI. Tenho interesse por desenvolvimento de software,
              interfaces modernas, banco de dados, redes de computadores e
              soluções que melhoram processos reais dentro de empresas.
            </p>

            <p className="text-zinc-400 leading-relaxed text-lg max-w-4xl mt-6">
              Minha base começou com lógica de programação em C e atualmente
              venho evoluindo em tecnologias web como JavaScript, TypeScript,
              React, Next.js, Node.js, MySQL e Git. Busco construir projetos
              práticos, bem organizados e com impacto real.
            </p>
          </motion.div>
        </motion.section>

        {/* SKILLS */}
        <motion.section
          id="skills"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-6xl mx-auto px-6 md:px-20 py-24"
        >
          <p className="cyber-font text-cyan-400 tracking-[0.3em] text-sm mb-6">
            // SKILLS_MATRIX
          </p>

          <h2 className="cyber-font text-4xl font-bold mb-12 text-fuchsia-500">
            Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {skills.map(([skill, value], index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="
                  border
                  border-cyan-500/20
                  rounded-2xl
                  bg-black/30
                  backdrop-blur-xl
                  p-6
                  hover:border-fuchsia-500
                  hover:shadow-[0_0_35px_rgba(217,70,239,.18)]
                  transition
                  duration-300
                "
              >
                <div className="flex justify-between mb-4">
                  <span className="text-lg">
                    {skill}
                  </span>

                  <span className="cyber-font text-cyan-400">
                    {value}
                  </span>
                </div>

                <div className="w-full h-3 bg-zinc-900 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: value }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: 0.2,
                      ease: "easeOut",
                    }}
                    className="h-full bg-cyan-400 rounded-full shadow-[0_0_20px_rgba(34,211,238,.6)]"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* EXPERIENCE */}
        <section
          id="experience"
          className="max-w-6xl mx-auto px-6 md:px-20 py-20"
        >
          <p className="cyber-font text-cyan-400 tracking-[0.3em] text-sm mb-6">
            // EXPERIENCE_LOG
          </p>

          <h2 className="cyber-font text-4xl font-bold mb-12 text-fuchsia-500">
            Experiências
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="
                  border
                  border-cyan-500/20
                  bg-black/30
                  backdrop-blur-xl
                  p-8
                  rounded-3xl
                  hover:border-fuchsia-500
                  hover:shadow-[0_0_35px_rgba(217,70,239,.18)]
                  transition
                  duration-300
                "
              >
                <h3 className="cyber-font text-2xl font-bold text-cyan-400">
                  {exp.title}
                </h3>

                <p className="text-fuchsia-400 mt-2">
                  {exp.role}
                </p>

                <p className="text-zinc-500 mt-4">
                  {exp.period}
                </p>

                <ul className="mt-6 space-y-3">
                  {exp.description.map((item) => (
                    <li
                      key={item}
                      className="text-zinc-400 leading-relaxed"
                    >
                      <span className="text-cyan-400">&gt;</span> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CURRENT LEARNING */}
        <motion.section
          id="learning"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-6xl mx-auto px-6 md:px-20 py-20"
        >
          <p className="cyber-font text-cyan-400 tracking-[0.3em] text-sm mb-6">
            // CURRENT_LEARNING
          </p>

          <h2 className="cyber-font text-4xl font-bold mb-12 text-fuchsia-500">
            Atualmente Estudando
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {learning.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="
                  border
                  border-cyan-500/20
                  bg-black/30
                  backdrop-blur-xl
                  p-6
                  rounded-2xl
                  hover:border-fuchsia-500
                  hover:shadow-[0_0_35px_rgba(217,70,239,.18)]
                  transition
                  duration-300
                "
              >
                <p className="text-zinc-300">
                  <span className="text-cyan-400">&gt;</span> {item}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

      {/* PROJECTS */}
{/* PROJECTS */}
<motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  <Projects />
</motion.div>

        {/* FOOTER */}
        <footer
          className="
            mt-24
            border-t
            border-cyan-500/10
            py-10
            text-center
            text-zinc-500
          "
        >
          <p>
            contato: jonharthur777@gmail.com
          </p>

          <p className="mt-3 text-sm">
            © {new Date().getFullYear()} João Arthur
          </p>
        </footer>
      </main>
    </div>
  );
}