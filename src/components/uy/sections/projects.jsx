"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Luna Flores Backend",
    description:
      "Sistema backend desenvolvido em Java com estrutura REST API e integração com banco de dados.",
    image: "/luna.jpg",
    tech: ["Java", "Spring Boot", "MySQL", "REST API"],
    link: "/projects/luna-flores",
    color: "fuchsia",
  },

  {
    title: "Arduino Automation",
    description:
      "Projeto de automação utilizando Arduino, sensores e integração hardware/software.",
    image: "/arduino.jpg",
    tech: ["Arduino", "C", "Hardware", "Sensors"],
    link: "/projects/arduino-automation",
    color: "cyan",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 md:px-20 py-28"
    >

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >

        <p className="text-cyan-400 tracking-[0.3em] text-sm mb-5">
          // PROJECT_ARCHIVE
        </p>

        <h2
          className="
            text-5xl
            font-black
            mb-16
            text-fuchsia-500
          "
        >
          Projetos
        </h2>

      </motion.div>

      <div className="grid lg:grid-cols-2 gap-10">

        {projects.map((project, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -8,
              scale: 1.01,
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
              transition
              duration-500
            "
          >

            <div
              className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition
                duration-700
                bg-gradient-to-br
                from-cyan-500/10
                to-fuchsia-500/10
              "
            />

            {/* IMAGE */}
            <div className="relative overflow-hidden">

              <img
                src={project.image}
                alt={project.title}
                className="
                  w-full
                  h-[280px]
                  object-cover
                  transition
                  duration-700
                  group-hover:scale-105
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#050816]
                  via-transparent
                  to-transparent
                "
              />

            </div>

            {/* CONTENT */}
            <div className="p-8 relative z-10">

              <h3
                className="
                  text-3xl
                  font-black
                  mb-4
                  text-white
                "
              >
                {project.title}
              </h3>

              <p
                className="
                  text-zinc-400
                  leading-relaxed
                  mb-8
                "
              >
                {project.description}
              </p>

              {/* TECH */}
              <div className="flex flex-wrap gap-3 mb-8">

                {project.tech.map((tech) => (

                  <span
                    key={tech}
                    className="
                      px-4
                      py-2
                      text-sm
                      rounded-full
                      border
                      border-cyan-500/20
                      bg-cyan-500/10
                      text-cyan-300
                    "
                  >
                    {tech}
                  </span>

                ))}

              </div>

              {/* BUTTON */}
              <Link
                href={project.link}
                className="
                  inline-flex
                  items-center
                  gap-3
                  px-6
                  py-4
                  rounded-xl
                  border
                  border-fuchsia-500/40
                  text-fuchsia-400
                  hover:bg-fuchsia-500/10
                  hover:shadow-[0_0_30px_rgba(217,70,239,.25)]
                  transition
                  duration-300
                  tracking-widest
                "
              >
                VIEW PROJECT →
              </Link>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}