// import { useState, useEffect, type CSSProperties } from "react"
// import { useNavigate } from "react-router-dom"
// import logo from "@/imports/ChatGPT_Image_Aug_24__2026__12_02_21_PM.png"
// import reelResumeTips from "@/imports/reel-resume-tips.png"
// import reelOverseasEducation from "@/imports/reel-overseas-education.png"
// import ctaBg from "@/imports/cta-support-illustration.png"
// import heroBg from "@/imports/hero-bg.png"
// import imgAboutUs1 from "@/imports/about-us-1.png"
// import imgAboutUs2 from "@/imports/about-us-2.png"

// // const DARK = "#0a1a3d"

// // Lightweight inline SVG icons (no external dependency required)
// type IconProps = { className?: string; style?: CSSProperties }

// const PenLineIcon = ({ className, style }: IconProps) => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
//     strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
//     <path d="M12 20h9" />
//     <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
//   </svg>
// )

// const TrendingUpIcon = ({ className, style }: IconProps) => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
//     strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
//     <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
//     <polyline points="16 7 22 7 22 13" />
//   </svg>
// )

// const UsersIcon = ({ className, style }: IconProps) => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
//     strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
//     <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
//     <circle cx="9" cy="7" r="4" />
//     <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
//     <path d="M16 3.13a4 4 0 0 1 0 7.75" />
//   </svg>
// )

// const BriefcaseIcon = ({ className, style }: IconProps) => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
//     strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
//     <rect x="2" y="7" width="20" height="14" rx="2" />
//     <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
//   </svg>
// )

// const UserCheckIcon = ({ className, style }: IconProps) => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
//     strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
//     <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
//     <circle cx="8.5" cy="7" r="4" />
//     <polyline points="17 11 19 13 23 9" />
//   </svg>
// )

// const MapPinIcon = ({ className, style }: IconProps) => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
//     strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
//     <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
//     <circle cx="12" cy="10" r="3" />
//   </svg>
// )

// const PhoneIcon = ({ className, style }: IconProps) => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
//     strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
//     <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
//   </svg>
// )

// const MailIcon = ({ className, style }: IconProps) => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
//     strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
//     <rect x="2" y="4" width="20" height="16" rx="2" />
//     <path d="m22 6-10 7L2 6" />
//   </svg>
// )

// const LinkedinIcon = ({ className, style }: IconProps) => (
//   <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
//     <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
//   </svg>
// )

// const InstagramIcon = ({ className, style }: IconProps) => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
//     strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
//     <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
//     <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
//     <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
//   </svg>
// )

// const FacebookIcon = ({ className, style }: IconProps) => (
//   <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
//     <path d="M14 9.5V7.5c0-.83.67-1.5 1.5-1.5H17V3h-2.5C11.46 3 10 4.46 10 7.5v2H7v3.5h3V21h4v-8h2.5l.5-3.5H14Z" />
//   </svg>
// )

// const WhatsappIcon = ({ className, style }: IconProps) => (
//   <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
//     <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.71.45 3.37 1.3 4.85L2.05 22l5.36-1.36a9.94 9.94 0 0 0 4.63 1.14h.01c5.46 0 9.9-4.45 9.9-9.91C21.95 6.45 17.5 2 12.04 2Zm5.85 14.03c-.24.68-1.4 1.32-1.93 1.4-.5.08-1.11.11-1.79-.11-.41-.13-.94-.3-1.62-.6-2.85-1.23-4.7-4.1-4.85-4.29-.14-.19-1.16-1.55-1.16-2.96 0-1.4.73-2.09 1-2.37.24-.27.53-.34.7-.34l.5.01c.16.01.38-.06.6.46.24.57.79 1.98.86 2.12.07.14.11.31.02.5-.09.19-.14.31-.27.47-.14.16-.29.36-.41.48-.14.14-.28.29-.12.56.16.27.71 1.18 1.53 1.91 1.05.94 1.94 1.24 2.21 1.38.27.14.43.11.59-.07.16-.18.68-.79.86-1.06.18-.27.36-.22.6-.13.25.09 1.58.75 1.85.88.27.14.45.2.52.32.07.11.07.66-.17 1.34Z" />
//   </svg>
// )

// const BLUE = "#1355B2"
// const PINK = "#F5569B"
// const BLUSH = "#FFCBEB"
// const DARK = "#0a1a3d"
// const SKYBLUE = "C3DBFD"

// // Real images from writeyourdestiny.in
// const IMG_HERO = heroBg
// const IMG_ABOUT = imgAboutUs1
// const IMG_TEAM = imgAboutUs2

// // Blog / reels / video content for the "Stories & Inspiration" section
// const YOUTUBE_ID = "Y907dQjIoMo"
// const IMG_YOUTUBE_THUMB = `https://img.youtube.com/vi/${YOUTUBE_ID}/hqdefault.jpg`

// const reels = [
//   {
//     url: "https://www.instagram.com/reel/Cr5gPIJrF-k/?igsh=Njhua2w4MGFla3Z2",
//     thumb: reelResumeTips,
//   },
//   {
//     url: "https://www.instagram.com/reel/CoKXtCDDujA/?igsh=OW5ndXYyZHdzNnRp",
//     thumb: reelOverseasEducation,
//   },
// ]

// const youtubeVideo = {
//   url: "https://www.youtube.com/watch?v=Y907dQjIoMo",
//   thumb: IMG_YOUTUBE_THUMB,
// }

