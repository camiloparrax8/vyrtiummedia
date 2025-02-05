import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CXP - Inicio",
  description: "En CXP, accede a un equipo de expertos, herramientas especializadas, formación en criptomonedas y una comunidad activa, todo lo que necesitas en un solo lugar.",
  keywords: "Cryptos, Academia, Profit",
  robots: "index, follow",
  openGraph: {
    title: "CXP - Inicio",
    description: "En CXP, accede a un equipo de expertos, herramientas especializadas, formación en criptomonedas y una comunidad activa, todo lo que necesitas en un solo lugar.",
    url: "https://vyrtiummedia.vercel.app/",
    siteName: "CXP",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CXP - Inicio",
      },
    ],
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    
  }
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
