import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Happy Birthday Coach Salem!",
  description: "A special birthday message for Coach Salem",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-cream min-h-screen flex">
        <Navbar />
        <div className="ml-56 flex-1 min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}