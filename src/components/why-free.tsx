import { ShieldCheck, CreditCard, Infinity, Eye, Sparkles, Zap } from "lucide-react";
import MaxWidthWrapper from "./max-with-wrapper";


const reasons = [
  {
    icon: ShieldCheck,
    title: "Confiance et transparence",
    description:
      "Nous croyons que les petites entreprises méritent des outils puissants sans prix exorbitants. Notre objectif est de vous aider à grandir.",
    stat: "100%",
    statLabel: "Transparent"
  },
  {
    icon: CreditCard,
    title: "Aucune carte bancaire requise",
    description:
      "Pas besoin d'ajouter une carte bancaire pour commencer. Vous pouvez utiliser le logiciel immédiatement.",
    stat: "0€",
    statLabel: "Pour démarrer"
  },
  {
    icon: Eye,
    title: "Pas de frais cachés",
    description:
      "Zéro frais cachés, zéro abonnement imprévu. Vous savez exactement ce que vous obtenez.",
    stat: "0",
    statLabel: "Frais cachés"
  },
  {
    icon: Infinity,
    title: "Utilisation illimitée",
    description:
      "Accès complet au logiciel, sans limites de temps ou de fonctionnalités principales.",
    stat: "∞",
    statLabel: "Possibilités"
  },
];

export default function WhyFree() {
  return (
    <section className="relative bg-gradient-to-br from-black via-gray-900 to-black py-16 sm:py-20 lg:py-28 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <MaxWidthWrapper className="relative z-10">
        {/* Header Section with badge */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-400 text-sm font-medium mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            Gratuité totale
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            Pourquoi c'est{" "}
            <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent animate-pulse">
              100% gratuit
            </span>
            {" "}?
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Nous croyons que les petites entreprises méritent des outils
            puissants sans étiquette de prix élevée. Notre logiciel est conçu
            pour vous aider à digitaliser vos opérations, sans contraintes
            financières.
          </p>
        </div>

        {/* Features Grid with enhanced cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-8 hover:border-teal-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/10 hover:-translate-y-1"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/0 to-cyan-500/0 group-hover:from-teal-500/5 group-hover:to-cyan-500/5 transition-all duration-500"></div>
                
                <div className="relative">
                  {/* Icon and stat row */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-shrink-0 w-14 h-14 lg:w-16 lg:h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-500/30 text-teal-400 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <Icon className="w-7 h-7 lg:w-8 lg:h-8" />
                    </div>
                    
                    {/* Stat badge */}
                    <div className="text-right">
                      <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                        {item.stat}
                      </div>
                      <div className="text-xs text-gray-500 font-medium">
                        {item.statLabel}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-base text-gray-400 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Hover indicator */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-teal-500 to-cyan-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="relative">
          <div className="bg-gradient-to-r from-teal-500/10 via-cyan-500/10 to-teal-500/10 backdrop-blur-xl rounded-3xl border border-teal-500/20 p-8 lg:p-12 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Zap className="w-6 h-6 text-teal-400" />
              <h3 className="text-2xl lg:text-3xl font-bold text-white">
                Prêt à commencer ?
              </h3>
            </div>
            
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Rejoignez des milliers d'entreprises qui font confiance à notre solution gratuite pour digitaliser leurs opérations.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-teal-500/50">
                <span className="relative z-10">Commencer gratuitement</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <ShieldCheck className="w-5 h-5 text-teal-400" />
                <span>Aucune carte bancaire requise</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-black/50 backdrop-blur-sm border border-gray-800 rounded-full text-gray-400 text-sm font-medium">
            <ShieldCheck className="w-4 h-4 text-teal-400" />
            100% gratuit · 100% transparent · 0% de frais cachés
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}