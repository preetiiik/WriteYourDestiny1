import { useEffect, useRef } from "react"

export function MarqueeTrack({
  items,
  pinkColor,
  pxPerSecond = 60,
}: {
  items: string[]
  pinkColor: string
  pxPerSecond?: number
}) {
  const trackRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null)
  const positionRef = useRef(0)
  const lastTimeRef = useRef<number | null>(null)

  useEffect(() => {
    const el = trackRef.current
    if (!el) return

    // Reset position whenever the items or speed changes
    positionRef.current = 0
    lastTimeRef.current = null
    el.style.transform = "translate3d(0, 0, 0)"

    const getLoopWidth = () => {
      // Two identical copies are rendered, so half the width
      // represents one complete marquee loop.
      return el.scrollWidth / 2
    }

    const animate = (currentTime: number) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = currentTime
      }

      const deltaTime = (currentTime - lastTimeRef.current) / 1000
      lastTimeRef.current = currentTime

      const loopWidth = getLoopWidth()

      if (loopWidth > 0) {
        // Move by a fixed number of pixels per second.
        positionRef.current -= pxPerSecond * deltaTime

        // Reset seamlessly after one complete loop.
        if (Math.abs(positionRef.current) >= loopWidth) {
          positionRef.current += loopWidth
        }

        el.style.transform = `translate3d(${positionRef.current}px, 0, 0)`
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    // Recalculate/restart cleanly if the screen size changes.
    const handleResize = () => {
      const loopWidth = getLoopWidth()

      if (loopWidth > 0) {
        positionRef.current = positionRef.current % loopWidth
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current)
      }

      window.removeEventListener("resize", handleResize)
    }
  }, [items, pxPerSecond])

  return (
    <>
      <style>{`
        .marquee-track {
          display: flex;
          width: max-content;
          white-space: nowrap;
          gap: 2.5rem;
          will-change: transform;
        }
      `}</style>

      <div
        ref={trackRef}
        className="marquee-track"
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="font-display italic text-lg font-light shrink-0"
            style={{
              color: item === "✦" ? pinkColor : "#ffff",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </>
  )
}