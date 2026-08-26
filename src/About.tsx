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

const BLUE = "#1355B2"
const PINK = "#F5569B"
const BLUSH = "#FFCBEB"
const DARK = "#0a1a3d"

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

const team = [
  {
    name: "Shreedevi Roogi",
    role: "Co-Founder",
    image: imgShreedevi,
  },
  {
    name: "Veeresh Patil",
    role: "Co-Founder & IELTS Trainer",
    image: imgVeeresh,
  },
  {
    name: "Sanghamitra Sur",
    role: "Lead Talent Acquisition",
    image: imgSanghamitra,
  },
  {
    name: "Divya Isari",
    role: "Talent Acquisition Partner",
    image: imgDivya,
  },
  {
    name: "Pooja Kolkar",
    role: "Talent Acquisition Partner",
    image: imgPooja,
  },
  {
    name: "Akshata Bhanage",
    role: "Talent Acquisition Partner",
    image: imgAkshata,
  },
  {
    name: "Bharati Agadi",
    role: "Talent Acquisition Partner",
    image: imgBharati,
  },
  {
    name: "Vaishnavi Hiremorab",
    role: "Business Development Executive",
    image: imgVaishnavi,
  },
]

const values = [
  {
    number: "01",
    title: "People First",
    text: "Every career, ambition and business has a unique story. We begin by understanding it.",
  },
  {
    number: "02",
    title: "Meaningful Growth",
    text: "We believe the right guidance and opportunity can completely transform a person's future.",
  },
  {
    number: "03",
    title: "Real Connections",
    text: "Beyond resumes and job descriptions, we focus on connections that create lasting impact.",
  },
  {
    number: "04",
    title: "Shared Success",
    text: "When people grow and organizations thrive, we know we have done something meaningful.",
  },
]

