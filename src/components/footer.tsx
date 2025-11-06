import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight, Package } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const features = [
    "Suivi des stocks en temps réel",
    "Alertes de rupture",
    "Rapports et analyses",
    "Gestion multi-entrepôts"
  ];

  const legalLinks = [
    { href: "/terms", label: "Conditions d'utilisation" },
    { href: "/privacy", label: "Politique de confidentialité" },
    { href: "/cookies", label: "Gestion des cookies" },
    { href: "/mentions", label: "Mentions légales" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" }
  ];

  return (
    <footer className="w-full bg-white text-gray-900 mt-auto border-t border-gray-200" dir="ltr">
      {/* Main Footer Content */}
      <div className="px-6 sm:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Company Info - Wider column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-4">
            
              <h3 className="text-2xl font-bold text-black">Jethings</h3>
            </div>
            <p className="leading-relaxed text-gray-600 mb-6 text-base">
              Jethings est un logiciel gratuit de gestion de stock qui vous aide
              à suivre vos produits, éviter les ruptures et automatiser vos
              inventaires en toute simplicité.
            </p>
          </div>

          {/* Features */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-semibold mb-6 text-black">Fonctionnalités</h4>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-black transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full group-hover:bg-black transition-colors"></span>
                    {feature}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold mb-6 text-black">Légal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-black transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full group-hover:bg-black transition-colors"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-semibold mb-6 text-black">Contact</h4>
            <div className="space-y-4">
              <a 
                href="mailto:support@jethings.com" 
                className="flex items-start gap-3 text-gray-600 hover:text-black transition-colors group"
              >
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-gray-400 group-hover:text-black transition-colors" />
                <span>support@jethings.com</span>
              </a>
              <a 
                href="tel:+213540261833" 
                className="flex items-start gap-3 text-gray-600 hover:text-black transition-colors group"
              >
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-gray-400 group-hover:text-black transition-colors" />
                <span>+213 540 261 833</span>
              </a>
              <div className="flex items-start gap-3 text-gray-600">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-gray-400" />
                <span>Alger Centre, Algérie</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <p className="text-sm font-medium text-gray-900 mb-3">Suivez-nous</p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 text-gray-600 hover:bg-black hover:text-white transition-all duration-300"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600 text-center md:text-left">
              © {currentYear} Jethings. Tous droits réservés.
            </p>
            
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Service opérationnel
              </span>
              <span>•</span>
              <span>Fabriqué en Algérie 🇩🇿</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}