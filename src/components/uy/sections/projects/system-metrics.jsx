"use client";

export default function SystemMetrics() {
  const metrics = [
    ["Status", "Online"],
    ["Version", "1.0"],
    ["Projects", "2"],
    ["Focus", "Backend + Hardware"]
  ];

  return (
    <div className="grid md:grid-cols-2 gap-4 mt-8">
      {metrics.map(([label, value]) => (
        <div
          key={label}
          className="
            border
            border-cyan-500/20
            bg-black/30
            rounded-xl
            p-4
            backdrop-blur-xl
          "
        >
          <p className="text-zinc-500 text-sm">{label}</p>
          <p className="text-cyan-400 font-bold">{value}</p>
        </div>
      ))}
    </div>
  );
}