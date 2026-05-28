"use client";

import React from "react";
import { motion } from "framer-motion";

import Terminal from "@/components/uy/ui/terminal";
import Projects from "@/components/uy/sections/projects";
import CyberRain from "@/components/uy/ui/cyber-rain";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050816] text-white flex overflow-hidden relative">
       {/* CYBER RAIN BACKGROUND */}
      <CyberRain />

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
></div>

{/* NOISE */}
<div
  className="
    absolute
    inset-0
    opacity-[0.03]
    mix-blend-screen
    bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]
  "
></div>


        <div
  className="
    absolute
    inset-0
    bg-[linear-gradient(to_right,#00ffff08_1px,transparent_1px),linear-gradient(to_bottom,#00ffff08_1px,transparent_1px)]
    bg-[size:80px_80px]
    opacity-30
  "
></div>

{/* NOISE */}
<div
  className="
    absolute
    inset-0
    opacity-[0.03]
    mix-blend-screen
    bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]
  "
></div>

        {/* GRID */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.08]
            bg-[linear-gradient(to_right,#00ffff22_1px,transparent_1px),linear-gradient(to_bottom,#00ffff22_1px,transparent_1px)]
            bg-[size:60px_60px]
          "
        ></div>

        {/* GLOW TOP */}
        <div className="absolute top-[-300px] left-[-300px] w-[700px] h-[700px] bg-fuchsia-600 rounded-full blur-[220px] opacity-20"></div>

        {/* GLOW BOTTOM */}
        <div className="absolute bottom-[-300px] right-[-300px] w-[700px] h-[700px] bg-cyan-500 rounded-full blur-[220px] opacity-20"></div>

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
                text-5xl
                font-black
                text-fuchsia-500
                tracking-widest
              "
            >
              JA
            </h1>

            <div className="flex items-center gap-3 mt-5">

              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>

              <p className="text-cyan-400 text-sm tracking-[0.3em] uppercase">
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
              ["// PROJECTS", "#projects"]
            ].map(([name, link]) => (

              <a
                key={name}
                href={link}
                className="
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
              </a>

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
      <main className="flex-1 overflow-hidden">

        {/* HERO */}
        <motion.header
          id="home"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
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

          <div className="max-w-6xl">

            <p
              className="
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
              Estudante de Engenharia da Computação apaixonado por
              desenvolvimento web, interfaces futuristas, automação
              e integração entre software e hardware.
            </p>

            {/* BUTTONS */}
            <div className="flex gap-4 mt-12 flex-wrap">

              <a
                href="#projects"
                className="
                  px-8
                  py-4
                  border
                  border-fuchsia-500
                  rounded-xl
                  text-fuchsia-400
                  hover:bg-fuchsia-500/10
                   hover:border-fuchsia-500
                  hover:shadow-[0_0_35px_rgba(217,70,239,.25)]
                  transition
                  duration-300
                  tracking-widest
                "
              >
                VIEW PROJECTS
              </a>

              <a
                href="#about"
                className="
                  px-8
                  py-4
                  border
                  border-cyan-500/30
                  rounded-xl
                  text-cyan-400
                  hover:bg-cyan-500/10
                  transition
                  duration-300
                  tracking-widest
                "
              >
                ABOUT SYSTEM
              </a>

            </div>

          </div>

        </motion.header>

        {/* TERMINAL */}
        <div className="px-6 md:px-20 -mt-20 relative z-10">
          <Terminal />
        </div>

        {/* ABOUT */}
        <motion.section
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="max-w-6xl mx-auto px-6 md:px-20 py-28"
        >

          <div
            className="
              border
              border-cyan-500/20
              rounded-3xl
              bg-black/30
              backdrop-blur-xl
              p-10
            "
          >

            <p className="text-cyan-400 tracking-[0.3em] text-sm mb-6">
              // PROFILE_DATA
            </p>

            <h2 className="text-4xl font-bold mb-8 text-fuchsia-500">
              Sobre Mim
            </h2>

            <p className="text-zinc-300 leading-relaxed text-lg max-w-4xl">
              Sou estudante de Engenharia da Computação,
              apaixonado por desenvolvimento de software,
              automação, interfaces futuristas e soluções
              criativas que unem hardware e software.
              Estou constantemente aprendendo novas tecnologias
              e construindo projetos modernos para evoluir
              minhas habilidades como desenvolvedor.
            </p>

          </div>

        </motion.section>

        {/* EXPERIENCE */}
        <section
          id="experience"
          className="max-w-6xl mx-auto px-6 md:px-20 py-20"
        >

          <p className="text-cyan-400 tracking-[0.3em] text-sm mb-6">
            // EXPERIENCE_LOG
          </p>

          <h2 className="text-4xl font-bold mb-12 text-fuchsia-500">
            Experiências
          </h2>

          <div className="space-y-8">

            {[
              {
                title: "FIEMA",
                role: "Estagiário de Comunicação Interna",
                period: "2024 - 2025"
              },
              {
                title: "G20 Brazil",
                role: "Intérprete Freelancer",
                period: "2024"
              },
              {
                title: "Fotosombra",
                role: "Estagiário de Marketing Digital",
                period: "2024"
              }
            ].map((exp, index) => (

              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="
                  border
                  border-cyan-500/20
                  bg-black/30
                  backdrop-blur-xl
                  p-8
                  rounded-3xl
                  hover:border-fuchsia-500
                  transition
                  duration-300
                "
              >

                <h3 className="text-2xl font-bold text-cyan-400">
                  {exp.title}
                </h3>

                <p className="text-fuchsia-400 mt-2">
                  {exp.role}
                </p>

                <p className="text-zinc-500 mt-4">
                  {exp.period}
                </p>

              </motion.div>

            ))}

          </div>

        </section>

        {/* SKILLS */}
        <motion.section
          id="skills"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-6xl mx-auto px-6 md:px-20 py-24"
        >

          <p className="text-cyan-400 tracking-[0.3em] text-sm mb-6">
            // SKILLS_MATRIX
          </p>

          <h2 className="text-4xl font-bold mb-12 text-fuchsia-500">
            Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {[
              ["JavaScript", "90%"],
              ["React / Next.js", "85%"],
              ["Tailwind CSS", "80%"],
              ["HTML / CSS", "95%"],
              ["Git & GitHub", "75%"],
              ["C Language", "70%"]
            ].map(([skill, value]) => (

              <div
                key={skill}
                className="
                  border
                  border-cyan-500/20
                  rounded-2xl
                  bg-black/30
                  backdrop-blur-xl
                  p-6
                "
              >

                <div className="flex justify-between mb-4">

                  <span className="text-lg">
                    {skill}
                  </span>

                  <span className="text-cyan-400">
                    {value}
                  </span>

                </div>

                <div className="w-full h-3 bg-zinc-900 rounded-full overflow-hidden">

                  <div
                    className="h-full bg-cyan-400 rounded-full"
                    style={{ width: value }}
                  ></div>

                </div>

              </div>

            ))}

          </div>

        </motion.section>

        {/* PROJECTS */}
        <Projects />

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