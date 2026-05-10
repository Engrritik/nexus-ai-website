import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrolling } from "@/components/ui/SmoothScrolling";
import { FontLoader } from "@/components/ui/FontLoader";
import "./globals.css";

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
      className={`h-full antialiased`}
    >
      <head>
        <FontLoader />
      </head>
      <body className={`min-h-full flex flex-col text-[#6b7280] bg-[#ffffff] antialiased selection:bg-[#00d4aa]/30 selection:text-black`}>
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
