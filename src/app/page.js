"use client";

import React from "react";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* Fundo Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-purple-600 rounded-full blur-[200px] opacity-30"></div>
        <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-indigo-600 rounded-full blur-[200px] opacity-30"></div>
      </div>

      {/* Header */}
      <header className="text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          João Arthur de Oliveira Silva
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Estudante de Engenharia da Computação
        </p>

        <div className="flex justify-center gap-6 mt-6 text-sm">
          <a href="https://www.linkedin.com/in/joaothur/" target="_blank" className="hover:text-purple-400 transition">
            LinkedIn
          </a>
          <a href="https://github.com/arthursswz" target="_blank" className="hover:text-purple-400 transition">
            GitHub
          </a>
          <a href="https://w.app/0c9oxi" target="_blank" className="hover:text-purple-400 transition">
            WhatsApp
          </a>
        </div>
      </header>

      {/* Sobre */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-6 text-purple-400">Sobre</h2>
        <p className="text-gray-300 leading-relaxed text-lg">
          Sou estudante de Engenharia da Computação, apaixonado por desenvolvimento
          de software e hardware, automação e soluções criativas. Gosto de aprender
          novas tecnologias e resolver problemas reais por meio da programação.
        </p>
      </section>

      {/* Experiências */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-10 text-purple-400">
          Experiências
        </h2>

        <div className="space-y-10">

          {/* FIEMA */}
          <div className="bg-zinc-900/70 backdrop-blur-md p-8 rounded-2xl border border-zinc-800 hover:border-purple-500 transition">
            <h3 className="text-xl font-bold">Estagiário de Comunicação Interna - FIEMA</h3>
            <p className="text-sm text-gray-400 mb-6">Outubro 2024 – Março 2025</p>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Durante minha atuação no sistema FIEMA, desempenhei atividades voltadas à comunicação interna institucional, contribuindo para a organização e disseminação estratégica de informações entre os colaboradores.
              </p>

              <p>
                Minhas responsabilidades incluíram a criação e manutenção de canais de comunicação, elaboração de conteúdos informativos e apoio na coordenação de eventos internos, visando fortalecer a cultura organizacional e promover o engajamento dos funcionários.
              </p>

              <ul className="list-disc pl-5 space-y-2">
                <li>Redação e revisão de comunicados internos</li>
                <li>Organização e estruturação de boletins informativos</li>
                <li>Apoio na produção e edição de materiais audiovisuais</li>
                <li>Planejamento de pautas para comunicação interna</li>
              </ul>

              <p>
                Essa experiência me proporcionou um entendimento aprofundado sobre a importância da comunicação eficaz dentro de uma organização, além de desenvolver habilidades de escrita, organização e trabalho em equipe.
              </p>
            </div>
          </div>

          {/* G20 */}
          <div className="bg-zinc-900/70 backdrop-blur-md p-8 rounded-2xl border border-zinc-800 hover:border-purple-500 transition">
            <h3 className="text-xl font-bold">Intérprete Freelancer - G20 Brazil</h3>
            <p className="text-sm text-gray-400 mb-6">Junho 2024</p>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Atuei como intérprete freelancer para a Blue Tree Hotels entre 11 e 13 de junho durante o G20 Brazil, desempenhando um papel crucial na facilitação da comunicação entre líderes mundiais, diplomatas e representantes de diversos países.
              </p>

              <p>
                Minha função envolveu a tradução simultânea de discursos, reuniões e negociações, garantindo uma comunicação fluida e precisa entre os participantes.
              </p>

              <p>
                Essa experiência me proporcionou uma compreensão profunda das dinâmicas internacionais e reforçou a importância da comunicação eficaz em um cenário global, além de aprimorar minhas habilidades linguísticas e de interpretação sob pressão.
              </p>
            </div>
          </div>

          {/* Fotosombra */}
          <div className="bg-zinc-900/70 backdrop-blur-md p-8 rounded-2xl border border-zinc-800 hover:border-purple-500 transition">
            <h3 className="text-xl font-bold">Estagiário de Marketing Digital - Fotosombra</h3>
            <p className="text-sm text-gray-400 mb-6">Fevereiro 2024 – Outubro 2024</p>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Atuei na empresa Fotosombra com foco em desenvolvimento web e presença digital, contribuindo para a criação, manutenção e otimização de plataformas online e estratégias digitais da marca.
              </p>

              <ul className="list-disc pl-5 space-y-2">
                <li>Desenvolvimento e manutenção de sites institucionais</li>
                <li>Atualização de conteúdos e melhorias na estrutura e usabilidade</li>
                <li>Criação de layouts focados em experiência do usuário (UI/UX)</li>
                <li>Integração de campanhas digitais às plataformas online</li>
                <li>Gestão e otimização de redes sociais</li>
                <li>Criação de artes digitais no Photoshop</li>
                <li>Edição e publicação de vídeos</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Educação */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-6 text-purple-400">Educação</h2>

        <div className="bg-zinc-900/70 p-6 rounded-2xl border border-zinc-800">
          <h3 className="text-xl font-bold">Engenharia da Computação</h3>
          <p className="text-gray-400">
            Universidade Estadual do Maranhão — 3º período
          </p>
        </div>
      </section>



        {/* Skills */}
      <section className="max-w-4xl mx-auto px-6 py-16">
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
      </section>

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