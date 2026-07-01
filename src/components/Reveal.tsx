import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

const variants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.16, 1, 0.3, 1], // out-quart, no bounce
    },
  }),
}

interface RevealProps {
  children: ReactNode
  /** Stagger index - multiplied by 100ms for sequential reveals. */
  index?: number
  className?: string
  as?: 'div' | 'li' | 'section' | 'article'
}

/** Scroll-triggered slide-up + fade entrance. Respects prefers-reduced-motion. */
export function Reveal({ children, index = 0, className, as = 'div' }: RevealProps) {
  const MotionTag = motion[as]
  return (
    <MotionTag
      className={className}
      custom={index}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      {children}
    </MotionTag>
  )
}
