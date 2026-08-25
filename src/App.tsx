import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import logo from "@/imports/ChatGPT_Image_Aug_24__2026__12_02_21_PM.png"
import reelResumeTips from "@/imports/reel-resume-tips.png"
import reelOverseasEducation from "@/imports/reel-overseas-education.png"

const BLUE = "#1355B2"
const PINK = "#F5569B"
const BLUSH = "#FFCBEB"
const DARK = "#0a1a3d"
const SKYBLUE = "C3DBFD"

// Real images from writeyourdestiny.in
const IMG_HERO =
  "https://writeyourdestiny.in/wp-content/uploads/2026/07/InShot_20260710_110530721.jpg-1024x1024.jpeg"
const IMG_ABOUT =
  "https://writeyourdestiny.in/wp-content/uploads/2026/07/IMG_20260709_094726.jpg.jpeg"
const IMG_TEAM =
  "https://writeyourdestiny.in/wp-content/uploads/2026/07/IMG_20260709_094910.jpg.jpeg"

// Blog / reels / video content for the "Stories & Inspiration" section
const YOUTUBE_ID = "Y907dQjIoMo"
const IMG_YOUTUBE_THUMB = `https://img.youtube.com/vi/${YOUTUBE_ID}/hqdefault.jpg`

const reels = [
  {
    url: "https://www.instagram.com/reel/Cr5gPIJrF-k/?igsh=Njhua2w4MGFla3Z2",
    thumb: reelResumeTips,
  },
  {
    url: "https://www.instagram.com/reel/CoKXtCDDujA/?igsh=OW5ndXYyZHdzNnRp",
    thumb: reelOverseasEducation,
  },
]

const youtubeVideo = {
  url: "https://www.youtube.com/watch?v=Y907dQjIoMo",
  thumb: IMG_YOUTUBE_THUMB,
}

const services = [
  {
    num: "01",
    title: "Advisory",
    desc: "Strategic career and hiring guidance tailored to your unique path. We help you navigate every crossroads with confidence.",
    icon: "◈",
    color: BLUE,
  },
  {
    num: "02",
    title: "Skill Enhancement",
    desc: "Corporate training programs that sharpen your edge and close the gap between where you are and where you deserve to be.",
    icon: "◇",
    color: PINK,
  },
  {
    num: "03",
    title: "Diversity & Inclusion",
    desc: "Building workplaces where every voice matters and every talent thrives — by design, not by accident.",
    icon: "○",
    color: BLUE,
  },
  {
    num: "04",
    title: "Talent Station",
    desc: "Precision placement connecting the right people to the right roles at exactly the right moment.",
    icon: "△",
    color: PINK,
  },
  {
    num: "05",
    title: "Personal Growth",
    desc: "Mindset coaching and professional development that transforms raw potential into unstoppable momentum.",
    icon: "✦",
    color: BLUE,
  },
]

const stats = [
  { value: "500+", label: "Successful Placements" },
  { value: "12+", label: "Industries Served" },
  { value: "200+", label: "Partner Companies" },
  { value: "8", label: "Years of Experience" },
]

const marqueeItems = [
  "Crafting Futures",
  "✦",
  "Connecting Talents",
  "✦",
  "Write Your Destiny",
  "✦",
  "Shape Tomorrow",
  "✦",
  "Hubli's Trusted HR Partner",
  "✦",
]

