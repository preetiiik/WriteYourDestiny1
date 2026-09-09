import { useState, useEffect, CSSProperties } from "react"
import { useNavigate } from "react-router-dom"
import logo from "@/imports/ChatGPT_Image_Aug_24__2026__12_02_21_PM.png"
import contactHeroBg from "@/imports/contact-hero.png"


/* Lightweight inline SVG icons (same pattern as App.tsx / Services.tsx / About.tsx) */
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

const initialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  role: "",
  message: "",
}

export default function Contact() {
  const navigate = useNavigate()

  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [formData, setFormData] = useState(initialFormState)
  const [submitted, setSubmitted] = useState(false)
  const [formError, setFormError] = useState("")

  const MAX_NAME_LENGTH = 50
  const MAX_EMAIL_LENGTH = 254
  const MAX_MESSAGE_LENGTH = 1000

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target

    /*
     * FIRST NAME / LAST NAME
     * Only letters, spaces, hyphens and apostrophes are allowed.
     * Numbers and special characters are automatically removed.
     */
    if (name === "firstName" || name === "lastName") {
      const cleanedValue = value.replace(
        /[^A-Za-zÀ-ÖØ-öø-ÿ' -]/g,
        ""
      )

      setFormData((prev) => ({
        ...prev,
        [name]: cleanedValue.slice(0, MAX_NAME_LENGTH),
      }))

      setFormError("")
      setSubmitted(false)
      return
    }

    /*
     * EMAIL
     */
    if (name === "email") {
      setFormData((prev) => ({
        ...prev,
        email: value.slice(0, MAX_EMAIL_LENGTH),
      }))

      setFormError("")
      setSubmitted(false)
      return
    }

    /*
     * MESSAGE
     */
    if (name === "message") {
      setFormData((prev) => ({
        ...prev,
        message: value.slice(0, MAX_MESSAGE_LENGTH),
      }))

      setFormError("")
      setSubmitted(false)
      return
    }

    /*
     * ROLE
     */
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    setFormError("")
    setSubmitted(false)
  }

  const validateForm = () => {
    const firstName = formData.firstName.trim()
    const lastName = formData.lastName.trim()
    const email = formData.email.trim()
    const message = formData.message.trim()

    /*
     * FIRST NAME VALIDATION
     */
    if (!firstName) {
      return "Please enter your first name."
    }

    if (
      !/^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:[ '-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/.test(
        firstName
      )
    ) {
      return "Please enter a valid first name using letters only."
    }

    /*
     * LAST NAME VALIDATION
     */
    if (!lastName) {
      return "Please enter your last name."
    }

    if (
      !/^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:[ '-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/.test(
        lastName
      )
    ) {
      return "Please enter a valid last name using letters only."
    }

    /*
     * EMAIL VALIDATION
     */
    const emailRegex =
      /^[A-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?(?:\.[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?)+$/i

    if (!email) {
      return "Please enter your email address."
    }

    if (email.length > MAX_EMAIL_LENGTH) {
      return "Email address is too long."
    }

    if (!emailRegex.test(email)) {
      return "Please enter a valid email address."
    }

    /*
     * ROLE VALIDATION
     */
    if (!formData.role) {
      return "Please select who you are."
    }

    /*
     * MESSAGE VALIDATION
     */
    if (!message) {
      return "Message cannot be empty or contain only spaces."
    }

    return ""
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setSubmitted(false)
    setFormError("")

    const validationError = validateForm()

    if (validationError) {
      setFormError(validationError)
      return
    }

    /*
     * IMPORTANT:
     * Do not clear the form before the backend confirms submission.
     *
     * When your real API/email service is connected, put the API request
     * here and only clear the form after a successful response.
     */

    try {
      // -------------------------------------------------------
      // CONNECT YOUR REAL API / EMAIL SERVICE HERE
      // -------------------------------------------------------
      //
      // Example:
      //
      // const response = await fetch("/api/contact", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     firstName: formData.firstName.trim(),
      //     lastName: formData.lastName.trim(),
      //     email: formData.email.trim(),
      //     role: formData.role,
      //     message: formData.message.trim(),
      //   }),
      // })
      //
      // if (!response.ok) {
      //   throw new Error("Submission failed")
      // }

      setSubmitted(true)

      setFormData(initialFormState)

      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    } catch (error) {
      console.error("Contact form submission failed:", error)

      setFormError(
        "We couldn't send your message. Please check your internet connection and try again."
      )
    }
  }

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    window.addEventListener("scroll", onScroll)

    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  const scrollTo = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth" })

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

{/* PAGE HEADER */}
<section
  className="relative overflow-hidden min-h-[520px] md:min-h-[560px] flex items-center"
  style={{
    backgroundImage: `url(${contactHeroBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="relative z-10 w-full">
    <div className="max-w-7xl mx-auto px-6 md:px-10">
      
      {/* Content on the LEFT */}
      <div className="w-full md:w-[50%] lg:w-[48%] text-center md:text-left">
        
        <div className="flex justify-center md:justify-start mb-6">
          <Eyebrow>Get In Touch</Eyebrow>
        </div>

        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Let's write your
          <br />
          <em
            className="italic font-light"
            style={{ color: PINK }}
          >
            next chapter.
          </em>
        </h1>

      </div>

    </div>
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
                    WYD 3rd Floor, BM Plaza, Near  Sharada Hotel, Deshpande Nagar, Hubli, Karnataka
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

              {/* Email */}
              <a
                href="mailto:shreedevi.roogi@writeyourdestiny.in"
                className="flex items-start gap-4 group cursor-pointer"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: BLUE }}
                >
                  ✉️
                </div>

                <div>
                  <p className="font-body text-xs text-[#9aa3b5] uppercase tracking-widest mb-0.5">
                    Email
                  </p>

                  <p className="font-body text-sm text-[#0a1a3d] group-hover:text-[#1355B2] transition-colors">
                    shreedevi.roogi@writeyourdestiny.in
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

          {/* FORM */}
<div
  className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100"
  style={{
    boxShadow: `0 24px 64px ${BLUE}20`,
  }}
>
  {/* SUCCESS MESSAGE */}
  {submitted && (
    <div
      className="mb-5 rounded-xl px-4 py-3 font-body text-sm font-medium"
      style={{
        background: "#E7F5EC",
        color: "#1E7A46",
      }}
      role="status"
    >
      ✓ Thanks for reaching out! Your message has been sent — we'll
      get back to you soon.
    </div>
  )}

  {/* ERROR MESSAGE */}
  {formError && (
    <div
      className="mb-5 rounded-xl px-4 py-3 font-body text-sm font-medium"
      style={{
        background: "#FDECEC",
        color: "#B42318",
      }}
      role="alert"
    >
      {formError}
    </div>
  )}

  <form
    className="space-y-5"
    onSubmit={handleSubmit}
    noValidate
  >
    {/* FIRST + LAST NAME */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

      {/* FIRST NAME */}
      <div>
        <label
          htmlFor="firstName"
          className="font-body text-xs font-semibold uppercase tracking-widest text-[#9aa3b5] block mb-2"
        >
          First Name
        </label>

        <input
          id="firstName"
          type="text"
          name="firstName"
          placeholder="Arjun"
          value={formData.firstName}
          onChange={handleChange}
          maxLength={MAX_NAME_LENGTH}
          autoComplete="given-name"
          required
          className="w-full border border-gray-200 rounded-xl px-4 py-3 font-body text-sm text-[#0a1a3d] placeholder-gray-300 focus:outline-none focus:border-[#1355B2] transition-colors"
        />
      </div>

      {/* LAST NAME */}
      <div>
        <label
          htmlFor="lastName"
          className="font-body text-xs font-semibold uppercase tracking-widest text-[#9aa3b5] block mb-2"
        >
          Last Name
        </label>

        <input
          id="lastName"
          type="text"
          name="lastName"
          placeholder="Sharma"
          value={formData.lastName}
          onChange={handleChange}
          maxLength={MAX_NAME_LENGTH}
          autoComplete="family-name"
          required
          className="w-full border border-gray-200 rounded-xl px-4 py-3 font-body text-sm text-[#0a1a3d] placeholder-gray-300 focus:outline-none focus:border-[#1355B2] transition-colors"
        />
      </div>
    </div>

    {/* EMAIL */}
    <div>
      <label
        htmlFor="email"
        className="font-body text-xs font-semibold uppercase tracking-widest text-[#9aa3b5] block mb-2"
      >
        Email
      </label>

      <input
        id="email"
        type="email"
        name="email"
        placeholder="arjun@company.com"
        value={formData.email}
        onChange={handleChange}
        maxLength={MAX_EMAIL_LENGTH}
        autoComplete="email"
        required
        className="w-full border border-gray-200 rounded-xl px-4 py-3 font-body text-sm text-[#0a1a3d] placeholder-gray-300 focus:outline-none focus:border-[#1355B2] transition-colors"
      />
    </div>

    {/* ROLE */}
    <div>
      <label
        htmlFor="role"
        className="font-body text-xs font-semibold uppercase tracking-widest text-[#9aa3b5] block mb-2"
      >
        I am a
      </label>

      <select
        id="role"
        name="role"
        value={formData.role}
        onChange={handleChange}
        required
        className="w-full border border-gray-200 rounded-xl px-4 py-3 font-body text-sm text-[#0a1a3d] focus:outline-none focus:border-[#1355B2] transition-colors bg-white"
      >
        <option value="">Select one</option>
        <option value="Job Seeker">Job Seeker</option>
        <option value="Employer / Company">
          Employer / Company
        </option>
        <option value="Looking for Training">
          Looking for Training
        </option>
        <option value="Other">Other</option>
      </select>
    </div>

    {/* MESSAGE */}
    <div>
      <label
        htmlFor="message"
        className="font-body text-xs font-semibold uppercase tracking-widest text-[#9aa3b5] block mb-2"
      >
        Message
      </label>

      <textarea
        id="message"
        rows={4}
        name="message"
        placeholder="Tell us about your goals…"
        value={formData.message}
        onChange={handleChange}
        maxLength={MAX_MESSAGE_LENGTH}
        required
        className="w-full border border-gray-200 rounded-xl px-4 py-3 font-body text-sm text-[#0a1a3d] placeholder-gray-300 focus:outline-none focus:border-[#1355B2] transition-colors resize-none"
      />
    </div>

    {/* SUBMIT */}
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
            <p className="font-body text-sm text-white/70 leading-relaxed mb-4">
              Welcome to Write Your Destiny (WYD), a global HR boutique dedicated to shaping
              careers.
            </p>
            <a
              href="https://www.linkedin.com/company/write-your-destiny/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Write Your Destiny (WYD) on LinkedIn"
              className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <LinkedinIcon className="text-white" style={{ width: 18, height: 18 }} />
            </a>
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
            <div className="flex items-start gap-3 mb-3">
              <MapPinIcon className="text-white/70 shrink-0 mt-0.5" style={{ width: 16, height: 16 }} />
              <p className="font-body text-sm text-white/70 leading-relaxed">
                WYD 3rd Floor, BM Plaza
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