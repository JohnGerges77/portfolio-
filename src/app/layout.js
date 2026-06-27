import "./globals.css";
import "lenis/dist/lenis.css";
import SmoothScroll from "../components/SmoothScroll";
import {
  authorName,
  sameAsProfiles,
  siteDescription,
  siteKeywords,
  siteName,
  siteUrl,
} from "../lib/seo";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "John Gerges | Front-End Developer",
    template: "%s | John Gerges",
  },
  description: siteDescription,
  keywords: siteKeywords,
  authors: [{ name: authorName }],
  creator: authorName,
  publisher: authorName,
  applicationName: siteName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "John Gerges | Front-End Developer",
    description: siteDescription,
    url: siteUrl,
    siteName,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "John Gerges portfolio preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "John Gerges | Front-End Developer",
    description: siteDescription,
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: authorName,
    url: siteUrl,
    jobTitle: "Front-End Developer",
    description: siteDescription,
    sameAs: sameAsProfiles,
    knowsAbout: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
      "Framer Motion",
      "GSAP",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-gray-900 text-white antialiased font-sans">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
