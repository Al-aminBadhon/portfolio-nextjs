import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals-apple.css";
import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";
import { NavDock } from "@/components/site/NavDock";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ThemeProvider, ToastProvider } from "@/once-ui/components";
import { person, home } from "@/app/resources/content";
import { baseURL } from "@/app/resources";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-apple",
  display: "swap",
});

export const metadata: Metadata = {
  title: home.title || `${person.name}'s Portfolio`,
  description:
    home.description ||
    `Portfolio of ${person.name}, ${person.role}`,
  metadataBase: new URL(baseURL),
  openGraph: {
    title: home.title,
    description: home.description,
    url: baseURL,
    images: [home.image],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} data-theme="light">
      <body className="min-h-screen bg-[var(--apple-bg)] font-[family-name:var(--font-apple)] antialiased">
        <ThemeProvider>
          <ToastProvider>
            <NavDock />
            <main>{children}</main>
            <SiteFooter />
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
