'use client';

import React from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';

export type AnimationVariant =
  | 'fadeUp'
  | 'fadeIn'
  | 'fadeLeft'
  | 'fadeRight'
  | 'fadeDown'
  | 'slideTop'
  | 'slideBottom'
  | 'zoomIn'
  | 'zoomOut'
  | 'scaleUp'
  | 'blurReveal'
  | 'imageReveal'
  | 'scrollReveal';

// Custom cubic-bezier easing for that premium, luxury "slow-start fast-glide slow-end" feel.
const luxuryTransition = {
  ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
  duration: 0.85
};

const variants: Record<AnimationVariant, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0 }
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  fadeLeft: {
    hidden: { opacity: 0, x: 45 },
    visible: { opacity: 1, x: 0 }
  },
  fadeRight: {
    hidden: { opacity: 0, x: -45 },
    visible: { opacity: 1, x: 0 }
  },
  fadeDown: {
    hidden: { opacity: 0, y: -35 },
    visible: { opacity: 1, y: 0 }
  },
  slideTop: {
    hidden: { opacity: 0, y: -80 },
    visible: { opacity: 1, y: 0 }
  },
  slideBottom: {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0 }
  },
  zoomIn: {
    hidden: { opacity: 0, scale: 0.94 },
    visible: { opacity: 1, scale: 1 }
  },
  zoomOut: {
    hidden: { opacity: 0, scale: 1.08 },
    visible: { opacity: 1, scale: 1 }
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.88, y: 18 },
    visible: { opacity: 1, scale: 1, y: 0 }
  },
  blurReveal: {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 }
  },
  imageReveal: {
    hidden: { opacity: 0, scale: 1.06, clipPath: 'inset(8% 0 8% 0)' },
    visible: { opacity: 1, scale: 1, clipPath: 'inset(0% 0 0% 0)' }
  },
  scrollReveal: {
    hidden: { opacity: 0, clipPath: 'inset(12% 0 12% 0)' },
    visible: { opacity: 1, clipPath: 'inset(0% 0 0% 0)' }
  }
};

interface ScrollAnimateProps {
  children: React.ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  className?: string;
  viewportMargin?: string;
  once?: boolean;
}

export const ScrollAnimate: React.FC<ScrollAnimateProps> = ({
  children,
  variant = 'fadeUp',
  delay = 0,
  duration = 0.85,
  className = '',
  viewportMargin = '-10px',
  once = true
}) => {
  const chosenVariant = variants[variant];
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : 'hidden'}
      whileInView={reduceMotion ? undefined : 'visible'}
      animate={reduceMotion ? 'visible' : undefined}
      viewport={{ once, margin: viewportMargin }}
      variants={chosenVariant}
      transition={{
        ...luxuryTransition,
        duration,
        delay
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface StaggerContainerProps {
  children: React.ReactNode;
  delayChildren?: number;
  staggerChildren?: number;
  className?: string;
  viewportMargin?: string;
  once?: boolean;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  delayChildren = 0,
  staggerChildren = 0.12,
  className = '',
  viewportMargin = '-10px',
  once = true
}) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : 'hidden'}
      whileInView={reduceMotion ? undefined : 'visible'}
      animate={reduceMotion ? 'visible' : undefined}
      viewport={{ once, margin: viewportMargin }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren,
            delayChildren
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface StaggerItemProps {
  children: React.ReactNode;
  variant?: AnimationVariant;
  className?: string;
  duration?: number;
}

export const StaggerItem: React.FC<StaggerItemProps> = ({
  children,
  variant = 'fadeUp',
  className = '',
  duration = 0.85
}) => {
  const chosenVariant = variants[variant];
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={chosenVariant}
      transition={{
        ...luxuryTransition,
        duration
      }}
      animate={reduceMotion ? 'visible' : undefined}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface HoverScaleProps {
  children: React.ReactNode;
  className?: string;
}

export const HoverScale: React.FC<HoverScaleProps> = ({ children, className = '' }) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={reduceMotion ? undefined : { scale: 1.03, filter: 'drop-shadow(0 10px 18px rgba(28, 77, 140, 0.16))' }}
      whileTap={reduceMotion ? undefined : { scale: 0.97 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface HoverCardProps {
  children: React.ReactNode;
  className?: string;
}

export const HoverCard: React.FC<HoverCardProps> = ({ children, className = '' }) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={reduceMotion ? undefined : { y: -6, scale: 1.012, borderColor: '#0B2341', boxShadow: '0 18px 36px -14px rgba(11, 35, 65, 0.18)' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface MagneticProps {
  children: React.ReactElement;
  className?: string;
}

export const Magnetic: React.FC<MagneticProps> = ({ children, className = '' }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const reduceMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent) => {
    if (reduceMotion) return;
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.35, y: y * 0.35 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x, y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  prefix = '',
  suffix = '',
  decimals,
  className = '',
}) => {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10px' });
  const reduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = React.useState(reduceMotion ? value : 0);
  const precision = decimals ?? (Number.isInteger(value) ? 0 : 1);
  const outputValue = reduceMotion ? value : displayValue;

  React.useEffect(() => {
    if (!isInView || reduceMotion) {
      return;
    }

    let frameId = 0;
    const start = performance.now();
    const duration = 1100;

    const tick = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(value * eased);

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, precision, reduceMotion, value]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {outputValue.toLocaleString('en-AU', {
        minimumFractionDigits: precision,
        maximumFractionDigits: precision,
      })}
      {suffix}
    </span>
  );
};
