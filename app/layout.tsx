import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { BackToTop } from "@/components/layout/back-to-top";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Jonathan Matondo | Développeur Web & Cybersécurité",
    template: "%s | Jonathan Matondo",
  },
  description:
    "Portfolio professionnel de Jonathan Matondo, développeur web spécialisé en réseaux et cybersécurité.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning data-scroll-behavior="smooth"
      className={`${inter.variable} ${poppins.variable}`}
    >
      <body>
        <ThemeProvider>
          <Navbar />
          <main className="site-main">{children}</main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}


