import { useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';

export function useParallax(distance: number = 50): [React.RefObject<HTMLElement>, MotionValue<number>] {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [-distance, distance]);
  
  return [ref, y];
}