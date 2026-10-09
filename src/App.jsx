import React, { useEffect } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Menu,
  X,
  Sparkles,
  AudioLines,
  BrainCircuit,
  Layers3,
  Database,
  Repeat2,
} from "lucide-react";

const profile = {
  name: "Shubham Kumar",
  github: "https://github.com/Shubham-4427",
  linkedin: "https://www.linkedin.com/in/shubham-kumar-207458327/",
  email: "YOUR_EMAIL@example.com", // Replace with your professional email.
};

const projects = [
  {
    number: "01",
    category: "AI · Creative tools",
    title: "AI Music Composer",
    description:
      "A generative music experience that turns text prompts into musical ideas, with a Streamlit interface and a cloud-native deployment workflow.",
    stack: ["LLMs", "Python", "GKE", "CI/CD"],
    icon: AudioLines,
    accent: "violet",
    href: "https://github.com/Shubham-4427/AI-Music-Composer",
    linkLabel: "View project",
  },
  {
    number: "02",
    category: "RAG · Developer tools",
    title: "Website & YouTube Summarizer",
    description:
      "A retrieval-augmented app that summarizes website and YouTube content, helping users move from long-form information to useful answers.",
    stack: ["LangChain", "Groq", "RAG", "Streamlit"],
    icon: BrainCircuit,
    accent: "blue",
    href: "https://github.com/Shubham-4427/Langchain-Summarize-text-from-YT-or-Website",
    linkLabel: "Explore project",
  },
  {
    number: "03",
    category: "Applied ML · Platform",
    title: "DataScienceX",
    description:
      "An adaptive ML intelligence platform concept focused on bringing practical data-science workflows and model-driven insights into one experience.",
    stack: ["Python", "Machine Learning", "Data workflows"],
    icon: Layers3,
    accent: "lime",
    href: "https://github.com/Shubham-4427/DataScienceX",
    linkLabel: "Explore project",
  },
  {
    number: "04",
    category: "NLP · Developer tools",
    title: "SQL Chatbot",
    description:
      "A conversational interface for exploring structured data with natural-language questions and SQL-oriented workflows.",
    stack: ["Python", "SQL", "LLMs"],
    icon: Database,
    accent: "orange",
    href: "https://github.com/Shubham-4427/SQL-Chatbot",
    linkLabel: "Explore project",
  },
  {
    number: "05",
    category: "Deep learning",
    title: "Simple RNN",
    description:
      "A recurrent neural network project exploring sequence learning and neural-network fundamentals in Python.",
    stack: ["Python", "RNN", "Deep Learning"],
    icon: Repeat2,
    accent: "violet",
    href: "https://github.com/Shubham-4427/Simple-RNN",
    linkLabel: "Explore project",
  },
];

const skills = [
  "Python",
  "Machine Learning",
  "PyTorch",
  "LLMs & RAG",
  "FastAPI",
  "SQL",
  "Docker",
  "Kubernetes",
  "Cloud & CI/CD",
  "System Design",
  "UI/UX Design",
  "Video Editing",
];

function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const close = () => setMenuOpen(false);

  return (
    <header className="topbar">
      <a className="wordmark" href="#top" onClick={close}>
        shubham<span>.</span>
      </a>
      <button
        className="mobile-menu"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X size={21} /> : <Menu size={21} />}
      </button>
      <nav className={menuOpen ? "nav-links open" : "nav-links"}>
        <a href="#work" onClick={close}>Work</a>
        <a href="#about" onClick={close}>About</a>
        <a href={profile.github} target="_blank" rel="noreferrer" onClick={close}>
          GitHub <ArrowUpRight size={13} />
        </a>
        <a className="nav-button" href="#contact" onClick={close}>Let's talk</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-glow" />
      <div className="hero-orbit" />
      <p className="eyebrow">
        <span className="status-dot" /> Machine Learning Engineer · Builder · Creator
      </p>
      <h1>
        Making intelligence
        <br />
        <span className="gradient-text">feel effortless.</span>
      </h1>
      <p className="hero-copy">
        I build thoughtful AI products, production-minded ML systems, and digital
        experiences that turn complex problems into simple things.
      </p>
      <div className="button-row">
        <a className="button button-primary" href="#work">
          Explore my work <ArrowDownRight size={16} />
        </a>
        <a
          className="button button-quiet"
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin size={16} /> Connect on LinkedIn <ArrowUpRight size={14} />
        </a>
      </div>
      <div className="scroll-hint">Scroll to explore <span /></div>
    </section>
  );
}

