import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import logo from "@/imports/ChatGPT_Image_Aug_24__2026__12_02_21_PM.png"

/* Same design tokens as the home page (App.tsx) */
const BLUE = "#1355B2"
const PINK = "#F5569B"
const BLUSH = "#FFCBEB"
const DARK = "#0a1a3d"
const SKYBLUE = "C3DBFD"

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide"
      style={{ background: BLUSH, color: PINK }}
    >
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: PINK }} />
      {children}
    </div>
  )
}

export default function Contact() {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
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
          <button onClick={() => navigate("/")} className="flex items-center">
            <img
              src={logo}
              alt="Write Your Destiny logo"
              className="h-10 w-auto object-contain"
            />
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => navigate("/about")}
              className="nav-link font-body text-sm font-medium text-[#4a5568] hover:text-[#0a1a3d] transition-colors"
            >
              About
            </button>
            <button
              onClick={() => navigate("/services")}
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
              onClick={() => scrollTo("contact")}
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
              onClick={() => {
                navigate("/services")
                setMenuOpen(false)
              }}
              className="text-left text-[#4a5568] hover:text-[#0a1a3d] font-body text-base transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => {
                navigate("/jobs")
                setMenuOpen(false)
              }}
              className="text-left text-[#4a5568] hover:text-[#0a1a3d] font-body text-base transition-colors"
            >
              Find Jobs
            </button>
          </div>
        </div>
      </nav>

      {/* PAGE HEADER */}
      <section className="pt-32 pb-16 md:pt-36 md:pb-20 relative overflow-hidden">
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

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 text-center">
          <div className="flex justify-center mb-6">
            <Eyebrow>Get In Touch</Eyebrow>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight">
            Let's write your
            <br />
            <em className="italic font-light" style={{ color: BLUE }}>
              next chapter.
            </em>
          </h1>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          {/* Info */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
              Your story
              <br />
              <em className="italic font-light" style={{ color: BLUE }}>
                starts now.
              </em>
            </h2>
            <p className="font-body text-[#6b7a99] leading-relaxed mb-10">
              Whether you're looking for your next role, seeking top talent for
              your team, or need professional training — we're ready to help.
            </p>

            <div className="space-y-6">
              {/* Location */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=BM+Plaza,+Deshpande+Nagar,+Hubli,+Karnataka"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group cursor-pointer"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: BLUE }}
                >
                  📍
                </div>

                <div>
                  <p className="font-body text-xs text-[#9aa3b5] uppercase tracking-widest mb-0.5">
                    Location
                  </p>

                  <p className="font-body text-sm text-[#0a1a3d] group-hover:text-[#1355B2] transition-colors">
                    BM Plaza, Deshpande Nagar, Hubli, Karnataka
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+919606351695"
                className="flex items-start gap-4 group cursor-pointer"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: BLUE }}
                >
                  📞
                </div>

                <div>
                  <p className="font-body text-xs text-[#9aa3b5] uppercase tracking-widest mb-0.5">
                    Phone
                  </p>

                  <p className="font-body text-sm text-[#0a1a3d] group-hover:text-[#1355B2] transition-colors">
                    +91 9606351695
                  </p>
                </div>
              </a>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0"
                  style={{ background: BLUE }}
                >
                  🕐
                </div>

                <div>
                  <p className="font-body text-xs text-[#9aa3b5] uppercase tracking-widest mb-0.5">
                    Hours
                  </p>

                  <p className="font-body text-sm text-[#0a1a3d] whitespace-pre-line">
                    Mon–Fri: 9:30am – 6:30pm{"\n"}
                    Sat: 9:30am – 2:30pm
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div
            className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100"
            style={{ boxShadow: `0 24px 64px ${BLUE}20` }}
          >
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-body text-xs font-semibold uppercase tracking-widest text-[#9aa3b5] block mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Arjun"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 font-body text-sm text-[#0a1a3d] placeholder-gray-300 focus:outline-none focus:border-[#1355B2] transition-colors"
                  />
                </div>
                <div>
                  <label className="font-body text-xs font-semibold uppercase tracking-widest text-[#9aa3b5] block mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Sharma"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 font-body text-sm text-[#0a1a3d] placeholder-gray-300 focus:outline-none focus:border-[#1355B2] transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="font-body text-xs font-semibold uppercase tracking-widest text-[#9aa3b5] block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="arjun@company.com"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 font-body text-sm text-[#0a1a3d] placeholder-gray-300 focus:outline-none focus:border-[#1355B2] transition-colors"
                />
              </div>
              <div>
                <label className="font-body text-xs font-semibold uppercase tracking-widest text-[#9aa3b5] block mb-2">
                  I am a
                </label>
                <select className="w-full border border-gray-200 rounded-xl px-4 py-3 font-body text-sm text-[#0a1a3d] focus:outline-none focus:border-[#1355B2] transition-colors bg-white">
                  <option value="">Select one</option>
                  <option>Job Seeker</option>
                  <option>Employer / Company</option>
                  <option>Looking for Training</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="font-body text-xs font-semibold uppercase tracking-widest text-[#9aa3b5] block mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your goals…"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 font-body text-sm text-[#0a1a3d] placeholder-gray-300 focus:outline-none focus:border-[#1355B2] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 font-body font-semibold text-sm tracking-wide text-white rounded-xl transition-all duration-300 hover:opacity-90 hover:shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${BLUE} 0%, #1355B2 100%)`,
                  boxShadow: `0 4px 20px ${BLUE}40`,
                }}
              >
                Send Message
              </button>
            </form>
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
                onClick={() => navigate("/services")}
                className="text-left font-body text-sm text-white/70 hover:text-white transition-colors"
              >
                Our Services
              </button>
              <button
                onClick={() => navigate("/about#blogs")}
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
            <a
              href="https://www.google.com/maps/search/?api=1&query=WYD+3rd+Floor+BM+Plaza+Near+Sharada+Hotel+Deshpande+Nagar+Hubli"
              target="_blank"
              rel="noopener noreferrer"
              className="block font-body text-sm text-white/70 hover:text-white leading-relaxed mb-3 transition-colors"
            >
              WYD 3rd Floor, BM Plaza
              <br />
              Near Sharada Hotel
              <br />
              Deshpande Nagar, Hubli
            </a>
            <a
              href="tel:+919606351695"
              className="block font-body text-sm text-white/70 hover:text-white mb-1 transition-colors"
            >
              Phone: +91 9606351695
            </a>
            <a
              href="mailto:shreedevi.roogi@writeyourdestiny.in"
              className="block font-body text-sm text-white/70 hover:text-white break-all transition-colors"
            >
              Email: shreedevi.roogi@writeyourdestiny.in
            </a>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="font-display text-white font-bold mb-4">Working Hours</h3>
            <a
              href="https://www.google.com/maps/search/?api=1&query=WYD+BM+Plaza+Deshpande+Nagar+Hubli"
              target="_blank"
              rel="noopener noreferrer"
              className="block font-body text-sm text-white/70 hover:text-white leading-relaxed transition-colors"
            >
              Monday to Friday
              <br />
              9:30 am to 6:30 pm
              <br />
              <br />
              Saturday
              <br />
              9:30 am to 2:30 pm
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10">
          <p className="font-body text-xs text-white/50 text-center">
            © {new Date().getFullYear()} Write Your Destiny. All Rights Reserved.{" "}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Hubli+Karnataka"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Hubli, Karnataka
            </a>
            . Powered by{" "}
            <a
              href="https://www.spitel.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Spitel Pvt. Ltd.
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}