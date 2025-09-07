"use client";

import MaxWidthWrapper from "./max-with-wrapper";
import { Store, Building2, ShoppingBag, Warehouse } from "lucide-react";

const useCases = [
  {
    id: "retail",
    name: "Magasins de détail",
    icon: Store,
    description:
      "Les petites boutiques peuvent gérer leur stock, enregistrer les ventes rapidement et suivre les produits les plus vendus.",
    color: "bg-[#45acab]",
    bgPattern: "bg-[#45acab]/20",
  },
  {
    id: "supermarche",
    name: "Supermarchés",
    icon: ShoppingBag,
    description:
      "Les supermarchés peuvent gérer plusieurs caisses, suivre les promotions et générer des rapports de ventes détaillés.",
    color: "bg-[#45acab]",
    bgPattern: "bg-[#45acab]/20",
  },
  {
    id: "entreprises",
    name: "Entreprises",
    icon: Building2,
    description:
      "Les entreprises peuvent gérer leur inventaire interne, contrôler les entrées/sorties et analyser la consommation des ressources.",
    color: "bg-[#45acab]",
    bgPattern: "bg-[#45acab]/20",
  },
  {
    id: "entrepots",
    name: "Entrepôts",
    icon: Warehouse,
    description:
      "Les entrepôts peuvent suivre les mouvements de stock, contrôler les lots et assurer la traçabilité complète des produits.",
    color: "bg-[#45acab]",
    bgPattern: "bg-[#45acab]/20",
  },
];

export default function UseCases() {
  return (
    <MaxWidthWrapper className="my-16 h-fit ">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
        Cas d'utilisation
      </h2>

      <div className="relative overflow-y-hidden pb-2">
        {/* Decorative background elements */}
        {/* <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute top-40 right-20 w-40 h-40 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-20 left-20 w-36 h-36 bg-gradient-to-r from-emerald-200 to-teal-200 rounded-full blur-3xl opacity-30"></div>
        </div> */}

        {/* Creative zigzag layout */}
        <div className="space-y-10 h-fit">
          {useCases.map((uc, index) => {
            const Icon = uc.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={uc.id}
                className={`flex ${
                  isEven ? "flex-row" : "flex-row-reverse"
                } items-center gap-8 md:gap-16 group`}
              >
                {/* Card */}
                <div
                  className={`flex-1 max-w-lg ${
                    isEven ? "ml-0 md:ml-8" : "mr-0 md:mr-8"
                  }`}
                >
                  <div
                    className={`relative overflow-hidden rounded-lg bg-[#45acab]/20 border-2 border-white/50  transition-all `}
                  >
                    {/* Animated gradient overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${uc.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
                    ></div>

                    <div className="relative p-8">
                      {/* Floating icon */}
                      <div
                        className={`absolute -top-4 ${
                          isEven ? "-right-4" : "-left-4"
                        } w-16 h-16 bg-gradient-to-r ${
                          uc.color
                        } rounded-2xl flex items-center justify-center shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-500`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      <div className="mt-4">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 transition-all duration-300">
                          {uc.name}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {uc.description}
                        </p>
                      </div>
                    </div>

                    {/* Decorative elements */}
                    <div
                      className={`absolute bottom-0 ${
                        isEven ? "left-0" : "right-0"
                      } w-24 h-24 bg-gradient-to-r ${
                        uc.color
                      } rounded-full blur-2xl opacity-10 transform translate-y-8 ${
                        isEven ? "-translate-x-8" : "translate-x-8"
                      }`}
                    ></div>
                  </div>
                </div>

                {/* Connecting line */}
                <div className="hidden md:block relative">
                  <div
                    className={`w-24 h-1 bg-gradient-to-r ${uc.color} rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-500`}
                  >
                    <div
                      className={`absolute top-1/2 ${
                        isEven ? "right-0" : "left-0"
                      } w-4 h-4 bg-gradient-to-r ${
                        uc.color
                      } rounded-full transform -translate-y-1/2 ${
                        isEven ? "translate-x-2" : "-translate-x-2"
                      } group-hover:scale-150 transition-transform duration-500`}
                    ></div>
                  </div>
                </div>

                {/* Number indicator */}
                <div className="flex-shrink-0">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r bg-[#45acab] rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300`}
                  >
                    <span className="text-2xl font-bold text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Animated connecting path */}
        <svg className="absolute inset-0 w-full h-full -z-10 overflow-visible opacity-20">
          <defs>
            <linearGradient
              id="pathGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="25%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
          </defs>
          <path
            d="M100 100 Q300 50 500 150 T900 100 Q1100 200 1300 150"
            stroke="url(#pathGradient)"
            strokeWidth="3"
            fill="none"
            strokeDasharray="10,5"
            className="animate-pulse"
          />
        </svg>
      </div>
    </MaxWidthWrapper>
  );
}
