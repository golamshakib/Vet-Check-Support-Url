import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="border-t border-slate-700/50 pt-12 mt-16">
      <p className="text-slate-400 text-sm mb-8">
        © {new Date().getFullYear()} Afcomz. All rights reserved.
      </p>

      {/* Logo */}
      <div className="w-48 h-48 rounded-xl overflow-hidden shadow-2xl hover:shadow-red-500/20 transition-shadow">
        <Image
          src={logo}
          alt="Afcomz Logo"
          className="w-full h-full object-cover"
          height={400}
          width={400}
        />
      </div>
    </div>
  );
}
