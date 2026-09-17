import { useEffect, useState, type CSSProperties } from "react"
import { useNavigate } from "react-router-dom"
import { MarqueeTrack } from "@/MarqueeTrack"

import logo from "@/imports/ChatGPT_Image_Aug_24__2026__12_02_21_PM.png"
import reelResumeTips from "@/imports/reel-resume-tips.png"
import reelOverseasEducation from "@/imports/reel-overseas-education.png"
import imgShreedevi from "@/imports/shreedevi.png"
import imgVeeresh from "@/imports/veeresh.png"
import imgSanghamitra from "@/imports/sanghamitra.png"
import imgDivya from "@/imports/divya.png"
import imgPooja from "@/imports/pooja.png"
import imgAkshata from "@/imports/akshata.png"
import imgBharati from "@/imports/bharati.png"
import imgVaishnavi from "@/imports/vaishnavi.png"
import imgTeamHero from "@/imports/team-photo.png"
import imgFoundersStory from "@/imports/founders-story.png"
import ctaBg from "@/imports/cta-support-illustration.png"

/* Lightweight inline SVG icons (same pattern as App.tsx / Services.tsx) */
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
const INK = "#14213D"

/* Hero/portrait photo for this page */
const IMG_ABOUT_HERO = imgTeamHero

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

/* Same team, same photos, same roles as the live site */
const team = [
  { name: "Shreedevi Roogi", role: "Co-Founder", image: imgShreedevi },
  { name: "Veeresh Patil", role: "Co-Founder & IELTS Trainer", image: imgVeeresh },
  { name: "Sanghamitra Sur", role: "Lead Talent Acquisition", image: imgSanghamitra },
  { name: "Divya Isari", role: "Talent Acquisition Partner", image: imgDivya },
  { name: "Pooja Kolkar", role: "Talent Acquisition Partner", image: imgPooja },
  { name: "Akshata Bhanage", role: "Talent Acquisition Partner", image: imgAkshata },
  { name: "Bharati Agadi", role: "Talent Acquisition Partner", image: imgBharati },
  { name: "Vaishnavi Hiremorab", role: "Business Development Executive", image: imgVaishnavi },
]

const values = [
  {
    number: "01",
    title: "People First",
    text: "Every career, ambition, and business has a unique story. We begin by understanding it.",
    color: BLUE,
  },
  {
    number: "02",
    title: "Meaningful Growth",
    text: "We believe the right guidance and opportunity can completely transform a person's future.",
    color: PINK,
  },
  {
    number: "03",
    title: "Real Connections",
    text: "Beyond resumes and job descriptions, we focus on connections that create lasting impact.",
    color: BLUE,
  },
  {
    number: "04",
    title: "Shared Success",
    text: "When people grow and organizations thrive, we know we have done something meaningful.",
    color: PINK,
  },
]

/* The real "Welcome to WYD" copy from the live About page — five paragraphs */
const welcomeParagraphs = [
  "Welcome to Write Your Destiny (WYD) — a trusted recruitment agency and HR consultancy based in Hubli, Karnataka, committed to shaping careers and empowering futures across India. We specialize in talent acquisition, corporate training, and overseas education, serving as a catalyst for transformative journeys. With a holistic approach, WYD offers expert guidance at every step, helping you script your unique destiny.",
  "As a leading placement agency in Karnataka, we excel in identifying and attracting top-tier IT and non-IT talent for organizations across India through a meticulous hiring process. For individuals, we provide customized training programs designed to enhance skills and drive success, catering to students, corporate professionals, and lifelong learners alike.",
  "Whether you're a global employer expanding into India, a rising startup in Karnataka, or a large enterprise scaling up, we prioritize your talent needs above all else — making us the preferred staffing and recruitment partner for businesses across India.",
  "For students across Karnataka and India aspiring to pursue higher education abroad, WYD is a trusted overseas education consultancy in Hubli making dreams a reality. Our global reach includes strategic partnerships in the United States, United Kingdom, Australia, Ireland, and Canada, ensuring seamless transitions for ambitious minds.",
  "Whether you're a corporation seeking exceptional talent or a student aspiring to global education, WYD is your partner in creating a brighter future.",
]

const howWeStartedText =
  "Embark on a journey with us—an inspiring husband-and-wife duo who transformed a simple idea into a flourishing recruitment consultancy. What began as a dream in the heart of our home blossomed through passion, dedication, and a shared vision into a business that bridges talent with opportunity. Together, we've built a story of growth, overcoming challenges, and celebrating success, with pride in leading an all-women team that continues to thrive."

/* ------------------------------ page ------------------------------ */

