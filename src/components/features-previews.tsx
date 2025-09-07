"use client";

import { useState } from "react";
import MaxWidthWrapper from "./max-with-wrapper";
import { Boxes, ShoppingCart, BarChart3, Users } from "lucide-react";

const features = [
  {
    id: "stock",
    name: "Gestion du stock",
    icon: Boxes,
    preview: "Écran de gestion du stock (image ici)",
  },
  {
    id: "pos",
    name: "Point de vente",
    icon: ShoppingCart,
    preview: "Écran du point de vente (image ici)",
  },
  {
    id: "rapports",
    name: "Rapports et analyses",
    icon: BarChart3,
    preview: "Écran des rapports et analyses (image ici)",
  },
  {
    id: "utilisateurs",
    name: "Gestion des utilisateurs",
    icon: Users,
    preview: "Écran de gestion des utilisateurs (image ici)",
  },
];

export default function FeaturesPreviews() {
  const [activeFeature, setActiveFeature] = useState(features[0]);

  return (
    <MaxWidthWrapper className="mb-4 flex flex-col gap-y-6">
      {/* Tabs */}
      <div className="w-full flex items-center justify-center gap-x-6">
        {features.map((feature) => {
          const Icon = feature.icon;
          const isActive = activeFeature.id === feature.id;
          return (
            <button
              key={feature.id}
              onClick={() => setActiveFeature(feature)}
              className={`w-[150px] h-[110px] cursor-pointer flex flex-col items-center justify-center rounded-2xl border-2 transition-all ${
                isActive
                  ? "bg-[#45acab]/20 border-[#45acab] text-[#45acab]"
                  : "bg-transparent border-[#45acab]/40 text-gray-600 hover:border-[#45acab]"
              }`}
            >
              <Icon className="w-6 h-6 mb-2" />
              <span className="text-sm text-center">{feature.name}</span>
            </button>
          );
        })}
      </div>

      {/* Preview area */}
      <div className="w-full h-[320px] border rounded-2xl bg-[#45acab]/5 flex items-center justify-center text-gray-700">
        {activeFeature.preview}
      </div>
    </MaxWidthWrapper>
  );
}
