"use client";

const links = [
  {
    name: "Sobre",
    href: "#about"
  },

  {
    name: "Projetos",
    href: "#projects"
  },

  {
    name: "Skills",
    href: "#skills"
  },

  {
    name: "Experiência",
    href: "#experience"
  }
];

export default function Navbar() {

  return (

    <nav
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      backdrop-blur-xl
      bg-black/20
      border-b
      border-cyan-400/10
      "
    >

      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        py-4
        flex
        justify-between
        items-center
        "
      >

        <h1
          className="
          text-cyan-400
          font-black
          tracking-widest
          "
        >
          JAO.EXE
        </h1>

        <div className="flex gap-6">

          {links.map((link, index) => (

            <a
              key={index}
              href={link.href}

              className="
              text-zinc-300
              hover:text-cyan-400
              transition
              duration-300
              "
            >
              {link.name}
            </a>

          ))}

        </div>

      </div>

    </nav>
  );
}