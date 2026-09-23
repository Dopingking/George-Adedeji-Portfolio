"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  Code2,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  MoveUpRight,
  X,
} from "lucide-react";
import { BrandIcon, type BrandIconName } from "./BrandIcon";

const skills = [
  ["react", "React"],
  ["next", "Next.js"],
  ["typescript", "TypeScript"],
  ["tailwind", "Tailwind CSS"],
  ["html", "HTML"],
  ["css", "CSS"],
  ["supabase", "Supabase"],
  ["github", "GitHub"],
  ["vercel", "Vercel"],
  ["whatsapp", "WhatsApp"],
] as const;

const marqueeItems = [
  ...skills,
  ["whatsapp", "WhatsApp"],
  ["websites", "Websites"],
  ["webapps", "Web Applications"],
  ["api", "API Integrations"],
  ["n8n", "AI Automation / n8n"],
] as const;

const projects = [
  {
    number: "01",
    title: "Klaud Koncept",
    type: "Business platform",
    description:
      "A business center, travel and gadgets hub experience with room for an admin dashboard and Supabase-powered content.",
    tags: ["Website", "Next.js", "Supabase"],
    className: "project-klaud",
    href: "https://klaud-koncept.vercel.app",
  },
  {
    number: "02",
    title: "HallHub",
    type: "Venue booking platform",
    description:
      "A Lagos-focused venue discovery and booking concept with customer, vendor and admin flows, availability and payment planning.",
    tags: ["Web application", "React", "TypeScript"],
    className: "project-hallhub",
    href: "#",
  },
  {
    number: "03",
    title: "CheckIn",
    type: "Attendance system",
    description:
      "A QR attendance system designed for schools and organizations with Supabase/Postgres-backed records and protected check-ins.",
    tags: ["Web application", "Supabase", "QR"],
    className: "project-checkin",
    href: "#",
  },
  {
    number: "04",
    title: "Studio X",
    type: "Photography portfolio",
    description:
      "A visual photography portfolio focused on image-led storytelling, smooth transitions and a more editorial interface.",
    tags: ["Website", "Next.js", "Framer Motion"],
    className: "project-studio",
    href: "#",
  },
];

