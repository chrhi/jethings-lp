"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import MaxWidthWrapper from "./max-with-wrapper";
import { Button } from "./ui/button";

export default function Hero() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };

  const arrowVariants = {
    hidden: {
      opacity: 0,
      y: -10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 1.2,
        ease: "easeOut",
      },
    },
  };

  const bounceAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

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
        <div className="w-full h-[600px] flex items-center justify-center relative mt-20">
          <motion.div
            className="text-center max-w-4xl mx-auto px-4 relative z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
              //@ts-expect-error this is not an error
              variants={itemVariants}
            >
              Gérez votre stock en{" "}
              <motion.span
                className="text-[#45acab]"
                //@ts-expect-error this is not an error
                variants={itemVariants}
              >
                toute simplicité
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
              //@ts-expect-error this is not an error
              variants={itemVariants}
            >
              Optimisez votre inventaire, suivez vos produits en temps réel et
              prenez des décisions éclairées avec notre plateforme intuitive de
              gestion de stock.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              //@ts-expect-error this is not an error
              variants={itemVariants}
            >
              <Button disabled>Rejoindre la liste d'attente</Button>
              <Button disabled variant={"outline"}>
                Voir la démo
              </Button>
            </motion.div>
          </motion.div>

          {/* Animated down arrow */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            //@ts-expect-error this is not an error
            variants={arrowVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              //@ts-expect-error this is not an error
              animate={bounceAnimation}
              className="cursor-pointer"
            >
              <ChevronDown
                size={32}
                className="text-gray-400 hover:text-[#45acab] transition-colors duration-300"
              />
            </motion.div>
          </motion.div>
        </div>
      </MaxWidthWrapper>
    </>
  );
}
