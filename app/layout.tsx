import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Header from "@/components/Header";
import { PromotionalBanner } from "@/components/PromotionalBanner";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import { BackToTop } from "@/components/BackToTop";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Kringloopwinkel Oud & Nieuw",
  description:
    "Welkom bij Kringloopwinkel Oud & Nieuw in Bodegraven. Wij zijn een sociale kringloopwinkel met betaalbare tweedehands artikelen, een gezellige koffiehoek, en een team van enthousiaste vrijwilligers. Kom langs voor een kopje koffie en ontdek onze collectie aan de Prins Bernhardstraat.",
  keywords: [
    "kringloopwinkel",
    "Bodegraven",
    "tweedehands",
    "duurzaam",
    "sociaal",
    "Oud & Nieuw",
    "betaalbaar",
    "recycling",
    "circulaire economie",
    "vrijwilligers",
  ],
  authors: [{ name: "Kringloopwinkel Oud & Nieuw" }],
  openGraph: {
    title: "Kringloopwinkel Oud & Nieuw",
    description:
      "Sociale kringloopwinkel in Bodegraven met betaalbare tweedehands artikelen en een gezellige koffiehoek.",
    url: "https://kringloopoudennieuw.nl",
    siteName: "Kringloopwinkel Oud & Nieuw",
    locale: "nl_NL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <body
        className={cn(
          roboto.variable,
          "min-h-screen font-sans antialiased",
          "flex flex-col",
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PromotionalBanner />
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
