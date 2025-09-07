"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import MaxWidthWrapper from "./max-with-wrapper";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Qu’est-ce que votre logiciel de gestion de stock ?",
      answer:
        "C’est un outil simple et gratuit qui vous permet de suivre vos produits, éviter les ruptures de stock, et gérer vos inventaires en temps réel.",
    },
    {
      question: "Est-ce vraiment gratuit ?",
      answer:
        "Oui, notre logiciel est entièrement gratuit, sans frais cachés et sans carte bancaire requise. Vous pouvez l’utiliser sans limite.",
    },
    {
      question: "Qui peut utiliser ce logiciel ?",
      answer:
        "Il est conçu pour les petites entreprises, les commerçants, les grossistes et même les boutiques en ligne qui veulent simplifier la gestion de leurs stocks.",
    },
    {
      question: "Puis-je accéder à mes données de n’importe où ?",
      answer:
        "Absolument ! Notre solution est basée sur le cloud. Vous pouvez accéder à vos stocks depuis un ordinateur, une tablette ou un smartphone, où que vous soyez.",
    },
    {
      question: "Est-ce que mes données sont sécurisées ?",
      answer:
        "Oui, nous utilisons des technologies de sécurité avancées pour protéger vos données et garantir leur confidentialité.",
    },
    {
      question: "Comment commencer à utiliser le logiciel ?",
      answer:
        "C’est très simple ! Cliquez sur « Rejoindre la liste d’attente » ou « Commencer gratuitement », créez un compte, et commencez à gérer vos stocks immédiatement.",
    },
  ];

  const toggleFAQ = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <MaxWidthWrapper className="py-16 my-8">
      <div>
        {/* Header */}
        <motion.div
          className="text-start mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Foire aux Questions
          </h2>
          <p className="text-gray-600 max-w-4xl">
            Voici les réponses aux questions les plus fréquentes sur notre
            logiciel de gestion de stock gratuit.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Question Button */}
              <motion.button
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
                whileHover={{ backgroundColor: "#f9fafb" }}
                whileTap={{ scale: 0.99 }}
              >
                <span className="text-lg font-medium text-gray-900 flex-1">
                  {faq.question}
                </span>

                {/* Arrow Icon */}
                <motion.div
                  className="ml-4 text-[#3d8cf0]"
                  animate={{
                    rotate: openIndex === index ? 180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.div>
              </motion.button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 border-t border-gray-100">
                      <motion.p
                        className="text-gray-600 leading-relaxed mt-4"
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        {faq.answer}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
