import { useEffect, useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import logo from "@/imports/ChatGPT_Image_Aug_24__2026__12_02_21_PM.png"

/* Same design tokens as the home page (App.tsx) */
const BLUE = "#1355B2"
const PINK = "#F5569B"
const BLUSH = "#FFCBEB"
const DARK = "#0a1a3d"
const SKYBLUE = "C3DBFD"

/* --------------------------- job records --------------------------- */

type Contact = { phone?: string; email?: string }

type Job = {
  ref: string
  title: string
  type: string
  location: string
  experience?: string
  blurb: string
  responsibilities: string[]
  skills: string[]
  contact: Contact
}

const jobs: Job[] = [
  {
    ref: "WYD-001",
    title: "Systems Engineer - Analyst",
    type: "Full-time",
    location: "Bangalore & Hyderabad",
    experience: "2–4 years",
    blurb: "L1/L2 helpdesk and incident-management support for desktops, mobile devices, Cisco phones, and enterprise systems.",
    responsibilities: [
      "Respond to technical assistance requests by phone and email, owning incidents end to end in the ticketing system",
      "Troubleshoot desktops, laptops, mobile devices, and Cisco/IP phones",
      "Support Active Directory, networking, messaging, and ESX-hosted virtual machines",
      "Escalate issues appropriately and maintain clean ticket documentation and hygiene",
    ],
    skills: ["MDM", "Networking", "Active Directory", "Cisco", "RSA SecurID", "VPN", "Microsoft Office / O365", "Incident Management"],
    contact: { phone: "+91 9480193535", email: "anushap.wyd@gmail.com" },
  },
  {
    ref: "WYD-002",
    title: "Mainframe Developer",
    type: "Full-time",
    location: "Bangalore & Hyderabad",
    blurb: "Develop and support mainframe systems (L3), working across DB2, SQL, COBOL, and clearing/CCP connectivity.",
    responsibilities: [
      "Develop, debug, and support COBOL-based mainframe applications",
      "Work across DB2, SQL, JCL, CICS, VSAM, and IBM MQ",
      "Support clearing business operations and CCP connectivity",
      "Troubleshoot user issues and maintain clear technical documentation",
    ],
    skills: ["COBOL", "DB2", "SQL", "JCL", "CICS", "VSAM", "IBM MQ", "Mainframe SDLC"],
    contact: { phone: "+91 9480193535", email: "anushap.wyd@gmail.com" },
  },
  {
    ref: "WYD-003",
    title: "Executive Helpdesk Support Analyst",
    type: "Full-time",
    location: "Bangalore & Hyderabad",
    blurb: "White-glove IT support for senior executives globally, with cradle-to-grave ownership of every issue.",
    responsibilities: [
      "Provide white-glove technical support to top executives via phone or email",
      "Own issues end to end with timely updates and strong ticket hygiene",
      "Troubleshoot Windows, Active Directory, Outlook, and Microsoft Office issues",
      "Support Citrix/VMware/VDI environments and mobile OS (iOS/Android) issues",
    ],
    skills: ["Windows 7/10/11", "Active Directory", "LAN/WAN", "Citrix/VMware", "Microsoft 365", "Zoom"],
    contact: { phone: "+91 9480193535", email: "anushap.wyd@gmail.com" },
  },
  {
    ref: "WYD-004",
    title: "Java/JavaScript Developer — L3 Support",
    type: "Full-time",
    location: "Bangalore & Hyderabad",
    blurb: "A pure L3 support role at McLaren Strategic Solutions, debugging and resolving complex Java/JavaScript issues.",
    responsibilities: [
      "Provide L3 support, debugging complex Java and JavaScript issues",
      "Collaborate cross-functionally to ensure seamless application delivery",
      "Optimize SQL queries and perform basic Linux maintenance",
      "Maintain and enhance backend and frontend components",
    ],
    skills: ["Java", "JavaScript", "SQL", "Linux", "Debugging", "Analytical Thinking"],
    contact: { phone: "+91 9480193535", email: "anushap.wyd@gmail.com" },
  },
  {
    ref: "WYD-005",
    title: "CW Java Developer",
    type: "Contract",
    location: "Bangalore & Hyderabad",
    experience: "4+ years",
    blurb: "Contract Java developer for AR/VR and advanced AI initiatives spanning computer vision, speech, and LLM-based NLU.",
    responsibilities: [
      "Build backend services in Java 11+ and Spring within a microservices architecture",
      "Work with Kafka for messaging and MongoDB (or equivalents)",
      "Apply strong SDLC practices across the development lifecycle",
      "Contribute to test automation with JUnit, mocking, and Gherkin (nice to have)",
    ],
    skills: ["Java", "Microservices", "Kafka", "MongoDB", "Spring", "GitLab", "JUnit"],
    contact: { phone: "+91 9632951356", email: "rashmivangi@writeyourdestiny.in" },
  },
  {
    ref: "WYD-006",
    title: "Ebiz Services",
    type: "Full-time",
    location: "Hyderabad",
    experience: "2–4 years (5+ with strong communication)",
    blurb: "Support role for service/finance-industry clients, combining ServiceNow, project management, and reporting.",
    responsibilities: [
      "Support ServiceNow-based service operations for finance/service-industry clients",
      "Apply project management skills across client engagements",
      "Build reporting, pie charts, and dashboards in Excel (Bloomberg experience a plus)",
      "Communicate clearly and consistently with stakeholders",
    ],
    skills: ["ServiceNow", "Project Management", "Excel Reporting", "Bloomberg", "Python / Data Analytics"],
    contact: { phone: "+91 9353019779" },
  },
  {
    ref: "WYD-007",
    title: "Engineering Support Level 2 — Portfolio Analytics",
    type: "Full-time",
    location: "Bangalore",
    blurb: "L2 escalation support for portfolio analytics platforms, mentoring juniors and driving SRE improvements.",
    responsibilities: [
      "Resolve escalated support issues from L1 (Marquee Helpdesk) for senior clients",
      "Mentor junior team members and participate in on-call rotations",
      "Automate manual processes to improve efficiency and reduce risk",
      "Code and debug in Python, with basic UI/API integration knowledge",
    ],
    skills: ["Python", "API Debugging", "SRE Practices", "Documentation", "Java (nice to have)"],
    contact: { phone: "+91 9632951356", email: "rashmivangi@writeyourdestiny.in" },
  },
  {
    ref: "WYD-008",
    title: "AppBank Workplace Web Platform Specialist",
    type: "Full-time",
    location: "Bangalore",
    blurb: "Technical support and maintenance for internal web platforms, keeping them stable, secure, and performant.",
    responsibilities: [
      "Provide escalated support, monitoring, and maintenance for web platform applications",
      "Perform root cause analysis and build out operational runbooks",
      "Support deployments, configuration updates, and disaster recovery processes",
      "Collaborate with development teams on application enhancements",
    ],
    skills: ["Linux", "Application Support", "Technical Writing", "DevOps / CI-CD", "AWS", "SQL / NoSQL"],
    contact: { phone: "+91 9632951356", email: "rashmivangi@writeyourdestiny.in" },
  },
  {
    ref: "WYD-009",
    title: "Application Security Specialist",
    type: "Remote",
    location: "Remote",
    blurb: "Own application security through advanced risk assessment and secure software development practices.",
    responsibilities: [
      "Implement advanced application security concepts and risk assessments",
      "Integrate secure software development practices into the SDLC",
      "Identify and mitigate vulnerabilities throughout the development lifecycle",
      "Support threat modeling and security testing initiatives (nice to have)",
    ],
    skills: ["CASP+", "CSSLP", "Risk Assessment", "Secure SDLC", "Threat Modeling"],
    contact: { phone: "+91 9632976073", email: "shreya@writeyourdestiny.in" },
  },
  {
    ref: "WYD-010",
    title: "Internal Compliance Auditor",
    type: "Remote",
    location: "Remote",
    blurb: "Ensure adherence to internal policy and regulatory requirements through audits, analysis, and training.",
    responsibilities: [
      "Perform regular audits and build risk-based audit plans",
      "Analyze data to identify compliance gaps and prepare detailed audit reports",
      "Recommend policy and control improvements and track corrective actions",
      "Stay current on regulatory changes and train employees on compliance",
    ],
    skills: ["Auditing", "Data Analysis & Reporting", "Regulatory Compliance", "CIA / CCEP (nice to have)"],
    contact: { phone: "+91 9632976073", email: "shreya@writeyourdestiny.in" },
  },
  {
    ref: "WYD-011",
    title: "Data Analyst",
    type: "Remote",
    location: "Remote",
    experience: "3–5 years",
    blurb: "Turn vendor, location, talent, and regulatory data into insight that drives ecosystem decisions at Aokah.",
    responsibilities: [
      "Analyze vendor, regulatory, and location data to surface trends and gaps",
      "Build dashboards and reports — heatmaps, readiness scores, compliance risk",
      "Validate data quality and support predictive modeling efforts",
      "Partner cross-functionally to define KPIs and measurement frameworks",
    ],
    skills: ["SQL", "Excel / Google Sheets", "Power BI / Looker / Tableau", "Python / R (nice to have)"],
    contact: { phone: "+91 9353019779", email: "aishwarya@writeyourdestiny.in" },
  },
  {
    ref: "WYD-012",
    title: "Data Engineer",
    type: "Remote",
    location: "Remote",
    experience: "3–5 years",
    blurb: "Build scalable data ingestion pipelines and ETL workflows powering vendor and regulatory data products.",
    responsibilities: [
      "Design and optimize scalable data ingestion pipelines (APIs, crawlers, connectors)",
      "Build ETL/ELT pipelines using Airflow, Kafka, or NiFi",
      "Integrate external sources such as Dun & Bradstreet, ESG repositories, and regulatory feeds",
      "Maintain data lake and warehouse environments (Redshift, Snowflake, BigQuery)",
    ],
    skills: ["Python", "SQL", "Airflow", "Web Scraping (Scrapy/BeautifulSoup)", "AWS / GCP / Azure"],
    contact: { phone: "+91 9353019779", email: "aishwarya@writeyourdestiny.in" },
  },
  {
    ref: "WYD-013",
    title: "SSE Engineer — Testing",
    type: "Remote",
    location: "Remote",
    experience: "4+ years",
    blurb: "Senior E2E test engineer owning automated test strategy and execution across the SDLC.",
    responsibilities: [
      "Design and execute end-to-end test strategies across the SDLC",
      "Build and maintain automated test scripts using Selenium, Serenity, and Python",
      "Manage test cases and defects using QTest and JIRA",
      "Integrate automated tests into CI/CD pipelines with the DevOps team",
    ],
    skills: ["Selenium", "Serenity", "Python", "QTest", "Agile / Scrum"],
    contact: { phone: "+91 9901561096", email: "bhagyashree.wyd@gmail.com" },
  },
  {
    ref: "WYD-014",
    title: "Development Engineer",
    type: "Full-time",
    location: "Bengaluru",
    experience: "3–5 years",
    blurb: "Mid-level engineering role building and testing features against the product backlog in an agile team.",
    responsibilities: [
      "Develop and test code that delivers agreed product features",
      "Write automated test scripts and validate against user-story acceptance criteria",
      "Follow agile methodology for design, documentation, and delivery",
      "Work closely with infrastructure and security partners",
    ],
    skills: ["Java", "Spring Boot", "Kotlin", "OOP", "Automated Unit Testing"],
    contact: { phone: "+91 9901561096", email: "bhagyashree.wyd@gmail.com" },
  },
  {
    ref: "WYD-015",
    title: "Senior Development Engineer",
    type: "Full-time",
    location: "Bangalore",
    experience: "5–10 years",
    blurb: "Backend engineer designing and maintaining scalable, high-performance server-side systems.",
    responsibilities: [
      "Design, develop, and maintain robust backend systems and APIs",
      "Collaborate with front-end developers, product managers, and stakeholders on requirements",
      "Write clean, tested, maintainable code and participate in code reviews",
      "Troubleshoot backend issues and stay current with emerging technologies",
    ],
    skills: ["Java / Kotlin / Python", "SQL / MySQL / PostgreSQL", "REST APIs", "Microservices", "AWS / Azure / GCP", "CI/CD"],
    contact: { phone: "+91 9901561096", email: "bhagyashree.wyd@gmail.com" },
  },
  {
    ref: "WYD-016",
    title: "Quality Analyst",
    type: "Full-time",
    location: "Hyderabad, Bangalore",
    experience: "5–7 years",
    blurb: "End-to-end QA engineer covering automation, performance, API, and database testing.",
    responsibilities: [
      "Design and maintain automated test scripts (Selenium) across UI, API, and database layers",
      "Run performance testing with JMeter and API testing with Postman/Rest Assured",
      "Validate data integrity with SQL and automate tasks with Unix shell scripting",
      "Manage the defect lifecycle in JIRA and mentor junior QA engineers",
    ],
    skills: ["Selenium", "JMeter", "Postman", "SQL", "Unix Shell Scripting", "CI/CD"],
    contact: { phone: "+91 9632951356", email: "rashmivangi@writeyourdestiny.in" },
  },
  {
    ref: "WYD-017",
    title: "Senior Data Engineer",
    type: "Full-time",
    location: "Bangalore & Hyderabad",
    experience: "6–10 years",
    blurb: "Design and optimize enterprise-scale data pipelines and lakehouse architecture on Azure.",
    responsibilities: [
      "Build high-performance data pipelines using Azure Databricks and Apache Spark",
      "Implement and optimize Azure Data Lake and Synapse Analytics architecture",
      "Develop ETL/ELT pipelines with Data Factory, Databricks notebooks, and PySpark",
      "Ensure governance, security, and performance optimization of big data workloads",
    ],
    skills: ["Azure Databricks", "Azure Data Lake", "Synapse Analytics", "PySpark", "Python", "SQL"],
    contact: { phone: "+91 9901561096", email: "bhagyashree.wyd@gmail.com" },
  },
  {
    ref: "WYD-018",
    title: "Senior Data Modeller",
    type: "Full-time",
    location: "Bengaluru, Chennai, Hyderabad, Pune",
    experience: "10+ years",
    blurb: "Design and manage conceptual, logical, and physical data models supporting analytics and governance.",
    responsibilities: [
      "Develop and maintain data models that translate business needs into database design",
      "Optimize existing models to support analytics and reporting",
      "Ensure models support data governance, quality, and security standards",
      "Document models, metadata, and lineage for stakeholders",
    ],
    skills: ["ER/Studio / ERwin", "SQL", "Dimensional Modeling", "Cloud Data Services", "MDM"],
    contact: { phone: "+91 9901561096", email: "bhagyashree.wyd@gmail.com" },
  },
  {
    ref: "WYD-019",
    title: "Security Engineer",
    type: "Full-time",
    location: "Chennai",
    blurb: "Safeguard AI and ML systems from emerging threats through security frameworks and governance.",
    responsibilities: [
      "Embed security and governance best practices across development and deployment",
      "Serve as SME driving adoption of standards and compliance automation",
      "Evaluate and implement emerging security technologies",
      "Lead incident response and root cause analysis initiatives",
    ],
    skills: ["Cryptography", "Vulnerability Assessment", "Penetration Testing", "OWASP for LLMs", "CISSP / CEH / CISM (nice to have)"],
    contact: { phone: "+91 9901561096", email: "bhagyashree.wyd@gmail.com" },
  },
  {
    ref: "WYD-020",
    title: "Business Analyst",
    type: "Full-time",
    location: "Bengaluru, Hyderabad, Chennai",
    experience: "5+ years",
    blurb: "Bridge product, engineering, and analytics teams for analytics-friendly system and table design.",
    responsibilities: [
      "Support end-to-end system and table design for new product features",
      "Review and validate data schemas for analytics alignment",
      "Conduct data validation against legacy systems and external sources",
      "Align cross-functional stakeholders on data strategy and delivery timelines",
    ],
    skills: ["SQL", "Data Analysis", "Google Cloud Platform", "Data Architecture (plus)"],
    contact: { phone: "+91 9901561096", email: "bhagyashree.wyd@gmail.com" },
  },
  {
    ref: "WYD-021",
    title: "Solution Architect",
    type: "Full-time",
    location: "Bangalore",
    experience: "10–15 years",
    blurb: "Define architectural standards and lead solution design across an autonomous, cross-location architecture team.",
    responsibilities: [
      "Define best practices and standards as part of the architecture team",
      "Ensure sound design and clearly communicate the impact of changes",
      "Collaborate with architects, engineering managers, and ICs on solutions",
      "Evaluate and introduce new tools and architectural techniques",
    ],
    skills: ["Java / Scala / Kotlin (JVM)", "API Design Patterns", "Microservices", "Event-Driven Architecture"],
    contact: { phone: "+91 9632976073", email: "shreya@writeyourdestiny.in" },
  },
  {
    ref: "WYD-022",
    title: "Lead Software Development",
    type: "Full-time",
    location: "Bangalore",
    blurb: "Lead the design and delivery of complex software projects, guiding a development team through planning, execution, and release.",
    responsibilities: [
      "Set technical direction and own delivery across the team's roadmap",
      "Guide engineers through design, code review, and release planning",
      "Partner with product and architecture on scope and sequencing",
      "Raise the bar on engineering practices and mentor the team",
    ],
    skills: ["Technical Leadership", "Team Management", "Architecture", "Agile Delivery"],
    contact: { phone: "+91 9632976073", email: "shreya@writeyourdestiny.in" },
  },
  {
    ref: "WYD-023",
    title: "Cloud SW Developer",
    type: "Full-time",
    location: "Bangalore",
    blurb: "Build bottom-up software solutions on AWS/GCP, leveraging cloud-native and open-source big data services.",
    responsibilities: [
      "Design and build cloud-native SaaS solutions on AWS/GCP from the ground up",
      "Work with big data technologies — Spark, Flink, Kafka, Druid, Iceberg, Delta Lake",
      "Develop in Java/Go with strong microservices and streaming expertise",
      "Collaborate with peers on architecture while working independently",
    ],
    skills: ["Java", "Go", "AWS / GCP", "Spark / Flink / Kafka", "Kubernetes", "Microservices"],
    contact: { phone: "+91 9632976073", email: "shreya@writeyourdestiny.in" },
  },
  {
    ref: "WYD-024",
    title: "Senior BI Analyst",
    type: "Contract",
    location: "Bengaluru",
    experience: "5–8 years · 6-month extendable contract",
    blurb: "Build Power BI dashboards and deliver strategic insight for Ecommerce, CPG, and Retail businesses.",
    responsibilities: [
      "Perform in-depth and diagnostic analysis, including post-campaign analysis",
      "Build and manage sophisticated Power BI dashboards from multi-source data",
      "Communicate insights to senior stakeholders through data storytelling",
      "Establish data governance frameworks for security and compliance",
    ],
    skills: ["Power BI", "DAX", "SQL", "Databricks / Azure", "Python / R (nice to have)"],
    contact: { phone: "+91 9901561096", email: "bhagyashree.wyd@gmail.com" },
  },
  {
    ref: "WYD-025",
    title: "Speech Therapist",
    type: "Full-time",
    location: "Jammu, Jammu and Kashmir",
    experience: "0–5 years · RCI Certificate required",
    blurb: "Deliver speech and language therapy for clients aged five and above, both online and offline.",
    responsibilities: [
      "Conduct assessments and therapy sessions for speech and language disorders",
      "Run parent awareness and training sessions",
      "Track patient progress and maintain treatment documentation",
      "Collaborate within an interdisciplinary care team",
    ],
    skills: ["RCI Certificate", "Speech-Language Pathology", "Patient Documentation"],
    contact: { phone: "+91 9353019779", email: "aishwarya.wyd@gmail.com" },
  },
  {
    ref: "WYD-026",
    title: "Executive Assistant",
    type: "Full-time",
    location: "Bangalore",
    blurb: "Support senior executives with scheduling, communication, and confidential information management.",
    responsibilities: [
      "Manage calendars, meetings, and travel arrangements",
      "Handle correspondence and act as a point of contact for the executive",
      "Prepare documents, presentations, and reports",
      "Support special projects and expense/budget tracking",
    ],
    skills: ["Calendar & Travel Management", "Confidentiality", "Document Preparation"],
    contact: { phone: "+91 9632977673", email: "sabila.wyd@gmail.com" },
  },
  {
    ref: "WYD-027",
    title: "AI/LLM Data Scientist",
    type: "Full-time",
    location: "Bangalore — Hybrid",
    blurb: "Design AI systems that power autonomous networking at Nile, using LLMs, agentic AI, and reinforcement learning.",
    responsibilities: [
      "Architect, train, and fine-tune models for anomaly detection and automated remediation",
      "Build production-grade ML pipelines for multimodal telemetry data — logs, metrics, traces",
      "Explore multimodal LLMs, RL-based control systems, and temporal pattern recognition",
      "Partner with engineering and product teams to map AI models to customer outcomes",
    ],
    skills: ["PyTorch / TensorFlow", "LLM Architectures", "MLOps", "Python", "PhD / Master's in CS or ML"],
    contact: { phone: "+91 9632951356", email: "rashmivangi@writeyourdestiny.in" },
  },
  {
    ref: "WYD-028",
    title: "Senior Product Manager",
    type: "Full-time",
    location: "Bangalore",
    experience: "7+ years (3–5 in product management)",
    blurb: "Own product strategy across wired switching, SD-WAN, wireless, and day-2 network operations.",
    responsibilities: [
      "Define and drive product requirements across switching, SD-WAN, and Wi-Fi",
      "Author functional specs, FAQs, and field-facing collateral",
      "Partner with customer success and AI ops on anomaly-detection workflows",
      "Track post-launch performance and iterate on customer feedback",
    ],
    skills: ["Enterprise Networking", "SD-WAN / Wi-Fi", "Product Management", "CWNA / CCNA / CCNP (plus)"],
    contact: { phone: "+91 9632976073", email: "shreya@writeyourdestiny.in" },
  },
  {
    ref: "WYD-029",
    title: "Technical Business Executive",
    type: "Full-time",
    location: "Hubli",
    blurb: "Combine technical know-how with client engagement to drive advanced tooling adoption in manufacturing.",
    responsibilities: [
      "Visit customers to identify technical needs and manufacturing challenges",
      "Apply technical knowledge to demonstrate advanced tooling solutions",
      "Deliver product presentations and follow up to secure purchase decisions",
      "Conduct trials with prospective customers",
    ],
    skills: ["Mechanical Engineering Fundamentals", "Customer Presentation", "Technical Problem-Solving"],
    contact: { phone: "+91 9632976073", email: "shreya@writeyourdestiny.in" },
  },
  {
    ref: "WYD-030",
    title: "Marketing Mix Modelling (MMM) Specialist",
    type: "Contract",
    location: "Bengaluru",
    experience: "3–6 years · 6-month extendable contract",
    blurb: "Build short- and long-term marketing mix models to guide media spend and budget optimization.",
    responsibilities: [
      "Build short-term and long-term MMM models with actionable insights",
      "Apply Python for data processing, modeling, and visualization",
      "Use statistical modeling techniques and interpret marketing impact",
      "Optimize media mix and budget allocation across channels",
    ],
    skills: ["Python", "Statistical Modeling", "Media Mix Optimization", "Campaign Analytics"],
    contact: { phone: "+91 9901561096", email: "bhagyashree.wyd@gmail.com" },
  },
  {
    ref: "WYD-031",
    title: "Support Engineer — SDLC/DevOps",
    type: "Remote",
    location: "Remote",
    experience: "3–5 years",
    blurb: "Support SDLC/DevOps pipelines and Linux systems for a global, high-scale infrastructure.",
    responsibilities: [
      "Support builds, repositories, and packages across the DevOps pipeline",
      "Script and develop in Java/Python and manage Linux job scheduling (Autosys/CRON)",
      "Work with GIT, GitLab, Maven, Docker, and RDBMS platforms",
      "Apply config-management tools (Chef, Puppet, Ansible) and troubleshoot at scale",
    ],
    skills: ["Linux", "DevOps", "GIT / GitLab", "Docker", "Config Management (Chef/Puppet/Ansible)"],
    contact: { phone: "+91 9353019779", email: "aishwarya@writeyourdestiny.in" },
  },
]

/* --------------------------- shared little pieces --------------------------- */

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

/* --------------------------- job accordion row --------------------------- */

function JobCard({
  job,
  index,
  isOpen,
  onToggle,
  navigate,
}: {
  job: Job
  index: number
  isOpen: boolean
  onToggle: () => void
  navigate: (path: string) => void
}) {
  const accent = index % 2 === 0 ? BLUE : PINK

  return (
    <div
      className="service-card bg-white border-2 border-gray-100 rounded-2xl transition-shadow duration-300"
      style={{ boxShadow: isOpen ? `0 20px 40px -24px ${accent}40` : "none" }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 md:px-7 py-6 text-left"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4 md:gap-5 min-w-0">
          <span
            className="hidden sm:inline-flex shrink-0 font-body text-[10px] font-semibold tracking-widest px-3 py-1 rounded-full"
            style={{ color: accent, background: `${accent}12` }}
          >
            {job.ref}
          </span>
          <div className="min-w-0">
            <h3 className="font-display text-base md:text-lg font-bold truncate" style={{ color: DARK }}>
              {job.title}
            </h3>
            <p className="font-body text-xs mt-1" style={{ color: "#8a90a6" }}>
              {job.type} · {job.location}
              {job.experience ? ` · ${job.experience}` : ""}
            </p>
          </div>
        </div>

        <span
          className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-transform duration-300"
          style={{
            background: BLUSH,
            color: PINK,
            transform: isOpen ? "rotate(135deg)" : "rotate(0deg)",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
          </svg>
        </span>
      </button>

      <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <div className="px-6 md:px-7 pb-7 pt-0 sm:pl-[6.5rem]" style={{ borderTop: "1px solid #f1eee6" }}>
            <p className="font-body text-sm leading-relaxed pt-6" style={{ color: "#6b7a99" }}>
              {job.blurb}
            </p>

            <div className="mt-6">
              <h4 className="font-body text-[11px] font-bold uppercase tracking-widest" style={{ color: accent }}>
                What You'll Do
              </h4>
              <ul className="mt-3 space-y-2">
                {job.responsibilities.map((r, i) => (
                  <li key={i} className="flex gap-2.5 items-start">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: accent }} />
                    <span className="font-body text-sm leading-relaxed" style={{ color: "#6b7a99" }}>
                      {r}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="font-body text-[11px] font-bold uppercase tracking-widest" style={{ color: accent }}>
                Skills
              </h4>
              <div className="flex flex-wrap gap-2 mt-3">
                {job.skills.map((s) => (
                  <span
                    key={s}
                    className="font-body text-xs px-3 py-1.5 rounded-full"
                    style={{ background: BLUSH, color: DARK }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div
              className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-7 pt-6"
              style={{ borderTop: "1px solid #f1eee6" }}
            >
              {job.contact.phone && (
                <span className="font-body text-xs" style={{ color: "#8a90a6" }}>
                  {job.contact.phone}
                </span>
              )}
              {job.contact.email && (
                <span className="font-body text-xs break-all" style={{ color: "#8a90a6" }}>
                  {job.contact.email}
                </span>
              )}
              <button
                onClick={() => navigate("/contact")}
                className="font-body inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
                style={{ background: PINK }}
              >
                Apply Now →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------ page ------------------------------ */

export default function Jobs() {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [query, setQuery] = useState("")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const goToServices = () => {
    navigate("/services")
    setMenuOpen(false)
  }

  const filteredJobs = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return jobs
    return jobs.filter((j) => j.title.toLowerCase().includes(q))
  }, [query])

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
              onClick={goToServices}
              className="nav-link font-body text-sm font-medium text-[#4a5568] hover:text-[#0a1a3d] transition-colors"
            >
              Services
            </button>

            <button
              className="nav-link font-body text-sm font-semibold transition-colors"
              style={{ color: PINK }}
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
              onClick={goToServices}
              className="text-left text-[#4a5568] hover:text-[#0a1a3d] font-body text-base transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-left font-body text-base font-semibold transition-colors"
              style={{ color: PINK }}
            >
              Find Jobs
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-28 pb-16 md:pt-32 md:pb-20 relative overflow-hidden">
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

        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-2xl">
            <Eyebrow>Now Hiring</Eyebrow>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-6">
              Current{" "}
              <span style={{ color: PINK }}>Openings.</span>
            </h1>
            <p className="font-display italic text-lg md:text-xl font-light mt-3" style={{ color: BLUE }}>
              {jobs.length} roles open across our client organizations right now.
            </p>
          </div>
        </div>
      </section>

      {/* SEARCH */}
      <section className="px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 bg-white border-2 border-gray-100 rounded-2xl px-5 py-4 mb-10">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ color: PINK }}>
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
              <path d="M21 21l-4.3-4.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by job title — e.g. Data Engineer"
              className="font-body w-full text-sm outline-none bg-transparent"
              style={{ color: DARK }}
            />
          </div>
        </div>
      </section>

      {/* JOB LIST */}
      <section className="pb-24 md:pb-28 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          {filteredJobs.length === 0 ? (
            <div className="text-center py-16">
              <p className="font-body text-sm" style={{ color: "#8a90a6" }}>
                No open roles match "{query}" right now. Try another keyword or check back soon.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {filteredJobs.map((job, i) => (
                <JobCard
                  key={job.ref}
                  job={job}
                  index={i}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                  navigate={navigate}
                />
              ))}
            </div>
          )}
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
                onClick={goToServices}
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