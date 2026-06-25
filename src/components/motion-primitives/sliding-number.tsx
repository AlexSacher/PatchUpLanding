import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

const spring = { type: 'spring' as const, stiffness: 180, damping: 22, mass: 0.8 }

function Digit({ value }: { value: number }) {
    return (
        <span
            className="relative inline-block overflow-hidden tabular-nums"
            style={{ height: '1em', lineHeight: 1 }}
            aria-hidden>
            <motion.span
                className="flex flex-col"
                animate={{ y: `${-value * 10}%` }}
                transition={spring}>
                {Array.from({ length: 10 }).map((_, i) => (
                    <span
                        key={i}
                        className="flex items-center justify-center"
                        style={{ height: '1em', lineHeight: 1 }}>
                        {i}
                    </span>
                ))}
            </motion.span>
        </span>
    )
}

/**
 * Animated number whose digits roll vertically when the value changes,
 * cycling up through the in-between digits when increasing, and back down
 * when decreasing (like an odometer / slot reel).
 */
export function SlidingNumber({ value, className }: { value: number; className?: string }) {
    const digits = String(Math.max(0, Math.round(value))).split('')
    return (
        <span className={cn('inline-flex leading-none', className)}>
            {/* Accessible plain value for screen readers */}
            <span className="sr-only">{value}</span>
            {digits.map((d, i) => (
                <Digit
                    key={`${digits.length}-${i}`}
                    value={Number(d)}
                />
            ))}
        </span>
    )
}
