import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/nextjs';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PDF Whisperer",
  description: "Upload and chat with your PDF documents using AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div className="min-h-screen bg-gradient-to-br from-background to-surface-dark">
            {/* Header/Navbar */}
            <Navbar />
            
            {/* Main content */}
            <main className="w-full min-h-[calc(100vh-64px)]">
              <SignedOut>
                <LandingPage />
              </SignedOut>  
              <SignedIn>
                {children}
              </SignedIn>
            </main>         
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
