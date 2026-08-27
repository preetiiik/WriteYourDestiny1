import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import logo from "@/imports/ChatGPT_Image_Aug_24__2026__12_02_21_PM.png"
import reelResumeTips from "@/imports/reel-resume-tips.png"
import reelOverseasEducation from "@/imports/reel-overseas-education.png"
import iconResumeWriting from "@/imports/icon-resume-writing.png"
import iconNlp from "@/imports/icon-nlp.png"
import iconLeadershipSkills from "@/imports/icon-leadership-skills.png"
import iconBehavioralSkills from "@/imports/icon-behavioral-skills.png"
import iconInterviewingSkills from "@/imports/icon-interviewing-skills.png"
import iconPsychologicalTraining from "@/imports/icon-psychological-training.png"
import imgAbroad from "@/imports/ielts-overseas.png"

/* Same design tokens as the home page (App.tsx) */
const BLUE = "#1355B2"
const PINK = "#F5569B"
const BLUSH = "#FFCBEB"
const DARK = "#0a1a3d"
const SKYBLUE = "C3DBFD"

// Swap these for real WYD service photos when available (same pattern as homepage IMG_ constants)
const IMG_HERO =
  "https://writeyourdestiny.in/wp-content/uploads/2026/07/IMG_20260709_094910.jpg.jpeg"
const IMG_ABROAD = imgAbroad

// Blog / reels / video content for the "Stories & Inspiration" section
const YOUTUBE_ID = "Y907dQjIoMo"
const IMG_YOUTUBE_THUMB = `https://img.youtube.com/vi/${YOUTUBE_ID}/hqdefault.jpg`

const reels = [
  {
    label: "Resume making tips",
    url: "https://www.instagram.com/reel/Cr5gPIJrF-k/?igsh=Njhua2w4MGFla3Z2",
    thumb: reelResumeTips,
  },
  {
    label: "WYD @TRW2023 — Overseas Education",
    url: "https://www.instagram.com/reel/CoKXtCDDujA/?igsh=OW5ndXYyZHdzNnRp",
    thumb: reelOverseasEducation,
  },
]

