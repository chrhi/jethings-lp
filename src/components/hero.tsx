import MaxWidthWrapper from "./max-with-wrapper";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <>
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
              linear-gradient(to right, #000 1px, transparent 1px),
              linear-gradient(to bottom, #000 1px, transparent 1px)
            `,
          backgroundSize: "20px 20px",
        }}
      />

      <MaxWidthWrapper>
        <div className="w-full h-[500px] flex items-center justify-center relative">
          <div className="text-center max-w-4xl mx-auto px-4 relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Gérez votre stock en{" "}
              <span className="text-[#45acab]">toute simplicité</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Optimisez votre inventaire, suivez vos produits en temps réel et
              prenez des décisions éclairées avec notre plateforme intuitive de
              gestion de stock.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button>Rejoindre la liste d'attente</Button>

              <Button variant={"outline"}>Voir la démo</Button>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
}
