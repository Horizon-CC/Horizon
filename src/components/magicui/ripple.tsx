import React, { type ComponentPropsWithoutRef, type CSSProperties, useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface RippleProps extends ComponentPropsWithoutRef<"div"> {
  mainCircleSize?: number;
  mainCircleOpacity?: number;
  numCircles?: number;
}

export const Ripple = React.memo(function Ripple({
  mainCircleSize = 210,
  mainCircleOpacity = 0.24,
  numCircles = 8,
  className,
  ...props
}: RippleProps) {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // responsive check
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640); // Tailwind `sm` breakpoint
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const circleBaseSize = isMobile ? mainCircleSize * 0.6 : mainCircleSize;
  const circleCount = isMobile ? Math.max(4, numCircles - 3) : numCircles;

  return (
    <div
      ref={containerRef}
      className={cn(
        "pointer-events-none absolute inset-0 select-none [mask-image:linear-gradient(to_bottom,white,transparent)]",
        className
      )}
      {...props}
    >
      {visible &&
        Array.from({ length: circleCount }, (_, i) => {
          const size = circleBaseSize + i * (isMobile ? 50 : 70);
          const opacity = mainCircleOpacity - i * 0.03;
          const animationDelay = `${i * (isMobile ? 0.1 : 0.06)}s`;
          return (
            <div
              key={i}
              className="absolute rounded-full border bg-foreground/25 shadow-xl animate-ripple-once"
              style={
                {
                  "--i": i,
                  width: `${size}px`,
                  height: `${size}px`,
                  opacity,
                  animationDelay,
                  borderStyle: "solid",
                  borderWidth: "1px",
                  borderColor: `var(--foreground)`,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%) scale(0)",
                  animationFillMode: "forwards",
                } as CSSProperties
              }
            />
          );
        })}

      <style>{`
        @keyframes ripple-once {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: var(--final-opacity, ${mainCircleOpacity});
          }
        }

        .animate-ripple-once {
          animation: ripple-once ${isMobile ? "0.8s" : "0.6s"} ease-out forwards;
        }
      `}</style>
    </div>
  );
});

Ripple.displayName = "Ripple";