function RecoverIQ() {
  return (
    <article className="featured-card reveal-on-scroll">
      <div className="feature-copy">
        <p className="eyebrow">Featured project · FinTech AI</p>
        <h3>RecoverIQ<span className="blue-dot">.</span></h3>
        <p>
          An AI-powered financial recovery experience designed to make financial
          decisions clearer, more explainable, and easier to act on.
        </p>
        <div className="chips">
          <span>Machine Learning</span>
          <span>Backend APIs</span>
          <span>Decision systems</span>
        </div>
        <a
          className="text-link"
          href="https://github.com/Shubham-4427/RECOVERIQ"
          target="_blank"
          rel="noreferrer"
        >
          Explore project <ArrowRight size={16} />
        </a>
      </div>
      <div className="dashboard" aria-label="Decorative financial analytics dashboard">
        <div className="dashboard-head">
          <span><i /> RecoverIQ / Overview</span>
          <span>•••</span>
        </div>
        <div className="stats">
          <div><small>Risk signal</small><strong>Low</strong></div>
          <div><small>Insights</small><strong>12</strong></div>
          <div><small>Confidence</small><strong>94%</strong></div>
        </div>
        <div className="chart">
          <svg viewBox="0 0 400 150" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" stopColor="#9e8cff" stopOpacity=".48" />
                <stop offset="1" stopColor="#9e8cff" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 120 C35 115 45 85 80 98 S130 120 160 70 S220 90 245 58 S300 76 325 38 S365 52 400 18 L400 150 L0 150Z"
              fill="url(#chartFill)"
            />
            <path
              d="M0 120 C35 115 45 85 80 98 S130 120 160 70 S220 90 245 58 S300 76 325 38 S365 52 400 18"
              fill="none"
              stroke="#a99aff"
              strokeWidth="3"
            />
          </svg>
        </div>
      </div>
    </article>
  );
}

function ProjectCard({ project }) {
  const Icon = project.icon;

  return (
    <article className={`project-card ${project.accent} reveal-on-scroll`}>
      <div className="project-topline">
        <span>{project.category}</span>
        <span>{project.number}</span>
      </div>
      <div className="project-art" aria-hidden="true"><Icon strokeWidth={1.15} /></div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="chips">
        {project.stack.map((item) => <span key={item}>{item}</span>)}
      </div>
      <a className="text-link" href={project.href} target="_blank" rel="noreferrer">
        {project.linkLabel} <ArrowUpRight size={15} />
      </a>
    </article>
  );
}

function Work() {
  return (
    <section className="section" id="work">
      <div className="section-heading reveal-on-scroll">
        <div>
          <p className="eyebrow">Selected work / 01—06</p>
          <h2>Ideas into<br />experiences.</h2>
        </div>
        <p>
          A few projects where machine learning meets real-world product thinking,
          clean engineering, and creative curiosity.
        </p>
      </div>
      <RecoverIQ />
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.number} project={project} />
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="section-heading reveal-on-scroll">
        <div>
          <p className="eyebrow">A little about me</p>
          <h2>Engineer by logic.<br />Creator by nature.</h2>
        </div>
      </div>
      <div className="about-grid">
        <p className="about-statement reveal-on-scroll">
          I care about the space between a working model and a product people
          actually want to use.
        </p>
        <div className="about-body reveal-on-scroll">
          <p>
            I'm Shubham, a computer science engineer focused on building
            production-oriented AI applications—not just training models. I enjoy
            connecting ML fundamentals with backend systems, deployment, and
            product experience.
          </p>
          <p>
            My creative background in video editing, graphic design, and UI/UX
            shapes how I approach software: the details matter, and clarity is a
            feature.
          </p>
          <div className="skill-list">
            {skills.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </div>
      </div>
      <div className="principles reveal-on-scroll">
        <div><strong>AI-first</strong><span>Product mindset</span></div>
        <div><strong>End-to-end</strong><span>From prototype to deployment</span></div>
        <div><strong>Always</strong><span>Learning by building</span></div>
      </div>
    </section>
  );
}

function Contact() {
  const emailIsPlaceholder = profile.email.includes("example.com");

  return (
    <section className="contact reveal-on-scroll" id="contact">
      <Sparkles className="contact-sparkle" size={24} />
      <p className="eyebrow">Have a good problem?</p>
      <h2>Let's build<br /><span className="gradient-text">what's next.</span></h2>
      <p className="contact-copy">
        Open to conversations about ML engineering, AI products, backend systems,
        and interesting collaborations.
      </p>
      <div className="button-row">
        <a className="button button-primary" href={`mailto:${profile.email}`}>
          Send me an email <ArrowUpRight size={15} />
        </a>
        <a className="button button-quiet" href={profile.linkedin} target="_blank" rel="noreferrer">
          <Linkedin size={16} /> LinkedIn
        </a>
        <a className="button button-quiet" href={profile.github} target="_blank" rel="noreferrer">
          <Github size={16} /> GitHub
        </a>
      </div>
      {emailIsPlaceholder && (
        <p className="email-note">

        </p>
      )}
    </section>
  );
}

function App() {
  useEffect(() => {
    document.title = `${profile.name} — ML Engineer`;
    const nodes = document.querySelectorAll(".reveal-on-scroll");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-shell">
      <Header />
      <main>
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>
      <footer className="footer">
        <span>© {new Date().getFullYear()} {profile.name}. Built with curiosity.</span>
        <div>
          <a href="#top">Back to top ↑</a>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={12} /></a>
        </div>
      </footer>
    </div>
  );
}

export default App;
