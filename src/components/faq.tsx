"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import MaxWidthWrapper from "./max-with-wrapper";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer comprehensive development services including web development (React, Next.js), mobile app development (iOS, Android, cross-platform), full-stack solutions, custom software development, API development, UI/UX design, cloud solutions, and ongoing maintenance and support.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "We work with modern technologies including React, Next.js, TypeScript, Node.js, Python, and various mobile frameworks. We choose the best technology stack based on your project requirements and business goals.",
    },
    {
      question: "How long does a project take?",
      answer:
        "Project timelines vary based on scope and complexity. A simple website might take 2-4 weeks, while a full-stack application could take 2-6 months. We provide detailed timelines during the initial consultation and keep you updated throughout the development process.",
    },
    {
      question: "Do you provide ongoing support?",
      answer:
        "Yes, we offer comprehensive maintenance and support services. This includes bug fixes, updates, security patches, feature enhancements, and technical support to ensure your systems run smoothly long after launch.",
    },
    {
      question: "What's your development process?",
      answer:
        "We follow an agile development methodology with regular communication and iterative releases. Our process includes discovery and planning, design, development, testing, deployment, and ongoing support. We keep you involved at every stage.",
    },
    {
      question: "Can you work with existing systems?",
      answer:
        "Absolutely! We specialize in integrating with existing systems and can work with your current infrastructure. We can build APIs, create integrations, migrate data, or enhance existing applications to meet your evolving needs.",
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
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-4xl">
            Find answers to common questions about our development services,
            processes, and how we can help transform your business.
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
