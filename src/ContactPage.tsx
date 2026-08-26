import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import logo from "@/imports/ChatGPT_Image_Aug_24__2026__12_02_21_PM.png"

const BLUE = "#1355B2"
const PINK = "#F5569B"
const BLUSH = "#FFCBEB"
const DARK = "#0a1a3d"

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
              className="nav-link font-body text-sm font-semibold"
              style={{ color: PINK }}
            >
              Contact
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
              onClick={() => navigate("/about")}
              className="text-left text-[#4a5568] font-body text-base"
            >
              About
            </button>
            <button
              onClick={() => navigate("/services")}
              className="text-left text-[#4a5568] font-body text-base"
            >
              Services
            </button>
            <button
              className="text-left font-body text-base font-semibold"
              style={{ color: PINK }}
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* PAGE HEADER */}
      <section className="pt-32 pb-10 px-6 md:px-10" style={{ background: BLUSH + "30" }}>
        <div className="max-w-7xl mx-auto text-center">
          <div
            className="inline-block text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-5"
            style={{ background: BLUSH, color: PINK }}
          >
            Get In Touch
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
              {[
                {
                  icon: "📍",
                  label: "Location",
                  text: "BM Plaza, Deshpande Nagar, Hubli, Karnataka",
                },
                { icon: "📞", label: "Phone", text: "+91 9606351695" },
                {
                  icon: "🕐",
                  label: "Hours",
                  text: "Mon–Fri: 9:30am – 6:30pm\nSat: 9:30am – 2:30pm",
                },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0"
                    style={{ background: BLUE }}
                  >
                    {c.icon}
                  </div>
                  <div>
                    <p className="font-body text-xs text-[#9aa3b5] uppercase tracking-widest mb-0.5">
                      {c.label}
                    </p>
                    <p className="font-body text-sm text-[#0a1a3d] whitespace-pre-line">
                      {c.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div
            className="bg-white rounded-3xl p-8 shadow-xl"
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
            <button className="font-body text-xs text-white/70">
              Contact
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}