import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCode,
  faShieldHalved,
  faNetworkWired,
  faLightbulb,
  faLaptopCode,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";

import { Container } from "@/components/ui/container";

const expertise = [
  {
    icon: faCode,
    title: "Développement Full Stack",
    description:
      "Conception d'interfaces web modernes et développement de solutions applicatives.",
  },
  {
    icon: faNetworkWired,
    title: "Réseaux informatiques",
    description:
      "Administration, infrastructure réseau, systèmes et connectivité.",
  },
  {
    icon: faShieldHalved,
    title: "Cybersécurité",
    description:
      "Sécurité des systèmes, analyse des risques et protection des environnements numériques.",
  },
  {
    icon: faLightbulb,
    title: "Entrepreneuriat tech",
    description:
      "Transformer des idées en produits numériques utiles et évolutifs.",
  },
];

const projects = [
  {
    category: "Application web",
    name: "Biblio-Kasa",
    description:
      "Une plateforme de gestion de bibliothèque pensée pour faciliter l'organisation et l'accès aux ressources.",
    technologies: ["Next.js", "Node.js", "PostgreSQL"],
  },
  {
    category: "Solution numérique",
    name: "MenuLink",
    description:
      "Un menu digital accessible par QR code pour moderniser l'expérience client des établissements.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    category: "Système de gestion",
    name: "QR-Presence",
    description:
      "Un système de gestion des présences basé sur la génération et la lecture de QR codes.",
    technologies: ["PHP", "MySQL", "JavaScript"],
  },
];

