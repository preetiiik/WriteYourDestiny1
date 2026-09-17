import { useEffect, useRef, useState } from "react"

/**
 * Scrolling marquee track. Speed is derived from the track's actual
 * rendered width (px) divided by a constant px/second rate, so it scrolls
 * at the same visual speed on every screen size instead of relying on
 * fixed-second durations + media query breakpoints (which silently break
 * on devices without a proper viewport meta tag, and drift out of sync
 * whenever the marquee text changes length).
 */
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
  const [duration, setDuration] = useState(22)

  useEffect(() => {
    const el = trackRef.current
    if (!el) return

    const setSpeed = () => {
      // el contains two copies of `items` back to back, so half its
      // scrollWidth is the distance one full loop needs to travel.
      const loopWidth = el.scrollWidth / 2
      if (loopWidth > 0) setDuration(loopWidth / pxPerSecond)
    }

    setSpeed()
    window.addEventListener("resize", setSpeed)
    return () => window.removeEventListener("resize", setSpeed)
  }, [items, pxPerSecond])

  return (
    <>
      <style>{`
        @keyframes wyd-marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track {
          animation-name: wyd-marquee-scroll;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform;
        }
      `}</style>
      <div
        ref={trackRef}
        className="marquee-track flex whitespace-nowrap gap-10"
        style={{ animationDuration: `${duration}s` }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="font-display italic text-lg font-light shrink-0"
            style={{ color: item === "✦" ? pinkColor : "#ffff" }}
          >
            {item}
          </span>
        ))}
      </div>
    </>
  )
}
