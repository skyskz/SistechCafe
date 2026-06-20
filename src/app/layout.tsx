import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AuthProvider } from '@/context/AuthContext'; // FITUR BARU: import AuthProvider

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sistech Cafe",
  description: "Local Coffee Brewed by Extraordinary Women in Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
        {/* FITUR BARU: bungkus Header, main, Footer dengan AuthProvider agar status login bisa diakses semua komponen di dalamnya */}
        <AuthProvider>
          <Header/>
          <main>
            {children}
          </main>
          <Footer/>
        </AuthProvider>
      </body>
    </html>
  );
}