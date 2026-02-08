import { useEffect, useRef } from "react";

export default function ScratchReveal() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const lastPos = useRef<{ x: number; y: number } | null>(null);
  const brushImageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;

    const brushImage = new Image();
    brushImage.src = "/brush-texture.png";
    brushImageRef.current = brushImage;

    const resizeCanvas = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, width, height);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const brushSize = 120;

    const handleMove = (e: MouseEvent) => {
      if (!brushImageRef.current) return;

      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (lastPos.current) {
        const dx = x - lastPos.current.x;
        const dy = y - lastPos.current.y;
        const steps = Math.max(Math.abs(dx), Math.abs(dy));

        for (let i = 0; i < steps; i++) {
          const posX = lastPos.current.x + (dx * i) / steps;
          const posY = lastPos.current.y + (dy * i) / steps;

          ctx.save();
          ctx.globalCompositeOperation = "destination-out"; 
          ctx.globalAlpha = Math.random() * 0.4 + 0.6;
          ctx.translate(posX - brushSize / 2, posY - brushSize / 2);
          ctx.drawImage(brushImageRef.current, 0, 0, brushSize, brushSize);
          ctx.restore();
        }
      }

      lastPos.current = { x, y };
    };

    const resetPos = () => {
      lastPos.current = null;
    };

    canvas.addEventListener("mousemove", handleMove);
    canvas.addEventListener("mouseleave", resetPos);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMove);
      canvas.removeEventListener("mouseleave", resetPos);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ cursor: "none", pointerEvents: "auto" }}
    />
  );
}
