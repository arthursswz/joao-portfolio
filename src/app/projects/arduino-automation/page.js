"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ArduinoAutomation() {
  const router = useRouter();
  const [loadingBack, setLoadingBack] = useState(false);

  function handleBackClick() {
    setLoadingBack(true);

    setTimeout(() => {
      router.push("/");
    }, 900);
  }

  return (
    <main className="min-h-screen bg-[#050816] text-white px-6 py-16 md:py-20">
      {loadingBack && (
  <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md">
    <div className="flex flex-col items-center gap-5">
      <div className="w-16 h-16 border-2 border-cyan-400 border-t-fuchsia-500 rounded-full animate-spin shadow-[0_0_35px_rgba(34,211,238,.45)]" />

      <p className="cyber-font text-cyan-400 tracking-[0.3em] text-sm">
        RETURNING HOME...
      </p>
    </div>
  </div>
)}
      <div className="w-full max-w-5xl mx-auto">
       <button
  type="button"
  onClick={handleBackClick}
  className="
    inline-block
    mb-10
    text-cyan-400
    hover:text-fuchsia-400
    transition
    cursor-pointer
  "
>
  ← voltar
</button>

        <article
          className="
            border
            border-cyan-500/20
            bg-black/40
            backdrop-blur-xl
            rounded-3xl
            overflow-hidden
            shadow-[0_0_40px_rgba(0,255,255,0.08)]
          "
        >
          <img
            src="/arduino.jpg"
            alt="Projeto Arduino Automation"
            className="w-full h-64 md:h-[400px] object-cover"
          />

          <div className="p-6 md:p-10">
            <p className="text-fuchsia-400 tracking-[0.3em] text-xs md:text-sm mb-4">
              // HARDWARE SYSTEM
            </p>

            <h1 className="text-4xl md:text-5xl font-black text-cyan-400 mb-8">
              Arduino Automation
            </h1>

            <p className="text-zinc-300 leading-relaxed text-base md:text-lg mb-10 max-w-3xl">
              Projeto de automação utilizando Arduino com sensores eletrônicos
              para controle e monitoramento de ambiente. O sistema foi
              desenvolvido integrando hardware e software para testes de
              automação inteligente.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <section
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
              </section>

              <section
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
              </section>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}