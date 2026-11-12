"use client";

import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/theme/theme-toggle";

const navigation = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/about" },
  { label: "Projets", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <Container>
        <nav className="navbar" aria-label="Navigation principale">
          <Link
            href="/"
            className="brand"
            onClick={() => setMenuOpen(false)}
          >
            <span className="brand-name">JONATHAN</span>
            <span className="brand-dot">.</span>
          </Link>

          <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="nav-actions">
            <ThemeToggle />

            <Link href="/contact" className="button button-primary nav-cta">
              Me contacter
            </Link>

            <button
              type="button"
              className="mobile-menu-button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={menuOpen}
            >
              <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
            </button>
          </div>
        </nav>
      </Container>
    </header>
  );
}
