"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* Fundo Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-purple-600 rounded-full blur-[200px] opacity-30"></div>
        <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-indigo-600 rounded-full blur-[200px] opacity-30"></div>
      </div>

      {/* Header */}
      <motion.header
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.8 }}
        className="text-center py-20 px-6"
      >
        <h1 className="text-4xl md:text-5xl font-bold">
          João Arthur de Oliveira Silva
        </h1>

        <p className="mt-4 text-lg text-gray-300">
          Estudante de Engenharia da Computação
        </p>

        <div className="flex justify-center gap-6 mt-6 text-sm">
          {[
            ["LinkedIn", "https://www.linkedin.com/in/joaothur/"],
            ["GitHub", "https://github.com/arthursswz"],
            ["WhatsApp", "https://w.app/0c9oxi"]
          ].map(([name, link]) => (
            <a
              key={name}
              href={link}
              target="_blank"
              className="hover:text-purple-400 transition"
            >
              {name}
            </a>
          ))}
        </div>
      </motion.header>

      {/* Sobre */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto px-6 py-16"
      >
        <h2 className="text-3xl font-semibold mb-6 text-purple-400">
          Sobre
        </h2>

        <p className="text-gray-300 leading-relaxed text-lg">
          Sou estudante de Engenharia da Computação, apaixonado por desenvolvimento
          de software e hardware, automação e soluções criativas. Gosto de aprender
          novas tecnologias e resolver problemas reais por meio da programação.
        </p>
      </motion.section>

      {/* Experiências */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-10 text-purple-400">
          Experiências
        </h2>

        <div className="space-y-10">

          {[
            {
              title: "Estagiário de Comunicação Interna - FIEMA",
              period: "Outubro 2024 – Março 2025",
              content: [
                "Durante minha atuação no sistema FIEMA, desempenhei atividades voltadas à comunicação interna institucional, contribuindo para a organização e disseminação estratégica de informações entre os colaboradores.",
                "Minhas responsabilidades incluíram a criação e manutenção de canais de comunicação, elaboração de conteúdos informativos e apoio na coordenação de eventos internos.",
                "Redação e revisão de comunicados internos",
                "Organização e estruturação de boletins informativos",
                "Apoio na produção e edição de materiais audiovisuais",
                "Planejamento de pautas para comunicação interna",
                "Essa experiência me proporcionou um entendimento sobre a importância da comunicação eficaz dentro de uma organização."
              ]
            },
            {
              title: "Intérprete Freelancer - G20 Brazil",
              period: "Junho 2024",
              content: [
                "Atuei como intérprete freelancer para a Blue Tree Hotels entre 11 e 13 de junho durante o G20 Brazil.",
                "Minha função envolveu a tradução simultânea de discursos e reuniões.",
                "Essa experiência reforçou a importância da comunicação eficaz em cenário global."
              ]
            },
            {
              title: "Estagiário de Marketing Digital - Fotosombra",
              period: "Fevereiro 2024 – Outubro 2024",
              content: [
                "Atuei na empresa Fotosombra com desenvolvimento web e presença digital.",
                "Desenvolvimento e manutenção de sites institucionais",
                "Atualização de conteúdos e melhorias na usabilidade",
                "Gestão de redes sociais",
                "Criação de artes digitais e edição de vídeos"
              ]
            }
          ].map((exp, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="bg-zinc-900/70 backdrop-blur-md p-8 rounded-2xl border border-zinc-800 hover:border-purple-500 transition"
            >
              <h3 className="text-xl font-bold">{exp.title}</h3>
              <p className="text-sm text-gray-400 mb-6">{exp.period}</p>

              <div className="space-y-4 text-gray-300 leading-relaxed">
                <ul className="list-disc pl-5 space-y-2">
                  {exp.content.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* Educação */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="max-w-4xl mx-auto px-6 py-16"
      >
        <h2 className="text-3xl font-semibold mb-6 text-purple-400">
          Educação
        </h2>

        <div className="bg-zinc-900/70 p-6 rounded-2xl border border-zinc-800">
          <h3 className="text-xl font-bold">Engenharia da Computação</h3>
          <p className="text-gray-400">
            Universidade Estadual do Maranhão — 3º período
          </p>
        </div>
      </motion.section>

      {/* Skills */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="max-w-4xl mx-auto px-6 py-16"
      >
        <h2 className="text-3xl font-semibold mb-6 text-purple-400">
          Linguagens de programação
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {["JavaScript", "HTML", "CSS", "C", "Git & GitHub"].map((skill) => (
            <div
              key={skill}
              className="bg-zinc-900 p-4 rounded-xl text-center border border-zinc-800 hover:border-purple-500 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </motion.section>

      {/* Idiomas */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-6 text-purple-400">
          Idiomas
        </h2>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
            Inglês — Intermediário (B2)
          </div>
          <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
            Libras — Básico (A2)
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 border-t border-zinc-800 text-gray-400">
        <p>Contato: jonharthur777@gmail.com</p>
        <p className="mt-2 text-sm">© {new Date().getFullYear()} João Arthur</p>
      </footer>

    </div>
  );
}