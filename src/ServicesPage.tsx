import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import logo from "@/imports/ChatGPT_Image_Aug_24__2026__12_02_21_PM.png"
import reelResumeTips from "@/imports/reel-resume-tips.png"
import reelOverseasEducation from "@/imports/reel-overseas-education.png"

const BLUE = "#1355B2"
const PINK = "#F5569B"
const BLUSH = "#FFCBEB"
const DARK = "#0a1a3d"
const SKYBLUE = "#C3DBFD"

// Swap these for real WYD service photos when available (same pattern as homepage IMG_ constants)
const IMG_HERO =
  "https://writeyourdestiny.in/wp-content/uploads/2026/07/IMG_20260709_094910.jpg.jpeg"
const IMG_TALENT =
  "https://writeyourdestiny.in/wp-content/uploads/2026/07/IMG_20260709_094726.jpg.jpeg"
const IMG_TRAINING =
  "https://writeyourdestiny.in/wp-content/uploads/2026/07/InShot_20260710_110530721.jpg-1024x1024.jpeg"
const IMG_ABROAD =
  "https://writeyourdestiny.in/wp-content/uploads/2024/03/image23-1-1024x1024.png"

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

const coreServices = [
  {
    num: "01",
    title: "Talent Acquisition",
    desc: "Contract & full-time hiring solutions for growing teams across every industry we serve.",
    icon: "◈",
    color: BLUE,
  },
  {
    num: "02",
    title: "Training",
    desc: "Six skill-building modules designed to sharpen confidence, capability, and employability.",
    icon: "◇",
    color: PINK,
  },
  {
    num: "03",
    title: "Overseas Education",
    desc: "IELTS coaching and study-abroad guidance to help you take the leap toward a global future.",
    icon: "○",
    color: BLUE,
  },
]

const modules = [
  {
    key: "resume",
    title: "Resume Writing",
    icon: "◈",
    desc: "We craft resumes that get noticed — clear, keyword-optimized, and built around your real achievements.",
    points: [
      "ATS-friendly formatting",
      "Impact-driven bullet points",
      "Role-specific customization",
      "LinkedIn profile alignment",
    ],
  },
  {
    key: "nlp",
    title: "NLP",
    icon: "◇",
    desc: "Practical Neuro-Linguistic Programming techniques to help you communicate with clarity and build lasting confidence.",
    points: [
      "Reframing limiting beliefs",
      "Communication patterns",
      "Confidence-building exercises",
      "Goal-setting techniques",
    ],
  },
  {
    key: "leadership",
    title: "Leadership Skills",
    icon: "△",
    desc: "The mindset and tools to lead teams, make decisions under pressure, and inspire the people around you.",
    points: [
      "Decision-making frameworks",
      "Team management basics",
      "Delegation & accountability",
      "Conflict resolution",
    ],
  },
  {
    key: "behavioral",
    title: "Behavioral Skills",
    icon: "✦",
    desc: "The soft skills employers consistently rank as top hiring criteria — teamwork, adaptability, and ownership.",
    points: [
      "Emotional intelligence",
      "Workplace adaptability",
      "Collaboration & teamwork",
      "Time management",
    ],
  },
  {
    key: "interviewing",
    title: "Interviewing Skills",
    icon: "◈",
    desc: "From storytelling to body language, we prepare you to walk into any interview room with confidence.",
    points: [
      "Mock interview practice",
      "STAR method storytelling",
      "Handling tricky questions",
      "Salary negotiation basics",
    ],
  },
  {
    key: "psychological",
    title: "Psychological Training",
    icon: "○",
    desc: "Tools to manage stress, build resilience, and stay motivated through career transitions and challenges.",
    points: [
      "Stress management",
      "Resilience building",
      "Motivation & mindset",
      "Work-life balance",
    ],
  },
]