// const services = [
//   {
//     num: "01",
//     title: "Advisory",
//     desc: "Got a career or hiring challenge in Karnataka? We provide honest, tailored advice to help job seekers and businesses across India make the right move.",
//     icon: PenLineIcon,
//     color: BLUE,
//   },
//   {
//     num: "02",
//     title: "Skill Enhancement",
//     desc: "We push individuals and teams beyond their limits with practical corporate training in Hubli that employers across India actually look for.",
//     icon: TrendingUpIcon,
//     color: PINK,
//   },
//   {
//     num: "03",
//     title: "Diversity & Inclusion",
//     desc: "We help organizations across Karnataka and India build inclusive workplaces where diverse voices are heard and everyone belongs.",
//     icon: UsersIcon,
//     color: BLUE,
//   },
//   {
//     num: "04",
//     title: "Talent Station",
//     desc: "Your go-to placement agency in Hubli — connecting job seekers across Karnataka and India with opportunities that truly match their potential.",
//     icon: BriefcaseIcon,
//     color: PINK,
//   },
//   {
//     num: "05",
//     title: "Personal Growth",
//     desc: "Trusted by professionals across India, we help you reshape your mindset and build the personal foundation you need to grow — professionally and personally.",
//     icon: UserCheckIcon,
//     color: BLUE,
//   },
// ]

// const stats = [
//   { value: 50, suffix: "+", label: "Clients" },
//   { value: 1400, suffix: "+", label: "Successful Placements" },
// ]

// /* Animates a number counting up from 0 to `value` once it scrolls into view */
// function AnimatedStat({
//   value,
//   suffix = "",
//   duration = 1600,
// }: {
//   value: number
//   suffix?: string
//   duration?: number
// }) {
//   const [display, setDisplay] = useState(0)
//   const [hasRun, setHasRun] = useState(false)
//   const ref = (node: HTMLDivElement | null) => {
//     if (!node || hasRun) return
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting && !hasRun) {
//             setHasRun(true)
//             const start = performance.now()
//             const tick = (now: number) => {
//               const progress = Math.min((now - start) / duration, 1)
//               // ease-out for a natural deceleration near the end
//               const eased = 1 - Math.pow(1 - progress, 3)
//               setDisplay(Math.round(eased * value))
//               if (progress < 1) requestAnimationFrame(tick)
//             }
//             requestAnimationFrame(tick)
//             observer.disconnect()
//           }
//         })
//       },
//       { threshold: 0.4 }
//     )
//     observer.observe(node)
//   }

//   return (
//     <div ref={ref}>
//       {display.toLocaleString()}
//       {suffix}
//     </div>
//   )
// }

// const marqueeItems = [
//   "Crafting Futures",
//   "✦",
//   "Connecting Talents",
//   "✦",
//   "Your Destiny, Our Expertise",
//   "✦",
//   "Write Your Destiny",
//   "✦",
//   "Hubli's Trusted HR Consultancy",
//   "✦",
// ]

// export default function App() {
//   const navigate = useNavigate()
//   const [menuOpen, setMenuOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)
//   const [activeService, setActiveService] = useState<number | null>(null)

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 60)
//     window.addEventListener("scroll", onScroll)
//     return () => window.removeEventListener("scroll", onScroll)
//   }, [])

//   // If we arrive here with a hash (e.g. from the About page nav), scroll to it
//   useEffect(() => {
//     if (window.location.hash) {
//       const id = window.location.hash.slice(1)
//       // Wait a tick for layout to settle before scrolling
//       requestAnimationFrame(() => {
//         document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
//       })
//     }
//   }, [])

//   const scrollTo = (id: string) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
//     setMenuOpen(false)
//   }

//   return (
//     <div className="min-h-screen bg-white text-[#0a1a3d] overflow-x-clip">
//       {/* NAV */}
//       <nav
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//           scrolled
//             ? "bg-white/95 backdrop-blur-md shadow-sm"
//             : "bg-white/80 backdrop-blur-sm"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
//           <button
//             onClick={() => scrollTo("hero")}
//             className="flex items-center"
//           >
//             <img
//               src={logo}
//               alt="Write Your Destiny logo"
//               className="h-10 w-auto object-contain"
//             />
//           </button>

//           <div className="hidden md:flex items-center gap-8">
//             {/* Home → Home Page */}
//   <button
//     onClick={() => navigate("/")}
//     className="nav-link font-body text-sm font-medium text-[#4a5568] hover:text-[#0a1a3d] transition-colors"
//   >
//     Home
//   </button>

//             {/* About → Separate Page */}
//             <button
//               onClick={() => navigate("/about")}
//               className="nav-link font-body text-sm font-medium text-[#4a5568] hover:text-[#0a1a3d] transition-colors"
//             >
//               About Us
//             </button>

//             {/* Services → Separate Page */}
//             <button
//               onClick={() => navigate("/services")}
//               className="nav-link font-body text-sm font-medium text-[#4a5568] hover:text-[#0a1a3d] transition-colors"
//             >
//               Services
//             </button>

//             <button
//               onClick={() => navigate("/jobs")}
//               className="nav-link font-body text-sm font-medium text-[#4a5568] hover:text-[#0a1a3d] transition-colors"
//             >
//               Find Jobs
//             </button>

//             <button
//               onClick={() => navigate("/contact")}
//               className="px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
//               style={{ background: PINK }}
//             >
//               Get Started
//             </button>

//           </div>

//           <button
//             className="md:hidden flex flex-col gap-1.5 p-2"
//             onClick={() => setMenuOpen(!menuOpen)}
//             aria-label="Toggle menu"
//           >
//             <span
//               className={`block w-6 h-0.5 bg-[#0a1a3d] transition-all duration-300 ${
//                 menuOpen ? "rotate-45 translate-y-2" : ""
//               }`}
//             />
//             <span
//               className={`block w-6 h-0.5 bg-[#0a1a3d] transition-all duration-300 ${
//                 menuOpen ? "opacity-0" : ""
//               }`}
//             />
//             <span
//               className={`block w-6 h-0.5 bg-[#0a1a3d] transition-all duration-300 ${
//                 menuOpen ? "-rotate-45 -translate-y-2" : ""
//               }`}
//             />
//           </button>
//         </div>

