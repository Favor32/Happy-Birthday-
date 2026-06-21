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
      <body className="bg-cream min-h-screen">
        <Navbar />
        {/* Desktop: push content right of sidebar. Mobile: push content below top bar */}
        <div className="md:ml-56 pt-16 md:pt-0 min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}