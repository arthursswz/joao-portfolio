import { useEffect, useState } from "react";

export function useGlitch(inView: boolean) {
  const [glitching, setGlitching] = useState(false);

  useEffect(() => {
    if (!inView) return;

    let timeout: ReturnType<typeof setTimeout>;

    const trigger = () => {
      setGlitching(true);
      timeout = setTimeout(() => setGlitching(false), 600);
    };

    trigger();

    const interval = setInterval(trigger, 4000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [inView]);

  return glitching;
}