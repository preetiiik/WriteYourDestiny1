import { useState, useEffect, type CSSProperties } from "react"
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
import imgAboutUs2 from "@/imports/about-us-2.png"
import ctaBg from "@/imports/cta-support-illustration.png"

// const DARK = "#0a1a3d"

/* Lightweight inline SVG icons (same pattern as App.tsx) */
type IconProps = { className?: string; style?: CSSProperties }

const MapPinIcon = ({ className, style }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const PhoneIcon = ({ className, style }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
  </svg>
)

const MailIcon = ({ className, style }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 6-10 7L2 6" />
  </svg>
)

const LinkedinIcon = ({ className, style }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
  </svg>
)

const InstagramIcon = ({ className, style }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const FacebookIcon = ({ className, style }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
    <path d="M14 9.5V7.5c0-.83.67-1.5 1.5-1.5H17V3h-2.5C11.46 3 10 4.46 10 7.5v2H7v3.5h3V21h4v-8h2.5l.5-3.5H14Z" />
  </svg>
)

const WhatsappIcon = ({ className, style }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.71.45 3.37 1.3 4.85L2.05 22l5.36-1.36a9.94 9.94 0 0 0 4.63 1.14h.01c5.46 0 9.9-4.45 9.9-9.91C21.95 6.45 17.5 2 12.04 2Zm5.85 14.03c-.24.68-1.4 1.32-1.93 1.4-.5.08-1.11.11-1.79-.11-.41-.13-.94-.3-1.62-.6-2.85-1.23-4.7-4.1-4.85-4.29-.14-.19-1.16-1.55-1.16-2.96 0-1.4.73-2.09 1-2.37.24-.27.53-.34.7-.34l.5.01c.16.01.38-.06.6.46.24.57.79 1.98.86 2.12.07.14.11.31.02.5-.09.19-.14.31-.27.47-.14.16-.29.36-.41.48-.14.14-.28.29-.12.56.16.27.71 1.18 1.53 1.91 1.05.94 1.94 1.24 2.21 1.38.27.14.43.11.59-.07.16-.18.68-.79.86-1.06.18-.27.36-.22.6-.13.25.09 1.58.75 1.85.88.27.14.45.2.52.32.07.11.07.66-.17 1.34Z" />
  </svg>
)

/* Same design tokens as the home page (App.tsx) */
const BLUE = "#1355B2"
const PINK = "#F5569B"
const BLUSH = "#FFCBEB"
const DARK = "#0a1a3d"
const SKYBLUE = "C3DBFD"

const IMG_HERO = imgAboutUs2
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
    desc: "Contract and full-time hiring solutions for growing teams across every industry we serve.",
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
    title: "Neuro-Linguistic Programming",
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
    title: "Psychological Training",
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
            {/* Home → Home Page */}
  <button
    onClick={() => navigate("/")}
    className="nav-link font-body text-sm font-medium text-[#4a5568] hover:text-[#0a1a3d] transition-colors"
  >
    Home
  </button>
            

            <button
              onClick={() => navigate("/about")}
              className="nav-link font-body text-sm font-medium text-[#4a5568] hover:text-[#0a1a3d] transition-colors"
            >
              About Us
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
            menuOpen ? "max-h-60" : "max-h-0"
          }`}
        >
          <div className="bg-white border-t border-gray-100 px-6 py-5 flex flex-col gap-4">
            <button
  onClick={() => {
    navigate("/")
    setMenuOpen(false)
  }}
  className="text-left text-[#4a5568] hover:text-[#0a1a3d] font-body text-base transition-colors"
>
  Home
</button>
  <button
    onClick={() => navigate("/about")}
    className="text-left text-[#4a5568] hover:text-[#0a1a3d] font-body text-base transition-colors"
  >
    About Us
  </button>

  <button
    onClick={() => navigate("/services")}
    className="text-left text-[#4a5568] hover:text-[#0a1a3d] font-body text-base transition-colors"
  >
    Services
  </button>

  <button
    onClick={() => navigate("/jobs")}
    className="text-left text-[#4a5568] hover:text-[#0a1a3d] font-body text-base transition-colors"
  >
    Find Jobs
  </button>

  {/* Get Started */}
  <button
    onClick={() => {
      navigate("/contact")
      setMenuOpen(false)
    }}
    className="w-full py-3 mt-2 text-sm font-semibold text-white transition-all duration-300 hover:opacity-90"
    style={{ background: PINK }}
  >
    Get Started →
  </button>
</div>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="services-hero"
        className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-22 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${IMG_HERO})` }}
      >
        {/* Scrim for text legibility over the photo */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, ${DARK}b3 35%, ${DARK}85 95%, ${DARK}cc 100%)`,
          }}
        />
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full"
          style={{ background: BLUSH, filter: "blur(90px)", opacity: 0.25 }}
        />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-2xl">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-6"
              style={{ background: BLUSH, color: PINK }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: PINK }} />
              What We Do
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-white">
              Solutions that empower people.
              <br />
              Transform <span style={{ color: PINK }}>futures.</span>
            </h1>
            <p className="font-display italic text-lg md:text-xl font-light mt-3 text-white/90">
              End-to-end solutions that create real impact.
            </p>

            <p className="font-body text-lg text-white/80 leading-relaxed mt-8 mb-10 max-w-xl">
              From hiring the right talent to building skills and guiding global dreams — we
              provide end-to-end solutions that create real impact.
            </p>

            <div className="flex gap-8 mb-10">
              <div>
                <div className="font-display text-2xl font-bold" style={{ color: PINK }}>
                  50+
                </div>
                <div className="font-body text-xs text-white/70 mt-0.5">
                  Careers shaped across India
                </div>
              </div>
              <div>
                <div className="font-display text-2xl font-bold" style={{ color: PINK }}>
                  3
                </div>
                <div className="font-body text-xs text-white/70 mt-0.5">
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
      </section>

      {/* MARQUEE */}
      <div className="py-3 overflow-hidden" style={{ background: BLUE }}>
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
                Full-Time Hiring
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
<section
  className="relative overflow-hidden py-24 md:py-28 px-6 md:px-10"
  style={{ background: DARK }}
>
  <img
    src={ctaBg}
    alt=""
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Blue overlay - 45% */}
  <div className="absolute inset-0 bg-[#0a1a3d]/85" />

  <div className="relative max-w-2xl mx-auto text-center">
    <div className="inline-block text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full bg-white/15 text-white">
      When You Are Ready
    </div>

    <h2 className="font-display mt-6 text-3xl md:text-4xl font-bold text-white leading-tight">
      Let's talk about your <span style={{ color: PINK }}>destiny.</span>
    </h2>

    <p className="font-body text-white/80 text-base max-w-xl mx-auto leading-7 mt-5">
      Book a free consultation and let's shape your next chapter together.
    </p>

    <button
      onClick={() => navigate("/contact")}
      className="font-body mt-8 px-8 py-4 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
      style={{ background: PINK }}
    >
      Get In Touch →
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
            <div className="bg-white rounded-xl px-4 py-2 inline-flex items-center shrink-0 mb-4">
              <img
                src={logo}
                alt="Write Your Destiny"
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="font-body text-sm text-white/70 leading-relaxed mb-4">
              Welcome to Write Your Destiny (WYD), a global HR boutique
              dedicated to shaping careers.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/write-your-destiny/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Write Your Destiny (WYD) on LinkedIn"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <LinkedinIcon className="w-4.5 h-4.5 text-white" style={{ width: 18, height: 18 }} />
              </a>
              <a
                href="https://www.instagram.com/write.your.destiny007/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Write Your Destiny (WYD) on Instagram"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <InstagramIcon className="w-4.5 h-4.5 text-white" style={{ width: 18, height: 18 }} />
              </a>
              <a
                href="https://www.facebook.com/wyd007"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Write Your Destiny (WYD) on Facebook"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <FacebookIcon className="w-4.5 h-4.5 text-white" style={{ width: 18, height: 18 }} />
              </a>
              <a
                href="https://wa.me/919606351695"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Write Your Destiny (WYD) on WhatsApp"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <WhatsappIcon className="w-4.5 h-4.5 text-white" style={{ width: 18, height: 18 }} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-white font-bold mb-4">
              Quick Links
            </h3>
            <div className="flex flex-col gap-2.5">
              <button
                onClick={() => scrollTo("hero")}
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
                onClick={() => navigate("/services")}
                className="text-left font-body text-sm text-white/70 hover:text-white transition-colors"
              >
                Our Services
              </button>
              {/* <button
                onClick={() => scrollTo("blogs")}
                className="text-left font-body text-sm text-white/70 hover:text-white transition-colors"
              >
                Our Blogs
              </button> */}
              <button
                onClick={() => navigate("/contact")}
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
            <h3 className="font-display text-white font-bold mb-4">
              Contact Us
            </h3>
            <div className="flex items-start gap-3 mb-3">
              <MapPinIcon className="text-white/70 shrink-0 mt-0.5" style={{ width: 16, height: 16 }} />
              <p className="font-body text-sm text-white/70 leading-relaxed">
                WYD, 3rd Floor, BM Plaza
                <br />
                Near Sharada Hotel
                <br />
                Deshpande Nagar, Hubli
              </p>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <PhoneIcon className="text-white/70 shrink-0" style={{ width: 16, height: 16 }} />
              <a
                href="tel:+919606351695"
                className="font-body text-sm text-white/70 hover:text-white transition-colors"
              >
                +91 9606351695
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MailIcon className="text-white/70 shrink-0" style={{ width: 16, height: 16 }} />
              <a
                href="mailto:shreedevi.roogi@writeyourdestiny.in"
                className="font-body text-sm text-white/70 hover:text-white transition-colors"
              >
                shreedevi.roogi@writeyourdestiny.in
              </a>
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="font-display text-white font-bold mb-4">
              Working Hours
            </h3>
            <p className="font-body text-sm text-white/70 leading-relaxed">
              Mon - Fri: 9:30 am to 6:30 pm
              <br />
              Saturday 9:30 am to 2:30 pm
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10">
          <p className="font-body text-xs text-white/50 text-center">
            © {new Date().getFullYear()} Write Your Destiny. All Rights
            Reserved. Hubli, Karnataka. Powered by{" "}
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