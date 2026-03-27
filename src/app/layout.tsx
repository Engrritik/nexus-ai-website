import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
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
      <body className={`min-h-full flex flex-col bg-black text-foreground antialiased selection:bg-teal selection:text-black font-sans ${inter.variable} ${bricolage.variable} ${jetbrains.variable}`}>
        {/* Global Dark Theme Backgrounds */}
        <div className="fixed inset-0 z-[-1] pointer-events-none bg-black">
          <div className="absolute inset-0 bg-grid opacity-40" />
          <div className="absolute inset-0 aurora-top-left" />
          <div className="absolute inset-0 aurora-bottom-right" />
        </div>
        <SmoothScrolling>
          <CustomCursor />
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
