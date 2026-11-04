import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const base = import.meta.env.BASE_URL;

function About() {
  return (
    <main>
      {/* Intro */}
      <section className="page-intro page-intro--with-image">
        <div>
          <p className="eyebrow">
            <span className="teal-text">About</span>
          </p>

          <h1>A teacher who learned to build things.</h1>

          <p className="page-lead">
            I'm Ashley Roots. I lead digital education at ACM, but I started out
            as a musician and a teacher. The way I approach my work hasn't
            changed though: what does the student need, what's getting in their
            way, and how can I support and implement a creative solution?
          </p>
        </div>

        <div className="page-portrait accent--purple">
          <img
            src={`${base}images/ashley-guitar-portrait.webp`}
            alt="Illustrated portrait of Ashley Roots playing an archtop guitar"
            width="900"
            height="985"
          />
        </div>
      </section>

      {/* Story */}
      <section className="page-section about-story">
        <div className="about-story-aside">
          <div className="section-heading">
            <span>01</span>
            <span className="section-heading-line" aria-hidden="true"></span>
            <h2>How I got here</h2>
          </div>

          <ol className="timeline">
            <li>
              <span className="timeline-year">2008</span>
              BA Music Management and Studio Production
            </li>
            <li>
              <span className="timeline-year">2012</span>
              PGCE, University of Derby
            </li>
            <li>
              <span className="timeline-year">2013</span>
              Teaching music at Confetti, Nottingham
            </li>
            <li>
              <span className="timeline-year">2019</span>
              Learning, Teaching, and Assessment Coach
            </li>
            <li>
              <span className="timeline-year">2020</span>
              Covid: learning technologist overnight. MA Education
            </li>
            <li>
              <span className="timeline-year">2022</span>
              Lead Learning Developer, ACM
            </li>
            <li>
              <span className="timeline-year">2026</span>
              Head of Academic Operations and Digital Teams, ACM
            </li>
          </ol>
        </div>

        <div className="prose">
          <p>
            I got into education because I love learning, and I love helping
            other people realise their potential. There's nothing quite like the
            moment someone realises they can do the thing they thought was
            beyond them.
          </p>

          <p>
            Music came first, though. My dad has a wonderful vinyl collection
            (my brother's and my inheritance, as we call it), and my grandad was
            a jazz guitarist. I picked up guitar, then drums, then bass, and
            never looked back. After a degree in Music Management and Studio
            Production, I ran a small production company and label for a while,
            but still didn't know what I wanted to do with my career. So I went
            back to what I'd wanted to do as a kid: teach.
          </p>

          <p>
            Further education let me bring music, production and technology into
            the classroom, and I taught across every music course and level for
            six years. I moved into quality after enjoying mentoring trainee
            teachers, and I wanted to help tutors develop their practice and
            hopefully make a challenging vocation a little easier; and that's
            where digital education crept in. What started as an informal
            addition to my role, my technical skills were used in extra
            projects, from collecting and analysing data for a partner college
            in Saudi Arabia to specing and building a video/podcast suite, to
            standardising Canvas usage just as Covid arrived.
          </p>

          <p>
            When the college closed during the pandemic, I became its learning
            technologist almost overnight. I designed virtual open days and
            gathered taster tasks from every department for prospective
            students. I collaborated on research and recommended tools, helped
            set up Teams and Class Notebooks, while supporting teachers as they
            experimented with online teaching and shared what worked.
          </p>

          <p>
            Then a role came up at ACM that brought music together with the
            technical skills I'd been building. It's been a great fit. I work
            with talented, enthusiastic people in a creative institution, and I
            get to experiment and build, even if the workloads and deadlines are
            as real as anywhere else.
          </p>
        </div>
      </section>

      {/* Principles */}
      <section className="page-section">
        <div className="section-heading">
          <span>02</span>
          <span className="section-heading-line" aria-hidden="true"></span>
          <h2>How I work</h2>
        </div>

        <ul className="principles">
          <li className="principle accent--yellow">
            <span className="principle-number">01</span>
            <h3>Students come first</h3>
            <p>
              Their learning, their experience, their future. Every decision
              about a platform, a page or a process starts there.
            </p>
          </li>

          <li className="principle accent--teal">
            <span className="principle-number">02</span>
            <h3>Iteration isn't failure</h3>
            <p>
              Nobody gets everything right first time. Write it down, find out
              why, and make it better next time. It's all learning.
            </p>
          </li>

          <li className="principle accent--purple">
            <span className="principle-number">03</span>
            <h3>A jack of all trades, on purpose</h3>
            <p>
              Musician, teacher, quality coach, developer. The full saying ends
              "but oftentimes better than a master of one", and I find the
              overlaps are where the most useful work happens.
            </p>
          </li>
        </ul>
      </section>

      {/* Outside work */}
      <section className="page-section">
        <div className="section-heading">
          <span>03</span>
          <span className="section-heading-line" aria-hidden="true"></span>
          <h2>Outside work</h2>
        </div>

        <ul className="hobbies">
          <li>
            <h3>Tabletop</h3>
            <p>
              I play Dungeons &amp; Dragons and other tabletop RPGs, where I'm
              the table's self-nominated lore-keeper and Discord admin. Yes,
              there's a shared spreadsheet for the Bag of Holding.
            </p>
          </li>
          <li>
            <h3>Miniatures and Cards</h3>
            <p>
              I 3D print and paint miniatures mostly to relax, including a T'au
              army which I'll never finish. I've recently started playing Magic:
              The Gathering, and find deck building to be the best kind of
              puzzle.
            </p>
          </li>
          <li>
            <h3>Video games</h3>
            <p>
              Turn-based and story-driven are my most played. Clair Obscur:
              Expedition 33 is a masterpiece, Final Fantasy X is still a
              favourite, and I'm currently playing Final Fantasy Resonance.
            </p>
          </li>
          <li>
            <h3>Music</h3>
            <p>
              These days my playing is mostly reserved for private renditions of
              the KPop Demon Hunters soundtrack for my oldest son. Not well, I
              might add, but he like it.
            </p>
          </li>
          <li>
            <h3>Records</h3>
            <p>
              In a fire at my dad's, I'd skip The Beatles, as there are enough
              for two of everything, and run for the punk, the prog, the grunge
              and the signed Led Zeppelin album. Of course, I would also get my
              dad.
            </p>
          </li>
          <li>
            <h3>Side projects</h3>
            <p>
              An Airtable and barcode-scanner inventory for the garage freezer,
              and ScoreBlock, a music notation plugin I'm building so teachers
              can write an exercise that students can hear and interact with.
            </p>
          </li>
        </ul>
      </section>

      {/* Now */}
      <section className="page-section about-now">
        <div className="section-heading">
          <span>04</span>
          <span className="section-heading-line" aria-hidden="true"></span>
          <h2>What I'm doing now</h2>
        </div>

        <div className="about-now-grid">
          <div className="prose">
            <p>
              I lead a remote team of five across Digital Education, Library
              Services and Timetabling, supporting the whole of ACM across its
              campuses in Guildford, London and Birmingham. Recent work includes
              a shared Skills Library of over 100 modules, open to students on
              any pathway and shortlisted for the IHE Awards 2026, and Canvas
              hubs for every undergraduate music and games pathway. We also
              support Zoom, Panopto, and award digital credentials through
              Parchment, and we will soon be migrating to CELCAT AI for our
              timetable, registers and booking services.
            </p>

            <p className="about-credentials">
              MA Education <span aria-hidden="true">·</span> PGCE{" "}
              <span aria-hidden="true">·</span> FHEA application in progress
            </p>

            <div className="about-actions">
              <a
                href={`${base}Ashley-Roots-CV.pdf`}
                className="button button--primary"
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
          </div>

          <dl className="stats">
            <div className="stat accent--yellow">
              <dt>Modules with blended learning content I've built</dt>
              <dd>150+</dd>
            </div>
            <div className="stat accent--teal">
              <dt>
                Undergraduate pathways, plus FE, foundation and Masters
                provision
              </dt>
              <dd>12</dd>
            </div>
            <div className="stat accent--purple">
              <dt>Campuses supported: Guildford, London and Birmingham</dt>
              <dd>3</dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}

export default About;
