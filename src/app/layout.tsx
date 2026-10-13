
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { PROFILE } from "@/lib/data";
import "./globals.css";

const interTight = localFont({
  src: "../fonts/InterTight-Variable.woff2",
  variable: "--font-inter-tight",
  weight: "100 900",
  display: "swap",
});

const instrumentSerif = localFont({
  src: [
    {
      path: "../fonts/InstrumentSerif-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/InstrumentSerif-Italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-instrument-serif",
  display: "swap",
});

const jetbrainsMono = localFont({
  src: "../fonts/JetBrainsMono-Variable.woff2",
  variable: "--font-jetbrains-mono",
  weight: "100 800",
  display: "swap",
  preload: false,
});

// SEO — Page information
const title = `${PROFILE.name} | Data Analytics & Data Science`;

const description =
  "Computer Systems Engineer specializing in Data Analytics, Data Science, Python, SQL, AI data quality, and IT operations.";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title,
  description,

  applicationName: `${PROFILE.name} Portfolio`,

  authors: [
    {
      name: PROFILE.name,
    },
  ],

  creator: PROFILE.name,

  keywords: [
    "Mauricio Vázquez Pérez",
    "Data Analyst",
    "Data Analytics",
    "Data Science",
    "Computer Systems Engineer",
    "Python",
    "SQL",
    "Pandas",
    "NumPy",
    "PySpark",
    "Machine Learning",
    "scikit-learn",
    "AI Data Quality",
    "Artificial Intelligence",
    "IT Operations",
    "Business Intelligence",
    "Data Visualization",
    "Excel",
    "Tableau",
    "Google Analytics",
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  icons: {
    icon: "/favicon.svg",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title,
    description,
    siteName: `${PROFILE.name} Portfolio`,
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: `${PROFILE.name} — Data Analytics & Data Science`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.jpg"],
  },

  category: "technology",
};

// Browser viewport configuration
export const viewport: Viewport = {
  themeColor: "#f4f2ee",
  width: "device-width",
  initialScale: 1,
};

// Main application layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
