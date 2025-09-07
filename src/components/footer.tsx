"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="w-full bg-[#45acab] text-white mt-auto py-16 border-t"
      dir="ltr"
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Jethings</h3>
            <p className="leading-relaxed text-white/90 mb-4 text-base">
              Jethings est un logiciel gratuit de gestion de stock qui vous aide
              à suivre vos produits, éviter les ruptures et automatiser vos
              inventaires en toute simplicité.
            </p>
          </div>

          {/* Features / Services */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Fonctionnalités</h4>
            <ul className="space-y-3 text-base">
              <li className="hover:text-gray-200 transition-colors cursor-pointer">
                Suivi des stocks en temps réel
              </li>
              <li className="hover:text-gray-200 transition-colors cursor-pointer">
                Alertes de rupture
              </li>
              <li className="hover:text-gray-200 transition-colors cursor-pointer">
                Rapports et analyses
              </li>
              <li className="hover:text-gray-200 transition-colors cursor-pointer">
                Gestion multi-entrepôts
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-3 text-base flex flex-col gap-y-4">
            <Link
              href="/terms"
              className="hover:text-gray-200 transition-colors"
            >
              Conditions d’utilisation
            </Link>
            <Link
              href="/privacy"
              className="hover:text-gray-200 transition-colors"
            >
              Politique de confidentialité
            </Link>
          </div>

          {/* Contact & Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-base mb-6">
              <div className="flex items-center gap-3">
                <span>support@jethings.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span>+213 540 261 833</span>
              </div>
              <div className="flex items-center gap-3">
                <span>Alger, Algérie</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/30 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/90">
            © {new Date().getFullYear()} Jethings. Tous droits réservés.
          </p>

          <div className="flex gap-x-5 mt-4 md:mt-0">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition-colors"
            >
              <Facebook className="w-6 h-6" />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
