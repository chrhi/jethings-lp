"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";
import MaxWidthWrapper from "./max-with-wrapper";

export default function FAQ() {
  const t = useTranslations("faq");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: t("questions.pricing.question"),
      answer: t("questions.pricing.answer"),
    },
    {
      question: t("questions.setup.question"),
      answer: t("questions.setup.answer"),
    },
    {
      question: t("questions.support.question"),
      answer: t("questions.support.answer"),
    },
    {
      question: t("questions.payment.question"),
      answer: t("questions.payment.answer"),
    },
    {
      question: t("questions.trial.question"),
      answer: t("questions.trial.answer"),
    },
    {
      question: t("questions.custom.question"),
      answer: t("questions.custom.answer"),
    },
  ];

  const toggleFAQ = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      <MaxWidthWrapper>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t("title")}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="space-y-3 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <button
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-base sm:text-lg font-semibold text-gray-900 flex-1 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5 border-t border-gray-100">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-4">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
