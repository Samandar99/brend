import { Inter_Tight } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";

const interTight = Inter_Tight({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={interTight.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}