import { useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

interface LightboxProps {
  images: string[]
  index: number
  open: boolean
  alt?: string
  onClose: () => void
  onIndexChange: (i: number) => void
}

/**
 * Full-screen image viewer. Dark navy backdrop, clean white controls to match
 * the site. Closes on Escape / backdrop click / close button; arrow keys and
 * on-screen arrows step through when there is more than one image. Locks body
 * scroll while open and shows the full-size image (not the thumbnail).
 */
export function Lightbox({ images, index, open, alt, onClose, onIndexChange }: LightboxProps) {
  const many = images.length > 1
  const prev = useCallback(() => onIndexChange((index - 1 + images.length) % images.length), [index, images.length, onIndexChange])
  const next = useCallback(() => onIndexChange((index + 1) % images.length), [index, images.length, onIndexChange])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft' && many) prev()
      else if (e.key === 'ArrowRight' && many) next()
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [open, many, prev, next, onClose])

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-navy-deep/95 p-4 backdrop-blur-sm sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={alt ?? 'Image viewer'}
        >
          {/* Close */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center border border-white/20 bg-white/5 text-[#F8FAFC] transition-colors hover:border-white/60 hover:bg-white/10 sm:right-6 sm:top-6"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Prev */}
          {many && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); prev() }}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/20 bg-white/5 text-[#F8FAFC] transition-colors hover:border-white/60 hover:bg-white/10 sm:left-6"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}

          {/* Image */}
          <motion.img
            key={index}
            src={images[index]}
            alt={alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-full max-w-full object-contain shadow-navy"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
          />

          {/* Next */}
          {many && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); next() }}
              aria-label="Next image"
              className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/20 bg-white/5 text-[#F8FAFC] transition-colors hover:border-white/60 hover:bg-white/10 sm:right-6"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}

          {/* Counter */}
          {many && (
            <div className="absolute bottom-5 left-0 right-0 z-10 text-center font-mono text-xs uppercase tracking-widest text-steel">
              {index + 1} / {images.length}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}
