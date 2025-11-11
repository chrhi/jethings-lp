"use client";

import { motion } from "framer-motion";
import MaxWidthWrapper from "./max-with-wrapper";
import {
  ShoppingCart,
  Cloud,
  Building2,
  Rocket,
  Smartphone,
  Briefcase,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const useCases = [
  {
    id: "ecommerce",
    name: "E-commerce Solutions",
    icon: ShoppingCart,
    description:
      "Complete online store platforms with payment integration, inventory management, and seamless shopping experiences that drive sales.",
    benefits: [
      "Payment gateway integration",
      "Inventory management",
      "Order processing system",
      "Customer dashboard",
    ],
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    bgGradient: "from-blue-50 to-cyan-50",
    iconBg: "bg-blue-500",
  },
  {
    id: "saas",
    name: "SaaS Applications",
    icon: Cloud,
    description:
      "Scalable software-as-a-service platforms with subscription management, multi-tenancy, and cloud infrastructure for rapid growth.",
    benefits: [
      "Subscription management",
      "Multi-tenant architecture",
      "Scalable infrastructure",
      "Analytics dashboard",
    ],
    gradient: "from-purple-500 via-pink-500 to-rose-500",
    bgGradient: "from-purple-50 to-pink-50",
    iconBg: "bg-purple-500",
  },
  {
    id: "enterprise",
    name: "Enterprise Software",
    icon: Building2,
    description:
      "Custom enterprise solutions with advanced security, role-based access, and integrations that streamline complex business operations.",
    benefits: [
      "Enterprise security",
      "Role-based access control",
      "System integrations",
      "Custom workflows",
    ],
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    bgGradient: "from-orange-50 to-amber-50",
    iconBg: "bg-orange-500",
  },
  {
    id: "startup",
    name: "Startup MVPs",
    icon: Rocket,
    description:
      "Rapid MVP development to validate your idea quickly. Fast, cost-effective solutions that get you to market faster.",
    benefits: [
      "Rapid development",
      "Cost-effective solutions",
      "Quick time-to-market",
      "Scalable foundation",
    ],
    gradient: "from-green-500 via-emerald-500 to-teal-500",
    bgGradient: "from-green-50 to-emerald-50",
    iconBg: "bg-green-500",
  },
  {
    id: "mobile",
    name: "Mobile Applications",
    icon: Smartphone,
    description:
      "Native and cross-platform mobile apps for iOS and Android. Engaging user experiences that keep users coming back.",
    benefits: [
      "Native performance",
      "Cross-platform support",
      "Push notifications",
      "Offline capabilities",
    ],
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    bgGradient: "from-indigo-50 to-purple-50",
    iconBg: "bg-indigo-500",
  },
  {
    id: "custom",
    name: "Custom Business Tools",
    icon: Briefcase,
    description:
      "Tailored software solutions designed for your specific business needs. Automate workflows and boost productivity.",
    benefits: [
      "Custom workflows",
      "Process automation",
      "Data management",
      "Business intelligence",
    ],
    gradient: "from-red-500 via-rose-500 to-pink-500",
    bgGradient: "from-red-50 to-rose-50",
    iconBg: "bg-red-500",
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
            Solutions for Every{" "}
            <span className="text-[#45acab]">Business Need</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            From startups to enterprises, we deliver custom development solutions
            tailored to your unique requirements and goals
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