export default function About() {
        useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                entry.target.classList.add("show")
                }
            })
            },
            {
            threshold: 0.15,
            }
        )

        const elements = document.querySelectorAll(".reveal-up")

        elements.forEach((element) => observer.observe(element))

        return () => observer.disconnect()
}, [])

  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)

    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Services now lives on its own dedicated page
  const goToServices = () => {
    navigate("/services")
    setMenuOpen(false)
  }

  // Sections that live on this page (Blogs now included on every page)
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    })

    setMenuOpen(false)
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-[#0a1a3d]">

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
            onClick={() => navigate("/")}
            className="flex items-center"
          >
            <img
              src={logo}
              alt="Write Your Destiny logo"
              className="h-10 w-auto object-contain"
            />
          </button>

          <div className="hidden md:flex items-center gap-8">

            {/* About → Current Page */}
            <button
              onClick={() => scrollTo("story")}
              className="nav-link font-body text-sm font-semibold text-[#0a1a3d] transition-colors"
            >
              About
            </button>

            {/* Services → Separate Page */}
            <button
              onClick={goToServices}
              className="nav-link font-body text-sm font-medium text-[#4a5568] hover:text-[#0a1a3d] transition-colors"
            >
              Services
            </button>

            {/* Blogs → Present on every page */}
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
              onClick={() => scrollTo("blogs")}
              className="text-left text-[#4a5568] hover:text-[#0a1a3d] font-body text-base transition-colors"
            >
              Blogs
            </button>
          </div>
        </div>
      </nav>


      {/* ================= HERO ================= */}

      <section
        id="story"
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
                About WYD
              </div>

              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight">

                We're not just
                <br />

                building{" "}

                <span style={{ color: BLUE }}>
                  careers.
                </span>

                <br />

                We're helping people

                <span style={{ color: PINK }}>
                  {" "}write their destiny.
                </span>

              </h1>

              <p className="mt-8 max-w-xl font-body text-base md:text-lg leading-8 text-[#64748b]">

                Write Your Destiny is a people-first recruitment and HR
                consultancy based in Hubli, helping individuals discover
                meaningful opportunities and organizations discover
                exceptional talent.

              </p>

              <div className="flex flex-wrap gap-4 mt-9">

                <button
                  onClick={() => scrollTo("our-story")}
                  className="px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
                  style={{ background: BLUE }}
                >
                  Discover Our Story →
                </button>

                <button
                  onClick={() => scrollTo("team")}
                  className="px-7 py-3.5 text-sm font-semibold border border-[#d9e2f0] hover:border-[#1355B2] transition-colors"
                >
                  Meet Our Team
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
                  src="https://writeyourdestiny.in/wp-content/uploads/2026/07/IMG_20260709_094726.jpg.jpeg"
                  alt="Write Your Destiny team"
                  className="w-full h-full object-cover"
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
                  8+
                </p>

                <p className="font-body text-xs text-[#64748b]">
                  Years of growth
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
                  500+
                </p>

                <p className="font-body text-xs text-[#64748b]">
                  Careers shaped
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= MARQUEE ================= */}

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


      {/* ================= OUR STORY ================= */}

      <section
        id="our-story"
        className="py-24 md:py-32"
      >

        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 lg:gap-24">

            <div>

              <div
              className="inline-block text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-5"
              style={{ background: BLUSH, color: PINK }}
            >
              Our  Story
            </div>

              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">

                It started with
                <span style={{ color: BLUE }}>
                  {" "}a simple belief.
                </span>

              </h2>

            </div>


            <div className="space-y-7">

              <p className="font-body text-lg leading-8 text-[#475569]">

                What began as a dream in the heart of a home grew through
                passion, dedication and a shared vision into a company that
                connects people with opportunities that can change their lives.

              </p>

              <p className="font-body text-lg leading-8 text-[#64748b]">

                WYD was built on the belief that recruitment should be more
                than matching a resume with a job description. It should be
                about understanding ambitions, recognizing potential and
                creating the right environment for people and businesses to
                grow together.

              </p>

              <p className="font-body text-lg leading-8 text-[#64748b]">

                Today, we work across talent acquisition, corporate training
                and overseas education, helping job seekers, professionals,
                students, startups and organizations move confidently toward
                their next chapter.

              </p>

              <div
                className="mt-10 p-7 md:p-9 border-l-4"
                style={{
                  borderColor: PINK,
                  background: "#fff7fb",
                }}
              >

                <p className="font-display text-2xl md:text-3xl font-semibold leading-relaxed">

                  "Every person has potential. Sometimes, all they need is the
                  right opportunity to discover it."

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= IMPACT ================= */}

      <section className="px-6 md:px-10">

        <div
          className="max-w-7xl mx-auto py-14 md:py-20 px-8 md:px-14"
          style={{
            background: `linear-gradient(135deg, ${BLUE}, #2f6fc5)`,
          }}
        >

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">

            {[
              ["500+", "Successful Placements"],
              ["200+", "Partner Companies"],
              ["12+", "Industries Served"],
              ["8+", "Years of Experience"],
            ].map(([number, label]) => (

              <div key={label}>

                <p className="font-display text-4xl md:text-5xl font-bold text-white">
                  {number}
                </p>

                <p className="mt-2 font-body text-sm text-white/70">
                  {label}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= VALUES ================= */}

      <section
        id="values"
        className="py-28 md:py-36 relative overflow-hidden"
      >

        <div
          className="absolute right-0 top-1/4 w-[450px] h-[450px] rounded-full blur-[130px] opacity-10"
          style={{ background: PINK }}
        />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10">

          <div className="max-w-3xl mb-16">

            <div
              className="inline-block text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-5"
              style={{ background: BLUSH, color: PINK }}
            >
              What We Believe In
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">

              The right opportunity
              <br />

              can change{" "}

              <span style={{ color: BLUE }}>
                everything.
              </span>

            </h2>

          </div>


          <div className="grid md:grid-cols-2 gap-px bg-[#e8edf5] border border-[#e8edf5]">

            {values.map((value, index) => (

              <div
                key={value.number}
                className="group bg-white p-9 md:p-12 transition-all duration-500 hover:bg-[#f8fbff]"
              >

                <div className="flex items-start justify-between mb-16">

                  <span
                    className="font-display text-sm font-bold"
                    style={{
                      color: index % 2 === 0 ? BLUE : PINK,
                    }}
                  >
                    {value.number}
                  </span>

                  <span className="text-2xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>

                </div>

                <h3 className="font-display text-3xl font-bold mb-5">
                  {value.title}
                </h3>

                <p className="font-body text-base leading-7 text-[#64748b] max-w-md">
                  {value.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= VISION + MISSION ================= */}

      <section className="py-24 md:py-32 bg-[#f7f9fc]">

        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <div className="grid lg:grid-cols-2 gap-6">

            <div
              className="p-10 md:p-14 min-h-[420px] flex flex-col justify-between"
              style={{
                background: DARK,
              }}
            >

              <div>

                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-10"
                  style={{
                    background: "rgba(245,86,155,0.18)",
                    color: PINK,
                  }}
                >
                  ✦
                </div>

                <p className="font-body text-xs tracking-[0.2em] font-bold text-white/50 mb-5">
                  OUR VISION
                </p>

                <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">

                  Opportunity and fairness
                  for{" "}

                  <span style={{ color: PINK }}>
                    everyone.
                  </span>

                </h2>

              </div>

              <p className="font-body text-base leading-7 text-white/60 max-w-lg">

                To establish a forum dedicated to fostering equality and
                balance, creating a world where every individual has access
                to opportunity and the freedom to grow.

              </p>

            </div>


            <div
              className="p-10 md:p-14 min-h-[420px] flex flex-col justify-between"
              style={{
                background: BLUSH,
              }}
            >

              <div>

                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-10 bg-white"
                  style={{ color: BLUE }}
                >
                  ↗
                </div>

                <p
                  className="font-body text-xs tracking-[0.2em] font-bold mb-5"
                  style={{ color: BLUE }}
                >
                  OUR MISSION
                </p>

                <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">

                  Unlocking potential.
                  Driving{" "}

                  <span style={{ color: BLUE }}>
                    success.
                  </span>

                </h2>

              </div>

              <p className="font-body text-base leading-7 text-[#64748b] max-w-lg">

                To be the preferred partner in helping individuals achieve
                their ambitions and goals by unlocking their full potential
                and supporting meaningful, sustainable success.

              </p>

            </div>

          </div>

        </div>

      </section>


{/* ================= TEAM ================= */}

        <section
        id="team"
        className="py-28 md:py-36"
        >
        <div className="max-w-7xl mx-auto px-6 md:px-10">

            {/* Section Heading */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">

            <div className="max-w-3xl">

                <div
                className="inline-block text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-5"
                style={{ background: BLUSH, color: PINK }}
                >
                The People Behind WYD
                </div>

                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Different strengths.
                <br />

                <span style={{ color: BLUE }}>
                    One shared purpose.
                </span>
                </h2>

            </div>

            <p className="font-body text-[#64748b] max-w-sm leading-7">
                A passionate team committed to helping people discover what is
                possible and organizations find the talent that makes a
                difference.
            </p>

            </div>


            {/* Team Members */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-14">

            {team.map((person) => (

                <div
                key={person.name}
                className="group cursor-pointer transition-all duration-500 hover:-translate-y-2"
                >

                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[#edf2f8] shadow-sm transition-all duration-500 group-hover:shadow-xl">

                    <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Pink line on hover */}
                    <div
                    className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                    style={{ background: PINK }}
                    />

                </div>


                {/* Team Member Details */}
                <div className="pt-5">

                    <h3 className="font-display text-xl md:text-2xl font-bold text-[#0a1a3d] transition-colors duration-300 group-hover:text-[#1355B2]">
                    {person.name}
                    </h3>

                    <p
                    className="font-body text-sm mt-1"
                    style={{ color: PINK }}
                    >
                    {person.role}
                    </p>

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
            Let's talk about your{" "}
            <span style={{ color: PINK }}>destiny.</span>
          </h2>
          <p className="font-body text-white/60 text-base md:text-lg max-w-xl mx-auto leading-8 mt-6">
            Book a free consultation and let's shape your next chapter together.
          </p>
          <button
            onClick={() => (window.location.href = "/contact")}
            className="mt-10 px-8 py-4 font-body text-sm font-bold text-white transition-transform hover:scale-[1.03]"
            style={{ background: PINK }}
          >
            Get In Touch →
          </button>
        </div>
      </section>

      {/* ================= BLOGS / GALLERY ================= */}

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
              className="font-body text-xs text-white/70"
            >
              About
            </button>
            <button
              onClick={goToServices}
              className="font-body text-xs text-white/30 hover:text-white/70 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => (window.location.href = "/contact")}
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