const youtubeVideo = {
  label: "Shreedevi Roogi's Difficult Conversations",
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

type ModuleBullet = string | { title: string; text: string }

const modules: {
  key: string
  title: string
  icon: string
  iconFit?: "cover" | "contain"
  desc: string
  subheading?: string
  bullets?: ModuleBullet[]
}[] = [
  {
    key: "resume",
    title: "Resume Writing",
    icon: iconResumeWriting,
    desc: "Resume writing training equips you with the tools to craft a resume that highlights your skills and qualifications effectively.",
    subheading: "Why Choose Our Resume Writing Training?",
    bullets: [
      "Expert-Led Instruction",
      "Tailored to All Experience Levels",
      "Hands-On Learning",
      "Practical Tools & Resources",
      "Personalized Feedback",
    ],
  },
  {
    key: "nlp",
    title: "Neuro Linguistic Program",
    icon: iconNlp,
    iconFit: "contain",
    desc: "Neuro-Linguistic Programming (NLP) explores how communication with ourselves and others shapes our thoughts, behaviors, and outcomes. It focuses on the connection between neural processes, language, and behavior. NLP techniques enhance:",
    bullets: [
      { title: "Confidence", text: "Boosting self-assurance and belief in your abilities." },
      { title: "Self-Awareness", text: "Gaining deeper insights into thoughts, emotions, and triggers." },
      { title: "Communication Skills", text: "Improving how you express ideas and emotions." },
      { title: "Perception Shift", text: "Shifting how you view challenges, opportunities, and the world." },
    ],
  },
  {
    key: "leadership",
    title: "Leadership Skills",
    icon: iconLeadershipSkills,
    desc: "Leadership skills are key to guiding and motivating others toward a common goal. These skills, which go beyond just one trait, inspire and direct teams effectively. Crucial for both managers and individual contributors, strong leadership abilities foster growth and recognition. Employers value leadership across industries, making it essential for career advancement and success. Developing these skills unlocks new opportunities in any professional environment.",
  },
  {
    key: "behavioral",
    title: "Behavioral Skills",
    icon: iconBehavioralSkills,
    desc: "Behavioral skills are essential for effective interactions and appropriate responses in various situations. They shape our thoughts, feelings, and actions, influencing how we connect and collaborate with others. While some may excel naturally, anyone can develop these skills to enhance professional success. Improving behavioral skills boosts communication, social dynamics, and adaptability—key elements for long-term career growth.",
  },
  {
    key: "interviewing",
    title: "Interviewing Skills",
    icon: iconInterviewingSkills,
    desc: "Interviewing skills are key to assessing job opportunities and presenting yourself as the ideal candidate. These skills help match your abilities to the role and provide a competitive edge. Mastering them boosts performance in interviews and plays a vital role in professional growth, including handling challenges and pressure. Many skills, like clear communication, are transferable, improving both interview success and overall career performance.",
  },
  {
    key: "psychological",
    title: "Psychological training",
    icon: iconPsychologicalTraining,
    desc: "Psychological training teaches evidence-based skills to enhance mental well-being and improve performance in both personal and professional settings. It fosters self-awareness, perspective, and resilience, helping individuals manage stress, improve focus, and unlock their full potential. This structured, goal-oriented approach supports success in the workplace and beyond by equipping individuals with the tools for growth and peak performance.",
  },
]

const whyChoose = [
  { icon: "◈", title: "Expert Team", text: "Industry experts with proven experience", color: BLUE },
  { icon: "◇", title: "Personalized Approach", text: "Solutions tailored to your needs", color: PINK },
  { icon: "✦", title: "Proven Results", text: "1,400+ successful placements and counting", color: BLUE },
  { icon: "○", title: "End-to-End Support", text: "We are with you at every step", color: PINK },
]

const marqueeItems = [
  "Crafting Futures",
  "✦",
  "Connecting Talents",
  "✦",
  "Your Destiny, Our Expertise",
  "✦",
  "Write Your Destiny",
  "✦",
  "Hubli's Trusted HR Consultancy",
  "✦",
]

/* --------------------------- shared little pieces --------------------------- */

function IconPanel({
  icon,
  color,
  fit = "cover",
  className = "",
}: {
  icon: string
  color: string
  fit?: "cover" | "contain"
  className?: string
}) {
  return (
    <div
      className={`w-full overflow-hidden flex items-center justify-center rounded-2xl ${className}`}
      style={{ border: `2px solid ${color}20`, background: fit === "contain" ? `${color}10` : undefined }}
    >
      <img src={icon} alt="" className={`w-full h-full ${fit === "contain" ? "object-contain" : "object-cover"}`} />
    </div>
  )
}

/* ------------------------------ page ------------------------------ */

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
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-white/80 backdrop-blur-sm"
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
              className="nav-link font-body text-sm font-semibold transition-colors"
              style={{ color: PINK }}
            >
              Services
            </button>
            <button
              onClick={() => navigate("/jobs")}
              className="nav-link font-body text-sm font-medium text-[#4a5568] hover:text-[#0a1a3d] transition-colors"
            >
              Find Jobs
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
              onClick={() => {
                navigate("/about")
                setMenuOpen(false)
              }}
              className="text-left text-[#4a5568] hover:text-[#0a1a3d] font-body text-base transition-colors"
            >
              About
            </button>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-left font-body text-base font-semibold"
              style={{ color: PINK }}
            >
              Services
            </button>
            <button
              onClick={() => navigate("/jobs")}
              className="text-left text-[#4a5568] hover:text-[#0a1a3d] font-body text-base transition-colors"
            >
              Find Jobs
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="services-hero" className="pt-28 pb-20 md:pt-32 md:pb-24 relative overflow-hidden">
        <div
          className="absolute top-0 right-0 w-1/2 h-full"
          style={{ background: `linear-gradient(135deg, ${SKYBLUE}60 0%, ${BLUSH}20 100%)` }}
        />
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full"
          style={{ background: BLUSH, filter: "blur(80px)", opacity: 0.6 }}
        />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-14 max-w-2xl">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-6"
              style={{ background: BLUSH, color: PINK }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: PINK }} />
              What We Do
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1]">
              Solutions that empower people.
              <br />
              Transform <span style={{ color: PINK }}>futures.</span>
            </h1>
            <p className="font-display italic text-lg md:text-xl font-light mt-3" style={{ color: BLUE }}>
              End-to-end solutions that create real impact.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
            <div className="relative">
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
                  alt="WYD team working together"
                  className="w-full h-[380px] md:h-[440px] object-cover object-top"
                  onError={(e) => {
                    ;(e.target as HTMLImageElement).style.display = "none"
                  }}
                />
              </div>
            </div>

            <div>
              <p className="font-body text-lg text-[#6b7a99] leading-relaxed mb-8">
                From hiring the right talent to building skills and guiding global dreams — we
                provide end-to-end solutions that create real impact.
              </p>

              <div className="flex gap-8 mb-10">
                <div>
                  <div className="font-display text-2xl font-bold" style={{ color: PINK }}>
                    50+
                  </div>
                  <div className="font-body text-xs text-[#9aa3b5] mt-0.5">
                    Careers shaped across India
                  </div>
                </div>
                <div>
                  <div className="font-display text-2xl font-bold" style={{ color: PINK }}>
                    3
                  </div>
                  <div className="font-body text-xs text-[#9aa3b5] mt-0.5">
                    Core service pillars
                  </div>
                </div>
              </div>

              <button
                onClick={() => scrollTo("core-services")}
                className="px-8 py-4 font-semibold text-sm tracking-wide text-white transition-all duration-300 hover:opacity-90 hover:shadow-lg"
                style={{ background: BLUE, boxShadow: `0 4px 24px ${BLUE}40` }}
              >
                Explore Our Services →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-y border-pink-100 py-3 overflow-hidden" style={{ background: BLUE }}>
        <div className="marquee-track flex whitespace-nowrap gap-10">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="font-display italic text-lg font-light shrink-0"
              style={{ color: item === "✦" ? PINK : "#9aa3b5" }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* CORE SERVICES */}
      <section
        id="core-services"
        className="py-24 px-6 md:px-10"
        style={{ background: `linear-gradient(180deg, ${BLUSH}50 0%, white 100%)` }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div
              className="inline-block text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-4"
              style={{ background: BLUSH, color: PINK }}
            >
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
            {coreServices.map((s) => (
              <div
                key={s.num}
                className="service-card bg-white border-2 border-gray-100 rounded-2xl p-7 cursor-default"
              >
                <div className="flex items-start justify-between mb-5">
                  <span className="text-2xl" style={{ color: s.color }}>
                    {s.icon}
                  </span>
                  <span
                    className="font-body text-xs font-semibold tracking-widest"
                    style={{ color: s.color }}
                  >
                    {s.num}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold mb-3" style={{ color: DARK }}>
                  {s.title}
                </h3>
                <p className="font-body text-sm text-[#7a8499] leading-relaxed">{s.desc}</p>
                <div className="mt-6 h-0.5 w-10" style={{ background: s.color }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 01 TALENT ACQUISITION */}
      <section id="talent" className="py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 max-w-3xl">
            <div
              className="inline-block text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-5"
              style={{ background: BLUSH, color: PINK }}
            >
              01 · Talent Acquisition
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
              Talent Acquisition
            </h2>
            <p className="font-body text-[#6b7a99] leading-relaxed mt-5">
              Finding the right person for the right role isn't easy — but that's exactly what we
              do best. As a trusted recruitment and placement agency in Hubli, Karnataka, we help
              businesses across India hire smarter, faster, and better.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 md:p-9">
              <h3 className="font-display text-xl font-bold mb-3" style={{ color: BLUE }}>
                Contract Hiring
              </h3>
              <p className="font-body text-sm font-semibold italic mb-3" style={{ color: DARK }}>
                "Empower Your Projects with Expertise"
              </p>
              <p className="font-body text-sm text-[#7a8499] leading-relaxed">
                Need to scale fast? Our contract hiring solutions in Hubli, Karnataka help
                businesses across India quickly expand their teams with skilled professionals for
                short-term projects, seasonal demands, or specific expertise — giving you the
                agility to stay ahead in a competitive market.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 md:p-9">
              <h3 className="font-display text-xl font-bold mb-3" style={{ color: PINK }}>
                Full Time Hiring
              </h3>
              <p className="font-body text-sm font-semibold italic mb-3" style={{ color: DARK }}>
                "Build Lasting Partnerships with Exceptional Talent"
              </p>
              <p className="font-body text-sm text-[#7a8499] leading-relaxed">
                Building a strong team starts with the right hire. Our full-time recruitment
                process in Karnataka focuses on finding individuals who not only have the right
                skills but also align with your company's values and culture — helping businesses
                across India build teams that last.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => navigate("/jobs")}
              className="px-8 py-4 font-semibold text-sm tracking-wide text-white transition-all duration-300 hover:opacity-90 hover:shadow-lg"
              style={{ background: BLUE, boxShadow: `0 4px 24px ${BLUE}40` }}
            >
              Find Jobs →
            </button>
          </div>
        </div>
      </section>

      {/* 02 TRAINING (interactive modules) */}
      <section
        id="training"
        className="py-24 px-6 md:px-10"
        style={{ background: `linear-gradient(180deg, ${BLUSH}50 0%, white 100%)` }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 max-w-3xl">
            <div
              className="inline-block text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-5"
              style={{ background: BLUSH, color: PINK }}
            >
              02 · Training
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
              Training
            </h2>
            <p className="font-body text-[#6b7a99] leading-relaxed mt-5">
              Skills that stick, results that show. Our corporate training programs in Hubli,
              Karnataka are built for students and professionals across India who want to grow
              beyond their current potential — with practical, customized modules that actually
              make a difference.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {modules.map((m) => {
              const isActive = m.key === activeModule
              return (
                <button
                  key={m.key}
                  onClick={() => setActiveModule(m.key)}
                  className="font-body inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
                  style={{
                    color: isActive ? "#fff" : DARK,
                    background: isActive ? PINK : "#fff",
                    border: `2px solid ${isActive ? PINK : "#f0d5e6"}`,
                  }}
                >
                  <img src={m.icon} alt="" className="w-5 h-5 object-contain" />
                  {m.title}
                </button>
              )
            })}
          </div>

          <div
            key={active.key}
            className="grid md:grid-cols-[1.3fr_1fr] gap-8 items-stretch p-7 md:p-9 bg-white border-2 border-gray-100 rounded-2xl max-w-5xl mx-auto"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: BLUE }}
                >
                  <img src={active.icon} alt="" className="w-6 h-6 object-contain" />
                </span>
                <h3 className="font-display text-xl font-bold" style={{ color: DARK }}>
                  {active.title}
                </h3>
              </div>

              <p className="font-body text-sm text-[#7a8499] leading-relaxed">{active.desc}</p>

              {active.subheading && (
                <p className="font-body text-sm font-bold mt-5 mb-3" style={{ color: DARK }}>
                  {active.subheading}
                </p>
              )}

              {active.bullets && (
                <ul className="space-y-2 mt-4">
                  {active.bullets.map((b, i) =>
                    typeof b === "string" ? (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5" style={{ background: PINK }} />
                        <span className="font-body text-sm font-semibold" style={{ color: DARK }}>
                          {b}
                        </span>
                      </li>
                    ) : (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5" style={{ background: PINK }} />
                        <span className="font-body text-sm text-[#7a8499]">
                          <strong style={{ color: DARK }}>{b.title}:</strong> {b.text}
                        </span>
                      </li>
                    )
                  )}
                </ul>
              )}
            </div>

            <IconPanel icon={active.icon} color={BLUE} fit={active.iconFit} className="min-h-[220px]" />
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => navigate("/contact")}
              className="px-8 py-4 font-semibold text-sm tracking-wide text-white transition-all duration-300 hover:opacity-90 hover:shadow-lg"
              style={{ background: BLUE, boxShadow: `0 4px 24px ${BLUE}40` }}
            >
              Contact us →
            </button>
          </div>
        </div>
      </section>

      {/* 03 OVERSEAS EDUCATION */}
      <section id="overseas-education" className="py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 max-w-3xl">
            <div
              className="inline-block text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-5"
              style={{ background: BLUSH, color: PINK }}
            >
              03 · Overseas Education
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
              Overseas Education
            </h2>
            <p className="font-body text-[#6b7a99] leading-relaxed mt-5">
              Your dream university is closer than you think. WYD is a leading overseas education
              consultancy in Hubli, Karnataka, helping students across India navigate the path to
              top universities worldwide — from choosing the right course to securing your
              admission. With strong partnerships with prestigious institutions in the US, UK,
              Australia, Ireland, and Canada, we ensure a seamless transition for students
              pursuing educational experiences abroad.
            </p>
          </div>

          <div className="grid md:grid-cols-[1fr_1.4fr] gap-8 items-stretch p-7 md:p-9 bg-white border-2 border-gray-100 rounded-2xl max-w-5xl mx-auto">
            <div className="min-h-[220px] w-full flex items-center justify-center overflow-hidden rounded-2xl">
              <img src={IMG_ABROAD} alt="IELTS preparation" className="w-full h-full object-contain" />
            </div>
            <div>
              <h3 className="font-display text-xl md:text-2xl font-bold leading-snug mb-4" style={{ color: BLUE }}>
                IELTS (International English Language Testing System)
              </h3>
              <p className="font-body text-sm text-[#7a8499] leading-relaxed mb-4">
                Planning to study or work abroad? Start with IELTS. WYD offers expert IELTS
                coaching in Hubli, Karnataka, preparing students and professionals across India to
                confidently ace the test and take their first step toward a global future in the
                USA, UK, Australia, Ireland, and Canada. IELTS is designed to help you work, study,
                or migrate to a country where English is the native language.
              </p>
              <p className="font-body text-sm text-[#7a8499] leading-relaxed">
                IELTS is jointly owned by the British Council, IDP: IELTS Australia, and Cambridge
                English.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => navigate("/contact")}
              className="px-8 py-4 font-semibold text-sm tracking-wide text-white transition-all duration-300 hover:opacity-90 hover:shadow-lg"
              style={{ background: PINK, boxShadow: `0 4px 24px ${PINK}40` }}
            >
              Contact us →
            </button>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section
        className="py-24 px-6 md:px-10"
        style={{ background: `linear-gradient(180deg, ${BLUSH}50 0%, white 100%)` }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div
              className="inline-block text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-4"
              style={{ background: BLUSH, color: PINK }}
            >
              Why Choose WYD?
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              What sets us{" "}
              <em className="italic font-light" style={{ color: BLUE }}>
                apart.
              </em>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {whyChoose.map((w) => (
              <div key={w.title} className="service-card bg-white border-2 border-gray-100 rounded-2xl p-7">
                <span
                  className="w-11 h-11 rounded-full flex items-center justify-center text-lg text-white shrink-0"
                  style={{ background: w.color }}
                >
                  {w.icon}
                </span>
                <p className="font-display text-sm font-bold mt-4 mb-1" style={{ color: DARK }}>
                  {w.title}
                </p>
                <p className="font-body text-xs text-[#7a8499] leading-relaxed">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24 md:py-32" style={{ background: DARK }}>
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
            Ready to discover <span style={{ color: PINK }}>what's possible?</span>
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

      {/* BLOGS */}
      <section id="blogs" className="py-20 px-6 md:px-10" style={{ background: BLUSH + "40" }}>
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
                    alt={r.label}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      ;(e.target as HTMLImageElement).style.display = "none"
                    }}
                  />
                )}
                <div className="absolute inset-0 bg-black/20" />

                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="text-white text-lg">◎</span>
                  <span className="font-body text-xs font-semibold text-white/90">{r.label}</span>
                </div>
                <div className="relative w-14 h-14 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl" style={{ color: PINK }}>
                    ▶
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-sm">
                  <span className="font-body text-xs font-semibold text-white">Watch on Instagram</span>
                </div>
              </a>
            ))}

            <a
              href={youtubeVideo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-56"
            >
              <img
                src={youtubeVideo.thumb}
                alt={youtubeVideo.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-[#FF0000] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-white text-2xl ml-0.5">▶</span>
                </div>
              </div>
              <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm">
                <span className="font-body text-xs font-semibold text-white">Watch on YouTube</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pt-16 pb-8 px-6 md:px-10" style={{ background: BLUE }}>
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo + tagline */}
          <div>
            <button
              onClick={() => navigate("/")}
              className="bg-white rounded-xl px-4 py-2 inline-flex items-center shrink-0 mb-4 transition-transform duration-300 hover:scale-105"
              aria-label="Go to home"
            >
              <img src={logo} alt="Write Your Destiny" className="h-8 w-auto object-contain" />
            </button>
            <p className="font-body text-sm text-white/70 leading-relaxed">
              Welcome to Write Your Destiny (WYD), a global HR boutique dedicated to shaping
              careers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-white font-bold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2.5">
              <button
                onClick={() => navigate("/")}
                className="text-left font-body text-sm text-white/70 hover:text-white transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => navigate("/about")}
                className="text-left font-body text-sm text-white/70 hover:text-white transition-colors"
              >
                About Us
              </button>
              <button
                onClick={() => scrollTo("core-services")}
                className="text-left font-body text-sm text-white/70 hover:text-white transition-colors"
              >
                Our Services
              </button>
              <button
                onClick={() => scrollTo("blogs")}
                className="text-left font-body text-sm text-white/70 hover:text-white transition-colors"
              >
                Our Blogs
              </button>
              <button
                onClick={() => navigate("/jobs")}
                className="text-left font-body text-sm text-white/70 hover:text-white transition-colors"
              >
                Find Jobs
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="text-left font-body text-sm text-white/70 hover:text-white transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-display text-white font-bold mb-4">Contact Us</h3>
            <p className="font-body text-sm text-white/70 leading-relaxed mb-3">
              WYD 3rd Floor, BM Plaza
              <br />
              Near Sharada Hotel
              <br />
              Deshpande Nagar, Hubli
            </p>
            <p className="font-body text-sm text-white/70 mb-1">Phone: +91 9606351695</p>
            <p className="font-body text-sm text-white/70">Email: shreedevi.roogi@writeyourdestiny.in</p>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="font-display text-white font-bold mb-4">Working Hours</h3>
            <p className="font-body text-sm text-white/70 leading-relaxed">
              Monday to Friday 9:30 am to 6:30 pm
              <br />
              Saturday 9:30 am to 2:30 pm
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10">
          <p className="font-body text-xs text-white/50 text-center">
            © {new Date().getFullYear()} Write Your Destiny. All Rights Reserved. Hubli, Karnataka.
            Powered by{" "}
            <a
              href="https://www.spitel.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              Spitel Pvt. Ltd.
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}