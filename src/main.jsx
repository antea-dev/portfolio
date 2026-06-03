import React, { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  Code2,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Sparkles,
} from "lucide-react";
import "./styles.css";

const projects = [
  {
    number: "01",
    title: "Ironline Construction",
    category: "Business Website",
    description:
      "A responsive construction company website focused on clear services, strong visual direction, and a direct contact path.",
    tags: ["React", "Business Site", "Responsive", "Contact UI"],
    preview: "preview-ironline",
    image: "/assets/ironline-construction.png",
    href: "https://zesty-biscuit-a75d37.netlify.app",
  },
  {
    number: "02",
    title: "Sweet Frost",
    category: "E-commerce UI",
    description:
      "A pastel ice cream shop with responsive layouts, cart flow, animated navigation, product cards, and a polished checkout screen.",
    tags: ["React", "Vite", "Responsive UI", "Cart UX"],
    preview: "preview-sweet-frost",
    image: "/assets/sweet-frost-home.png",
    href: "https://icecreamshop-theta.vercel.app/",
  },
  {
    number: "03",
    title: "Lumora",
    category: "Finance Dashboard",
    description:
      "A dark financial dashboard with dense data cards, analytics sections, chart styling, and a polished SaaS interface.",
    tags: ["React", "Dashboard UI", "Charts", "Dark Theme"],
    preview: "preview-lumora",
    image: "/assets/lumora-dashboard.png",
    href: "https://lumora-coral.vercel.app",
  },
  {
    number: "04",
    title: "Kind Rituals",
    category: "Luxury Landing Page",
    description:
      "A calm beauty and skincare landing page with editorial typography, refined spacing, and premium responsive presentation.",
    tags: ["Landing Page", "Typography", "CSS", "Responsive"],
    preview: "preview-kind-rituals",
    image: "/assets/kind-rituals.png",
    href: "https://kind-rituals.vercel.app",
  },
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Responsive UI",
  "Animations",
  "Git",
  "Accessibility",
];

const experience = [
  {
    icon: GraduationCap,
    title: "Algebra Front-End Developer",
    text: "Completed the Front-End Developer program at Algebra, building a stronger base in modern web development.",
  },
  {
    icon: Code2,
    title: "Self-taught coding practice",
    text: "Learned a lot independently through projects, problem solving, and steady practice after starting from mathematics and physics.",
  },
  {
    icon: Sparkles,
    title: "Front-end focus",
    text: "Most drawn to responsive layouts, clean UI, animations, and the small interaction details that make websites feel alive.",
  },
];

const stackGroups = [
  {
    title: "Core",
    items: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
  },
  {
    title: "Frameworks",
    items: ["React", "Vite", "Component-based UI"],
  },
  {
    title: "Workflow",
    items: ["Git", "GitHub", "Figma basics", "Accessibility basics"],
  },
];

function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.18 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

