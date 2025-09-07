"use client";

import { Instagram, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white mt-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between p-4 gap-4">
        {/* Logo or name */}
        <span className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </span>

        {/* Social links */}
        <div className="flex items-center gap-x-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-[#E4405F] transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-[#0A66C2] transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-[#1877F2] transition-colors"
          >
            <Facebook className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
