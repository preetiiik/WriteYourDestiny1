import { useEffect, useMemo, useState, type CSSProperties } from "react"
import { useNavigate } from "react-router-dom"
import logo from "@/imports/ChatGPT_Image_Aug_24__2026__12_02_21_PM.png"
import ctaBg from "@/imports/cta-support-illustration.png"

// const DARK = "#0a1a3d"

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

/* --------------------------- job records --------------------------- */

type Contact = { phone?: string; email?: string }

type Job = {
  ref: string
  title: string
  type: string
  location: string
  experience?: string
  description: string
  contact: Contact
}

const jobs: Job[] = [
  {
    ref: "WYD-001",
    title: "Systems Engineer - Analyst",
    type: "Full-time",
    location: "Bangalore & Hyderabad",
    experience: "2–4 years",
    description: `Responsibilities:-

Strong communication skills, oral and
Respond to requests for technical assistance by phone, email,
Enter and manage all incidents and problems in the incident management system and act as a liaison between users and technical escalation teams.
Knowledge on Service Now ticketing tool
Energetically follow-up on open incidents and provide status updates while carrying the ticket from its cradle to grave.
Escalate problems (when required) to the appropriate
Maintain hygiene in ticket documentation, category selection and overall ticket
Identify and learn appropriate software and hardware used and supported by the
Where applicable, encourage users to use self-help resources and demo them on how to find answers on common issues or FAQs.
2-4 years of relevant experience in troubleshooting technical issues related to Desktops, laptops, mobile devices, Cisco Phones.
In depth understanding of virtual computers hosted via ESX servers and experience in configuring and troubleshooting them.
Understanding on Active Directory, Networking, Messaging and Hardware
Advanced troubleshooting experience in Microsoft Office applications suite including Teams, O365.
Experience in troubleshooting issues related to VPN, RSA SecurID, Corporate applications on Mobile devices through any MDM service.
Experience in troubleshooting issues related to Cisco Phones, IP Phones, Jabber,
Incident Management knowledge, experience with Turrets will be added
Extended working hours when business
Flexibility to work in rotational shifts and week
Ability to work under high
Required:-

MDM MOBILE DEVICES
NETWORKING
ACTIVE DIRECTORY
CISCO Additional Skillsets
RSA
VENDOR MANAGEMENT
VPN
DOCUMENTATION
ENGINEER
INCIDENT MANAGEMENT
LIAISON
MASTER DATA MANAGEMENT
MICROSOFT OFFICE
STRONG COMMUNICATION SKILLS
SYSTEMS ENGINEER
TECHNICAL ASSISTANCE`,
    contact: { phone: "+91 9480193535", email: "anushap.wyd@gmail.com" },
  },
  {
    ref: "WYD-002",
    title: "Mainframe Developer",
    type: "Full-time",
    location: "Bangalore & Hyderabad",
    description: `Seeking an experienced Mainframe Specialist with hands-on development experience, particularly in L3 support, to manage and troubleshoot mainframe systems. The role involves working with DB2, SQL, COBOL, and other mainframe tools, supporting clearing business and CCP connectivity. Key Responsibilities

Develop and support mainframe systems, focusing on L3
Write and debug COBOL
Work with DB2, SQL, JCL, CICS, VSAM, and IBM
Support clearing business and CCP
Troubleshoot and resolve user issues, providing technical
Communicate effectively with users and
Create documentation and track
Multitask across various technical issues and Must-Have Skills
Experience in Mainframe development
Experience with DB2 and SQL
Proficiency in COBOL programming
Knowledge of JCL, CICS, VSAM
Experience with IBM MQ
Understanding of SDLC on mainframe
Problem-solving skills
Technical expertise in mainframe systems
Customer service skills
Attention to detail
Multitasking abilities Nice-to-Have Skills
Experience supporting clearing business
Experience with CCP connectivity
Business acumen in global markets and financial products`,
    contact: { phone: "+91 9480193535", email: "anushap.wyd@gmail.com" },
  },
  {
    ref: "WYD-003",
    title: "Executive Helpdesk Support Analyst",
    type: "Full-time",
    location: "Bangalore & Hyderabad",
    description: `Provide high-level technical support to top executives globally, ensuring swift and accurate resolution of issues. Collaborate with engineering teams to troubleshoot and maintain effective documentation.

Key Responsibilities

Provide white-glove treatment to clients and address requests via phone or
Engage engineering teams for troubleshooting and maintain effective
Perform cradle-to-grave ownership of issues with timely updates and follow-
Demonstrate excellent ticket hygiene and manage ticket
Analyze current practices for improvement and suggest strategic
Develop subject matter expertise in supported systems and
Must-Have Skills

High school diploma
Solid technical knowledge of Microsoft Windows platform (Windows 7, 10, 11)
Experience with Zoom, Networking, LAN, WAN, and corporate enterprise domain infrastructure
Troubleshooting skills with Windows desktop and server operating systems
Knowledge of Microsoft Active Directory and Outlook
Understanding of Microsoft Office products (Word, Excel, PowerPoint)
Basic conceptual knowledge of Citrix/VMware/VDI/Virtualization
Mobile OS (iOS/Android) application troubleshooting
Strong customer service skills and focus on ownership
Good English communication skills
Flexibility to work 24×7 shifts occasionally
Nice-to-Have Skills

Technical knowledge of Microsoft 365 Suite
Experience with iOS and Android devices
Experience in high-level customer support or VIP support roles`,
    contact: { phone: "+91 9480193535", email: "anushap.wyd@gmail.com" },
  },
  {
    ref: "WYD-004",
    title: "Java/JavaScript Developer — L3 Support",
    type: "Full-time",
    location: "Bangalore & Hyderabad",
    description: `Seeking a Java/JavaScript developer with strong debugging and analytical skills for a pure L3 support role at McLaren Strategic Solutions. The role involves code reading and writing, problem-solving, and collaboration in a support-focused environment. Key Responsibilities

Provide L3 support for Java/JavaScript Debug and solve complex technical issues.
Collaborate with cross-functional teams to ensure seamless application
Optimize SQL queries and perform basic Linux Maintain and enhance backend/frontend technologies.
Must-Have Skills

Java programming experience JavaScript programming experience Intermediate SQL skills
Basic Linux command-line operations Strong debugging and problem-solving skills Analytical thinking
Communication and collaboration skills Willingness to work in a support-oriented L3 role`,
    contact: { phone: "+91 9480193535", email: "anushap.wyd@gmail.com" },
  },
  {
    ref: "WYD-005",
    title: "CW Java Developer",
    type: "Contract",
    location: "Bangalore & Hyderabad",
    experience: "4+ years",
    description: `AR/VR and Advanced AI (Computer Vision, Speech

Transcription and Synthesis, Natural Language Understanding with LLMs)

Must Haves:

4+ years of Java Development experience
Java 11+
Spring
Experience working with microservices architecture Kafka for messaging – to some extent or equivalent MongoDB – to some extent or equivalent Strong understanding of SDLC
Nice to haves:

Gitlab – experience with others is generally fine, they can learn
Gitlab Test automation (JUnit, Mocking, Gherkin) – candidate does not need deep expertise in all, should have some general experience in automation
Required Skills:

JAVA
MICROSERVICE
JUNIT
AUTOMATED TESTING
KAFKA
Additional Skills:

MONGODB
SPRING
GITLAB
SDLC`,
    contact: { phone: "+91 9632951356", email: "rashmivangi@writeyourdestiny.in" },
  },
  {
    ref: "WYD-006",
    title: "Ebiz Services",
    type: "Full-time",
    location: "Hyderabad",
    experience: "2–4 years (5+ with strong communication)",
    description: ` Please find the below keywords/ skills to look for Services:

Candidates should be from Service based industry/ finance industry
Candidates with BE background / technical courses like Python or Data Analytics
Experience in Service Now application
Experience in project management
Experience in Bloomberg ( Good to have )
Experience/ Knowledge in Excel ( Pie charts, Graphs, Reporting )
Excellent Communication
Experience – 2 to 4 Years ( 5 years with excellent communication skills will work )
Required

B2B
FIREWALL
INCIDENT MANAGEMENT
IOS
AUTHENTICATION
Additional Skillsets

PROJECT MANAGEMENT
TIME MANAGEMENT
VENDOR MANAGEMENT
WEALTH MANAGEMENT
APPLICATION DEVELOPMENT
EBUSINESS
FINANCIAL MARKETS
MARKETING
OPERATIONS
PYTHON
RISK MANAGEMENT
SELF MOTIVATED
STATISTICAL ANALYSIS
TECHNICAL SUPPORT
TELEPHONE
TRADING
TRAINING
VBA`,
    contact: { phone: "+91 9353019779" },
  },
  {
    ref: "WYD-007",
    title: "Engineering Support Level 2 — Portfolio Analytics",
    type: "Full-time",
    location: "Bangalore",
    description: `The role involves providing advanced support and resolution for senior external clients and internal stakeholders, mentoring junior team members, and developing strategies to ensure platform scalability and reliability. The position requires coding and debugging skills, particularly in Python, and the ability to automate processes.

Key Responsibilities
Investigate and drive support resolution with senior external clients and internal stakeholders.
Serve as a point of escalation for support issues from Marquee Helpdesk (L1).
Provide mentorship and guidance to junior team
Develop and mature the SRE strategy for scalability, reliability, and
Automate manual processes to increase efficiency and reduce
Troubleshoot and resolve complex technical issues with cross-functional
Work closely with the engineering team to drive resolution of client
Participate in on-call rotations and respond to
Continuously improve processes and systems for reliability and risk
Influence and suggest improvements on roadmap for enhancing client
Create documentation/runbooks and code snippets for clients and internal
Must-Have Skills
Comfortable coding and debugging in Python. Basic knowledge of UI and API integration.

Clear and empathetic communication skills.

Ability to execute on support issues and automate resolution of repeat issues.

Nice-to Have Skills Java knowledge.
Experience in debugging API calls. Writing quality-of-life snippets for`,
    contact: { phone: "+91 9632951356", email: "rashmivangi@writeyourdestiny.in" },
  },
  {
    ref: "WYD-008",
    title: "AppBank Workplace Web Platform Specialist",
    type: "Full-time",
    location: "Bangalore",
    description: `The AppBank Workplace Web Platform Specialist is responsible for providing technical support and maintenance for web platforms, ensuring stability and performance. The role involves troubleshooting, system monitoring, and collaborating with development teams to enhance application efficiency.

Key Responsibilities
Provide escalated technical support for web platform application
Perform system monitoring, maintenance, and
Assist in the deployment, configuration, and updates of
Develop and maintain technical
Manage incidents and communicate with users and
Conduct root cause analysis for recurring
Analyze failure patterns and advise on permanent
Utilize tools for failure remediation and system health
Participate in the change management
Build and improve runbooks for operational
Implement and maintain disaster recovery
Collaborate with development teams for application
Support integration of new technologies to enhance
Must-Have Skills

Application support experience in web platforms Expertise in Linux environment
Troubleshooting system issues Technical writing skills
Experience in monitoring and operations Good verbal and written communication skills
Nice-to-Have Skills

Understanding of DevOps and CI/CD best practices
Full-stack development experience with Java and a UI framework like React Knowledge of relational (SQL) and NoSQL databases
Experience with CMS like Adobe Experience Manager Experience with cloud computing platforms, ideally AWS Skills in analyzing system and application logs Proficiency with configuration management tools`,
    contact: { phone: "+91 9632951356", email: "rashmivangi@writeyourdestiny.in" },
  },
  {
    ref: "WYD-009",
    title: "Application Security Specialist",
    type: "Remote",
    location: "Remote",
    description: `Remote

The Application Security Specialist is responsible for ensuring the security of software applications through advanced security concepts, risk assessment, and secure software development practices.

Key Responsibilities
Implement advanced application security concepts. Conduct risk assessments and manage security
Develop and integrate secure software development
Identify and mitigate security vulnerabilities throughout the software development
Must-Have Skills

Certified Application Security Professional Plus (CASP+) Certified Secure Software Lifecycle Professional (CSSLP) Advanced knowledge in application security
Risk assessment and management Secure software development practices
Nice-to Have Skills Threat modeling Security testing
Experience with enterprise security architecture`,
    contact: { phone: "+91 9632976073", email: "shreya@writeyourdestiny.in" },
  },
  {
    ref: "WYD-010",
    title: "Internal Compliance Auditor",
    type: "Remote",
    location: "Remote",
    description: `Remote

The Internal Compliance Auditor ensures adherence to internal policies, external regulations, and legal requirements by conducting audits, analyzing data, and recommending improvements. This role involves staying updated on regulatory changes and providing training to employees.

Key Responsibilities
Perform regular audits to assess compliance with internal policies and external regulations.
Create audit plans, including risk assessments and
Gather and analyze data to identify potential compliance gaps and
Prepare detailed audit reports outlining findings, recommendations, and corrective actions.
Suggest changes to policies, procedures, and controls to enhance
Track the implementation of corrective actions and ensure effective
Stay informed about regulatory changes and industry best
Educate employees on compliance-related
Assist with investigations related to compliance
Must-Have Skills

Strong analytical and problem-solving skills
Excellent communication and interpersonal skills
Proficiency in data analysis and reporting
Knowledge of relevant regulations and compliance standards
Ability to work independently and as part of a team
Experience in auditing or compliance roles
Nice-to-Have Skills

Relevant certifications (e.g., Certified Internal Auditor, Certified Compliance & Ethics Professional)`,
    contact: { phone: "+91 9632976073", email: "shreya@writeyourdestiny.in" },
  },
  {
    ref: "WYD-011",
    title: "Data Analyst",
    type: "Remote",
    location: "Remote",
    experience: "3–5 years",
    description: `Remote

Role Overview

The Data Analyst at Aokah will transform vast volumes of vendor, location, talent, and regulatory data into actionable insights for enterprise decision-makers. Your core mission is to convert complex data into visual stories, trends, and signals that inform ecosystem orchestration, risk scoring, and strategic benchmarking. Ideal candidates will possess a high level of analytical rigor, storytelling acumen, and a collaborative mindset.

Key Responsibilities

Analyse vendor, regulatory, and location-based data to identify trends, gaps, and emerging signals.
Build dashboards and reports that drive ecosystem insights (heatmaps, readiness scores, compliance risk).
Collaborate with cross-functional teams to define KPIs and measurement
Validate sourced data quality, consistency, and
Support predictive modeling efforts by shaping inputs and interpreting Develop comparative insights across cities, vendor types, and functions.
Highlight anomalies in setup timelines, vendor compliance, and talent Required Skills &amp; Qualifications
3–5 years in analytics or consulting roles within platform or operations-driven
Fluency in SQL and spreadsheet modeling (Google Sheets, Excel). Experience with BI/visualization tools (PowerBI, Looker, Tableau). Understanding of basic statistics and data storytelling techniques.
Strong verbal and written communication Preferred Experience
Familiarity with vendor ecosystems, regulatory scoring, or city
Exposure to R or Python for advanced
Experience working in early-stage tech or SaaS Culture &amp; Values at Aokah
We believe in the power of insight to drive transformation. Analysts at Aokah aren’t just number crunchers—they are intelligence partners who help customers and internal teams see what others Intellectual curiosity, collaboration, and resilience define our analytics team.
Benefits &amp; Growth Opportunities Competitive compensation and equity plan.

Access to AI-powered tools and data science mentorship. Learning credits for upskilling in analytics and visualization.

Work on global projects with real impact in talent, infra, and regulatory transformation.

Contribute to platform strategy by translating insight into features.`,
    contact: { phone: "+91 9353019779", email: "aishwarya@writeyourdestiny.in" },
  },
  {
    ref: "WYD-012",
    title: "Data Engineer",
    type: "Remote",
    location: "Remote",
    experience: "3–5 years",
    description: `Remote

Key Responsibilities
Design, implement, and optimize scalable data ingestion pipelines (APIs, crawlers,connectors).
Develop robust scrapers and web crawlers for open data
Normalize and transform structured/unstructured vendor, location, and regulatory data.
Implement ETL/ELT pipelines using tools such as Apache Airflow, Kafka, or NiFi.
Ensure high-availability, version control, and quality assurance of data
Collaborate cross-functionally to support analytics, ML model development, and orchestration features.
Integrate with external data sources like Dun &amp; Bradstreet, ESG repositories, and regulatory feeds.
Design and maintain data lake and warehouse environments (e.g., Redshift, Snowflake, BigQuery).
Enforce data privacy, compliance (GDPR, CCPA), and security
Required Skills &amp; Qualifications:

3–5 years of experience in data engineering
Strong programming in Python and
Deep familiarity with ETL workflows, web scraping libraries (Scrapy, BeautifulSoup), and API handling.
Expertise in data pipeline orchestration tools (Airflow, Prefect).
Experience with cloud data platforms (AWS, GCP, Azure).
Hands-on experience with structured and unstructured data
Preferred Experience
Prior exposure to regulatory, location intelligence, or B2B marketplace
Familiarity with vendor intelligence or compliance-oriented
Understanding of data governance, metadata management, and version control practices.`,
    contact: { phone: "+91 9353019779", email: "aishwarya@writeyourdestiny.in" },
  },
  {
    ref: "WYD-013",
    title: "SSE Engineer — Testing",
    type: "Remote",
    location: "Remote",
    experience: "4+ years",
    description: `Remote

Overview

We are seeking an experienced Senior E2E Test Engineer with 4 + years of expertise in end-to-end testing, test automation, and agile methodologies. The ideal candidate will have experience in tools such as QTest, Selenium, Serenity, and Python for building and executing comprehensive test plans

for complex applications. As a Senior Test Engineer, you will collaborate with development teams to ensure the delivery of high-quality software products.

Key Responsibilities

Development, and execution of comprehensive end-to-end test strategies for
Develop and maintain automated test scripts using Selenium, Serenity, and Collaborate with cross-functional teams (Development, product, QA) in an Agile environment
to ensure effective communication and testing workflows. Manage test cases, defects, and overall test execution using
Write and maintain test documentation, including test plans, test cases, and Analyze test results, report defects, and provide detailed feedback to development teams.
Work closely with the DevOps team to ensure automated tests are integrated into the CI/CD
Pipeline.

Skills & Qualifications

4+ years of experience in End-to-End (E2E) testing and test
Software Development Life Cycle (SDLC) & Software Testing Life Cycle (STLC)
Agile Methodologies: Understanding of Agile principles and Scrum or Kanban
Testing Methodologies: Knowledge of different approaches, including functional, regression, integration, E2E, and acceptance
Test Case Design Techniques: Skills in designing test cases using boundary value analysis, equivalence partitioning, decision tables,
Test Case Development and Execution: Experience in creating and executing test cases based
on requirements.

Defect Life Cycle Management: Understanding defect reporting, prioritization, and tracking
through its life cycle.

Reporting: Ability to document and report testing results clearly and
Testing Certifications (optional): ISTQB or similar certifications can be
Proficient in Selenium WebDriver for browser
Hands-on experience with Serenity for writing automated acceptance
Strong programming skills in Python for test scripting and
Experience using QTest for managing test cases, test execution, and defect
Understanding of API testing, performance testing, and test
Excellent problem-solving skills, attention to detail, and the ability to work in a fast-paced
environment.

Strong communication skills, both written and
Experience with additional test frameworks like JUnit, TestNG, or
Knowledge of cloud-based testing tools or
Experience in working with JIRA or other project management`,
    contact: { phone: "+91 9901561096", email: "bhagyashree.wyd@gmail.com" },
  },
  {
    ref: "WYD-014",
    title: "Development Engineer",
    type: "Full-time",
    location: "Bengaluru",
    experience: "3–5 years",
    description: `Overview

Job Title: Development Engineer – Mid-Ops Years of exp: 5-12 Yrs

Key responsibility

Support to Develop and test code to deliver functionality that meets the overall business strategy and objectives
Support to Build the work needed to implement features from the product backlog
Support Size user stories
Support Unit test code, create automated test scripts, and execute all other testing-related tasks
Test deliverables against a user story’s acceptance tests
Support to Execute necessary project documentation
Work closely with other team to ensure that features meet business needs
Follow industry-standard agile software design methodology for development and documentation
Work with infrastructure, security, and other partners
3-5 years in an engineering role
1-3 years participating in agile development
Scrum certification, a plus
Experience with test-driven development and software test automation
Deep experience working in an agile environment (e.g. user stories, iterative development, etc.)
TECHNICAL SKILLS

Must Have
A highly skilled Java Software Developer
Automated Unit Testing
developing Java Spring boot application
Kotlin Programming Language
OOPs
Nice To Have

Cloud Deployment
Integration Testing
Micronaut`,
    contact: { phone: "+91 9901561096", email: "bhagyashree.wyd@gmail.com" },
  },
  {
    ref: "WYD-015",
    title: "Senior Development Engineer",
    type: "Full-time",
    location: "Bangalore",
    experience: "5–10 years",
    description: `As a Backend Software Engineer, you will be responsible for designing, developing, and maintaining server-side applications. You will collaborate with cross-functional teams to ensure seamless integration of various components and deliver high-performance, scalable solutions. Key Responsibilities:
Design, develop, and maintain robust backend systems and
Collaborate with front-end developers, product managers, and other stakeholders to understand requirements and deliver effective
Write clean, maintainable, and efficient code following best practices and coding standards.
Conduct thorough testing and debugging to ensure high-quality
Participate in code reviews to uphold code quality and share
Stay current with emerging backend technologies and methodologies, incorporating them as appropriate.
Troubleshoot and resolve backend-related
Required Skills and Qualifications:
Bachelor’s degree in Computer Science, Engineering, or a related
5 to 10 years of experience in backend
Proficiency in backend languages such as Java , Kotlin, Python
Experience with database technologies like SQL, MySQL, PostgreSQL, or
Strong understanding of RESTful APIs and microservices
Familiarity with version control systems, preferably
Knowledge of cloud platforms (AWS, Azure, or Google Cloud) and CI/CD
Excellent problem-solving skills and attention to
Strong communication and teamwork`,
    contact: { phone: "+91 9901561096", email: "bhagyashree.wyd@gmail.com" },
  },
  {
    ref: "WYD-016",
    title: "Quality Analyst",
    type: "Full-time",
    location: "Hyderabad, Bangalore",
    experience: "5–7 years",
    description: `Key Responsibilities:

Automation & Functional Testing:

Design, develop, and maintain automated test scripts using Selenium and other relevant tools.
Ensure test coverage across all layers: UI, API, database, and backend
Execute functional, regression, and integration tests to validate application Features
Performance Testing:

Utilize JMeter to simulate load, stress, and scalability testing for
Analyze performance bottlenecks and collaborate with development teams to optimize system efficiency.
API Testing:

Leverage Postman for testing RESTful APIs and validating JSON
Develop reusable scripts for automated API testing using tools like Rest Assured or similar frameworks. Database Validation:
Write SQL queries to validate data integrity, perform database testing, and ensure proper data flow across systems. Unix Shell Scripting:
Create and execute Unix shell scripts for log analysis, data processing, and automation tasks.
Test Planning & Strategy:

Develop comprehensive test plans, strategies, and scenarios to ensure high-quality deliverables.
Identify gaps in test coverage and proactively address them with innovative
Defect Management & Reporting:

Troubleshoot defects, perform root cause analysis (RCA), and manage defect lifecycle within tools like Jira.
Provide detailed and actionable bug reports to development Collaboration & Leadership:
Work closely with product managers, developers, and stakeholders to understand requirements and define test objectives.
Mentor junior QA engineers, fostering a culture of quality and continuous
Documentation:

Maintain clear documentation for test cases, test results, and automation
Ensure traceability between requirements, test cases, and
Required Skills & Qualifications:

Experience:

Selenium for UI automation
JMeter for performance testing
Postman for API testing
SQL for database validation
Unix Shell Scripting for automation and debugging
Minimum 5-7 years of experience in QA engineering, with strong expertise in automation and performance testing.
Proven experience with the following tools and technologies
Skills:

Proficiency in JSON for validating API responses and data
Strong knowledge of QA methodologies, testing techniques, and SDLC
Experience with version control systems like
Familiarity with CI/CD pipelines and tools like
Understanding of Agile frameworks and DevOps
Ability to debug code and identify defects in collaboration with
Preferred Skills (Nice to Have):

Familiarity with cloud platforms (e.g., Azure) for deploying and testing
Knowledge of containerization tools like Docker and orchestration systems
like Kubernetes.

Experience with performance monitoring tools (e.g., New Relic, Dynatrace).
Exposure to advanced scripting languages like Python or Java for test
Experience with Kafka for messaging systems and data
Knowledge of microservices architecture`,
    contact: { phone: "+91 9632951356", email: "rashmivangi@writeyourdestiny.in" },
  },
  {
    ref: "WYD-017",
    title: "Senior Data Engineer",
    type: "Full-time",
    location: "Bangalore & Hyderabad",
    experience: "6–10 years",
    description: `Overview: We are hiring a Senior Data Engineer (6 to 10 years) with deep expertise in Azure Data Bricks, Azure Data Lake, and Azure Synapse Analytics to join our high-performing team. The ideal candidate will have a proven track record in designing, building, and optimizing big data pipelines and architectures while leveraging their technical proficiency in cloud-based data engineering. This role requires a strategic thinker who can bridge the gap between raw data and actionable insights, enabling data-driven decision-making for large-scale enterprise initiatives. A strong foundation in distributed computing, ETL frameworks, and advanced data modeling is crucial. The individual will work closely with data architects, analysts, and business teams to deliver scalable and efficient data Solutions. Roles & Responsibilities Data Engineering & Architecture:
Design, develop, and maintain high-performance data pipelines for structured and unstructured data using Azure Data Bricks and Apache
Build and manage scalable data ingestion frameworks for batch and real-time data processing.
Implement and optimize data lake architecture in Azure Data Lake to support analytics and reporting workloads.
Develop and optimize data models and queries in Azure Synapse Analytics to power BI and analytics use cases.
Cloud-Based Data Solutions:
Architect and implement modern data lakehouses combining the best of data lakes and data warehouses.
Leverage Azure services like Data Factory, Event Hub, and Blob Storage for end-to-end data workflows.
Ensure security, compliance, and governance of data through Azure Role-Based Access Control (RBAC) and Data Lake ACLs.
ETL/ELT Development:
Develop robust ETL/ELT pipelines using Azure Data Factory, Data Bricks notebooks, and PySpark.
Perform data transformations, cleansing, and validation to prepare datasets for analysis.
Manage and monitor job orchestration, ensuring pipelines run efficiently and
Performance Optimization:
Optimize Spark jobs and SQL queries for large-scale data processing. Implement partitioning, caching, and indexing strategies to improve performance and scalability of big data workloads.
Conduct capacity planning and recommend infrastructure optimizations for cost-effectiveness.
Collaboration & Stakeholder Management:
Work closely with business analysts, data scientists, and product teams to understand data requirements and deliver solutions.
Participate in cross-functional design sessions to translate business needs into technical specifications.
Provide thought leadership on best practices in data engineering and cloud
Documentation & Knowledge Sharing:
Create detailed documentation for data workflows, pipelines, and architectural decisions.
Mentor junior team members and promote a culture of learning and
Requirements:
Experience:6+ years of experience in data engineering, big data, or cloud-based data solutions.
Proven expertise with Azure Data Bricks, Azure Data Lake, and Azure Synapse Analytics.
Technical Skills:
Strong hands-on experience with Apache Spark and distributed data processing frameworks.
Advanced proficiency in Python and SQL for data manipulation and pipeline
Deep understanding of data modeling for OLAP, OLTP, and dimensional data models.
Experience with ETL/ELT tools like Azure Data Factory or
Familiarity with Azure DevOps for CI/CD pipelines and version
Big Data Ecosystem:
Familiarity with Delta Lake for managing big data in
Experience with streaming data frameworks like Kafka, Event Hub, or Spark
Cloud Expertise:
Strong understanding of Azure cloud architecture, including storage, compute, and networking.
Knowledge of Azure security best practices, such as encryption and key`,
    contact: { phone: "+91 9901561096", email: "bhagyashree.wyd@gmail.com" },
  },
  {
    ref: "WYD-018",
    title: "Senior Data Modeller",
    type: "Full-time",
    location: "Bengaluru, Chennai, Hyderabad, Pune",
    experience: "10+ years",
    description: `Overview:

A Data Modeller is responsible for designing, implementing, and managing data models that support the strategic and operational needs of an organization. This role involves translating business requirements into data structures, ensuring consistency, accuracy, and efficiency in data storage and retrieval processes.

Roles and Responsibilities:

Develop and maintain conceptual, logical, and physical data models.Collaborate with business analysts, data architects, and stakeholders to gather data requirements.
Translate business needs into efficient database
Optimize and refine existing data models to support analytics and
Ensure data models support data governance, quality, and security
Work closely with database developers and administrators on
Document data models, metadata, and data
Required Skills and Qualifications:

Bachelor’s or Master’s degree in Computer Science, Information Systems, Data Science, or related
Data Modeling Tools: ER/Studio, ERwin, SQL Developer Data Modeler, or
Database Technologies: Proficiency in SQL and familiarity with databases like Oracle, SQL
Server, MySQL, and
Data Warehousing: Experience with dimensional modeling, star and snowflake
ETL Processes: Knowledge of Extract, Transform, Load processes and
Cloud Platforms: Familiarity with cloud data services (e.g., AWS Redshift, Azure Synapse, and Google Big Query).
Metadata Management & Data Governance: Understanding of data cataloging and governance
Strong analytical and problem-solving
Excellent communication skills to work with business stakeholders and technical
Ability to document models clearly and explain complex data
10+ years in data modeling, data architecture, or related
Experience working in Agile or DevOps environments is often
Understanding of normalization/denormalization.
Experience with business intelligence and reporting
Familiarity with master data management (MDM)`,
    contact: { phone: "+91 9901561096", email: "bhagyashree.wyd@gmail.com" },
  },
  {
    ref: "WYD-019",
    title: "Security Engineer",
    type: "Full-time",
    location: "Chennai",
    description: `Overview:
The AI Security Engineer is responsible for safeguarding AI and machine learning systems from emerging cyber threats. This role involves designing, developing, and implementing security frameworks, tools, and protocols to ensure the integrity, confidentiality, and availability of AI models, data, and infrastructure. The engineer collaborates closely with software development, DevOps, and security teams to proactively identify and mitigate vulnerabilities in AI-driven environments. Roles & Responsibilities:
Collaborate with engineering, DevOps, and data teams to embed security and governance best practices throughout the development and deployment
Serve as the subject matter expert for security and governance, driving adoption of standards,reusable templates, and automation for compliance
Evaluate and implement emerging security and governance technologies to enhance protection, visibility, and operational efficiency.
Lead incident response, root cause analysis, and continuous improvement initiatives to strengthen security controls and governance processes.
Requirements:
Experience with cryptography, encryption, vulnerability assessment, and penetration testing.
Deep understanding of adversarial attacks, model poisoning, data manipulation, and privacy risks in AI.
Knowledge of application security concepts, including OWASP Top Ten for LLM applications.
Experience with security tools (e.g., Splunk, Nessus, Wireshark) and cloud security practices.
Education & Certifications
Bachelor’s degree in Computer Science, Information Security, or related
Relevant certifications such as CISSP, CEH, CISM, or CompTIA Security+ are a`,
    contact: { phone: "+91 9901561096", email: "bhagyashree.wyd@gmail.com" },
  },
  {
    ref: "WYD-020",
    title: "Business Analyst",
    type: "Full-time",
    location: "Bengaluru, Hyderabad, Chennai",
    experience: "5+ years",
    description: `Responsibilities:
Support the analytics needs,

Partner with product, engineering, and analytics teams to support end-to-end system and table design that meets analytics and reporting needs for new product
Collaborate with engineers on the development of new data tables, including reviewing and validating data schemas to ensure they are analytics-friendly and aligned with business requirements.
Conduct data validation and quality checks by comparing new tables against legacy systems and external data sources, identifying discrepancies or gaps.
Bridge the gap between data analysis and product development by ensuring that the right data is captured and structured to support ongoing feature tracking and insights generation.
Proactively collaborate with cross-functional stakeholders – including analysts, engineers,and product managers – to ensure alignment on data strategy, implementation plans, and delivery timelines.
Basic Requirements

A Master’s degree or Bachelor’s degree in Statistics, Mathematics, Data Science, Computer
Science, Information Systems, or a related field Minimum of 5 years of analytics work experience
Ability to define problems, collect data, establish facts, and draw valid conclusions to support data-driven decision-making.
Proficient in Data Analysis and SQL; knowledge of Google Cloud Platform is highly preferred.
Self-motivated, collaborative, and a fast learner with the ability to understand new processes and business functions quickly.
Exceptional communication skills, with a proactive approach to sharing ideas, collaborating across teams, and contributing beyond basic responsibilities.
Big Plus:

Analytical mindset for making sound decisions, defining problems or opportunities for improvement, analyzing options, and proposing
Thrive in a high-performance, project-oriented environment with the ability to pivot quickly and focus on critical tasks as needed.
Experience in cross-functional product development cycles
Strong understanding of data architecture, data modeling,and table design`,
    contact: { phone: "+91 9901561096", email: "bhagyashree.wyd@gmail.com" },
  },
  {
    ref: "WYD-021",
    title: "Solution Architect",
    type: "Full-time",
    location: "Bangalore",
    experience: "10–15 years",
    description: `Key Responsibilities:
Being a member of an autonomous, cross-location architecture team to work on defining best practices and standards.
You are responsible for making the impact of changes clear, and ensuring a sound design and approach.
You work side-by-side with other architects, product/engineering managers, technology leads and individual contributors of varying degrees of seniority, to collaborate for solutions, decision making and leading by example.
Anticipate and act upon issues that arise, providing alternative approaches and solutions.
Evaluate and create new tools and techniques to facilitate effective development and architectural practices.
Constantly updating technical knowledge and skills by attending (and sharing) in-house and/or external courses, reading manuals and testing new applications or solutions
Required Skills & Qualifications:
Bachelor or master degree in Computer Science, proven experience in successfully completing development of two or more complex applications or technologies, or equivalent applicable experience.
10–15 years of hands-on development
Strong experience as a Software Engineer programming in OO/FP languages but preferably in JVM: Java, Scala or Kotlin. Also designing or implementing API best practices as well as using design and architectural patterns. Self-motivated; works independently.
Strong communication skills, especially in representing their expertise to a wide range of people. Forges relationships with development personnel throughout the industry.
Expert in current software design practices, including modularity, event-driven architecture, functional programming, microservices, object-oriented design,optimization, extensibility, and Stays abreast of industry innovations and developments.`,
    contact: { phone: "+91 9632976073", email: "shreya@writeyourdestiny.in" },
  },
  {
    ref: "WYD-022",
    title: "Lead Software Development",
    type: "Full-time",
    location: "Bangalore",
    description: `Lead the design and delivery of complex software projects, guiding a development team through planning, execution, and release.`,
    contact: { phone: "+91 9632976073", email: "shreya@writeyourdestiny.in" },
  },
  {
    ref: "WYD-023",
    title: "Cloud SW Developer",
    type: "Full-time",
    location: "Bangalore",
    description: `JOB DESCRIPTION

The persona
 

A strong software engineer to develop (with team members) a bottom-up software solution on AWS/GCP cloud that leverages cloud native/opensource services.

Experience writing software from the ground up with minimal guidance and hence strong design skills. A passionate Software Engineer (love for writing high quality code, open source software).

Strong individual who can stand his ground on technical depth but collaborate with peers through their technical prowess and peer respect, but is not looking to manage other engineers.

Relevant experience:
Candidate has prior experience in developing software or SAAS on AWS/GCP platform from bottom up to scale (Cradle to grave) and hands on experience using AWS/GCP services.

Substantial experience in the field of Big Data Analytics. Data engineering,, Big data technologies (Spark / Flink / Kafka / Druid/Iceberg/Deltalake/Hudi).

Technology does not need to match exactly, but Big data, streaming analytics battle scars are valuable.

Technologies
Languages: Java, GO, deep familiarity with AWS/GCP cloud SW tools/services.
Hands-on / Prior experience on using technology like Flink, Kafka/Kinesis, Datalake, Spark, Deltalake
BS/MS degree in Computer Science, Engineering or a related subject
Expertise working in Java development, Springboot
Expertise working with Relational DB (mysql), Timeseries(Druid), Elastic , Dynamo
Datalake expertise or experience in Hudi, Iceberg, Delta Lake, Spark
Expertise working with real time streaming (one of Flink, Beam, Spark)
Microservices based development, K8s and AWS, GCP knowledge preferred
Quick learner of concepts &amp; ability to deliver designs/solutions for problems independently
Networking knowledge is a plus
Education &amp; Years of experience
BS in Engineering or equivalent experience in Cloud software development Companies:
SAAS companies, Cloud companies, or cloud applications within networking companies, Big data infrastructure companies.`,
    contact: { phone: "+91 9632976073", email: "shreya@writeyourdestiny.in" },
  },
  {
    ref: "WYD-024",
    title: "Senior BI Analyst",
    type: "Contract",
    location: "Bengaluru",
    experience: "5–8 years · 6-month extendable contract",
    description: `Job Overview-

Location: Bengaluru

Experience: 5-8 years

Key Responsibilities:

Data Analysis: Perform in-depth and diagnostic analyses to uncover trends and patterns, translating findings into strategic business
Demonstrated experience in PCA – Post-Campaign
Analysis, delivering insights that drive actionable
Power BI Dashboard Development: Build, enhance, and manage sophisticated Power BI dashboards and reports by integrating large-scale, diverse datasets from multiple sources.
Stakeholder Communication: Strong stakeholder engagement and data storytelling skills, with the ability to influence decisions through impactful PowerPoint
Data Governance: Establish and oversee data governance frameworks to uphold data security, accuracy, and regulatory compliance.
Technical Skills Requirements:
Power BI Expertise: 5+ years of experience in developing Power BI reports and dashboards, with proficiency in DAX and Power BI service administration.
Data Integration: Experience integrating data from various sources, including Databricks and Azure.
SQL and Coding Skills: Master-level skills in SQL and query languages, with bonus points for proficiency in R/Python.
Industry Experience: Must have proven experience in the Ecommerce, Consumer Packaged Goods (CPG), or Retail industries.
Must Have Skills:

Coding and Presentation: Proficient in coding and creating compelling presentations for senior stakeholders.
Analytical Mindset: Ability to analyze and synthesize insights from complex Communication: Excellent communication skills, capable of explaining technical jargon in plain English.
Global Collaboration: Experience working virtually with a global network of
Note: The duration is 6 Months extendable contractual role.`,
    contact: { phone: "+91 9901561096", email: "bhagyashree.wyd@gmail.com" },
  },
  {
    ref: "WYD-025",
    title: "Speech Therapist",
    type: "Full-time",
    location: "Jammu, Jammu and Kashmir",
    experience: "0–5 years · RCI Certificate required",
    description: `Job Description:

JOB ROLES AND RESPONSIBILITIES

Conducting assessments & speech therapy sessions (offline & online) for 5 years and above to facilitate the treatment of speech and language disorders, such as stammers, stutters, tourette’s and mutism.
Conducting parent awareness & training
Tracking patient progress, maintaining comprehensive treatment
Supervising/helping in the work of junior staff/colleagues involved in the same/similar cases.
Carrying out advanced research relating to the particular area of
Team player having a collaborative approach towards an interdisciplinary team, which includes doctors, teachers, physicians, psychologists, physical and occupational therapists, and rehabilitation counselors.
Experience:

0 – 5 years

RCI Certificate is a must`,
    contact: { phone: "+91 9353019779", email: "aishwarya.wyd@gmail.com" },
  },
  {
    ref: "WYD-026",
    title: "Executive Assistant",
    type: "Full-time",
    location: "Bangalore",
    description: `Key Responsibilities:
Calendar Management: Scheduling appointments, meetings, and travel
Communication Management: Handling phone calls, emails, and correspondence, often acting as a point of
Document Preparation: Creating and editing presentations, reports, and other
Meeting Coordination: Organizing meetings, including booking rooms, arranging catering, and preparing
Travel Arrangements: Booking flights, accommodations, and transportation for business trips.
Information Management: Maintaining files, databases, and other information
Confidentiality: Handling sensitive and confidential information with
Project Support: Assisting with special projects, research, and other tasks as
Liaison: Acting as a point of contact between the executive and internal/external
Expense Management: Assisting with expense reports, budget tracking, and other financial tasks.
Qualifications: Graduates`,
    contact: { phone: "+91 9632977673", email: "sabila.wyd@gmail.com" },
  },
  {
    ref: "WYD-027",
    title: "AI/LLM Data Scientist",
    type: "Full-time",
    location: "Bangalore — Hybrid",
    description: ` Job Description:

The Role:

As a Data Scientist at Nile, you will design and deploy AI systems that power autonomous networking—applying LLMs, agent-based AI, and reinforcement learning (RL) to turn raw data into insight and automated action.You’ll work across telemetry, observability, and service operations—collaborating with engineering and product teams to shape the intelligence layer behind Nile’s self- driving network.

What You’ll Do AI/Model Development

Architect, train, and fine-tune models for:

Anomaly detection, root cause analysis, and automated remediation
LLM-based reasoning agents that act on real-time network data Build production-grade ML pipelines for multimodal data—logs, metrics,traces, and topology.
Applied Research

Explore and adapt the latest in:

Multimodal LLMs, RL-based control systems, and temporal pattern recognition
Emerging architectures in perception, representation learning, and action agents
Cross-Functional Impact

Collaborate with network and cloud engineers to understand real-time operational pain points

Partner with product managers to map AI models directly to customer outcomes.

Thought Leadership:

Contribute to Nile’s AI strategy and thought leadership in applying LLMs to enterprise infrastructure

Stay at the forefront of academic and industry innovation

What You Bring

PhD or Master&#39;s in Computer Science, Machine Learning, or related field.

Strong foundation in deep learning, LLM architectures, and representation learning

Expert-level Python skills; experience with PyTorch or TensorFlow Experience with ML Ops: model lifecycle, validation, monitoring.

Bonus Points For:

Experience with Ray, Kubernetes, Kubeflow, or other model orchestration tools.

Knowledge of networking or observability domains (e.g., OpenTelemetry, SNMP,NetFlow)

Why Nile:

Real-World Impact: Shape AI systems that touch every packet and every user in the enterprise.

Tech Leadership: Work with industry pioneers from Cisco, Apple, Facebook,and Google

Next-Gen AI: Apply the latest in LLMs and RL to build the world’s first truly autonomous network.`,
    contact: { phone: "+91 9632951356", email: "rashmivangi@writeyourdestiny.in" },
  },
  {
    ref: "WYD-028",
    title: "Senior Product Manager",
    type: "Full-time",
    location: "Bangalore",
    experience: "7+ years (3–5 in product management)",
    description: `Job Description:

We’re seeking a Senior Product Manager who understands the breadth of enterprise networking—wired switching, SD-WAN, wireless (Wi-Fi), and day 2 operations. If you’ve grown from an engineering, QA, or TME role into product management—or are ready to—this

role offers the opportunity to lead, build, and simplify how networking is consumed at scale.

What You’ll Do

Define and drive product requirements across wired access switching, SD-WAN, wireless (Wi-Fi), and cloud-based day 2 operations.
Collaborate with engineering, QA, UX, and support to shape end-to-end capabilities—spanning system-level features to user-facing workflows.
Author detailed functional specs, FAQs, and field-facing collateral that capture customer intent and engineering clarity.
Participate in technical architecture reviews and work with teams on timelines, scalability, and secure implementation paths.
Partner with customer success and AI ops teams to detect, define, and improve workflows for anomaly detection, alerting, and automated remediation.
Track service performance post-launch and iterate quickly based on telemetry and customer feedback.
Who You Are

7+ years of experience in the tech industry, including 3–5 years in product management or related technical leadership roles.
Bachelor’s degree in Computer Science, Electrical Engineering, Networking, or a related field.
Hands-on experience with enterprise LAN/WAN environments—especially wired switching and SD-WAN.
Experience with Wi-Fi technologies and wireless feature sets (e.g., onboarding, roaming,telemetry) is required.
Background in QA, software engineering, or technical marketing engineering is a plus.
Familiarity with operational workflows, day 2 support, and data-driven decision-making.
CWNA/CCNA/CCNP or equivalent practical understanding of wired and Wi-Fi networking concepts.
Strong communicator with a systems mindset and a bias toward execution and Outcomes
What We’re Looking For

A well-rounded product manager with deep exposure to enterprise networking—who’s worked on wired switches, SD-WAN gateways, and Wi-Fi APs. You understand what breaks in

production, how network services are validated, and what operators need to keep networks healthy. You’re equally comfortable collaborating with engineers and simplifying decisions for customers.`,
    contact: { phone: "+91 9632976073", email: "shreya@writeyourdestiny.in" },
  },
  {
    ref: "WYD-029",
    title: "Technical Business Executive",
    type: "Full-time",
    location: "Hubli",
    description: `Key Responsibilities:

Visit customers across assigned
Identify and understand customer technical
Apply technical knowledge to enhance manufacturing
Demonstrate advanced tooling solutions to
Deliver effective product
Follow up with clients to secure purchase
Conduct Trials
Qualifications:

E. or M.Tech in Mechanical Engineering.
Strong passion for technical problem-solving and engineering
Willingness to travel
Excellent customer interaction and presentation
Ideal Candidate:

Loves core mechanical and technical
Eager to learn and work directly with advanced manufacturing technologies
Driven to support and build lasting customer
Desirable:

Fluency in English
Good communication skills at all levels
Flexibility and ability to adapt
Precision and attention to detail
Self-motivation, tenacity, spirit of initiative, and problem solving attitude
Capacity to work in team and under pressure
Results orientation and ability to set priorities`,
    contact: { phone: "+91 9632976073", email: "shreya@writeyourdestiny.in" },
  },
  {
    ref: "WYD-030",
    title: "Marketing Mix Modelling (MMM) Specialist",
    type: "Contract",
    location: "Bengaluru",
    experience: "3–6 years · 6-month extendable contract",
    description: `Job Overview-

We’re on the lookout for talented professionals with 3–6 years of experience in Marketing Mix

Modelling (MMM) to join us as a contractor. Location: Bengaluru

Experience: 3-6 years

Technical Skills Requirements:
3–6 years of hands-on experience in MMM, with a proven track record of delivering actionable insights.
Experience in building both short-term and long-term MMM
Strong Python skills – including data processing, modelling, and visualization. Solid understanding of statistical modelling techniques, model diagnostics, and interpretation of marketing impact.
Good knowledge of optimization techniques for media mix and budget Familiarity with media channels, campaign planning, and business KPIs.
Excellent analytical thinking and communication skills
Note: The duration is 6 Months extendable contractual role.`,
    contact: { phone: "+91 9901561096", email: "bhagyashree.wyd@gmail.com" },
  },
  {
    ref: "WYD-031",
    title: "Support Engineer — SDLC/DevOps",
    type: "Remote",
    location: "Remote",
    experience: "3–5 years",
    description: `Remote

Job Overview:

Basic Qualifications (Required skills)

Bachelor’s degree in Information Technology, Computer Information Systems, Computer Science, or a related field.

3 to 5 years of work experience on SDLC/Devops, LINUX system Good Linux Scripting/Development skills – JAVA, Python (any).
Good knowledge in technologies like Autosys/Job scheduling systems like CRON, NIS, Apache, Tomcat, any RDBMS like DB/ MS-SQL/Oracle/Sybase, Public/Private Cloud.
Good Knowledge of SDLC, CVS, SVN, GIT, Maven, GITLAB, Docker and
Knowledge of Devops dependencies – code review, builds, repositories, packages,
Knowledge of config management – chef, puppet, ansible and related languages . groovy, go, json, yml, ini (any)
Strong analytical and troubleshooting
Excellent soft skills &amp; Communication (Verbal and Written) . Must be willing to work in rotational shifts.
Ability to Multi task in high paced
Problem Solver and To-Do attitude, ability to face technical challenges and drive
Preferred Qualifications (Nice to have)
Having worked in environment supporting 10000+ servers a Multiple Application Support Experience a plus.
ITIL and ITSM experience a
Global clients facing Support team experience a
Able to work within a Global team, prior experience a plus . Prior experience with Financial Institution a plus.
MINIMUM EDUCATION AND EXPERIENCE REQUIREMENTS:

Bachelor’s degree in CSE or related field

3-5 years of relevant work experience on SDLC/Devops, LINUX system platforms.`,
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

/* ------------------- description → headings + bullets ------------------- */

type DescBlock = { heading: string | null; items: string[] }

const HEADING_RE =
  /(Roles\s*&\s*Responsibilities|Key Responsibilities|Responsibilities|Must[-\s]?Have Skills|Must Haves|Nice[-\s]?to[-\s]?Have Skills|Nice to haves|Required Skills|Additional Skills|Job Description|Job Overview|Overview|Required)\s*:?-?/gi

function normalizeHeading(raw: string): string {
  const clean = raw.trim().toLowerCase()
  if (clean.includes("roles") && clean.includes("responsibilities")) return "Roles & Responsibilities"
  if (clean.includes("key responsibilities")) return "Key Responsibilities"
  if (clean === "responsibilities") return "Responsibilities"
  if (clean.includes("must")) return "Must-Have Skills"
  if (clean.includes("nice")) return "Nice-to-Have Skills"
  if (clean.includes("required skills")) return "Required Skills"
  if (clean.includes("additional skills")) return "Additional Skills"
  if (clean.includes("job description")) return "Job Description"
  if (clean.includes("job overview")) return "Job Overview"
  if (clean.includes("overview")) return "Overview"
  if (clean === "required") return "Required"
  return raw.trim()
}

function parseDescription(text: string): DescBlock[] {
  const matches: { heading: string; start: number; end: number }[] = []
  const re = new RegExp(HEADING_RE)
  let m: RegExpExecArray | null
  while ((m = re.exec(text)) !== null) {
    matches.push({ heading: m[1], start: m.index, end: m.index + m[0].length })
  }

  const toItems = (chunk: string) =>
    chunk
      .split("\n")
      .map((l) => l.trim().replace(/^[-•]\s*/, ""))
      .filter(Boolean)

  if (matches.length === 0) {
    return [{ heading: null, items: toItems(text) }]
  }

  const blocks: DescBlock[] = []

  const introText = text.slice(0, matches[0].start).trim()
  if (introText) {
    blocks.push({ heading: null, items: toItems(introText) })
  }

  for (let i = 0; i < matches.length; i++) {
    const start = matches[i].end
    const end = i + 1 < matches.length ? matches[i + 1].start : text.length
    const items = toItems(text.slice(start, end))
    if (items.length > 0) {
      blocks.push({ heading: normalizeHeading(matches[i].heading), items })
    }
  }

  return blocks
}

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
            <div className="mt-6">
              <h4 className="font-body text-[11px] font-bold uppercase tracking-widest" style={{ color: accent }}>
                Job Description
              </h4>
              <div className="mt-4 space-y-5">
                {parseDescription(job.description).map((block, bi) =>
                  block.heading ? (
                    <div key={bi}>
                      <h5
                        className="font-body text-xs font-bold uppercase tracking-wide mb-2.5"
                        style={{ color: DARK }}
                      >
                        {block.heading}
                      </h5>
                      <ul className="space-y-1.5">
                        {block.items.map((item, ii) => (
                          <li
                            key={ii}
                            className="font-body text-sm leading-relaxed flex gap-2.5"
                            style={{ color: "#6b7a99" }}
                          >
                            <span
                              className="shrink-0 mt-[9px] w-1.5 h-1.5 rounded-full"
                              style={{ background: accent }}
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <p key={bi} className="font-body text-sm leading-relaxed" style={{ color: "#6b7a99" }}>
                      {block.items.join(" ")}
                    </p>
                  )
                )}
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
      Ready When You Are
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