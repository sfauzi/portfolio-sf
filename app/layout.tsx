import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Syahrul Fauzi | Web Developer Portfolio",
  description: "Professional Web Developer specializing in Laravel, Vue.js, and modern web technologies. Graduate from Telkom University with expertise in full-stack development. Founder of SpeechlessMind.",
  keywords: [
    "Syahrul Fauzi",
    "sfauzi",
    "Web Developer",
    "Telkom University",
    "Laravel Developer",
    "Vue.js Developer",
    "SpeechlessMind",
    "Full Stack Developer",
    "Telkom",
    "Portfolio"
  ],
  authors: [{ name: "Syahrul Fauzi" }],
  creator: "Syahrul Fauzi",
  publisher: "SpeechlessMind",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://syahrulfauzi.speechlessmind.com",
    siteName: "Syahrul Fauzi Portfolio",
    title: "Syahrul Fauzi | Web Developer Portfolio",
    description: "Professional Web Developer specializing in Laravel, Vue.js, and modern web technologies.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Syahrul Fauzi Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Syahrul Fauzi | Web Developer Portfolio",
    description: "Professional Web Developer specializing in Laravel, Vue.js, and modern web technologies.",
    images: ["/og-image.jpg"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://syahrulfauzi.speechlessmind.com" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Syahrul Fauzi",
            "alumniOf": "Telkom University",
            "url": "https://syahrulfauzi.speechlessmind.com",
            "sameAs": [
              "https://github.com/sfauzi",
              "https://linkedin.com/in/sfauzi",
              "https://speechlessmind.com"
            ],
            "jobTitle": "Web Developer",
            "worksFor": {
              "@type": "Organization",
              "name": "SpeechlessMind"
            },
            "knowsAbout": [
              "Laravel",
              "Vue.js",
              "Web Development",
              "Full Stack Development"
            ]
          })}
        </script>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
