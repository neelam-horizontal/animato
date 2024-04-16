import { Inter } from "next/font/google";
import "./globals.css";
import "./style.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Animato",
  description: "Created by Neelam",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <link rel="icon" href="./favicon.png" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
