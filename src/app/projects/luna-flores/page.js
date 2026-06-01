"use client";
import Link from "next/link";

export default function LunaFlores() {
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