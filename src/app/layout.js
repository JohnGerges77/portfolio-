import "./globals.css";

export const metadata = {
  title: "John Gerges",
  description: "Explore the portfolio of John Gerges, a skilled Frontend Developer specializing in React, Next.js, Tailwind CSS, and modern web technologies. Discover innovative projects, technical skills, and get in touch for collaborations.",
  keywords: ["frontend developer", "react", "next.js", "tailwind css", "portfolio", "web development", "john gerges", "javascript", "html", "css"],
  authors: [{ name: "John Gerges" }],
  creator: "John Gerges",
  publisher: "John Gerges",
  openGraph: {
    title: "John Gerges - Frontend Developer Portfolio",
    description: "Explore the portfolio of John Gerges, a skilled Frontend Developer specializing in React, Next.js, Tailwind CSS, and modern web technologies.",
    url: "https://johngerges.dev", // Replace with actual URL if available
    siteName: "John Gerges Portfolio",
    images: [
      {
        url: "/memoji-avatar-1.png", // Assuming this is in public or adjust path
        width: 1200,
        height: 630,
        alt: "John Gerges - Frontend Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "John Gerges - Frontend Developer Portfolio",
    description: "Explore the portfolio of John Gerges, a skilled Frontend Developer specializing in React, Next.js, Tailwind CSS, and modern web technologies.",
    images: ["/memoji-avatar-1.png"],
    creator: "@johngerges", // If applicable
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
  verification: {
    google: "your-google-site-verification-code", // Add if you have one
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
   
      </head>
      <body className="bg-gray-900 text-white antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