export default function About() {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const goToServices = () => {
    navigate("/services")
    setMenuOpen(false)
  }

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white text-[#0a1a3d] overflow-x-clip">
      <style>{`
        @keyframes wyd-fade-up {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up {
          animation: wyd-fade-up 0.7s ease-out both;
        }
        @media (prefers-reduced-motion: reduce) {
          .fade-up { animation: none; }
        }
      `}</style>
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
            <img
              src={logo}
              alt="Write Your Destiny logo"
              className="h-10 w-auto object-contain"
            />
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
              onClick={() => scrollTo("story")}
              className="nav-link font-body text-sm font-semibold transition-colors"
              style={{ color: PINK }}
            >
              About Us
            </button>

            <button
              onClick={goToServices}
              className="nav-link font-body text-sm font-medium text-[#4a5568] hover:text-[#0a1a3d] transition-colors"
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
     {/* HERO */}
<section id="story" className="relative overflow-hidden">
  {/* Mobile: full photo, no crop, no overlay text */}
  <div className="md:hidden pt-16">
    <img
      src={IMG_ABOUT_HERO}
      alt="Write Your Destiny team"
      className="w-full h-auto"
      onError={(e) => {
        ;(e.target as HTMLImageElement).style.display = "none"
      }}
    />
    <div className="px-6 py-8" style={{ background: DARK }}>
      <div
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-5 fade-up"
        style={{ background: "rgba(255,255,255,0.1)", color: "#FFCBEB" }}
      >
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: PINK }} />
        Who We Are
      </div>
      <h1 className="font-display text-4xl font-bold leading-tight text-white fade-up" style={{ animationDelay: "0.1s" }}>
        About <span style={{ color: PINK }}>Us.</span>
      </h1>
      <p className="font-display italic text-lg font-light mt-3 text-white/85 fade-up" style={{ animationDelay: "0.2s" }}>
        Know us a little more here.
      </p>
    </div>
  </div>

  {/* Desktop: original full-bleed overlay hero, unchanged */}
  <div className="hidden md:flex relative h-[600px] overflow-hidden items-end">
    <div className="absolute inset-0">
      <img
        src={IMG_ABOUT_HERO}
        alt="Write Your Destiny team"
        className="w-full h-full object-cover"
        onError={(e) => {
          ;(e.target as HTMLImageElement).style.display = "none"
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-2/3"
        style={{
          background: `linear-gradient(180deg, transparent 0%, ${DARK}66 45%, ${DARK}e6 85%, ${DARK} 100%)`,
        }}
      />
    </div>
    <div className="relative max-w-7xl mx-auto px-10 pb-14 w-full">
      <div className="max-w-2xl" style={{ textShadow: "0 2px 16px rgba(10,26,61,0.55)" }}>
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-6 fade-up"
          style={{ background: "rgba(10,26,61,0.55)", color: "#FFCBEB", backdropFilter: "blur(6px)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: PINK }} />
          Who We Are
        </div>
        <h1 className="font-display text-5xl lg:text-6xl font-bold leading-tight text-white fade-up" style={{ animationDelay: "0.1s" }}>
          About <span style={{ color: PINK }}>Us.</span>
        </h1>
        <p className="font-display italic text-xl font-light mt-3 text-white/85 fade-up" style={{ animationDelay: "0.2s" }}>
          Know us a little more here.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* WELCOME COPY */}
      <section className="py-20 px-6 md:px-10">
        <div className="max-w-3xl mx-auto space-y-4">
          {welcomeParagraphs.map((p, i) => (
            <p key={i} className="font-body text-sm md:text-[15px] leading-relaxed text-[#6b7a99]">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-y border-pink-100 py-3 overflow-hidden" style={{ background: BLUE }}>
        <MarqueeTrack items={marqueeItems} pinkColor={PINK} />
      </div>

      {/* VALUES */}
      <section
        id="values"
        className="py-24 px-6 md:px-10"
        style={{ background: `linear-gradient(180deg, ${BLUSH}50 0%, white 100%)` }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div
              className="inline-block text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-4"
              style={{ background: BLUSH, color: PINK }}
            >
              What We Believe In
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              The right opportunity can{" "}
              <em className="italic font-light" style={{ color: BLUE }}>
                change everything.
              </em>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value) => (
              // <div
              //   key={value.number}
              //   className="service-card bg-white border-2 border-gray-100 rounded-2xl p-7 cursor-default"
              // >

              <div
  key={value.number}
  className="service-card group bg-white border-2 border-gray-100 rounded-2xl p-7 cursor-default transition-all duration-500 hover:shadow-lg hover:border-[var(--value-color)]"
  style={{ "--value-color": value.color } as CSSProperties}
>
                <div className="flex items-start justify-between mb-5">
                  <span
                    className="font-body text-xs font-semibold tracking-widest"
                    style={{ color: value.color }}
                  >
                    {value.number}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold mb-3" style={{ color: DARK }}>
                  {value.title}
                </h3>
                <p className="font-body text-sm text-[#7a8499] leading-relaxed">{value.text}</p>
                <div
                  className="mt-6 h-0.5 w-10 transition-all duration-500"
                  style={{ background: value.color }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION + MISSION */}
      {/* <section className="py-24 px-6 md:px-10"> */}
      <section className="py-8 md:py-12 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl p-9 md:p-11" style={{ background: DARK }}>
            <span
              className="font-body text-xs tracking-[0.2em] font-bold uppercase"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              Vision
            </span>
            <p className="font-body text-lg leading-relaxed mt-5 text-white/85">
              Establish a forum dedicated to fostering equality and balance, ensuring a life of
              opportunity and fairness for everyone.
            </p>
          </div>
          <div className="rounded-2xl p-9 md:p-11" style={{ background: BLUSH }}>
            <span className="font-body text-xs tracking-[0.2em] font-bold uppercase" style={{ color: PINK }}>
              Mission
            </span>
            <p className="font-body text-lg leading-relaxed mt-5" style={{ color: DARK }}>
              To be the preferred partner in helping individuals achieve their ambitions and goals
              by unlocking their full potential and driving success.
            </p>
          </div>
        </div>
      </section>

      {/* HOW WE STARTED */}
      <section id="how-we-started" className="py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative lg:sticky lg:top-28">
            <img
              src={imgFoundersStory}
              alt="Shreedevi and Veeresh, founders of Write Your Destiny"
              className="w-full h-auto rounded-2xl"
              onError={(e) => {
                ;(e.target as HTMLImageElement).style.opacity = "0"
              }}
            />
            {/* <div
              className="absolute -bottom-4 -right-3 md:-right-6 bg-white shadow-xl px-4 py-3 rounded-xl text-center"
              style={{ boxShadow: `0 8px 32px ${BLUE}20` }}
            >
              <div className="font-display text-xl font-bold" style={{ color: PINK }}>
                8+
              </div>
              <div className="font-body text-[10px] text-[#9aa3b5] mt-0.5 whitespace-nowrap">
                Years Together
              </div>
            </div> */}
          </div>

          <div>
            <div
              className="inline-block text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-5"
              style={{ background: BLUSH, color: PINK }}
            >
              How We Started
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] mb-6">
              A story built on{" "}
              <em className="italic font-light" style={{ color: BLUE }}>
                partnership.
              </em>
            </h2>
            <p className="font-body text-[#6b7a99] leading-relaxed">{howWeStartedText}</p>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="py-24 px-6 md:px-10" style={{ background: `linear-gradient(180deg, white 0%, ${BLUSH}30 100%)` }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div
              className="inline-block text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-4"
              style={{ background: BLUSH, color: PINK }}
            >
              The People Behind WYD
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Our{" "}
              <em className="italic font-light" style={{ color: BLUE }}>
                Team.
              </em>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {team.map((person) => (
              <div key={person.name} className="group">
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-[#f3f0e6] transition-shadow duration-300 group-hover:shadow-lg">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                    style={{ background: PINK }}
                  />
                </div>
                <h3 className="font-display text-base md:text-lg font-bold mt-4" style={{ color: DARK }}>
                  {person.name}
                </h3>
                <p className="font-body text-xs mt-1 uppercase tracking-wide" style={{ color: PINK }}>
                  {person.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* import ctaBg from "../assets/cta-support-illustration.png"; */}

{/* CTA */}
<section
  className="relative overflow-hidden py-24 md:py-28 px-6 md:px-10"
  style={{ background: INK }}
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
              Our Blogs
            </div>
            <h2 className="font-display text-4xl font-bold">
              Our{" "}
              <em className="italic font-light" style={{ color: BLUE }}>
                Blogs.
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

                {/* <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="text-white text-lg">◎</span>
                  <span className="font-body text-xs font-semibold text-white/90">{r.label}</span>
                </div> */}
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
            <p className="font-body text-sm text-white/70 leading-relaxed mb-4">
              Welcome to Write Your Destiny (WYD), a global HR boutique dedicated to shaping
              careers.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/write-your-destiny/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Write Your Destiny (WYD) on LinkedIn"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <LinkedinIcon className="text-white" style={{ width: 18, height: 18 }} />
              </a>
              <a
                href="https://www.instagram.com/write.your.destiny007/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Write Your Destiny (WYD) on Instagram"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <InstagramIcon className="text-white" style={{ width: 18, height: 18 }} />
              </a>
              <a
                href="https://www.facebook.com/wyd007"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Write Your Destiny (WYD) on Facebook"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <FacebookIcon className="text-white" style={{ width: 18, height: 18 }} />
              </a>
              <a
                href="https://wa.me/919606351695"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Write Your Destiny (WYD) on WhatsApp"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <WhatsappIcon className="text-white" style={{ width: 18, height: 18 }} />
              </a>
            </div>
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
                onClick={() => scrollTo("story")}
                className="text-left font-body text-sm text-white/70 hover:text-white transition-colors"
              >
                About Us
              </button>
              <button
                onClick={goToServices}
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
            <div className="flex items-start gap-3 mb-3">
              <MapPinIcon className="text-white/70 shrink-0 mt-0.5" style={{ width: 16, height: 16 }} />
              <p className="font-body text-sm text-white/70 leading-relaxed">
                WYD, 3rd Floor, BM Plaza
                <br />
                Near Sharada Hotel,
                <br />
                Deshpande Nagar, Hubli, Karnataka.
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
            <h3 className="font-display text-white font-bold mb-4">Working Hours</h3>
            <p className="font-body text-sm text-white/70 leading-relaxed">
              Mon - Fri: 9:30 am to 6:30 pm
              <br />
              Sat: 9:30 am to 2:30 pm
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