function useCursor() {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const finePointer = window.matchMedia("(pointer: fine)").matches;

    if (!cursor || !finePointer) return undefined;

    const moveCursor = (event) => {
      cursor.classList.add("is-visible");
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`;
    };

    const setActive = () => cursor.classList.add("is-active");
    const unsetActive = () => cursor.classList.remove("is-active");
    const targets = document.querySelectorAll("a, button, .project");

    window.addEventListener("pointermove", moveCursor);
    targets.forEach((target) => {
      target.addEventListener("pointerenter", setActive);
      target.addEventListener("pointerleave", unsetActive);
    });

    return () => {
      window.removeEventListener("pointermove", moveCursor);
      targets.forEach((target) => {
        target.removeEventListener("pointerenter", setActive);
        target.removeEventListener("pointerleave", unsetActive);
      });
    };
  }, []);
}

function App() {
  useReveal();
  useCursor();

  return (
    <>
      <div className="cursor" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />
      <Header />
      <main id="top">
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Work />
        <Contact />
      </main>
    </>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Antea home">
        A.
      </a>
      <nav className="nav" aria-label="Primary navigation">
        <a href="#about">About</a>
        <a href="#experience">Stack</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function Hero() {
  const [hasPortrait, setHasPortrait] = useState(true);

  return (
    <section className="hero section">
      <div className="hero-copy">
        <p className="eyebrow reveal">Front-End Developer</p>
        <h1 className="reveal">
          I build interfaces where logic meets feeling.
        </h1>
        <p className="hero-text reveal">
          My path started with mathematics and physics, then coding pulled me
          in. I learned a lot on my own, trained through Algebra&apos;s
          Front-End Developer program, and found the part of software I love
          most: creating thoughtful, animated experiences for the web.
        </p>
        <div className="hero-actions reveal">
          <a className="button primary magnetic" href="#work">
            View projects
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <a className="button secondary magnetic" href="#contact">
            Get in touch
          </a>
        </div>
      </div>

      <div className="portrait-wrap reveal" aria-label="Portrait area">
        <div
          className={`portrait-card ${hasPortrait ? "has-portrait" : "is-empty"}`}
        >
          <img
            src="/assets/profile.png"
            alt="Portrait of Antea"
            onError={() => setHasPortrait(false)}
          />
          <div className="portrait-fallback" aria-hidden={hasPortrait}>
            <span>Add your photo</span>
            <small>/assets/profile.png</small>
          </div>
        </div>
        <div className="availability">
          <span className="pulse" />
          Available for front-end work
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  return (
    <section className="marquee" aria-label="Skills">
      <div className="marquee-track">
        {[...skills, ...skills].map((skill, index) => (
          <span key={`${skill}-${index}`}>{skill}</span>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about section" id="about">
      <div className="section-label reveal">About</div>
      <div className="about-grid">
        <h2 className="reveal">
          Mathematics taught me structure. Physics taught me curiosity.
          Front-end development gave both a place to move.
        </h2>
        <div className="about-copy reveal">
          <p>
            I enjoy the exactness of code and the human side of design: spacing,
            rhythm, responsiveness, micro-interactions, and the small details
            that make a site feel clear and alive.
          </p>
          <p>
            I completed the Front-End Developer program at Algebra and keep
            building projects to sharpen my craft. I am especially drawn to
            clean interfaces, playful transitions, and code that stays simple
            enough to keep improving.
          </p>
        </div>
      </div>

      <div className="stats reveal">
        <div>
          <strong>1+</strong>
          <span>of hands-on experience</span>
        </div>
        <div>
          <strong>Algebra</strong>
          <span>front-end graduate</span>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="section-top reveal">
        <div className="section-label">Experience & Stack</div>
        <p>
          A mix of formal front-end training, independent learning, and a
          practical toolset for building polished web interfaces.
        </p>
      </div>

      <div className="experience-grid">
        {experience.map(({ icon: Icon, title, text }) => (
          <article className="experience-card reveal" key={title}>
            <div className="card-icon">
              <Icon size={22} aria-hidden="true" />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>

      <div className="stack-panel reveal">
        {stackGroups.map((group) => (
          <div className="stack-group" key={group.title}>
            <h3>{group.title}</h3>
            <div className="stack-list">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Work() {
  return (
    <section className="work section" id="work">
      <div className="section-top reveal">
        <div className="section-label">Selected Work</div>
        <p>Projects created for demonstration purposes.</p>
      </div>

      <div className="project-list">
        {projects.map((project) => (
          <article className="project reveal" key={project.number}>
            <a
              className="project-link"
              href={project.href}
              aria-label={`Open ${project.title}`}
              target={project.href === "#" ? undefined : "_blank"}
              rel={project.href === "#" ? undefined : "noreferrer"}
            >
              <div className="project-meta">
                <span>{project.number}</span>
                <span>{project.category}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </a>
            <div
              className={`project-preview ${project.preview}`}
              aria-hidden="true"
            >
              {project.image ? (
                <img src={project.image} alt="" />
              ) : (
                <>
                  <span />
                  <span />
                  <span />
                </>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="contact-inner reveal">
        <p className="eyebrow">Let&apos;s build something</p>
        <h2>
          Available for front-end roles, collaborations, and portfolio-worthy
          ideas.
        </h2>
        <div className="contact-links">
          <a className="magnetic" href="mailto:anteatolic73@icloud.com">
            <Mail size={18} aria-hidden="true" />
            Email
          </a>
          <a
            className="magnetic"
            href="https://www.linkedin.com/in/antea-toli%C4%87-3903b03a2/"
            aria-label="LinkedIn profile"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={18} aria-hidden="true" />
            LinkedIn
          </a>
          <a
            className="magnetic"
            href="https://github.com/antea-dev"
            aria-label="GitHub profile"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={18} aria-hidden="true" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
