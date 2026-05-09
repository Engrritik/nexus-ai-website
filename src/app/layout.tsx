import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrolling } from "@/components/ui/SmoothScrolling";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexus AI | AI Voice Receptionist for Dental Clinics",
  description: "Never miss a patient again. Nexus AI answers every call, qualifies patients and books appointments automatically 24/7.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased dark`}
    >
      <body className={`min-h-full flex flex-col text-foreground antialiased selection:bg-purple-500/30 selection:text-white font-sans ${inter.variable} ${bricolage.variable} ${jetbrains.variable}`}>
        {/* Global Dark Theme Backgrounds */}
        <div className="fixed inset-0 z-[-1] pointer-events-none bg-gradient-to-br from-[#050505] to-[#0f0f15]">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_rgba(0,240,255,0.03)_0%,_transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,_rgba(112,0,255,0.03)_0%,_transparent_50%)]" />
        </div>
        <SmoothScrolling>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
