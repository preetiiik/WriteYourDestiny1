import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
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

/* Same design tokens as the home page (App.tsx) */
const BLUE = "#1355B2"
const PINK = "#F5569B"
const BLUSH = "#FFCBEB"
const DARK = "#0a1a3d"
const SKYBLUE = "C3DBFD"

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
    text: "Every career, ambition and business has a unique story. We begin by understanding it.",
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
            <button
              onClick={() => scrollTo("story")}
              className="nav-link font-body text-sm font-semibold transition-colors"
              style={{ color: PINK }}
            >
              About
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
            menuOpen ? "max-h-56" : "max-h-0"
          }`}
        >
          <div className="bg-white border-t border-gray-100 px-6 py-5 flex flex-col gap-4">
            <button
              onClick={() => scrollTo("story")}
              className="text-left text-[#4a5568] hover:text-[#0a1a3d] font-body text-base transition-colors"
            >
              About
            </button>
            <button
              onClick={goToServices}
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
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="story" className="pt-28 pb-20 md:pt-32 md:pb-24 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-14 max-w-2xl">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-6"
              style={{ background: BLUSH, color: PINK }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: PINK }} />
              Who We Are
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              About{" "}
              <span style={{ color: PINK }}>Us.</span>
            </h1>
            <p className="font-display italic text-lg md:text-xl font-light mt-3" style={{ color: BLUE }}>
              Know us a little more here.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 items-start">
            <div className="relative lg:-mt-8">
              <div
                className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full opacity-30"
                style={{ background: `${PINK}20` }}
              />
              <div
                className="relative overflow-hidden lg:sticky lg:top-24"
                style={{ borderRadius: "60% 40% 70% 30% / 50% 60% 40% 60%" }}
              >
                <img
                  src={IMG_ABOUT_HERO}
                  alt="Write Your Destiny team"
                  className="w-full h-[420px] md:h-[480px] object-contain bg-white"
                  onError={(e) => {
                    ;(e.target as HTMLImageElement).style.display = "none"
                  }}
                />
              </div>
            </div>

            {/* The real "Welcome to WYD" copy */}
            <div className="space-y-4">
              {welcomeParagraphs.map((p, i) => (
                <p key={i} className="font-body text-sm md:text-[15px] leading-relaxed text-[#6b7a99]">
                  {p}
                </p>
              ))}
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
              <div
                key={value.number}
                className="service-card bg-white border-2 border-gray-100 rounded-2xl p-7 cursor-default"
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
      <section className="py-24 px-6 md:px-10">
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
            <div
              className="absolute -bottom-4 -right-3 md:-right-6 bg-white shadow-xl px-4 py-3 rounded-xl text-center"
              style={{ boxShadow: `0 8px 32px ${BLUE}20` }}
            >
              <div className="font-display text-xl font-bold" style={{ color: PINK }}>
                8+
              </div>
              <div className="font-body text-[10px] text-[#9aa3b5] mt-0.5 whitespace-nowrap">
                Years Together
              </div>
            </div>
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
            Let's talk about your <span style={{ color: PINK }}>destiny.</span>
          </h2>
          <p className="font-body text-white/60 text-base md:text-lg max-w-xl mx-auto leading-8 mt-6">
            Book a free consultation and let's shape your next chapter together.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="mt-10 px-8 py-4 font-body text-sm font-bold text-white transition-transform hover:scale-[1.03]"
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