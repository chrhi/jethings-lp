"use client";

import { motion } from "framer-motion";
import MaxWidthWrapper from "./max-with-wrapper";
import {
  Store,
  Building2,
  Warehouse,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const useCases = [
  {
    id: "retail",
    name: "Retail Stores",
    icon: Store,
    description:
      "Perfect for small boutiques and retail shops. Manage inventory, process sales quickly, and track best-selling products with ease.",
    benefits: [
      "Quick checkout process",
      "Real-time inventory tracking",
      "Sales analytics",
      "Customer management",
    ],
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    bgGradient: "from-blue-50 to-cyan-50",
    iconBg: "bg-blue-500",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    icon: Building2,
    description:
      "Manage internal inventory, control resource consumption, and analyze usage patterns. Ideal for large organizations.",
    benefits: [
      "Multi-location support",
      "Advanced analytics",
      "Role-based access",
      "Custom integrations",
    ],
    gradient: "from-purple-500 via-pink-500 to-rose-500",
    bgGradient: "from-purple-50 to-pink-50",
    iconBg: "bg-purple-500",
  },
  {
    id: "warehouse",
    name: "Warehouses",
    icon: Warehouse,
    description:
      "Track stock movements, control batches, and ensure complete product traceability. Optimize your warehouse operations.",
    benefits: [
      "Batch tracking",
      "Movement history",
      "Complete traceability",
      "Warehouse optimization",
    ],
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    bgGradient: "from-orange-50 to-amber-50",
    iconBg: "bg-orange-500",
  },
];

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

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
};

export default function UseCases() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#45acab]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <MaxWidthWrapper className="relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Perfect for Every{" "}
            <span className="text-[#45acab]">Business Type</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you're a small retail store or a large enterprise, we have
            the perfect solution for your needs
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <motion.div
                key={useCase.id}
                variants={cardVariants}
                className="group relative"
              >
                <div
                  className={`h-full relative overflow-hidden rounded-2xl border border-gray-200 bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}
                >
                  {/* Gradient background overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${useCase.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  ></div>

                  {/* Decorative gradient corner */}
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${useCase.gradient} opacity-10 rounded-bl-full`}
                  ></div>

                  <div className="relative p-8">
                    {/* Icon */}
                    <div className="mb-6 flex items-start justify-between">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${useCase.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="w-10 h-10 rounded-full bg-gray-100 group-hover:bg-[#45acab]/10 flex items-center justify-center transition-colors">
                        <span className="text-sm font-bold text-gray-400 group-hover:text-[#45acab]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#45acab] transition-colors">
                      {useCase.name}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {useCase.description}
                    </p>

                    {/* Benefits */}
                    <div className="space-y-3">
                      {useCase.benefits.map((benefit, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#45acab]/10 flex items-center justify-center">
                            <CheckCircle2 className="w-4 h-4 text-[#45acab]" />
                          </div>
                          <span className="text-sm text-gray-700">
                            {benefit}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Learn more link */}
                    <div className="mt-6 pt-6 border-t border-gray-200 group-hover:border-[#45acab]/20 transition-colors">
                      <div className="flex items-center gap-2 text-[#45acab] font-medium text-sm group-hover:gap-3 transition-all">
                        <span>Learn more</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>

                  {/* Hover effect border */}
                  <div
                    className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#45acab]/20 transition-all duration-500 pointer-events-none`}
                  ></div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </MaxWidthWrapper>
    </section>
  );
}
