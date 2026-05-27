"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Cyberpunk",
    description:
      "Portfolio futurista desenvolvido com Next.js, Tailwind e Framer Motion.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    github: "https://github.com/arthursswz",
    status: "ONLINE",
  },

  {
    title: "Sistema Web",
    description:
      "Aplicação web moderna focada em performance e interface responsiva.",
    tech: ["React", "JavaScript", "CSS"],
    github: "https://github.com/arthursswz",
    status: "ACTIVE",
  },

  {
    title: "Arduino Automation",
    description:
      "Projeto de automação utilizando Arduino e sensores eletrônicos.",
    tech: ["Arduino", "C", "Hardware"],
    github: "https://github.com/arthursswz",
    status: "BUILDING",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 md:px-20 py-28"
    >
      {/* TITLE */}
      <div className="mb-16">

        <p className="text-cyan-400 tracking-[0.3em] text-sm mb-4">
          // PROJECT_DATABASE
        </p>

        <h2
          className="
            text-5xl
            font-black
            text-fuchsia-500
            tracking-wide
          "
        >
          Projetos
        </h2>

      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

        {projects.map((project, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-cyan-500/20
              bg-black/40
              backdrop-blur-xl
              p-8
              transition-all
              duration-500
              hover:border-fuchsia-500
              hover:shadow-[0_0_40px_rgba(217,70,239,.25)]
            "
          >

            {/* GLOW */}
            <div
              className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition
                duration-500
                bg-gradient-to-br
                from-cyan-500/5
                to-fuchsia-500/10
              "
            />

            {/* TOP BAR */}
            <div className="flex items-center justify-between mb-8 relative z-10">

              <div className="flex gap-2">

                <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
                <div className="w-3 h-3 rounded-full bg-fuchsia-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>

              </div>

              <span
                className="
                  text-xs
                  border
                  border-green-500/30
                  bg-green-500/10
                  text-green-400
                  px-3
                  py-1
                  rounded-full
                  tracking-widest
                "
              >
                {project.status}
              </span>

            </div>

            {/* TITLE */}
            <h3
              className="
                text-3xl
                font-black
                mb-5
                text-white
                relative
                z-10
              "
            >
              {project.title}
            </h3>

            {/* DESCRIPTION */}
            <p
              className="
                text-zinc-400
                leading-relaxed
                mb-8
                relative
                z-10
              "
            >
              {project.description}
            </p>

            {/* TECHS */}
            <div className="flex flex-wrap gap-3 mb-10 relative z-10">

              {project.tech.map((tech) => (

                <span
                  key={tech}
                  className="
                    text-xs
                    px-4
                    py-2
                    rounded-xl
                    border
                    border-cyan-500/20
                    bg-cyan-500/10
                    text-cyan-300
                    tracking-wide
                  "
                >
                  {tech}
                </span>

              ))}

            </div>

            {/* BUTTONS */}
            <div className="flex gap-4 relative z-10">

              <a
                href={project.github}
                target="_blank"
                className="
                  flex-1
                  text-center
                  py-3
                  rounded-xl
                  border
                  border-fuchsia-500/40
                  text-fuchsia-400
                  hover:bg-fuchsia-500/10
                  hover:shadow-[0_0_25px_rgba(217,70,239,.25)]
                  transition
                  duration-300
                  tracking-widest
                  text-sm
                "
              >
                GITHUB
              </a>

              <a
                href={project.github}
                target="_blank"
                className="
                  flex-1
                  text-center
                  py-3
                  rounded-xl
                  border
                  border-cyan-500/30
                  text-cyan-400
                  hover:bg-cyan-500/10
                  hover:shadow-[0_0_25px_rgba(34,211,238,.25)]
                  transition
                  duration-300
                  tracking-widest
                  text-sm
                "
              >
                LIVE DEMO
              </a>

            </div>

            {/* CORNER DETAIL */}
            <div
              className="
                absolute
                top-0
                right-0
                w-24
                h-24
                border-t
                border-r
                border-cyan-500/20
                rounded-tr-3xl
              "
            />

          </motion.div>

        ))}

      </div>
    </section>
  );
}