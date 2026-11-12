import Link from "next/link";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-content">
          <Link href="/" className="brand">
            <span className="brand-name">JONATHAN</span>
            <span className="brand-dot">.</span>
          </Link>

          <p>Développement web, réseaux et cybersécurité.</p>

          <span className="footer-copyright">
            © 2026 Jonathan Matondo. Tous droits réservés.
          </span>
        </div>
      </Container>
    </footer>
  );
}
