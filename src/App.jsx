import { useMemo, useState } from 'react'
import './App.css'

const projects = [
  { name: 'Nargis Alizai Portfolio (React)', type: 'Portfolio', live: 'https://nargis-react-protfolio-7u3y.vercel.app/' },
  { name: 'Kabul Community Support', type: 'Information & Services Website', live: '#' },
  { name: 'Study Planner Dashboard', type: 'Productivity Website', live: '#' },
  { name: 'Netlinks Website', type: 'HTML & CSS', live: 'https://gilded-shortbread-79d9a4.netlify.app/' },
  { name: 'Netlinks Website', type: 'React', live: 'https://netlinks-react-two.vercel.app/#' },
  { name: 'Samira Jabari Portfolio', type: 'Portfolio', live: 'https://samira-protfolio.vercel.app/' },
  { name: 'Meena Shenwari Portfolio', type: 'Portfolio', live: 'https://meena-protfolio.vercel.app/' },
  { name: 'Zoho Website', type: 'Website', live: 'https://zohco-one.vercel.app/' },
  { name: 'Dr. Khalid Portfolio', type: 'Portfolio', live: 'https://fanciful-cuchufli-5a6da0.netlify.app/' },
  { name: 'Elearna Multipage', type: 'React & Tailwind', live: 'https://magnificent-puffpuff-3b020a.netlify.app/' },
  { name: 'Zarina Online Clothing', type: 'E-Commerce', live: 'https://verdant-madeleine-0f8346.netlify.app/' },
  { name: 'Input Work', type: 'Business Website', live: 'https://input-work-sigma.vercel.app/' },
  { name: 'Funplay Game', type: 'Game Website', live: 'https://funplay-three.vercel.app/' },
  { name: 'Our Team', type: 'Business Website', live: 'https://our-team-p6cg.vercel.app/' },
  { name: 'Section', type: 'Business Website', live: 'https://setion-project.vercel.app/' },
  { name: 'Second Bootcamp', type: 'Bootcamp Website', live: 'https://cheerful-melomakarona-b0c248.netlify.app/' },
  { name: 'First Bootcamp', type: 'Bootcamp Website', live: 'https://beautiful-gnome-162cbc.netlify.app' },
  { name: 'Nargis Alizai Portfolio', type: 'Portfolio', live: 'https://nargis-three.vercel.app/' },
]

const showcaseCards = [
  {
    badge: 'Portfolio',
    title: 'Nargis Alizai Portfolio',
    text: 'A complete personal portfolio website designed to showcase my story, skills, education, and contact details with a clean professional presentation.',
  },
  {
    badge: 'Support',
    title: 'Kabul Community Support',
    text: 'A responsive website created to help people access community information, support resources, and useful service listings in one place.',
  },
  {
    badge: 'Study',
    title: 'Study Planner Dashboard',
    text: 'A student-focused web dashboard for planning tasks, managing study routines, and tracking progress in a simple and organized layout.',
  },
]

function App() {
  const [search, setSearch] = useState('')

  const filteredProjects = useMemo(() => {
    const query = search.trim().toLowerCase()
    if (!query) return projects

    return projects.filter((project) => {
      return (
        project.name.toLowerCase().includes(query) ||
        project.type.toLowerCase().includes(query)
      )
    })
  }, [search])

  return (
    <div className="app-shell">
      <header>
        <div className="container nav">
          <div className="logo">
            NARGIS<span>ALIZAI</span>
          </div>
          <nav className="nav-links" aria-label="Main Navigation">
            <a href="#top">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-inner">
            <div className="subtitle">Frontend Developer</div>
            <h1>
              Hi, I&apos;m Nargis Alizai — a <span>front-end developer</span>
            </h1>
            <p>
              I design and develop clean, responsive web interfaces with a strong focus on
              smooth interactions, accessibility, and professional user experiences.
            </p>

            <div className="cta-row">
              <a href="#projects" className="primary-btn">
                Let&apos;s work together
              </a>
              <a href="#about" className="secondary-btn">
                More about me
              </a>
            </div>

            <div className="search-box">
              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search for a project..."
              />
            </div>
          </div>
        </section>

        <section className="about" id="about">
          <div className="container about-grid">
            <div className="about-content">
              <span className="section-kicker">About Me</span>
              <h2>Passionate about creating beautiful and functional websites.</h2>
              <p>
                I am a web developer focused on building elegant, user-friendly interfaces
                using HTML, CSS, JavaScript, and modern frontend tools. I enjoy transforming
                ideas into responsive digital products that make an impact.
              </p>
              <div className="skill-list">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>React</span>
                <span>Tailwind</span>
                <span>Responsive Design</span>
              </div>
            </div>

            <div className="info-panel">
              <div className="profile-card">
                <span className="tiny-label">Web Developer</span>
                <h3>Creative mindset</h3>
                <p>
                  Design meets code. I build polished, user-first experiences that blend
                  visual clarity with technical precision.
                </p>
              </div>
              <div className="mini-card">
                <strong>8+</strong>
                <span>Projects Completed</span>
              </div>
              <div className="mini-card">
                <strong>Frontend</strong>
                <span>UI / UX Focused</span>
              </div>
              <div className="mini-card">
                <strong>Creative</strong>
                <span>Problem Solver</span>
              </div>
            </div>
          </div>
        </section>

        <section className="showcase">
          <div className="container">
            <span className="section-kicker">Selected work</span>
            <h2 className="section-title">
              Ideas brought to <span>life</span>
            </h2>
            <div className="showcase-grid">
              {showcaseCards.map((card) => (
                <article className="showcase-card" key={card.title}>
                  <span className="badge">{card.badge}</span>
                  <div>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="projects" id="projects">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="section-kicker">Portfolio</span>
                <h2 className="section-title">
                  Selected <span>Projects</span>
                </h2>
              </div>
              <div className="project-count">{filteredProjects.length} Projects</div>
            </div>

            <div className="project-grid">
              {filteredProjects.map((project, index) => (
                <div className="card" key={`${project.name}-${project.type}`}>
                  <div className="number">Project {String(index + 1).padStart(2, '0')}</div>
                  <h3>{project.name}</h3>
                  <p>Explore this completed project and see the design and implementation.</p>
                  <span className="tag">{project.type}</span>
                  <div className="buttons">
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="demo">
                      Live Link
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="container contact-box">
            <div>
              <span className="section-kicker">Let’s Work Together</span>
              <h2>Open to new opportunities and creative collaborations.</h2>
            </div>
            <div className="contact-actions">
              <a href="mailto:nargisalizai@gmail.com" className="primary-btn">
                Email Me
              </a>
              <a href="#top" className="secondary-btn">
                Back to Top
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>© 2026 Nargis Alizai | All Rights Reserved</footer>
    </div>
  )
}

export default App