//         <div
//           className={`md:hidden overflow-hidden transition-all duration-300 ${
//             menuOpen ? "max-h-60" : "max-h-0"
//           }`}
//         >
//           <div className="bg-white border-t border-gray-100 px-6 py-5 flex flex-col gap-4">
//                         <button
//   onClick={() => {
//     navigate("/")
//     setMenuOpen(false)
//   }}
//   className="text-left text-[#4a5568] hover:text-[#0a1a3d] font-body text-base transition-colors"
// >
//   Home
// </button>
//   <button
//     onClick={() => navigate("/about")}
//     className="text-left text-[#4a5568] hover:text-[#0a1a3d] font-body text-base transition-colors"
//   >
//     About Us
//   </button>

//   <button
//     onClick={() => navigate("/services")}
//     className="text-left text-[#4a5568] hover:text-[#0a1a3d] font-body text-base transition-colors"
//   >
//     Services
//   </button>

//   <button
//     onClick={() => navigate("/jobs")}
//     className="text-left text-[#4a5568] hover:text-[#0a1a3d] font-body text-base transition-colors"
//   >
//     Find Jobs
//   </button>

//   {/* Get Started */}
//   <button
//     onClick={() => {
//       navigate("/contact")
//       setMenuOpen(false)
//     }}
//     className="w-full py-3 mt-2 text-sm font-semibold text-white transition-all duration-300 hover:opacity-90"
//     style={{ background: PINK }}
//   >
//     Get Started →
//   </button>
// </div>
//         </div>
//       </nav>

//       {/* HERO */}
//       <section
//         id="hero"
//         className="pt-28 pb-16 md:pt-32 md:pb-20 relative overflow-hidden"
//       >
//         {/* Blush blob background */}
//         <div
//           className="absolute top-0 right-0 w-1/2 h-full"
//           style={{
//             background: `linear-gradient(135deg, ${SKYBLUE}60 0%, ${BLUSH}20 100%)`,
//           }}
//         />
//         <div
//           className="absolute -top-32 -right-32 w-96 h-96 rounded-full"
//           style={{ background: BLUSH, filter: "blur(80px)", opacity: 0.6 }}
//         />
//         <div
//           className="absolute bottom-0 left-0 w-72 h-72 rounded-full"
//           style={{ background: PINK, filter: "blur(70px)", opacity: 0.15 }}
//         />

//         <div className="relative max-w-7xl mx-auto px-6 md:px-10 min-h-[calc(100vh-4rem)] flex items-center">
//           <div className="grid md:grid-cols-2 gap-12 items-center w-full">
//             {/* Left — text */}
//             <div>
//               <div
//                 className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-6 fade-up"
//                 style={{
//                   background: BLUSH,
//                   color: PINK,
//                   animationDelay: "0.05s",
//                 }}
//               >
//                 <span
//                   className="w-1.5 h-1.5 rounded-full"
//                   style={{ background: PINK }}
//                 />
//                 Hubli's Trusted HR Consultancy
//               </div>

//               <h1
//                 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.0] mb-6 fade-up"
//                 style={{ animationDelay: "0.15s" }}
//               >
//                 Crafting
//                 <br />
//                 <span style={{ color: PINK }}>Futures,</span>
//                 <br />
//                 Connecting
//                 <br />
//                 <span style={{ color: PINK }}>Talents</span>: 
//                 <br />
//                 Your
                
//                 Destiny, Our 
//                 {/* <br /> */}
//                 <span style={{ color: PINK }}> Expertise!</span>
//               </h1>

//               <p
//                 className="font-body text-lg text-[#6b7a99] leading-relaxed max-w-md mb-10 fade-up"
//                 style={{ animationDelay: "0.3s" }}
//               >
//                 Hubli's trusted HR consultancy and recruitment agency —
//                 connecting the right talent with the right opportunities
//                 across Karnataka and India.
//               </p>

//               <div
//                 className="flex flex-col sm:flex-row gap-4 fade-up"
//                 style={{ animationDelay: "0.4s" }}
//               >
//                 <button
//                   onClick={() => navigate("/services")}
//                   className="px-8 py-4 font-semibold text-sm tracking-wide text-white transition-all duration-300 hover:opacity-90 hover:shadow-lg"
//                   style={{
//                     background: BLUE,
//                     boxShadow: `0 4px 24px ${BLUE}40`,
//                   }}
//                 >
//                   Explore Services
//                 </button>
//                 <button
//                   onClick={() => scrollTo("about")}
//                   className="px-8 py-4 font-semibold text-sm tracking-wide border-2 transition-all duration-300 hover:bg-gray-50"
//                   style={{ borderColor: BLUE, color: BLUE }}
//                 >
//                   Our Story →
//                 </button>
//               </div>

//             </div>

//             {/* Right — image */}
// <div className="relative md:-translate-y-18 fade-up" style={{ animationDelay: "0.5s" }}>
//   {/* Decorative ring */}
//   <div
//     className="absolute -top-6 -right-6 w-48 h-48 rounded-full border-2 opacity-20"
//     style={{ borderColor: BLUE }}
//   />
//   <div
//     className="absolute -bottom-6 -left-4 w-32 h-32 rounded-full opacity-30"
//     style={{ background: `${PINK}20` }}
//   />

//   <div
//     className="relative overflow-hidden mx-auto aspect-square max-w-[320px]
//                rounded-full
//                md:mx-0 md:aspect-auto md:max-w-none
//                md:rounded-[60%_40%_70%_30%/50%_60%_40%_60%]"
//   >
//     <img
//       src={IMG_HERO}
//       alt="Write Your Destiny team professional"
//       className="w-full h-full md:h-[500px] object-cover object-top"
//       onError={(e) => {
//         ;(e.target as HTMLImageElement).style.display = "none"
//       }}
//     />
//   </div>

