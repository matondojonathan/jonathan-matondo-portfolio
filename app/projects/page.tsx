import Link from "next/link";

const projects = [
  {
    number: "01",
    category: "CYBERSÉCURITÉ",
    name: "Secure Chat E2EE",
    description:
      "Application web de messagerie instantanée sécurisée. Les messages sont chiffrés dans le navigateur avant leur transmission. Le serveur transporte et conserve les données chiffrées sans accéder au texte en clair.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "WebSocket",
      "PostgreSQL",
      "ECDH",
      "AES-256-GCM",
      "ECDSA",
    ],
    highlight: "Chiffrement de bout en bout",
    github: "https://github.com/matondojonathan/secure-chat-e2ee",
    demo: null,
  },
  {
    number: "02",
    category: "BLOCKCHAIN",
    name: "HELIOS",
    description:
      "Prototype académique de traçabilité de lots de minerais, notamment le cobalt et le coltan. La plateforme permet de créer des lots, transférer leur propriété, consulter leur historique et enregistrer une certification sur un réseau Hyperledger Fabric.",
    technologies: [
      "Hyperledger Fabric",
      "Node.js",
      "Express",
      "React",
      "Vite",
      "Tailwind CSS",
      "JavaScript",
    ],
    highlight: "Traçabilité minière sur blockchain",
    github: "https://github.com/matondojonathan/helios-mineral-traceability",
    demo: "https://helios-mineral-traceability-rho.vercel.app",
  },
  {
    number: "03",
    category: "DÉVELOPPEMENT WEB",
    name: "Biblio-Kasa",
    description:
      "Application web de gestion de bibliothèque. Elle centralise la gestion des livres, des membres, des emprunts et des retours, avec un tableau de bord et un espace d'administration sécurisé.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "JWT",
      "Joi",
    ],
    highlight: "Gestion numérique de bibliothèque",
    github: "https://github.com/matondojonathan/biblio-kasa",
    demo: null,
  },
  {
    number: "04",
    category: "SAAS / WEB",
    name: "MenuLink",
    description:
      "Solution de menu numérique accessible par QR Code. Le projet vise à simplifier la consultation des menus et la présentation des offres d'un établissement.",
    technologies: ["Next.js", "React", "Tailwind CSS", "QR Code"],
    highlight: "Expérience de menu numérique",
    github: null,
    demo: null,
  },
  {
    number: "05",
    category: "AUTOMATISATION",
    name: "QR-Presence",
    description:
      "Système de gestion électronique des présences basé sur les QR Codes. Il vise à faciliter l'identification des participants et l'enregistrement des présences.",
    technologies: ["PHP", "MySQL", "QR Code", "JavaScript"],
    highlight: "Gestion électronique des présences",
    github: null,
    demo: null,
  },
];

export default function ProjectsPage() {
  return (
    <main className="projects-page">
      <section className="projects-hero">
        <div className="container-custom">
          <span className="section-kicker">MON PORTFOLIO TECHNIQUE</span>
          <h1>
            Des idées transformées
            <br />
            en <span>solutions concrètes.</span>
          </h1>
          <p>
            Chaque projet représente une occasion de concevoir, expérimenter
            et développer des solutions numériques autour du web, de la
            cybersécurité, des réseaux et des technologies émergentes.
          </p>
          <div className="projects-hero-meta">
            <span>Développement web</span>
            <span>Cybersécurité</span>
            <span>Blockchain</span>
          </div>
        </div>
      </section>

      <section className="projects-list">
        <div className="container-custom">
          <div className="projects-section-heading">
            <div>
              <span className="section-kicker">MES RÉALISATIONS</span>
              <h2>Projets sélectionnés.</h2>
            </div>
            <p>
              Des projets académiques et personnels qui illustrent mon
              apprentissage et ma pratique du développement.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-card-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-category">{project.category}</span>
                </div>

                <div className="project-card-content">
                  <h3>{project.name}</h3>
                  <p className="project-highlight">{project.highlight}</p>
                  <p className="project-description">{project.description}</p>

                  <div className="project-technologies">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </div>

                <div className="project-card-actions">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      Code source <span aria-hidden="true">↗</span>
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link project-link-secondary"
                    >
                      Démonstration <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-cta">
        <div className="container projects-cta-content">
          <span className="section-kicker">COLLABORATION</span>
          <h2>
            Un projet en tête ?
            <br />
            Construisons-le ensemble.
          </h2>
          <p>
            Je suis ouvert aux échanges, aux collaborations et aux
            opportunités autour des technologies numériques.
          </p>
          <Link href="/contact" className="button">
            Me contacter <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

