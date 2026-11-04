import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faDownload,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";

// Files in public/ live under the site's base path (/Portfolio/ on GitHub Pages)
const base = import.meta.env.BASE_URL;

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">
            <span className="yellow-text">Learning design</span>
            <span className="separator">/</span>
            <span className="teal-text">Platforms</span>
            <span className="separator">/</span>
            <span className="purple-text">Code</span>
          </p>

          <h1>
            I design and build
            <br />
            <span className="teal-text">better ways to</span>
            <br />
            learn online.
          </h1>

          <p className="hero-intro">
            I'm Ashley Roots. I lead digital learning in UK further and higher
            education, working where pedagogy meets platforms: designing
            learning, shaping how a VLE is organised, and building the tools
            that make it all work.
          </p>

          <p className="hero-intro hero-intro--aside">
            Occasionally, I also campaign against uploading yet another slide
            deck.
          </p>
        </div>

        <div className="hero-image">
          <div className="dot-grid" aria-hidden="true"></div>
          <div className="dot-grid dot-grid--top" aria-hidden="true"></div>

          <img
            className="portrait"
            src={`${base}images/ashley-roots-portrait.png`}
            alt="Ashley Roots"
          />
        </div>

        <div className="hero-actions">
          <a href="#work" className="button button--primary">
            View my work <FontAwesomeIcon icon={faArrowRight} />
          </a>
          <a
            href={`${base}Ashley-Roots-CV.pdf`}
            className="button button--secondary"
            download
          >
            Download CV <FontAwesomeIcon icon={faDownload} />
          </a>
          <a
            href="mailto:ashleyaroots@gmail.com"
            className="button button--secondary"
          >
            Email me <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </section>

      <section id="work" className="work">
        <div className="section-heading">
          <span>01</span>
          <span className="section-heading-line"></span>
          <h2>Selected work</h2>
          <Link to="/work" className="view-all">
            View all work <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>

        <ProjectCard
          featured
          number="01"
          category="UX / FRONT-END / CANVAS"
          title="Redesigning the VLE experience"
          description="Canvas pathway hubs that bring core modules, skills units and this week's content into one place: one for each of seven music pathways, and a shared hub where five smaller games pathways collaborate."
          image={`${base}images/projects/vle-redesign.png`}
          link="/work/vle-redesign"
        />

        <div className="project-grid">
          <ProjectCard
            compact
            accent="yellow"
            badge="Interactive"
            number="02"
            category="LEARNING DESIGN / INTERACTION"
            title="Online learning isn't just slides"
            description="Interactive learning built around doing, not reading, like an explorable timeline of games consoles, designed to be accessible and purposeful rather than pages to click through."
            image={`${base}images/projects/online-learning.png`}
            link="/work/online-learning"
          />

          <ProjectCard
            compact
            accent="purple"
            badge="Code"
            number="03"
            category="SYSTEMS / AUTOMATION / TOOLS"
            title="Solving real problems with code"
            description="JavaScript, API integrations and Python automation that fill the gap between what the VLE does out of the box and what staff and students actually need."
            image={`${base}images/projects/systems.png`}
            link="/work/systems"
          />
        </div>
      </section>

      <section className="contact-cta">
        <h2 className="contact-heading">
          <span className="contact-line" aria-hidden="true"></span>
          <span>Let's work together</span>
        </h2>

        <div className="contact-content">
          <p>
            Working on something in digital learning?
            <br />
            I'm always happy to talk it through.
          </p>

          <a
            href="mailto:ashleyaroots@gmail.com"
            className="button button--secondary contact-button"
          >
            <FontAwesomeIcon icon={faEnvelope} />
            Get in touch
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>
      </section>
    </main>
  );
}

export default Home;