//   <div
//   className="absolute bottom-3 -left-4 bg-white shadow-xl px-3 py-2 rounded-lg flex items-center gap-2
//              md:px-5 md:py-3 md:rounded-xl md:gap-3"
//   style={{ boxShadow: `0 8px 32px ${BLUE}20` }}
// >
//   <div
//     className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0
//                md:w-10 md:h-10 md:text-sm"
//     style={{ background: PINK }}
//   >
//     ✦
//   </div>
//   <div>
//     <p className="font-body text-[10px] text-[#9aa3b5] md:text-xs">
//       Trusted since
//     </p>
//     <p
//       className="font-display font-bold text-xs md:text-sm"
//       style={{ color: DARK }}
//     >
//       2019 · Hubli, KA
//     </p>
//   </div>
// </div>
// </div>
//           </div>
//         </div>
//       </section>

//       {/* MARQUEE */}
//       <div
//         className="border-y border-pink-100 py-3 overflow-hidden"
//         style={{ background: BLUE }}
//       >
//         <div className="marquee-track flex whitespace-nowrap gap-10">
//           {[...marqueeItems, ...marqueeItems].map((item, i) => (
//             <span
//               key={i}
//               className="font-display italic text-lg font-light shrink-0"
//               style={{
//                 color: item === "✦" ? PINK : "#ffff",
//               }}
//             >
//               {item}
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* ABOUT */}
//       <section id="about" className="py-28 px-6 md:px-10">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
//           {/* Images collage */}
//           <div className="relative">
//             <div className="flex flex-col gap-4">
//               <img
//                 src={IMG_ABOUT}
//                 alt="WYD team at work"
//                 className="w-full h-64 md:h-80 object-cover rounded-2xl"
//                 onError={(e) => {
//                   ;(e.target as HTMLImageElement).style.opacity = "0"
//                 }}
//               />
//               <img
//                 src={IMG_TEAM}
//                 alt="WYD team collaboration"
//                 className="w-full h-64 md:h-80 object-cover rounded-2xl"
//                 onError={(e) => {
//                   ;(e.target as HTMLImageElement).style.opacity = "0"
//                 }}
//               />
//             </div>
//             {/* Badge */}
//             <div
//               className="absolute -bottom-4 -right-3 md:-right-6 bg-white shadow-xl px-4 py-3 rounded-xl text-center"
//               style={{ boxShadow: `0 8px 32px ${BLUE}20` }}
//             >
//               <div
//                 className="font-display text-xl font-bold"
//                 style={{ color: PINK }}
//               >
//                 1,400+
//               </div>
//               <div className="font-body text-[10px] text-[#9aa3b5] mt-0.5 whitespace-nowrap">
//                 Successful Placements
//               </div>
//             </div>
//           </div>

