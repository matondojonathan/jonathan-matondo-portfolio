"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faGlobe,
  faPaperPlane,
  faArrowUpRightFromSquare,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const email = "johnniumatos@gmail.com";
const phone = "+243810521567";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const subject = encodeURIComponent(
      `Prise de contact — ${data.get("name")}`
    );

    const body = encodeURIComponent(
      `Bonjour Jonathan,\n\n` +
      `Nom : ${data.get("name")}\n` +
      `E-mail : ${data.get("senderEmail")}\n` +
      `Sujet : ${data.get("subject")}\n\n` +
      `Message :\n${data.get("message")}`
    );

    setSent(true);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container-custom">
          <span className="section-kicker">07 — Contact</span>
          <h1>
            Construisons quelque chose
            <span> d&apos;utile ensemble.</span>
          </h1>
          <p>
            Une idée, une collaboration, une opportunité ou un projet
            numérique ? Échangeons autour de vos objectifs.
          </p>
        </div>
      </section>

      <section className="contact-main section-block">
        <div className="container-custom contact-layout">
          <div className="contact-information">
            <span className="section-kicker">Restons en contact</span>
            <h2>Parlons de votre prochain projet.</h2>
            <p>
              Je suis disponible pour discuter de développement web,
              cybersécurité, réseaux, transformation digitale et
              collaborations professionnelles.
            </p>

            <div className="contact-methods">
              <a href={`mailto:${email}`} className="contact-method">
                <span className="contact-method-icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <span>
                  <small>E-mail</small>
                  <strong>{email}</strong>
                </span>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>

              <a href={`tel:${phone}`} className="contact-method">
                <span className="contact-method-icon">
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                <span>
                  <small>Téléphone</small>
                  <strong>+243 810 521 567</strong>
                </span>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>

              <a
                href={`https://wa.me/${phone}`}
                target="_blank"
                rel="noreferrer"
                className="contact-method"
              >
                <span className="contact-method-icon">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </span>
                <span>
                  <small>WhatsApp</small>
                  <strong>Discuter directement</strong>
                </span>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>

              <div className="contact-method">
                <span className="contact-method-icon">
                  <FontAwesomeIcon icon={faLocationDot} />
                </span>
                <span>
                  <small>Localisation</small>
                  <strong>Kinshasa, République démocratique du Congo</strong>
                </span>
              </div>
            </div>

            <div className="contact-socials">
              <a
                href="https://github.com/matondojonathan"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://www.linkedin.com/in/jonathanmatondo"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://jmdgrouprdc.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Site officiel de JMD GROUP"
              >
                <FontAwesomeIcon icon={faGlobe} />
              </a>
            </div>

            <div className="contact-company">
              <small>Responsable Consulting</small>
              <strong>JMD GROUP — Digital Solutions</strong>
              <a
                href="https://jmdgrouprdc.com/"
                target="_blank"
                rel="noreferrer"
              >
                Visiter le site de l&apos;entreprise
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </div>
          </div>

          <div className="contact-form-card">
            <span className="section-kicker">Envoyer un message</span>
            <h2>Décrivons votre besoin.</h2>
            <p>
              Remplissez le formulaire. Votre messagerie s&apos;ouvrira avec
              le message préparé.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <label>
                  Votre nom
                  <input
                    type="text"
                    name="name"
                    placeholder="Nom complet"
                    autoComplete="name"
                    required
                  />
                </label>
                <label>
                  Votre e-mail
                  <input
                    type="email"
                    name="senderEmail"
                    placeholder="exemple@email.com"
                    autoComplete="email"
                    required
                  />
                </label>
              </div>

              <label>
                Sujet
                <input
                  type="text"
                  name="subject"
                  placeholder="Objet de votre demande"
                  required
                />
              </label>

              <label>
                Votre message
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Parlez-moi de votre projet..."
                  required
                />
              </label>

              <button type="submit" className="button button-primary">
                Préparer mon message
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>

              {sent && (
                <p className="contact-form-feedback" role="status">
                  Votre messagerie devrait s&apos;ouvrir. Vous pourrez
                  vérifier puis envoyer votre message.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      <section className="contact-bottom">
        <div className="container-custom">
          <span className="section-kicker">Découvrir</span>
          <h2>En savoir plus sur mon parcours et mes réalisations.</h2>
          <div className="contact-bottom-actions">
            <Link href="/about" className="button button-primary">
              Mon parcours
            </Link>
            <Link href="/projects" className="button button-secondary">
              Voir mes projets
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