const whyChoose = [
  { icon: "◈", title: "Expert Team", text: "Industry experts with proven experience" },
  { icon: "◇", title: "Personalized Approach", text: "Solutions tailored to your needs" },
  { icon: "✦", title: "Proven Results", text: "500+ success stories and counting" },
  { icon: "○", title: "End-to-End Support", text: "We are with you at every step" },
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

export default function Services() {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeModule, setActiveModule] = useState(modules[0].key)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setMenuOpen(false)
  }

  const active = modules.find((m) => m.key === activeModule)!

  return (
    <div className="min-h-screen bg-white text-[#0a1a3d] overflow-x-hidden">
      {/* NAV */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <button onClick={() => navigate("/")} className="flex items-center">
            <img src={logo} alt="Write Your Destiny logo" className="h-10 w-auto object-contain" />
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => navigate("/about")}
              className="nav-link font-body text-sm font-medium text-[#4a5568] hover:text-[#0a1a3d] transition-colors"
            >
              About
            </button>
            <button
              className="nav-link font-body text-sm font-semibold"
              style={{ color: PINK }}
            >
              Services
            </button>
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
            <span className={`block w-6 h-0.5 bg-[#0a1a3d] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#0a1a3d] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#0a1a3d] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-56" : "max-h-0"}`}>
          <div className="bg-white border-t border-gray-100 px-6 py-5 flex flex-col gap-4">
            <button onClick={() => navigate("/about")} className="text-left text-[#4a5568] font-body text-base">About</button>
            <button className="text-left font-body text-base font-semibold" style={{ color: PINK }}>Services</button>
            <button onClick={() => scrollTo("blogs")} className="text-left text-[#4a5568] font-body text-base">Blogs</button>
          </div>
        </div>
      </nav>

      {/* ================= HERO ================= */}

      <section
        id="services-hero"
        className="relative pt-24 pb-12 md:pt-28 md:pb-14 overflow-hidden"
      >

        <div
          className="absolute -top-20 -right-32 w-[500px] h-[400px] rounded-full blur-[120px] opacity-30"
          style={{ background: BLUSH }}
        />

        <div
          className="absolute bottom-0 -left-32 w-[400px] h-[400px] rounded-full blur-[120px] opacity-10"
          style={{ background: BLUE }}
        />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10">

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* LEFT */}

            <div>

              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-wide mb-7"
                style={{
                  background: "#fff0f7",
                  color: PINK,
                }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: PINK }}
                />

                OUR SERVICES
              </div>

              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight">

                Solutions that
                <br />

                empower{" "}

                <span style={{ color: BLUE }}>
                  people.
                </span>

                <br />

                Transform

                <span style={{ color: PINK }}>
                  {" "}futures.
                </span>

              </h1>

              <p className="mt-8 max-w-xl font-body text-base md:text-lg leading-8 text-[#64748b]">

                From hiring the right talent to building skills and guiding
                global dreams — we provide end-to-end solutions that create
                real impact.

              </p>

              <div className="flex flex-wrap gap-4 mt-9">

                <button
                  onClick={() => scrollTo("core-services")}
                  className="px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
                  style={{ background: BLUE }}
                >
                  Explore Our Services →
                </button>

              </div>

            </div>


            {/* RIGHT */}

            <div className="relative min-h-[420px] flex items-center justify-center">

              <div
                className="absolute w-[85%] h-[85%] rounded-[45%] rotate-6"
                style={{
                  background: `linear-gradient(135deg, ${BLUE}, #5b8fdc)`,
                  opacity: 0.12,
                }}
              />

              <div
                className="relative w-[90%] max-w-[500px] aspect-[4/5] overflow-hidden rounded-[45%_45%_12%_12%]"
                style={{
                  boxShadow: "0 30px 80px rgba(19,85,178,0.18)",
                }}
              >
                <img
                  src={IMG_HERO}
                  alt="WYD team working together"
                  className="w-full h-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none" }}
                />
              </div>


              {/* Floating Badge */}

              <div
                className="absolute bottom-10 -left-2 md:-left-10 bg-white px-5 py-4 shadow-xl"
                style={{
                  boxShadow: "0 20px 50px rgba(10,26,61,0.12)",
                }}
              >
                <p
                  className="font-display text-3xl font-bold"
                  style={{ color: PINK }}
                >
                  50+
                </p>

                <p className="font-body text-xs text-[#64748b]">
                  Careers shaped across India
                </p>
              </div>


              <div
                className="absolute top-14 -right-2 md:-right-8 bg-white px-5 py-4 shadow-xl"
                style={{
                  boxShadow: "0 20px 50px rgba(10,26,61,0.12)",
                }}
              >
                <p
                  className="font-display text-2xl font-bold"
                  style={{ color: BLUE }}
                >
                  3
                </p>

                <p className="font-body text-xs text-[#64748b]">
                  Core service pillars
                </p>
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

      {/* CORE SERVICES */}
      <section id="core-services" className="py-24 px-6 md:px-10" style={{ background: `linear-gradient(180deg, ${BLUSH}50 0%, white 100%)` }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-4" style={{ background: BLUSH, color: PINK }}>
              What We Do
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Our Core{" "}
              <em className="italic font-light" style={{ color: BLUE }}>
                Services.
              </em>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {coreServices.map((s, i) => (
              <div
                key={i}
                className="service-card bg-white border-2 border-gray-100 rounded-2xl p-7 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-5">
                  <span className="text-2xl" style={{ color: s.color }}>{s.icon}</span>
                  <span className="font-body text-xs font-semibold tracking-widest" style={{ color: s.color }}>{s.num}</span>
                </div>
                <h3 className="font-display text-xl font-bold mb-3" style={{ color: DARK }}>{s.title}</h3>
                <p className="font-body text-sm text-[#7a8499] leading-relaxed">{s.desc}</p>
                <div className="mt-6 h-0.5 w-10 transition-all duration-500" style={{ background: s.color }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 01 TALENT ACQUISITION */}
      <section className="py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <img
            src={IMG_TALENT}
            alt="Talent acquisition"
            className="w-full h-96 object-cover rounded-2xl"
            onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0" }}
          />
          <div>
            <div className="inline-block text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-5" style={{ background: BLUSH, color: PINK }}>
              01 · Talent Acquisition
            </div>
            <h2 className="font-display text-4xl font-bold leading-[1.1] mb-4">
              Finding the right talent.
              <br />
              <em className="italic font-light" style={{ color: BLUE }}>Faster.</em>
            </h2>
            <p className="font-body text-[#6b7a99] leading-relaxed mb-8">
              We help businesses across India build high-performing teams through contract and full-time hiring
              solutions tailored to their needs and culture.
            </p>
            <div className="flex flex-wrap gap-6">
              {["Contract Hiring", "Industry Expertise", "End-to-End Support"].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs shrink-0" style={{ background: PINK }}>✓</span>
                  <span className="font-body text-sm font-medium text-[#0a1a3d]">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 02 TRAINING (interactive modules) */}
      <section className="py-24 px-6 md:px-10" style={{ background: `${SKYBLUE}25` }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-5" style={{ background: "white", color: BLUE }}>
              02 · Training
            </div>
            <h2 className="font-display text-4xl font-bold leading-[1.1] mb-4">
              Skills today.
              <br />
              <em className="italic font-light" style={{ color: PINK }}>Success tomorrow.</em>
            </h2>
            <p className="font-body text-[#6b7a99] leading-relaxed mb-8">
              Our six specialized training modules are designed to enhance confidence, capability, and employability.
              Tap a module to see what it covers.
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              {modules.map((m) => {
                const isActive = m.key === activeModule
                return (
                  <button
                    key={m.key}
                    onClick={() => setActiveModule(m.key)}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full font-body text-sm font-semibold transition-all duration-300"
                    style={{
                      background: isActive ? BLUE : "white",
                      color: isActive ? "white" : DARK,
                      border: `2px solid ${isActive ? BLUE : "#e5e7eb"}`,
                      boxShadow: isActive ? `0 8px 20px ${BLUE}40` : "none",
                    }}
                  >
                    <span style={{ color: isActive ? "white" : PINK }}>{m.icon}</span>
                    {m.title}
                  </button>
                )
              })}
            </div>

            <div
              key={active.key}
              className="bg-white border-2 border-gray-100 rounded-2xl p-7 fade-up"
              style={{ boxShadow: `0 16px 40px ${BLUE}15` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg text-white shrink-0"
                  style={{ background: PINK }}
                >
                  {active.icon}
                </span>
                <h3 className="font-display text-xl font-bold" style={{ color: DARK }}>{active.title}</h3>
              </div>
              <p className="font-body text-sm text-[#6b7a99] leading-relaxed mb-4">{active.desc}</p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {active.points.map((p) => (
                  <div key={p} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: BLUE }} />
                    <span className="font-body text-xs text-[#0a1a3d]">{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <img
            src={IMG_TRAINING}
            alt="Training session"
            className="w-full h-96 object-cover rounded-2xl"
            onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0" }}
          />
        </div>
      </section>

      {/* 03 OVERSEAS EDUCATION */}
      <section className="py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src={IMG_ABROAD}
              alt="Overseas education guidance"
              className="w-full h-96 object-cover rounded-2xl"
              onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0" }}
            />
            <div
              className="absolute top-5 left-5 bg-white shadow-xl px-5 py-3 rounded-xl"
              style={{ boxShadow: `0 8px 32px ${DARK}20` }}
            >
              <p className="font-display text-sm font-bold leading-tight" style={{ color: DARK }}>
                STUDY ABROAD
              </p>
              <p className="font-display text-sm font-bold" style={{ color: PINK }}>
                Shape your future
              </p>
            </div>
          </div>
          <div>
            <div className="inline-block text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-5" style={{ background: BLUSH, color: PINK }}>
              03 · Overseas Education
            </div>
            <h2 className="font-display text-4xl font-bold leading-[1.1] mb-4">
              Your dreams.
              <br />
              <em className="italic font-light" style={{ color: BLUE }}>Our guidance.</em>
            </h2>
            <p className="font-body text-[#6b7a99] leading-relaxed mb-8">
              From IELTS coaching to university shortlisting and admission support, we help students take the right
              steps toward a successful global future.
            </p>
            <div className="flex flex-wrap gap-6">
              {["IELTS Coaching", "University Shortlisting", "Application Support", "Visa Guidance"].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs shrink-0" style={{ background: BLUE }}>✓</span>
                  <span className="font-body text-sm font-medium text-[#0a1a3d]">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-20 px-6 md:px-10" style={{ background: BLUSH + "40" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-4" style={{ background: "white", color: PINK }}>
              Why Choose WYD?
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {whyChoose.map((w) => (
              <div key={w.title} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-lg shrink-0 text-white" style={{ background: BLUE }}>
                  {w.icon}
                </div>
                <div>
                  <p className="font-display text-sm font-bold mb-0.5" style={{ color: DARK }}>{w.title}</p>
                  <p className="font-body text-xs text-[#7a8499] leading-relaxed">{w.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative overflow-hidden py-24 md:py-32"
        style={{ background: DARK }}
      >
        <div
          className="absolute -right-32 -top-32 w-[500px] h-[500px] rounded-full blur-[130px] opacity-30"
          style={{ background: BLUE }}
        />
        <div
          className="absolute -left-32 bottom-0 w-[450px] h-[450px] rounded-full blur-[130px] opacity-20"
          style={{ background: PINK }}
        />
        <div className="relative max-w-3xl mx-auto px-6 md:px-10 text-center">
          <div
            className="inline-block text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-5"
            style={{ background: BLUSH, color: PINK }}
          >
            Ready When You Are
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
            Ready to discover{" "}
            <span style={{ color: PINK }}>what's possible?</span>
          </h2>
          <p className="font-body text-white/60 text-base md:text-lg max-w-xl mx-auto leading-8 mt-6">
            Let's work together to shape brighter futures for individuals and organizations.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="mt-10 px-8 py-4 font-body text-sm font-bold text-white transition-transform hover:scale-[1.03]"
            style={{ background: PINK }}
          >
            Let's Talk →
          </button>
        </div>
      </section>

      {/* BLOGS / GALLERY */}
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

      {/* FOOTER */}
      <footer className="py-10 px-6 md:px-10" style={{ background: DARK }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="bg-white rounded-xl px-4 py-2 inline-flex items-center shrink-0">
            <img src={logo} alt="Write Your Destiny" className="h-8 w-auto object-contain" />
          </div>
          <p className="font-body text-xs text-white/30 text-center">
            © {new Date().getFullYear()} Write Your Destiny. All Rights Reserved. Hubli, Karnataka. Powered by{" "}
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
            <button onClick={() => navigate("/about")} className="font-body text-xs text-white/30 hover:text-white/70 transition-colors">About</button>
            <button className="font-body text-xs text-white/70">Services</button>
            <button onClick={() => navigate("/contact")} className="font-body text-xs text-white/30 hover:text-white/70 transition-colors">Contact</button>
          </div>
        </div>
      </footer>
    </div>
  )
}