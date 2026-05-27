"use client";

import { motion } from "framer-motion";
import projects from "@/data/projects";

export default function Projects() {

  return (

    <section
     id="projects"
    className="max-w-6xl mx-auto px-6 py-32">

      <h2
        className="
        text-4xl
        font-bold
        mb-16
        text-cyan-400
        "
      >
        Projetos
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {projects.map((project, index) => (

          <motion.div
            key={index}

            whileHover={{
              y: -10,
              scale: 1.02
            }}

            className="
            border
            border-cyan-400/20
            bg-[#081018]/70
            backdrop-blur-xl
            rounded-2xl
            p-6
            shadow-[0_0_30px_rgba(0,255,255,.06)]
            transition
            "
          >

            <h3 className="text-2xl font-bold text-white mb-4">
              {project.title}
            </h3>

            <p className="text-zinc-400 mb-6 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">

              {project.tech.map((tech, i) => (

                <span
                  key={i}
                  className="
                  px-3
                  py-1
                  rounded-full
                  bg-cyan-400/10
                  border
                  border-cyan-400/20
                  text-cyan-300
                  text-sm
                  "
                >
                  {tech}
                </span>

              ))}

            </div>

            <a
              href={project.github}
              target="_blank"
              className="
              text-cyan-400
              hover:text-cyan-300
              transition
              "
            >
              View Project →
            </a>

          </motion.div>

        ))}

      </div>

    </section>
  );
}