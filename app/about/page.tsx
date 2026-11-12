import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faNetworkWired,
  faShieldHalved,
  faGraduationCap,
  faLightbulb,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import { Container } from "@/components/ui/container";

const domains = [
  {
    icon: faCode,
    title: "Développement web",
    description:
      "Conception d'interfaces web modernes et développement d'applications avec les technologies JavaScript et TypeScript.",
    technologies: ["React", "Next.js", "Node.js", "TypeScript"],
  },
  {
    icon: faNetworkWired,
    title: "Réseaux informatiques",
    description:
      "Compréhension des infrastructures réseau, des systèmes et des mécanismes qui assurent la communication entre les équipements.",
    technologies: ["TCP/IP", "Linux", "Administration réseau"],
  },
  {
    icon: faShieldHalved,
    title: "Cybersécurité",
    description:
      "Intérêt pour la sécurité des systèmes, l'identification des vulnérabilités et la protection des infrastructures numériques.",
    technologies: ["Sécurité informatique", "Audit", "Analyse"],
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="about-hero">
        <Container>
          <span className="section-kicker">MON PARCOURS</span>
          <h1>
            Derrière le code,
            <br />
            <span>une vision.</span>
          </h1>
          <p>
            Je suis étudiant en informatique, développeur web et passionné
            par les réseaux et la cybersécurité. Je construis progressivement
            un parcours orienté vers la création de solutions numériques
            utiles, fiables et durables.
          </p>
        </Container>
      </section>

      <section className="about-introduction">
        <Container>
          <div className="about-intro-grid">
            <div>
              <span className="section-kicker">01 — QUI SUIS-JE ?</span>
              <h2>Comprendre, construire et faire évoluer.</h2>
            </div>

            <div className="about-intro-copy">
              <p>
                Mon parcours se développe autour du génie informatique,
                avec un intérêt particulier pour le développement web,
                les réseaux et la cybersécurité.
              </p>
              <p>
                J&apos;aime comprendre le fonctionnement des systèmes, analyser
                les problèmes et transformer des besoins concrets en
                solutions numériques.
              </p>
              <p>
                Je considère chaque projet comme une occasion d&apos;apprendre,
                de renforcer mes compétences et de progresser vers une
                maîtrise plus complète des technologies.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="about-domains">
        <Container>
          <div className="section-heading">
            <span className="section-kicker">02 — MES DOMAINES</span>
            <h2>Trois axes qui structurent mon parcours.</h2>
            <p>
              Des domaines complémentaires pour concevoir, comprendre
              et sécuriser les solutions numériques.
            </p>
          </div>

          <div className="about-domain-grid">
            {domains.map((domain, index) => (
              <article className="about-domain-card" key={domain.title}>
                <span className="about-domain-number">
                  0{index + 1}
                </span>
                <div className="about-domain-icon">
                  <FontAwesomeIcon icon={domain.icon} />
                </div>
                <h3>{domain.title}</h3>
                <p>{domain.description}</p>
                <div className="about-tags">
                  {domain.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="about-education">
        <Container>
          <div className="about-education-grid">
            <div className="about-education-icon">
              <FontAwesomeIcon icon={faGraduationCap} />
            </div>

            <div>
              <span className="section-kicker">03 — FORMATION</span>
              <h2>Apprendre pour mieux construire.</h2>
              <p>
                Mon parcours universitaire en informatique constitue
                le socle de ma formation. Je complète cet apprentissage
                par des formations techniques, des exercices pratiques
                et des projets personnels.
              </p>
              <p>
                J&apos;ai notamment suivi le cours Operating Systems
                (FC0-U61) dans le parcours Skillsoft / CompTIA IT
                Fundamentals, avec une attestation d&apos;achèvement
                obtenue en juin 2026.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="about-vision">
        <Container>
          <div className="about-vision-content">
            <span className="section-kicker">04 — MA VISION</span>
            <div className="about-vision-icon">
              <FontAwesomeIcon icon={faLightbulb} />
            </div>
            <h2>
              La technologie prend tout son sens lorsqu&apos;elle répond
              à un véritable besoin.
            </h2>
            <p>
              Mon ambition est de devenir un professionnel capable
              de concevoir des produits numériques, de comprendre
              les infrastructures qui les soutiennent et d&apos;intégrer
              la sécurité dès leur conception.
            </p>
            <Link href="/projects" className="button button-primary">
              Découvrir mes projets
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}


