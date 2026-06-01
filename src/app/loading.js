export default function Loading() {
  return (
    <div
      className="
        h-screen
        w-full
        bg-[#050816]
        flex
        items-center
        justify-center
      "
    >
      <div className="text-center">

        <h1
          className="
            text-5xl
            font-black
            text-fuchsia-500
            mb-8
            animate-pulse
          "
        >
          JA
        </h1>

        <p
          className="
            text-cyan-400
            tracking-[0.3em]
            uppercase
            text-sm
            mb-6
          "
        >
          Initializing System...
        </p>

        <div
          className="
            w-72
            h-2
            bg-zinc-900
            rounded-full
            overflow-hidden
          "
        >
          <div
            className="
              h-full
              bg-cyan-400
              animate-[loading_2s_linear_infinite]
            "
          />
        </div>

      </div>
    </div>
  );
}