export default function App() {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeService, setActiveService] = useState<number | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // If we arrive here with a hash (e.g. from the About page nav), scroll to it
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.slice(1)
      // Wait a tick for layout to settle before scrolling
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
      })
    }
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white text-[#0a1a3d] overflow-x-hidden">
      {/* NAV */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <button
            onClick={() => scrollTo("hero")}
            className="flex items-center"
          >
            <img
              src={logo}
              alt="Write Your Destiny logo"
              className="h-10 w-auto object-contain"
            />
          </button>

          <div className="hidden md:flex items-center gap-8">

            {/* About → Separate Page */}
            <button
              onClick={() => navigate("/about")}
              className="nav-link font-body text-sm font-medium text-[#4a5568] hover:text-[#0a1a3d] transition-colors"
            >
              About
            </button>

            {/* Services → Separate Page */}
            <button
              onClick={() => navigate("/services")}
              className="nav-link font-body text-sm font-medium text-[#4a5568] hover:text-[#0a1a3d] transition-colors"
            >
              Services
            </button>

            {/* Blogs → Scroll on Homepage */}
            <button
              onClick={() => scrollTo("blogs")}
              className="nav-link font-body text-sm font-medium text-[#4a5568] hover:text-[#0a1a3d] transition-colors"
            >
              Blogs
            </button>

            <button
              onClick={() => navigate("/contact")}
              className="px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
              style={{ background: PINK }}
            >
              Get Started
            </button>

          </div>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-[#0a1a3d] transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#0a1a3d] transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#0a1a3d] transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-56" : "max-h-0"
          }`}
        >
          <div className="bg-white border-t border-gray-100 px-6 py-5 flex flex-col gap-4">
            <button
              onClick={() => navigate("/about")}
              className="text-left text-[#4a5568] hover:text-[#0a1a3d] font-body text-base transition-colors"
            >
              About
            </button>
            <button
              onClick={() => navigate("/services")}
              className="text-left text-[#4a5568] hover:text-[#0a1a3d] font-body text-base transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollTo("blogs")}
              className="text-left text-[#4a5568] hover:text-[#0a1a3d] font-body text-base transition-colors"
            >
              Blogs
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="hero"
        className="pt-16 pb-10 min-h-screen relative overflow-hidden"
      >
        {/* Blush blob background */}
        <div
          className="absolute top-0 right-0 w-1/2 h-full"
          style={{
            background: `linear-gradient(135deg, ${SKYBLUE}60 0%, ${BLUSH}20 100%)`,
          }}
        />
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full"
          style={{ background: BLUSH, filter: "blur(80px)", opacity: 0.6 }}
        />
        <div
          className="absolute bottom-0 left-0 w-72 h-72 rounded-full"
          style={{ background: PINK, filter: "blur(70px)", opacity: 0.15 }}
        />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 min-h-[calc(100vh-4rem)] flex items-center">
          <div className="grid md:grid-cols-2 gap-12 items-center w-full py-16 md:py-0">
            {/* Left — text */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-6 fade-up"
                style={{
                  background: BLUSH,
                  color: PINK,
                  animationDelay: "0.05s",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: PINK }}
                />
                Hubli's Trusted HR Consultancy
              </div>

              <h1
                className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.0] mb-6 fade-up"
                style={{ animationDelay: "0.15s" }}
              >
                Crafting
                <br />
                <span style={{ color: BLUE }}>Futures,</span>
                <br />
                Connecting
                <br />
                <span style={{ color: PINK }}>Talents.</span>
              </h1>

              <p
                className="font-body text-lg text-[#6b7a99] leading-relaxed max-w-md mb-10 fade-up"
                style={{ animationDelay: "0.3s" }}
              >
                We are your one-stop career and hiring partner — guiding
                professionals and companies to their best possible outcomes.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-4 fade-up"
                style={{ animationDelay: "0.4s" }}
              >
                <button
                  onClick={() => navigate("/services")}
                  className="px-8 py-4 font-semibold text-sm tracking-wide text-white transition-all duration-300 hover:opacity-90 hover:shadow-lg"
                  style={{
                    background: BLUE,
                    boxShadow: `0 4px 24px ${BLUE}40`,
                  }}
                >
                  Explore Services
                </button>
                <button
                  onClick={() => scrollTo("about")}
                  className="px-8 py-4 font-semibold text-sm tracking-wide border-2 transition-all duration-300 hover:bg-gray-50"
                  style={{ borderColor: BLUE, color: BLUE }}
                >
                  Our Story →
                </button>
              </div>

              {/* Stats row */}
              <div
                className="flex gap-8 mt-12 fade-up"
                style={{ animationDelay: "0.5s" }}
              >
                {[
                  { v: "500+", l: "Placements" },
                  { v: "200+", l: "Companies" },
                  { v: "8 yrs", l: "Experience" },
                ].map((s) => (
                  <div key={s.l}>
                    <div
                      className="font-display text-2xl font-bold"
                      style={{ color: PINK }}
                    >
                      {s.v}
                    </div>
                    <div className="font-body text-xs text-[#9aa3b5] mt-0.5">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — image */}
            <div className="relative">
              {/* Decorative ring */}
              <div
                className="absolute -top-6 -right-6 w-48 h-48 rounded-full border-2 opacity-20"
                style={{ borderColor: BLUE }}
              />
              <div
                className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full opacity-30"
                style={{ background: `${PINK}20` }}
              />

              <div
                className="relative overflow-hidden"
                style={{ borderRadius: "60% 40% 70% 30% / 50% 60% 40% 60%" }}
              >
                <img
                  src={IMG_HERO}
                  alt="Write Your Destiny team professional"
                  className="w-full h-[500px] object-cover object-top"
                  onError={(e) => {
                    ;(e.target as HTMLImageElement).style.display = "none"
                  }}
                />
                {/* Overlay badge */}
              </div>

              <div
                className="absolute bottom-8 -left-4 bg-white shadow-xl px-5 py-3 rounded-xl flex items-center gap-3"
                style={{ boxShadow: `0 8px 32px ${BLUE}20` }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                  style={{ background: PINK }}
                >
                  ✦
                </div>
                <div>
                  <p className="font-body text-xs text-[#9aa3b5]">
                    Trusted since
                  </p>
                  <p
                    className="font-display font-bold text-sm"
                    style={{ color: DARK }}
                  >
                    2016 · Hubli, KA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div
        className="border-y border-pink-100 py-3 overflow-hidden"
        style={{ background: BLUE }}
      >
        <div className="marquee-track flex whitespace-nowrap gap-10">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="font-display italic text-lg font-light shrink-0"
              style={{
                color: item === "✦" ? PINK : "#9aa3b5",
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="py-28 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Images collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src={IMG_ABOUT}
                alt="WYD team at work"
                className="w-full h-64 object-cover rounded-2xl"
                onError={(e) => {
                  ;(e.target as HTMLImageElement).style.opacity = "0"
                }}
              />
              <img
                src={IMG_TEAM}
                alt="WYD team collaboration"
                className="w-full h-64 object-cover rounded-2xl mt-8"
                onError={(e) => {
                  ;(e.target as HTMLImageElement).style.opacity = "0"
                }}
              />
            </div>
            {/* Badge */}
            <div
              className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white shadow-xl px-6 py-4 rounded-2xl text-center"
              style={{ boxShadow: `0 8px 32px ${BLUE}20` }}
            >
              <div
                className="font-display text-3xl font-bold"
                style={{ color: PINK }}
              >
                500+
              </div>
              <div className="font-body text-xs text-[#9aa3b5] mt-0.5">
                Lives Transformed
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <div
              className="inline-block text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-5"
              style={{ background: BLUSH, color: PINK }}
            >
              Who We Are
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-[1.1] mb-6">
              More than a
              <br />
              <em className="italic font-light" style={{ color: BLUE }}>
                placement firm.
              </em>
            </h2>
            <p className="font-body text-[#6b7a99] leading-relaxed mb-5">
              Write Your Destiny was founded on a simple belief: every person
              deserves a career that reflects who they truly are, and every
              company deserves a team that drives their vision forward.
            </p>
            <p className="font-body text-[#6b7a99] leading-relaxed mb-8">
              Based in Hubli, Karnataka, we've grown into a full-spectrum HR
              partner — advising, training, placing, and growing careers across
              India. We don't just fill roles; we craft professional identities.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-0.5" style={{ background: BLUE }} />
              <p
                className="font-display italic text-lg font-light"
                style={{ color: DARK }}
              >
                "Your story is still being written."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="py-24 px-6 md:px-10"
        style={{
          background: `linear-gradient(180deg, ${BLUSH}50 0%, white 100%)`,
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div
              className="inline-block text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-4"
              style={{ background: BLUSH, color: PINK }}
            >
              What We Offer
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Five ways we{" "}
              <em className="italic font-light" style={{ color: BLUE }}>
                serve you.
              </em>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className="service-card bg-white border-2 border-gray-100 rounded-2xl p-7 cursor-default"
                onMouseEnter={() => setActiveService(i)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div className="flex items-start justify-between mb-5">
                  <span
                    className="text-2xl transition-all duration-300"
                    style={{ color: activeService === i ? s.color : "#d1d9e8" }}
                  >
                    {s.icon}
                  </span>
                  <span
                    className="font-body text-xs font-semibold tracking-widest"
                    style={{ color: s.color }}
                  >
                    {s.num}
                  </span>
                </div>
                <h3
                  className="font-display text-xl font-bold mb-3"
                  style={{ color: DARK }}
                >
                  {s.title}
                </h3>
                <p className="font-body text-sm text-[#7a8499] leading-relaxed">
                  {s.desc}
                </p>
                <div
                  className="mt-6 h-0.5 transition-all duration-500"
                  style={{
                    background: s.color,
                    width: activeService === i ? "40px" : "0px",
                  }}
                />
              </div>
            ))}

            {/* CTA card */}
            <div
              className="rounded-2xl p-7 flex flex-col justify-between cursor-pointer group transition-all duration-300 hover:opacity-95 hover:scale-[1.01]"
              style={{
                background: `linear-gradient(135deg, ${BLUE} 0%, #0d3f8a 100%)`,
              }}
              onClick={() => navigate("/contact")}
            >
              <span className="font-body text-xs font-semibold text-white/50 tracking-widest uppercase">
                Ready?
              </span>
              <div>
                <h3 className="font-display text-2xl font-bold text-white mb-2 group-hover:translate-x-1 transition-transform duration-300">
                  Let's talk about your destiny →
                </h3>
                <p className="font-body text-sm text-white/60">
                  Book a free consultation today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div
            className="grid grid-cols-2 md:grid-cols-4 rounded-3xl overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${DARK} 0%, #1a2d5a 100%)`,
            }}
          >
            {stats.map((s, i) => (
              <div
                key={i}
                className={`px-8 py-12 text-center ${
                  i < stats.length - 1 ? "border-r border-white/10" : ""
                }`}
              >
                <div
                  className="font-display text-5xl md:text-6xl font-bold mb-2"
                  style={{ color: i % 2 === 0 ? BLUSH : PINK }}
                >
                  {s.value}
                </div>
                <div className="font-body text-xs text-white/40 tracking-wide uppercase">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG / GALLERY */}
      <section
        id="blogs"
        className="py-20 px-6 md:px-10"
        style={{ background: BLUSH + "40" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div
              className="inline-block text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-4"
              style={{ background: BLUSH, color: PINK }}
            >
              Our Community
            </div>
            <h2 className="font-display text-4xl font-bold">
              Stories &{" "}
              <em className="italic font-light" style={{ color: BLUE }}>
                Inspiration.
              </em>
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {/* Instagram reel cards */}
            {reels.map((r, i) => (
              <a
                key={`reel-${i}`}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-56 flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, #405DE6 0%, #C13584 45%, ${PINK} 75%, #F77737 100%)`,
                }}
              >
                {r.thumb && (
                  <img
                    src={r.thumb}
                    alt="Write Your Destiny Instagram reel"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      ;(e.target as HTMLImageElement).style.display = "none"
                    }}
                  />
                )}
                <div className="absolute inset-0 bg-black/20" />

                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="text-white text-lg">◎</span>
                  <span className="font-body text-xs font-semibold text-white/90">
                    Reel
                  </span>
                </div>
                <div className="relative w-14 h-14 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl" style={{ color: PINK }}>
                    ▶
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-sm">
                  <span className="font-body text-xs font-semibold text-white">
                    Watch on Instagram
                  </span>
                </div>
              </a>
            ))}

            {/* YouTube video card */}
            <a
              href={youtubeVideo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-56"
            >
              <img
                src={youtubeVideo.thumb}
                alt="Write Your Destiny on YouTube"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-[#FF0000] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-white text-2xl ml-0.5">▶</span>
                </div>
              </div>
              <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm">
                <span className="font-body text-xs font-semibold text-white">
                  Watch on YouTube
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>


      {/* CONTACT */}
      {/* FOOTER */}
      <footer className="py-10 px-6 md:px-10" style={{ background: DARK }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="bg-white rounded-xl px-4 py-2 inline-flex items-center shrink-0">
            <img
              src={logo}
              alt="Write Your Destiny"
              className="h-8 w-auto object-contain"
            />
          </div>
          <p className="font-body text-xs text-white/30 text-center">
            © {new Date().getFullYear()} Write Your Destiny. All Rights
            Reserved. Hubli, Karnataka. Powered by{" "}
            <a
              href="https://www.spitel.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white/80 transition-colors"
            >
              Spitel Pvt. Ltd.
            </a>
          </p>
          <div className="flex gap-6">
            <button
              onClick={() => navigate("/about")}
              className="font-body text-xs text-white/30 hover:text-white/70 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => navigate("/services")}
              className="font-body text-xs text-white/30 hover:text-white/70 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="font-body text-xs text-white/30 hover:text-white/70 transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}