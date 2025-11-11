import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Package,
} from "lucide-react"
import MaxWidthWrapper from "./max-with-wrapper"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const features = [
    "Real-time stock tracking",
    "Stock-out alerts",
    "Reports and analytics",
    "Multi-warehouse management",
  ]

  const legalLinks = [
    { href: "/terms", label: "Terms of Service" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/cookies", label: "Cookie Management" },
    { href: "/mentions", label: "Legal Notice" },
  ]

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  ]

  return (
    <footer
      className="w-full bg-white text-gray-900 mt-auto border-t border-gray-200"
      dir="ltr"
    >
      <MaxWidthWrapper>
        {/* Main Footer Content */}
        <div className="px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6">
            {/* Company Info - Wider column */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-xl font-bold text-black">Jethings</h3>
              </div>
              <p className="leading-relaxed text-gray-600 mb-4 text-sm">
                Jethings is a free inventory management software that helps you
                track your products, prevent stock-outs, and automate your
                inventories with ease.
              </p>
            </div>

            {/* Features */}
            <div className="lg:col-span-3">
              <h4 className="text-sm font-semibold mb-4 text-black">
                Features
              </h4>
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-black transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-gray-400 rounded-full group-hover:bg-black transition-colors flex-shrink-0"></span>
                      <span>{feature}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="lg:col-span-2">
              <h4 className="text-sm font-semibold mb-4 text-black">Legal</h4>
              <ul className="space-y-2">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-black transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-gray-400 rounded-full group-hover:bg-black transition-colors flex-shrink-0"></span>
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-3">
              <h4 className="text-sm font-semibold mb-4 text-black">Contact</h4>
              <div className="space-y-3">
                <a
                  href="mailto:support@jethings.com"
                  className="flex items-start gap-2 text-sm text-gray-600 hover:text-black transition-colors group"
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-400 group-hover:text-black transition-colors" />
                  <span className="break-all">support@jethings.com</span>
                </a>
                <a
                  href="tel:+213540261833"
                  className="flex items-start gap-2 text-sm text-gray-600 hover:text-black transition-colors group"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-400 group-hover:text-black transition-colors" />
                  <span>+213 540 261 833</span>
                </a>
                <div className="flex items-start gap-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-400" />
                  <span>Algiers Center, Algeria</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-5">
                <p className="text-xs font-medium text-gray-900 mb-2">
                  Follow us
                </p>
                <div className="flex gap-2">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-100 text-gray-600 hover:bg-black hover:text-white transition-all duration-300"
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 bg-gray-50">
          <div className="px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
              <p className="text-xs text-gray-600 text-center sm:text-left">
                © {currentYear} Jethings. All rights reserved.
              </p>

              <div className="flex items-center gap-4 text-xs text-gray-600 flex-wrap justify-center">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  Service operational
                </span>
                <span className="hidden sm:inline">•</span>
                <span>Made in Algeria 🇩🇿</span>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}
