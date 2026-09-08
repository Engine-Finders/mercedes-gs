import { Geist, Geist_Mono, Roboto_Condensed, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import navbarData from "@/data/shared/navbar.json";
import footerData from "@/data/shared/footer.json";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Per the final typography spec: Roboto Condensed for all headings
// (H1-H4, weights 700-900, italic on H1/H2), Inter for body/labels/buttons.
// Replaces the earlier Barlow-based system site-wide.
const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Mercedes Engine Rebuild Specialists | Mercedes Garage",
  description:
    "Mercedes-Benz engine rebuild specialists. OM651, OM642, AMG V8, V12 & more. Cars, SUVs, AMG and commercial vehicles. Fixed-price quotes from £2,200, 12-month unlimited-mileage warranty.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${robotoCondensed.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar data={navbarData} />
        <main className="flex-1">{children}</main>
        <Footer data={footerData} />
      </body>
    </html>
  );
}
