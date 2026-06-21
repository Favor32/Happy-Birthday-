"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home", icon: "🏠" },
  { href: "/messages", label: "Messages", icon: "💌" },
  { href: "/gallery", label: "Gallery", icon: "📸" },
  { href: "/wishes", label: "Wishes", icon: "🙏" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <aside className="fixed top-0 left-0 h-screen w-56 bg-brown flex flex-col items-center py-8 px-4 gap-6 z-50">
      <div className="text-center">
        <p className="text-4xl">🎂</p>
        <p className="font-heading text-cream text-lg font-bold mt-2 leading-tight">
          Coach Salem
        </p>
        <p className="font-body text-gold text-xs mt-1 tracking-widest uppercase">
          Happy Birthday
        </p>
      </div>

      <div className="w-full h-px bg-brown-light mt-2" />

      <ul className="flex flex-col w-full gap-2">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl font-body text-sm transition-all duration-300 ${
                pathname === link.href
                  ? "bg-gold text-brown font-bold"
                  : "text-cream hover:bg-brown-light"
              }`}
            >
              <span className="text-lg">{link.icon}</span>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}