"use client";


import Link from "next/link";

export default function ArduinoAutomation() {
  return (
    <main className="min-h-screen bg-[#050816] text-white px-6 py-20">

      <Link
        href="/"
        className="
          inline-block
          mb-10
          text-cyan-400
          hover:text-fuchsia-400
          transition
        "
      >
        ← voltar
      </Link>

      <div className="max-w-5xl mx-auto">

        <div
          className="
            border
            border-cyan-500/20
            bg-black/40
            backdrop-blur-xl
            rounded-3xl
            overflow-hidden
          "
        >

          <img
            src="/arduino.jpg"
            alt="Arduino Automation"
            className="w-full h-[400px] object-cover"
          />

          <div className="p-10">

            <p className="text-fuchsia-400 tracking-[0.3em] text-sm mb-4">
              // HARDWARE SYSTEM
            </p>

            <h1 className="text-5xl font-black text-cyan-400 mb-8">
              Arduino Automation
            </h1>

            <p className="text-zinc-300 leading-relaxed text-lg mb-10">
              Projeto de automação utilizando Arduino com sensores
              eletrônicos para controle e monitoramento de ambiente.
              O sistema foi desenvolvido integrando hardware e software
              para testes de automação inteligente.
            </p>

            <div className="grid md:grid-cols-2 gap-6">

              <div
                className="
                  border
                  border-cyan-500/20
                  rounded-2xl
                  p-6
                  bg-black/30
                "
              >
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">
                  Tecnologias
                </h2>

                <ul className="space-y-2 text-zinc-300">
                  <li>• Arduino</li>
                  <li>• Linguagem C</li>
                  <li>• Sensores</li>
                  <li>• Eletrônica</li>
                </ul>
              </div>

              <div
                className="
                  border
                  border-fuchsia-500/20
                  rounded-2xl
                  p-6
                  bg-black/30
                "
              >
                <h2 className="text-2xl font-bold text-fuchsia-400 mb-4">
                  O que eu fiz
                </h2>

                <ul className="space-y-2 text-zinc-300">
                  <li>• Programação do Arduino</li>
                  <li>• Integração de sensores</li>
                  <li>• Controle lógico do sistema</li>
                  <li>• Testes de automação</li>
                </ul>
              </div>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}