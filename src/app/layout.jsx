import { Alex_Brush } from "next/font/google";
import "./globals.css";

import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

const alex = Alex_Brush({ subsets: ["latin"], weight:['400'] });

export const metadata = {
  title: "Ecommerce",
  description: "Fundamentals of React",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={alex.className}>
        <Navbar />
        <div className="text-3xl min-h-[80vh] bg-gray-500">

        <h1>Hello World</h1>
        {children}

        </div>
        <Footer />
      </body>
    </html>
  );
}