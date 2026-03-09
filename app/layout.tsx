import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { FloatingCTA } from "@/components/ui/FloatingCTA";
import { ThemeProvider } from "@/components/context/ThemeProvider";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Preloader } from "@/components/ui/Preloader";
import { SmoothScroll } from "@/components/ui/SmoothScroll";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "AntiGravity AI — AI Automation to Scale Your Business",
  description: "Custom AI automations for lead gen, workflow automation, chatbots and more. We help you scale without increasing headcount.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "AntiGravity AI — AI Automation to Scale Your Business",
    description: "Custom AI automations for lead gen, workflow automation, chatbots and more.",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AntiGravity AI — AI Automation to Scale Your Business",
    description: "Custom AI automations for lead gen, workflow automation, chatbots and more.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans noise-grain antialiased bg-t-background text-t-text-primary`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "AntiGravity AI",
              url: "https://antigravity.ai",
              description: "AI automation agency helping businesses scale without increasing headcount",
              sameAs: [
                "https://linkedin.com/company/antigravity-ai",
                "https://twitter.com/antigravityai",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "sales",
                availableLanguage: "English",
              },
            }),
          }}
        />
        <ThemeProvider>
          <Preloader />
          <CustomCursor />
          <SmoothScroll />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingCTA />
        </ThemeProvider>
      </body>
    </html>
  );
}