//           {/* Text */}
//           <div>
//             <div
//               className="inline-block text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-5"
//               style={{ background: BLUSH, color: PINK }}
//             >
//               About Us
//             </div>
//             <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] mb-6">
//               More than a
//               <br />
//               <em className="italic font-light" style={{ color: BLUE }}>
//                 placement firm.
//               </em>
//             </h2>
//             <p className="font-body text-[#6b7a99] leading-relaxed mb-8">
//               Write Your Destiny (WYD) is Hubli's trusted HR consultancy and
//               recruitment agency — connecting the right talent with the right
//               opportunities across Karnataka and India. From talent
//               acquisition to corporate training and overseas education, we're
//               your one-stop career and hiring partner.
//             </p>
//             <div className="flex items-center gap-3">
//               <button
//                 onClick={() => navigate("/about")}
//                 className="px-6 py-3 rounded-full font-body text-sm font-semibold text-white transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
//                 style={{ background: BLUE }}
//               >
//                 About Us →
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* SERVICES */}
//       <section
//         id="services"
//         className="py-24 px-6 md:px-10"
//         style={{
//           background: `linear-gradient(180deg, ${BLUSH}50 0%, white 100%)`,
//         }}
//       >
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <div
//               className="inline-block text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-4"
//               style={{ background: BLUSH, color: PINK }}
//             >
//               What We Offer
//             </div>
//             <h2 className="font-display text-4xl md:text-5xl font-bold">
//               Five ways we{" "}
//               <em className="italic font-light" style={{ color: BLUE }}>
//                 help you grow.
//               </em>
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {services.map((s, i) => (
//               <div
//                 key={i}
//                 className="service-card bg-white border-2 border-gray-100 rounded-2xl p-7 cursor-default"
//                 onMouseEnter={() => setActiveService(i)}
//                 onMouseLeave={() => setActiveService(null)}
//               >
//                 <div className="flex items-start justify-between mb-5">
//                   <div
//                     className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300"
//                     style={{
//                       background:
//                         activeService === i ? s.color : `${s.color}14`,
//                     }}
//                   >
//                     <s.icon
//                       className="w-5 h-5 transition-all duration-300"
//                       strokeWidth={2}
//                       style={{ color: activeService === i ? "white" : s.color }}
//                     />
//                   </div>
//                   <span
//                     className="font-body text-xs font-semibold tracking-widest"
//                     style={{ color: s.color }}
//                   >
//                     {s.num}
//                   </span>
//                 </div>
//                 <h3
//                   className="font-display text-xl font-bold mb-3"
//                   style={{ color: DARK }}
//                 >
//                   {s.title}
//                 </h3>
//                 <p className="font-body text-sm text-[#7a8499] leading-relaxed">
//                   {s.desc}
//                 </p>
//                 <div
//                   className="mt-6 h-0.5 transition-all duration-500"
//                   style={{
//                     background: s.color,
//                     width: activeService === i ? "40px" : "0px",
//                   }}
//                 />
//               </div>
//             ))}

//             {/* CTA card */}
//             <div
//               className="rounded-2xl p-7 flex flex-col justify-between cursor-pointer group transition-all duration-300 hover:opacity-95 hover:scale-[1.01]"
//               style={{
//                 background: `linear-gradient(135deg, ${BLUE} 0%, #0d3f8a 100%)`,
//               }}
//               onClick={() => navigate("/contact")}
//             >
//               <span className="font-body text-xs font-semibold text-white/50 tracking-widest uppercase">
//                 Ready?
//               </span>
//               <div>
//                 <h3 className="font-display text-2xl font-bold text-white mb-2 group-hover:translate-x-1 transition-transform duration-300">
//                   Let's talk about your destiny →
//                 </h3>
//                 <p className="font-body text-sm text-white/60">
//                   Book a free consultation today.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* STATS */}
//       <section className="py-20 px-6 md:px-10">
//         <div className="max-w-7xl mx-auto">
//           <div
//             className="grid grid-cols-2 rounded-2xl md:rounded-3xl overflow-hidden"
//             style={{
//               background: `linear-gradient(135deg, ${DARK} 0%, #1a2d5a 100%)`,
//             }}
//           >
//             {stats.map((s, i) => (
//               <div
//                 key={i}
//                 className={`px-4 py-10 md:px-8 md:py-14 text-center ${
//                   i < stats.length - 1 ? "border-r border-white/10" : ""
//                 }`}
//               >
//                 <div
//                   className="font-display text-3xl sm:text-4xl md:text-6xl font-bold mb-1 md:mb-2"
//                   style={{ color: i % 2 === 0 ? BLUSH : PINK }}
//                 >
//                   <AnimatedStat value={s.value} suffix={s.suffix} />
//                 </div>
//                 <div className="font-body text-[10px] md:text-xs text-white/40 tracking-wide uppercase leading-tight">
//                   {s.label}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//        {/* CTA */}
// <section
//   className="relative overflow-hidden py-24 md:py-28 px-6 md:px-10"
//   style={{ background: DARK }}
// >
//   <img
//     src={ctaBg}
//     alt=""
//     className="absolute inset-0 w-full h-full object-cover"
//   />

//   {/* Blue overlay - 45% */}
//   <div className="absolute inset-0 bg-[#0a1a3d]/85" />

//   <div className="relative max-w-2xl mx-auto text-center">
//     <div className="inline-block text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full bg-white/15 text-white">
//       When You Are Ready
//     </div>

//     <h2 className="font-display mt-6 text-3xl md:text-4xl font-bold text-white leading-tight">
//       Let's talk about your <span style={{ color: PINK }}>destiny.</span>
//     </h2>

//     <p className="font-body text-white/80 text-base max-w-xl mx-auto leading-7 mt-5">
//       Book a free consultation and let's shape your next chapter together.
//     </p>

//     <button
//       onClick={() => navigate("/contact")}
//       className="font-body mt-8 px-8 py-4 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
//       style={{ background: PINK }}
//     >
//       Get In Touch →
//     </button>
//   </div>
// </section>

//       {/* BLOG / GALLERY */}
//       <section
//         id="blogs"
//         className="py-20 px-6 md:px-10"
//         style={{ background: BLUSH + "40" }}
//       >
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12">
//             <div
//               className="inline-block text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-4"
//               style={{ background: BLUSH, color: PINK }}
//             >
//               Our Blogs
//             </div>
//             <h2 className="font-display text-4xl font-bold">
//               Our{" "}
//               <em className="italic font-light" style={{ color: BLUE }}>
//                 Blogs.
//               </em>
//             </h2>
//           </div>

//           <div className="grid sm:grid-cols-3 gap-6">
//             {/* Instagram reel cards */}
//             {reels.map((r, i) => (
//               <a
//                 key={`reel-${i}`}
//                 href={r.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-56 flex items-center justify-center"
//                 style={{
//                   background: `linear-gradient(135deg, #405DE6 0%, #C13584 45%, ${PINK} 75%, #F77737 100%)`,
//                 }}
//               >
//                 {r.thumb && (
//                   <img
//                     src={r.thumb}
//                     alt={i === 0 ? "Resume making tips" : "WYD @TRW2023 Overseas Education"}
//                     className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                     onError={(e) => {
//                       ;(e.target as HTMLImageElement).style.display = "none"
//                     }}
//                   />
//                 )}
//                 <div className="absolute inset-0 bg-black/20" />

//                 <div className="absolute top-4 left-4 flex items-center gap-2">
//                   {/* <span className="text-white text-lg">◎</span>
//                   <span className="font-body text-xs font-semibold text-white/90">
//                     {i === 0 ? "Resume making tips" : "Overseas Education"}
//                   </span> */}
//                 </div>
//                 <div className="relative w-14 h-14 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//                   <span className="text-2xl" style={{ color: PINK }}>
//                     ▶
//                   </span>
//                 </div>
//                 <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-sm">
//                   <span className="font-body text-xs font-semibold text-white">
//                     Watch on Instagram
//                   </span>
//                 </div>
//               </a>
//             ))}

//             {/* YouTube video card */}
//             <a
//               href={youtubeVideo.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-56"
//             >
//               <img
//                 src={youtubeVideo.thumb}
//                 alt="Shreedevi Roogi's Difficult Conversations on YouTube"
//                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//               />
//               <div className="absolute inset-0 bg-black/20" />
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="w-14 h-14 rounded-full bg-[#FF0000] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
//                   <span className="text-white text-2xl ml-0.5">▶</span>
//                 </div>
//               </div>
//               <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm">
//                 <span className="font-body text-xs font-semibold text-white">
//                   Watch on YouTube
//                 </span>
//               </div>
//             </a>
//           </div>
//         </div>
//       </section>


//       {/* CONTACT */}
//       {/* FOOTER */}
//       <footer className="pt-16 pb-8 px-6 md:px-10" style={{ background: BLUE }}>
//         <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
//           {/* Logo + tagline */}
//           <div>
//             <div className="bg-white rounded-xl px-4 py-2 inline-flex items-center shrink-0 mb-4">
//               <img
//                 src={logo}
//                 alt="Write Your Destiny"
//                 className="h-8 w-auto object-contain"
//               />
//             </div>
//             <p className="font-body text-sm text-white/70 leading-relaxed mb-4">
//               Welcome to Write Your Destiny (WYD), a global HR boutique
//               dedicated to shaping careers.
//             </p>
//             <div className="flex items-center gap-3">
//               <a
//                 href="https://www.linkedin.com/company/write-your-destiny/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="Write Your Destiny (WYD) on LinkedIn"
//                 className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
//               >
//                 <LinkedinIcon className="w-4.5 h-4.5 text-white" style={{ width: 18, height: 18 }} />
//               </a>
//               <a
//                 href="https://www.instagram.com/write.your.destiny007/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="Write Your Destiny (WYD) on Instagram"
//                 className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
//               >
//                 <InstagramIcon className="w-4.5 h-4.5 text-white" style={{ width: 18, height: 18 }} />
//               </a>
//               <a
//                 href="https://www.facebook.com/wyd007"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="Write Your Destiny (WYD) on Facebook"
//                 className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
//               >
//                 <FacebookIcon className="w-4.5 h-4.5 text-white" style={{ width: 18, height: 18 }} />
//               </a>
//               <a
//                 href="https://wa.me/919606351695"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="Chat with Write Your Destiny (WYD) on WhatsApp"
//                 className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
//               >
//                 <WhatsappIcon className="w-4.5 h-4.5 text-white" style={{ width: 18, height: 18 }} />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="font-display text-white font-bold mb-4">
//               Quick Links
//             </h3>
//             <div className="flex flex-col gap-2.5">
//               <button
//                 onClick={() => scrollTo("hero")}
//                 className="text-left font-body text-sm text-white/70 hover:text-white transition-colors"
//               >
//                 Home
//               </button>
//               <button
//                 onClick={() => navigate("/about")}
//                 className="text-left font-body text-sm text-white/70 hover:text-white transition-colors"
//               >
//                 About Us
//               </button>
//               <button
//                 onClick={() => navigate("/services")}
//                 className="text-left font-body text-sm text-white/70 hover:text-white transition-colors"
//               >
//                 Our Services
//               </button>
//               {/* <button
//                 onClick={() => scrollTo("blogs")}
//                 className="text-left font-body text-sm text-white/70 hover:text-white transition-colors"
//               >
//                 Our Blogs
//               </button> */}
//               <button
//                 onClick={() => navigate("/contact")}
//                 className="text-left font-body text-sm text-white/70 hover:text-white transition-colors"
//               >
//                 Find Jobs
//               </button>
//               <button
//                 onClick={() => navigate("/contact")}
//                 className="text-left font-body text-sm text-white/70 hover:text-white transition-colors"
//               >
//                 Contact Us
//               </button>
//             </div>
//           </div>

//           {/* Contact Us */}
//           <div>
//             <h3 className="font-display text-white font-bold mb-4">
//               Contact Us
//             </h3>
//             <div className="flex items-start gap-3 mb-3">
//               <MapPinIcon className="text-white/70 shrink-0 mt-0.5" style={{ width: 16, height: 16 }} />
//               <p className="font-body text-sm text-white/70 leading-relaxed">
//                 WYD, 3rd Floor, BM Plaza
//                 <br />
//                 Near Sharada Hotel,
//                 <br />
//                 Deshpande Nagar, Hubli, Karnataka.
//               </p>
//             </div>
//             <div className="flex items-center gap-3 mb-2">
//               <PhoneIcon className="text-white/70 shrink-0" style={{ width: 16, height: 16 }} />
//               <a
//                 href="tel:+919606351695"
//                 className="font-body text-sm text-white/70 hover:text-white transition-colors"
//               >
//                 +91 9606351695
//               </a>
//             </div>
//             <div className="flex items-center gap-3">
//               <MailIcon className="text-white/70 shrink-0" style={{ width: 16, height: 16 }} />
//               <a
//                 href="mailto:shreedevi.roogi@writeyourdestiny.in"
//                 className="font-body text-sm text-white/70 hover:text-white transition-colors"
//               >
//                 shreedevi.roogi@writeyourdestiny.in
//               </a>
//             </div>
//           </div>

//           {/* Working Hours */}
//           <div>
//             <h3 className="font-display text-white font-bold mb-4">
//               Working Hours
//             </h3>
//             <p className="font-body text-sm text-white/70 leading-relaxed">
//               Mon - Fri: 9:30 am to 6:30 pm
//               <br />
//               Saturday 9:30 am to 2:30 pm
//             </p>
//           </div>
//         </div>

//         <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10">
//           <p className="font-body text-xs text-white/50 text-center">
//             © {new Date().getFullYear()} Write Your Destiny. All Rights
//             Reserved. Hubli, Karnataka. Powered by{" "}
//             <a
//               href="https://www.spitel.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white/70 hover:text-white transition-colors"
//             >
//               Spitel Pvt. Ltd.
//             </a>
//           </p>
//         </div>
//       </footer>
//     </div>
//   )
// }

import { useState, useEffect, type CSSProperties } from "react"
import { useNavigate } from "react-router-dom"
import logo from "@/imports/ChatGPT_Image_Aug_24__2026__12_02_21_PM.png"
import reelResumeTips from "@/imports/reel-resume-tips.png"
import reelOverseasEducation from "@/imports/reel-overseas-education.png"
import ctaBg from "@/imports/cta-support-illustration.png"
import heroBg from "@/imports/hero-bg.png"
import imgAboutUs1 from "@/imports/about-us-1.png"
import imgAboutUs2 from "@/imports/about-us-2.png"

// const DARK = "#0a1a3d"

// Lightweight inline SVG icons (no external dependency required)
type IconProps = { className?: string; style?: CSSProperties }

const PenLineIcon = ({ className, style }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
  </svg>
)

const TrendingUpIcon = ({ className, style }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
)

const UsersIcon = ({ className, style }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)

const BriefcaseIcon = ({ className, style }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
)

const UserCheckIcon = ({ className, style }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="8.5" cy="7" r="4" />
    <polyline points="17 11 19 13 23 9" />
  </svg>
)

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

const BLUE = "#1355B2"
const PINK = "#F5569B"
const BLUSH = "#FFCBEB"
const DARK = "#0a1a3d"
const SKYBLUE = "C3DBFD"

// Real images from writeyourdestiny.in
const IMG_HERO = heroBg
const IMG_ABOUT = imgAboutUs1
const IMG_TEAM = imgAboutUs2

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
    desc: "Got a career or hiring challenge in Karnataka? We provide honest, tailored advice to help job seekers and businesses across India make the right move.",
    icon: PenLineIcon,
    color: BLUE,
  },
  {
    num: "02",
    title: "Skill Enhancement",
    desc: "We push individuals and teams beyond their limits with practical corporate training in Hubli that employers across India actually look for.",
    icon: TrendingUpIcon,
    color: PINK,
  },
  {
    num: "03",
    title: "Diversity & Inclusion",
    desc: "We help organizations across Karnataka and India build inclusive workplaces where diverse voices are heard and everyone belongs.",
    icon: UsersIcon,
    color: BLUE,
  },
  {
    num: "04",
    title: "Talent Station",
    desc: "Your go-to placement agency in Hubli — connecting job seekers across Karnataka and India with opportunities that truly match their potential.",
    icon: BriefcaseIcon,
    color: PINK,
  },
  {
    num: "05",
    title: "Personal Growth",
    desc: "Trusted by professionals across India, we help you reshape your mindset and build the personal foundation you need to grow — professionally and personally.",
    icon: UserCheckIcon,
    color: BLUE,
  },
]

const stats = [
  { value: 50, suffix: "+", label: "Clients" },
  { value: 1400, suffix: "+", label: "Successful Placements" },
]

/* Animates a number counting up from 0 to `value` once it scrolls into view */
function AnimatedStat({
  value,
  suffix = "",
  duration = 1600,
}: {
  value: number
  suffix?: string
  duration?: number
}) {
  const [display, setDisplay] = useState(0)
  const [hasRun, setHasRun] = useState(false)
  const ref = (node: HTMLDivElement | null) => {
    if (!node || hasRun) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasRun) {
            setHasRun(true)
            const start = performance.now()
            const tick = (now: number) => {
              const progress = Math.min((now - start) / duration, 1)
              // ease-out for a natural deceleration near the end
              const eased = 1 - Math.pow(1 - progress, 3)
              setDisplay(Math.round(eased * value))
              if (progress < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.4 }
    )
    observer.observe(node)
  }

  return (
    <div ref={ref}>
      {display.toLocaleString()}
      {suffix}
    </div>
  )
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
            {/* Home → Home Page */}
  <button
    onClick={() => navigate("/")}
    className="nav-link font-body text-sm font-medium text-[#4a5568] hover:text-[#0a1a3d] transition-colors"
  >
    Home
  </button>

            {/* About → Separate Page */}
            <button
              onClick={() => navigate("/about")}
              className="nav-link font-body text-sm font-medium text-[#4a5568] hover:text-[#0a1a3d] transition-colors"
            >
              About Us
            </button>

            {/* Services → Separate Page */}
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
        id="hero"
        className="scroll-mt-20 pt-28 pb-16 md:pt-28 md:pb-28 relative overflow-hidden"
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

        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-[3fr_2fr] gap-0 items-center w-full">
            {/* Left — text */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-4 fade-up"
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
                className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 fade-up max-w-xl"
                style={{ animationDelay: "0.15s" }}
              >
                Crafting <span style={{ color: PINK }}>Futures,</span>{" "}
                Connecting <span style={{ color: PINK }}>Talents</span>.{" "}
                Your Destiny, Our{" "}
                <span style={{ color: PINK }}>Expertise!</span>
              </h1>

              <p
                className="font-body text-lg text-[#6b7a99] leading-relaxed max-w-lg mb-8 fade-up"
                style={{ animationDelay: "0.3s" }}
              >
                Hubli's trusted HR consultancy and recruitment agency —
                connecting the right talent with the right opportunities
                across Karnataka and India.
              </p>
            </div>

            {/* Right — image */}
<div className="relative fade-up mb-12 md:mb-0" style={{ animationDelay: "0.5s" }}>
  {/* Decorative ring */}
  <div
    className="absolute -top-6 -right-6 w-48 h-48 rounded-full border-2 opacity-20"
    style={{ borderColor: BLUE }}
  />
  <div
    className="absolute -bottom-6 -left-4 w-32 h-32 rounded-full opacity-30"
    style={{ background: `${PINK}20` }}
  />

  <div
    className="relative overflow-hidden mx-auto aspect-square max-w-[320px]
               rounded-full
               md:mx-0 md:aspect-auto md:max-w-none
               md:rounded-[60%_40%_70%_30%/50%_60%_40%_60%]"
  >
    <img
      src={IMG_HERO}
      alt="Write Your Destiny team professional"
      className="w-full h-full md:h-[420px] object-cover object-top"
      onError={(e) => {
        ;(e.target as HTMLImageElement).style.display = "none"
      }}
    />
  </div>

  <div
  className="absolute -bottom-6 left-2 bg-white shadow-xl px-3 py-2 rounded-lg flex items-center gap-2
             md:-bottom-8 md:left-4 md:px-5 md:py-3 md:rounded-xl md:gap-3"
  style={{ boxShadow: `0 8px 32px ${BLUE}20` }}
>
  <div
    className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0
               md:w-10 md:h-10 md:text-sm"
    style={{ background: PINK }}
  >
    ✦
  </div>
  <div>
    <p className="font-body text-[10px] text-[#9aa3b5] md:text-xs">
      Trusted since
    </p>
    <p
      className="font-display font-bold text-xs md:text-sm"
      style={{ color: DARK }}
    >
      2019 · Hubli, KA
    </p>
  </div>
</div>
</div>

            {/* Buttons — rendered after the image on mobile, sits under the text column on desktop */}
            <div
              className="flex flex-col sm:flex-row flex-wrap gap-4 fade-up max-w-lg"
              style={{ animationDelay: "0.4s" }}
            >
              <button
                onClick={() => navigate("/services")}
                className="px-8 py-4 font-semibold text-sm tracking-wide text-white transition-all duration-300 hover:opacity-90 hover:shadow-lg whitespace-nowrap"
                style={{
                  background: BLUE,
                  boxShadow: `0 4px 24px ${BLUE}40`,
                }}
              >
                Explore Services
              </button>
              <button
                onClick={() => scrollTo("about")}
                className="px-8 py-4 font-semibold text-sm tracking-wide border-2 transition-all duration-300 hover:bg-gray-50 whitespace-nowrap"
                style={{ borderColor: BLUE, color: BLUE }}
              >
                Our Story →
              </button>
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
                color: item === "✦" ? PINK : "#ffff",
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
            <div className="flex flex-col gap-4">
              <img
                src={IMG_ABOUT}
                alt="WYD team at work"
                className="w-full h-64 md:h-80 object-cover rounded-2xl"
                onError={(e) => {
                  ;(e.target as HTMLImageElement).style.opacity = "0"
                }}
              />
              <img
                src={IMG_TEAM}
                alt="WYD team collaboration"
                className="w-full h-64 md:h-80 object-cover rounded-2xl"
                onError={(e) => {
                  ;(e.target as HTMLImageElement).style.opacity = "0"
                }}
              />
            </div>
            {/* Badge */}
            <div
              className="absolute -bottom-4 -right-3 md:-right-6 bg-white shadow-xl px-4 py-3 rounded-xl text-center"
              style={{ boxShadow: `0 8px 32px ${BLUE}20` }}
            >
              <div
                className="font-display text-xl font-bold"
                style={{ color: PINK }}
              >
                1,400+
              </div>
              <div className="font-body text-[10px] text-[#9aa3b5] mt-0.5 whitespace-nowrap">
                Successful Placements
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <div
              className="inline-block text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-5"
              style={{ background: BLUSH, color: PINK }}
            >
              About Us
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] mb-6">
              More than a
              <br />
              <em className="italic font-light" style={{ color: BLUE }}>
                placement firm.
              </em>
            </h2>
            <p className="font-body text-[#6b7a99] leading-relaxed mb-8">
              Write Your Destiny (WYD) is Hubli's trusted HR consultancy and
              recruitment agency — connecting the right talent with the right
              opportunities across Karnataka and India. From talent
              acquisition to corporate training and overseas education, we're
              your one-stop career and hiring partner.
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate("/about")}
                className="px-6 py-3 rounded-full font-body text-sm font-semibold text-white transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
                style={{ background: BLUE }}
              >
                About Us →
              </button>
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
                help you grow.
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
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300"
                    style={{
                      background:
                        activeService === i ? s.color : `${s.color}14`,
                    }}
                  >
                    <s.icon
                      className="w-5 h-5 transition-all duration-300"
                      strokeWidth={2}
                      style={{ color: activeService === i ? "white" : s.color }}
                    />
                  </div>
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
            className="grid grid-cols-2 rounded-2xl md:rounded-3xl overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${DARK} 0%, #1a2d5a 100%)`,
            }}
          >
            {stats.map((s, i) => (
              <div
                key={i}
                className={`px-4 py-10 md:px-8 md:py-14 text-center ${
                  i < stats.length - 1 ? "border-r border-white/10" : ""
                }`}
              >
                <div
                  className="font-display text-3xl sm:text-4xl md:text-6xl font-bold mb-1 md:mb-2"
                  style={{ color: i % 2 === 0 ? BLUSH : PINK }}
                >
                  <AnimatedStat value={s.value} suffix={s.suffix} />
                </div>
                <div className="font-body text-[10px] md:text-xs text-white/40 tracking-wide uppercase leading-tight">
                  {s.label}
                </div>
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
                    alt={i === 0 ? "Resume making tips" : "WYD @TRW2023 Overseas Education"}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      ;(e.target as HTMLImageElement).style.display = "none"
                    }}
                  />
                )}
                <div className="absolute inset-0 bg-black/20" />

                <div className="absolute top-4 left-4 flex items-center gap-2">
                  {/* <span className="text-white text-lg">◎</span>
                  <span className="font-body text-xs font-semibold text-white/90">
                    {i === 0 ? "Resume making tips" : "Overseas Education"}
                  </span> */}
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
                alt="Shreedevi Roogi's Difficult Conversations on YouTube"
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