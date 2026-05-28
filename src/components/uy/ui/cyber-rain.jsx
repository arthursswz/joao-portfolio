"use client";

import { useEffect, useRef } from "react";

export default function CyberRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();

    window.addEventListener("resize", resize);

    const fontSize = 14;

    const chars =
      "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ$#@%&<>[]{}アイウエオカキクケコ";

    let drops = [];

    const initDrops = () => {
      const cols = Math.floor(canvas.width / fontSize);

      drops = Array(cols)
        .fill(1)
        .map(() => Math.random() * -80);
    };

    initDrops();

    window.addEventListener("resize", initDrops);

    const colors = ["#00ffff", "#ff00ff", "#ffffff", "#00ffff"];

    const draw = () => {
      ctx.fillStyle = "rgba(5, 8, 22, 0.06)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < drops.length; i++) {
        const char =
          chars[Math.floor(Math.random() * chars.length)];

        const y = drops[i] * fontSize;

        if (y > 0 && y < canvas.height * 0.12) {
          ctx.fillStyle = "#ffffff";
          ctx.shadowColor = "#00ffff";
          ctx.shadowBlur = 10;
        } else {
          const col =
            colors[Math.floor(Math.random() * colors.length)];

          ctx.fillStyle = col;
          ctx.shadowColor = col;
          ctx.shadowBlur = 4;
        }

        ctx.font = `${fontSize}px monospace`;

        ctx.fillText(char, i * fontSize, y);

        ctx.shadowBlur = 0;

        if (
          y > canvas.height &&
          Math.random() > 0.975
        ) {
          drops[i] = 0;
        }

        drops[i] += 0.5;
      }
    };

    const interval = setInterval(draw, 35);

    return () => {
      clearInterval(interval);

      window.removeEventListener("resize", resize);
      window.removeEventListener("resize", initDrops);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none opacity-30"
    />
  );
}