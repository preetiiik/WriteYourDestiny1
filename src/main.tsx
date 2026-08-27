import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import App from "./App"
import About from "./About"
import Services from "./ServicesPage"
import Contact from "./ContactPage"
import "./index.css"
import Jobs from "./Jobs"
import ScrollToTop from "./ScrollToTop"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/jobs" element={<Jobs />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)