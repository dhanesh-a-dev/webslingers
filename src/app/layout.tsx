import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#080b11" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "WEBSLINGERS — Student Hackathon Developer Team Portfolio",
  description:
    "Official developer portfolio and concept prototype showcase for student hackathon team WEBSLINGERS: Anushka, Anjali, Misheal, and Dhanesh.",
  keywords: [
    "Student Portfolio",
    "Hackathon Team",
    "WEBSLINGERS",
    "Python",
    "JavaScript",
    "C++",
    "Java",
    "HTML",
    "CSS",
    "Web Development"
  ],
  authors: [{ name: "Team WEBSLINGERS" }],
  openGraph: {
    title: "WEBSLINGERS — Student Hackathon Developer Team Portfolio",
    description:
      "Interactive portfolio and prototype showcase for student hackathon developers Anushka, Anjali, Misheal, and Dhanesh.",
    type: "website",
    locale: "en_US",
    siteName: "WEBSLINGERS Portfolio",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function() {
              try {
                var t = localStorage.getItem('webslingers-theme');
                if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch(e) {}
            })()`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