const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Tailwind CSS",
  "MySQL",
  "PostgreSQL",
  "Git",
  "Linux",
  "Réseaux",
  "Cybersécurité",
];

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <Container>
          <div className="hero-grid">
            <div className="hero-content">
              <span className="eyebrow">
                <span className="status-indicator" />
                Portfolio professionnel
              </span>

              <p className="hero-intro">Bonjour, je suis</p>

              <h1>
                Jonathan
                <span> Matondo.</span>
              </h1>

              <h2>
                Développeur Full Stack
                <span> · Réseaux & Cybersécurité</span>
              </h2>

              <p className="hero-description">
                Je conçois des solutions numériques, j&apos;explore les enjeux de
                la sécurité informatique et je construis progressivement
                une vision entrepreneuriale tournée vers l&apos;innovation.
              </p>

              <div className="hero-actions">
                <Link href="#projects" className="button button-primary">
                  Découvrir mes projets
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>

                <Link href="#contact" className="button button-outline">
                  Me contacter
                </Link>
              </div>

              <div className="hero-focus">
                <span>Développement</span>
                <span>Infrastructure</span>
                <span>Innovation</span>
              </div>
            </div>

            <div className="hero-visual" aria-label="Domaines d'expertise">
              <div className="visual-orbit orbit-one" />
              <div className="visual-orbit orbit-two" />

              <div className="visual-core">
                <FontAwesomeIcon icon={faLayerGroup} />
                <span>TECH</span>
              </div>

              <div className="visual-node node-code">
                <FontAwesomeIcon icon={faCode} />
                <span>Code</span>
              </div>

              <div className="visual-node node-network">
                <FontAwesomeIcon icon={faNetworkWired} />
                <span>Réseaux</span>
              </div>

              <div className="visual-node node-security">
                <FontAwesomeIcon icon={faShieldHalved} />
                <span>Sécurité</span>
              </div>

              <div className="visual-caption">
                <span>01 / 04</span>
                <span>Construire. Sécuriser. Innover.</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="intro-strip">
        <Container>
          <div className="intro-strip-content">
            <span>Une approche transversale du numérique</span>
            <p>
              Du développement logiciel à la sécurité des infrastructures,
              avec une ambition : créer des solutions qui ont du sens.
            </p>
          </div>
        </Container>
      </section>

      <section id="about" className="section-block">
        <Container>
          <div className="section-heading">
            <span className="section-kicker">01 — À propos</span>
            <h2>
              La technologie comme outil de
              <span> transformation.</span>
            </h2>
          </div>

          <div className="about-grid">
            <div className="about-marker">
              <span>JM</span>
              <p>Curiosité · Rigueur · Vision</p>
            </div>

            <div className="about-copy">
              <p>
                Mon parcours se construit autour de l&apos;informatique, du
                développement web, des réseaux et de la cybersécurité.
                J&apos;aime comprendre les systèmes, résoudre des problèmes
                concrets et transformer des besoins en solutions numériques.
              </p>
              <p>
                Au-delà du code, je m&apos;intéresse à la création de produits
                digitaux et à l&apos;entrepreneuriat technologique. Mon objectif
                est de développer des compétences solides pour concevoir
                des solutions fiables, utiles et durables.
              </p>
              <Link href="#contact" className="text-link">
                Échanger sur un projet
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section id="expertise" className="section-block section-muted">
        <Container>
          <div className="section-heading">
            <span className="section-kicker">02 — Expertise</span>
            <h2>
              Des compétences au service
              <span> des solutions.</span>
            </h2>
            <p>
              Quatre axes complémentaires pour comprendre, construire et
              sécuriser les environnements numériques.
            </p>
          </div>

          <div className="expertise-grid">
            {expertise.map((item, index) => (
              <article className="expertise-card" key={item.title}>
                <span className="card-index">0{index + 1}</span>
                <div className="expertise-icon">
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="skills" className="section-block">
        <Container>
          <div className="section-heading">
            <span className="section-kicker">03 — Technologies</span>
            <h2>
              Les outils que j&apos;utilise
              <span> et que j&apos;approfondis.</span>
            </h2>
          </div>

          <div className="technology-panel">
            <div className="technology-heading">
              <FontAwesomeIcon icon={faLaptopCode} />
              <div>
                <h3>Environnement technique</h3>
                <p>Technologies, outils et domaines de travail.</p>
              </div>
            </div>

            <div className="technology-list">
              {technologies.map((technology) => (
                <span className="technology-tag" key={technology}>
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="projects" className="section-block section-muted">
        <Container>
          <div className="section-heading section-heading-row">
            <div>
              <span className="section-kicker">04 — Réalisations</span>
              <h2>
                Des idées transformées
                <span> en projets.</span>
              </h2>
            </div>
            <p>
              Quelques projets qui illustrent mon intérêt pour les
              applications web et les solutions numériques.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.name}>
                <div className="project-visual">
                  <span>0{index + 1}</span>
                  <FontAwesomeIcon icon={faLayerGroup} />
                </div>

                <div className="project-content">
                  <span className="project-category">{project.category}</span>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>

                  <div className="project-technologies">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="services" className="section-block">
        <Container>
          <div className="section-heading">
            <span className="section-kicker">05 — Collaboration</span>
            <h2>
              Construisons quelque chose
              <span> d&apos;utile.</span>
            </h2>
            <p>
              Je souhaite collaborer sur des projets qui mobilisent la
              technologie pour répondre à des besoins réels.
            </p>
          </div>

          <div className="collaboration-panel">
            <div>
              <h3>Une idée, un besoin ou un projet ?</h3>
              <p>
                Parlons de votre vision et étudions ensemble les possibilités
                de réalisation.
              </p>
            </div>

            <Link href="#contact" className="button button-primary">
              Discutons de votre projet
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </Container>
      </section>

      <section id="contact" className="section-block contact-section">
        <Container>
          <div className="contact-panel">
            <span className="section-kicker">06 — Contact</span>
            <h2>
              Faisons avancer
              <span> vos idées.</span>
            </h2>
            <p>
              Vous avez une opportunité, une proposition de collaboration
              ou un projet numérique à discuter ? Prenons contact.
            </p>
            <a href="mailto:contact@jonathanmatondo.com" className="button button-primary">
              Me contacter
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
            <span className="contact-note">
              Adresse de contact provisoire à confirmer avant publication.
            </span>
          </div>
        </Container>
      </section>
    </>
  );
}