function ArrowButton({ label = "View project" }: { label?: string }) {
  return (
    <span className="project-link">
      {label} <ArrowRight size={15} />
    </span>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <div className="site-noise" aria-hidden="true" />
      <div className="background-art" aria-hidden="true">
        <span className="art-line line-a" />
        <span className="art-line line-b" />
        <span className="art-line line-c" />
        <span className="art-orbit orbit-a" />
        <span className="art-orbit orbit-b" />
        <span className="art-corner" />
      </div>

      <header className="nav-shell">
        <a className="brand" href="#top" aria-label="George Adedeji home">
          <span className="ga-mark">GA</span>
        </a>

        <nav className={`desktop-nav ${menuOpen ? "open" : ""}`} aria-label="Primary navigation">
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>
            Hire Me <ArrowRight size={14} />
          </a>
        </nav>

        <button
          className="menu-button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      <section className="hero section" id="top">
        <div className="hero-copy reveal">
          <p className="eyebrow">SOFTWARE DEVELOPER</p>
          <h1>
            I build practical
            <span> websites &amp; web applications.</span>
          </h1>
          <p className="hero-text">
            Modern, responsive experiences built around what a business or product actually needs to get done.
          </p>

          <div className="learning-pill">
            <span className="n8n-icon"><BrandIcon name="n8n" size={18} /></span>
            <span>Currently learning AI automation</span>
          </div>

          <div className="hero-actions">
            <a className="button button-dark" href="#projects">
              View my work <ArrowRight size={16} />
            </a>
            <a className="button button-light" href="#contact">
              Hire me <ArrowDownRight size={16} />
            </a>
          </div>
        </div>

        <div className="hero-visual reveal reveal-delay">
          <div className="hero-grid">
            <div className="portrait-frame">
              <div className="portrait-placeholder">
                <span className="portrait-initials">GA</span>
                <span>Replace with your portrait</span>
              </div>
              <span className="frame-badge">GA</span>
            </div>
            <div className="floating-note note-one">Build<br />Solve<br />Improve</div>
            <div className="floating-note note-two">01 / 04</div>
            <div className="blue-shape" />
            <div className="orange-cut" />
          </div>
        </div>
      </section>

      <section className="marquee-wrap" aria-label="Technology and capability list">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map(([icon, label], index) => (
            <div className="marquee-item" key={`${label}-${index}`}>
              {icon === "websites" || icon === "webapps" || icon === "api" ? <Code2 size={16} aria-hidden="true" /> : <BrandIcon name={icon as BrandIconName} size={16} />}
              <span>{label}</span>
              <i />
            </div>
          ))}
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="section-index">01</div>
        <div className="about-copy reveal">
          <p className="eyebrow">ABOUT</p>
          <h2>I&apos;m George Adedeji, <span>a software developer.</span></h2>
          <p>
            I build modern websites and web applications that help businesses work better and reach more people.
            I care about clean interfaces, useful functionality and understanding the code behind what I ship.
          </p>
          <div className="about-tags">
            <span><Code2 size={15} /> Web Development</span>
            <span><Check size={15} /> Web Applications</span>
            <span><span className="n8n-dot"><BrandIcon name="n8n" size={12} /></span> Currently learning automation</span>
          </div>
        </div>

        <div className="about-art reveal reveal-delay" aria-hidden="true">
          <div className="code-card">
            <div className="window-bar"><b /><b /><b /></div>
            <div className="code-lines">
              <span>const solution =</span>
              <span>&nbsp;&nbsp;build({`{`}</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;problem: true,</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;usable: true,</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;tested: true</span>
              <span>&nbsp;&nbsp;{`}`});</span>
            </div>
          </div>
          <div className="mini-panel">
            <span>STATUS</span>
            <strong>Building</strong>
            <small>clean code / real solutions</small>
          </div>
          <div className="about-ga">GA</div>
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="section-heading reveal">
          <div>
            <div className="section-index">02</div>
            <p className="eyebrow">SELECTED WORK</p>
            <h2>Featured <span>projects.</span></h2>
            <p>A selection of websites and web applications built around real use cases.</p>
          </div>
          <a className="text-link" href="#contact">Have a project? <ArrowRight size={15} /></a>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <article className={`project-card ${project.className} reveal`} key={project.title} style={{ animationDelay: `${index * 80}ms` }}>
              <div className="project-visual">
                <div className="mock-browser">
                  <div className="browser-top"><span /><span /><span /><em>{project.title}</em></div>
                  <div className="mock-content">
                    <div className="mock-sidebar" />
                    <div className="mock-main">
                      <div className="mock-heading" />
                      <div className="mock-row"><span /><span /><span /></div>
                      <div className="mock-large" />
                      <div className="mock-cards"><i /><i /><i /></div>
                    </div>
                  </div>
                </div>
                <div className="project-stamp">{project.number}</div>
              </div>
              <div className="project-body">
                <div>
                  <p className="project-type">{project.type}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-row">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
                {project.href !== "#" ? (
                  <a className="circle-arrow" href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}>
                    <MoveUpRight size={17} />
                  </a>
                ) : (
                  <a className="circle-arrow" href="#contact" aria-label={`Ask about ${project.title}`}>
                    <MoveUpRight size={17} />
                  </a>
                )}
              </div>
              <a className="project-hit-area" href={project.href !== "#" ? project.href : "#contact"} aria-label={`View ${project.title}`} />
            </article>
          ))}
        </div>
        <div className="projects-more">
          <a className="button button-light" href="#contact">See all projects <ArrowRight size={16} /></a>
        </div>
      </section>

      <section className="section automation-section">
        <div className="automation-card reveal">
          <div className="automation-copy">
            <div className="section-index">03</div>
            <p className="eyebrow">CURRENTLY LEARNING</p>
            <h2>AI <span>Automation</span></h2>
            <p>
              I&apos;m learning how n8n and automation workflows can connect tools, APIs and business processes into useful systems.
            </p>
            <a className="button button-light" href="#contact">Talk about an idea <ArrowRight size={16} /></a>
          </div>
          <div className="n8n-display" aria-label="n8n automation learning visual">
            <div className="n8n-logo">n8n</div>
            <div className="workflow">
              <span>Trigger</span><b>→</b><span>Process</span><b>→</b><span>Action</span>
            </div>
            <div className="workflow-board">
              <div className="node node-a">01</div>
              <div className="connector c1" />
              <div className="node node-b">02</div>
              <div className="connector c2" />
              <div className="node node-c">03</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="contact-intro reveal">
          <div className="section-index">04</div>
          <p className="eyebrow">CONTACT</p>
          <h2>Let&apos;s build <span>something.</span></h2>
          <p>Have a website, web application or software idea in mind? Let&apos;s talk.</p>
          <a className="button button-dark" href="mailto:georgeadedeji.dev@gmail.com">Get in touch <ArrowRight size={16} /></a>
        </div>

        <form className="contact-form reveal reveal-delay" action="https://formsubmit.co/georgeadedeji.dev@gmail.com" method="POST">
          <input type="hidden" name="_subject" value="New portfolio enquiry" />
          <input type="hidden" name="_captcha" value="false" />
          <div className="form-row">
            <label>Name<input name="name" placeholder="Your name" required /></label>
            <label>Email<input name="email" type="email" placeholder="you@example.com" required /></label>
          </div>
          <label>Project type
            <select name="projectType" defaultValue="">
              <option value="" disabled>Select a project type</option>
              <option>Website</option>
              <option>Web application</option>
              <option>API / integration</option>
              <option>Automation</option>
              <option>Other</option>
            </select>
          </label>
          <label>Message<textarea name="message" placeholder="Tell me about your project..." required /></label>
          <button className="button button-dark" type="submit">Send message <ArrowRight size={16} /></button>
          <p className="form-note">This form opens a secure FormSubmit flow; you can swap it for your preferred backend later.</p>
        </form>

        <aside className="direct-links reveal">
          <span>OR REACH ME DIRECTLY</span>
          <a href="mailto:georgeadedeji.dev@gmail.com"><Mail size={17} /> Email</a>
          <a href="https://github.com/Dopingking" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
          <a href="https://www.linkedin.com/in/george-adedeji/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
          <a href="https://x.com/Dopingking" target="_blank" rel="noreferrer"><X size={17} /> X / Twitter</a>
          <a href="https://wa.me/2348142456709" target="_blank" rel="noreferrer"><BrandIcon name="whatsapp" size={17} /> WhatsApp</a>
        </aside>
      </section>

      <footer className="footer">
        <div className="footer-brand">
          <span className="ga-mark">GA</span>
          <span>George Adedeji <small>Software Developer</small></span>
        </div>
        <div className="footer-nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <p>© {new Date().getFullYear()} George Adedeji</p>
      </footer>
    </main>
  );
}
