import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Example from "@/components/Exemple";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "UrbanSoul",
  description: "e-commerce de produit urbaine",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-gray-300`}>
        <Header />
        {/* <Example /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
