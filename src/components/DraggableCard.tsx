import { motion, type MotionProps } from "framer-motion";
import { useRef } from "react";

interface DraggableCardProps extends MotionProps {
  imageUrl: string;
  size?: {
    width: string;
    height: string;
  };
  position?: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  };
  dragConstraints?: React.RefObject<HTMLElement>;
}

export default function DraggableCard({
  imageUrl,
  size = { width: "400px", height: "420px" },
  position,
  dragConstraints,
  ...motionProps
}: DraggableCardProps) {
  const parentRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={parentRef} className="absolute inset-0">
      <motion.div
        className="absolute rounded-xl shadow-lg cursor-grab overflow-hidden"
        style={{
          ...position,
          width: size.width,
          height: size.height,
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        drag
        dragConstraints={false} 
        dragElastic={0.2} 
        dragMomentum={true}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...motionProps}
      />
    </div>
  );
}
