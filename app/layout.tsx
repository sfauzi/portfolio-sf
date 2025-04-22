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
  },
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
        
      </head>
      <body className={inter.className}>

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
