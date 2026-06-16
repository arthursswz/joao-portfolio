"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

  export default function LunaFlores() {
     const router = useRouter();
  const [loadingBack, setLoadingBack] = useState(false);

  function handleBackClick() {
    setLoadingBack(true);

    setTimeout(() => {
      router.push("/");
    }, 900);
  }

  return (
    <main className="min-h-screen bg-[#050816] text-white px-6 py-20">
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

      <div className="max-w-5xl mx-auto">

        <div
          className="
            border
            border-fuchsia-500/20
            bg-black/40
            backdrop-blur-xl
            rounded-3xl
            overflow-hidden
          "
        >

          <img
            src="/luna.jpg"
            alt="Luna Flores"
            className="w-full h-[400px] object-cover"
          />

          <div className="p-10">

            <p className="text-cyan-400 tracking-[0.3em] text-sm mb-4">
              // BACKEND SYSTEM
            </p>

            <h1 className="text-5xl font-black text-fuchsia-500 mb-8">
              Luna Flores Backend
            </h1>

            <p className="text-zinc-300 leading-relaxed text-lg mb-10">
              Sistema backend desenvolvido em Java para gerenciamento
              de pedidos, clientes e catálogo de produtos da Luna Flores.
              O projeto foi criado com foco em organização de rotas,
              estrutura REST API e integração com banco de dados.
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
                  <li>• Java</li>
                  <li>• Spring Boot</li>
                  <li>• MySQL</li>
                  <li>• REST API</li>
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
                  <li>• Criação de endpoints</li>
                  <li>• Integração com banco de dados</li>
                  <li>• Estruturação da API REST</li>
                  <li>• Organização backend em camadas</li>
                </ul>
              </div>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}