"use client";
import { ShieldCheck, CreditCard, Infinity, Eye } from "lucide-react";

// MaxWidthWrapper component
function MaxWidthWrapper({ children, className = "" }) {
  return (
    <div
      className={`mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
}

const reasons = [
  {
    icon: ShieldCheck,
    title: "Confiance et transparence",
    description:
      "Nous croyons que les petites entreprises méritent des outils puissants sans prix exorbitants. Notre objectif est de vous aider à grandir.",
  },
  {
    icon: CreditCard,
    title: "Aucune carte bancaire requise",
    description:
      "Pas besoin d'ajouter une carte bancaire pour commencer. Vous pouvez utiliser le logiciel immédiatement.",
  },
  {
    icon: Eye,
    title: "Pas de frais cachés",
    description:
      "Zéro frais cachés, zéro abonnement imprévu. Vous savez exactement ce que vous obtenez.",
  },
  {
    icon: Infinity,
    title: "Utilisation illimitée",
    description:
      "Accès complet au logiciel, sans limites de temps ou de fonctionnalités principales.",
  },
];

export default function WhyFree() {
  return (
    <section className="relative bg-gradient-to-br from-[#45acab] via-[#3d9b9a] to-[#358989] py-12 sm:py-16 lg:py-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <MaxWidthWrapper className="relative z-10">
        {/* Header Section */}
        <div className="text-center sm:text-left mb-12 lg:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Pourquoi c'est gratuit ?
          </h2>
          <p className="text-base sm:text-lg text-gray-100/90 max-w-2xl mx-auto sm:mx-0 leading-relaxed">
            Nous croyons que les petites entreprises méritent des outils
            puissants sans étiquette de prix élevée. Notre logiciel est conçu
            pour vous aider à digitaliser vos opérations, sans contraintes
            financières.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group flex flex-col sm:flex-row items-start gap-4 lg:gap-6"
              >
                {/* Icon Container */}
                <div className="flex-shrink-0 w-14 h-14 lg:w-16 lg:h-16 flex items-center justify-center rounded-xl lg:rounded-2xl bg-white/20 backdrop-blur-sm text-white border border-white/30 group-hover:bg-white/30 transition-all duration-300">
                  <Icon className="w-6 h-6 lg:w-7 lg:h-7" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg lg:text-xl font-semibold text-white mb-2 lg:mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm lg:text-base text-gray-100/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom decorative element */}
        <div className="mt-16 lg:mt-20 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm font-medium">
            <ShieldCheck className="w-4 h-4" />
            100% gratuit, 100% transparent
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
