import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Développement web",
    description:
      "Conception d'interfaces web modernes, responsives et accessibles, avec une attention particulière portée à l'expérience utilisateur et à la qualité du code.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    number: "02",
    title: "Cybersécurité",
    description:
      "Intérêt et pratique des fondamentaux de la sécurité informatique : analyse des risques, bonnes pratiques de sécurisation et sensibilisation aux menaces numériques.",
    skills: ["Sécurité web", "Linux", "Audit", "Bonnes pratiques"],
  },
  {
    number: "03",
    title: "Réseaux informatiques",
    description:
      "Étude, configuration et compréhension des infrastructures réseau, des protocoles de communication et des mécanismes de sécurité.",
    skills: ["TCP/IP", "Réseaux", "Administration", "Diagnostic"],
  },
  {
    number: "04",
    title: "Solutions numériques",
    description:
      "Réflexion et développement de solutions numériques adaptées aux besoins des organisations, avec un intérêt particulier pour les applications web et les projets SaaS.",
    skills: ["Applications web", "SaaS", "Automatisation", "Innovation"],
  },
];

export default function ServicesPage() {
  return (
    <main className="services-page">
      <section className="services-hero">
        <div className="container-custom">
          <span className="section-kicker">MES DOMAINES D&apos;INTERVENTION</span>
          <h1>
            La technologie au service
            <br />
            des <span>idées ambitieuses.</span>
          </h1>
          <p>
            Du développement web aux infrastructures informatiques, je
            m&apos;intéresse à la conception de solutions numériques utiles,
            accessibles et pensées pour répondre à des besoins concrets.
          </p>
          <Link href="/contact" className="button button-primary">
            Discutons de votre projet
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="services-list">
        <div className="container-custom">
          <div className="services-heading">
            <span className="section-kicker">CE QUE JE DÉVELOPPE</span>
            <h2>Mes domaines de compétence.</h2>
            <p>
              Quatre domaines complémentaires au croisement du développement,
              des infrastructures et de la sécurité informatique.
            </p>
          </div>

          <div className="expertise-grid services-grid">
            {services.map((service) => (
              <article className="expertise-card service-card" key={service.number}>
                <div className="expertise-icon service-number">
                  {service.number}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-skills">
                  {service.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="services-approach">
        <div className="container-custom services-approach-content">
          <span className="section-kicker">MON APPROCHE</span>
          <h2>Comprendre. Concevoir. Construire.</h2>
          <p>
            Chaque projet commence par la compréhension du besoin. Je privilégie
            une approche structurée, l&apos;apprentissage continu et des choix
            techniques adaptés aux objectifs du projet.
          </p>
          <Link href="/projects" className="button button-outline">
            Découvrir mes projets
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="services-cta">
        <div className="container-custom services-cta-content">
          <span className="section-kicker">COLLABORATION</span>
          <h2>
            Une idée à concrétiser ?
            <br />
            Parlons-en.
          </h2>
          <p>
            Échangeons sur vos besoins, vos idées et les possibilités de
            collaboration autour du numérique.
          </p>
          <Link href="/contact" className="button button-primary">
            Me contacter
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}


