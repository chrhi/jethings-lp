"use client";

import MaxWidthWrapper from "./max-with-wrapper";
import {
  Boxes,
  ShoppingCart,
  BarChart3,
  Users,
  Zap,
  Shield,
  Globe,
  TrendingUp,
  Clock,
  Smartphone,
} from "lucide-react";

const features = [
  {
    id: "stock",
    name: "Stock Management",
    description:
      "Real-time inventory tracking with automated alerts and warehouse management",
    icon: Boxes,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    id: "pos",
    name: "Point of Sale",
    description:
      "Fast, intuitive checkout system with payment processing and receipt management",
    icon: ShoppingCart,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    id: "analytics",
    name: "Analytics & Reports",
    description:
      "Comprehensive sales reporting and business intelligence dashboard",
    icon: BarChart3,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    id: "users",
    name: "User Management",
    description:
      "Role-based access control and team collaboration tools",
    icon: Users,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    id: "performance",
    name: "Lightning Fast",
    description:
      "Optimized performance with instant updates and seamless synchronization",
    icon: Zap,
    color: "from-yellow-500 to-amber-500",
    bgColor: "bg-yellow-50",
    iconColor: "text-yellow-600",
  },
  {
    id: "security",
    name: "Secure & Reliable",
    description:
      "Enterprise-grade security with encrypted data and regular backups",
    icon: Shield,
    color: "from-indigo-500 to-blue-500",
    bgColor: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },
  {
    id: "integration",
    name: "Easy Integration",
    description:
      "Connect with your favorite tools and platforms seamlessly",
    icon: Globe,
    color: "from-teal-500 to-cyan-500",
    bgColor: "bg-teal-50",
    iconColor: "text-teal-600",
  },
  {
    id: "scalability",
    name: "Scalable Growth",
    description:
      "Grow your business without limits with our scalable infrastructure",
    icon: TrendingUp,
    color: "from-rose-500 to-pink-500",
    bgColor: "bg-rose-50",
    iconColor: "text-rose-600",
  },
];

export default function FeaturesPreviews() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50/50">
      <MaxWidthWrapper>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features for{" "}
            <span className="text-[#45acab]">Modern Commerce</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to manage your business efficiently and scale
            with confidence
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.id} className="group relative">
                <div
                  className={`h-full p-6 rounded-2xl border-2 border-transparent bg-white hover:border-[#45acab]/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${feature.bgColor} bg-opacity-50`}
                >
                  {/* Icon */}
                  <div className="mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#45acab] transition-colors">
                    {feature.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-4 p-6 rounded-xl bg-white border border-gray-200">
            <div className="w-10 h-10 rounded-lg bg-[#45acab]/10 flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5 text-[#45acab]" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">
                24/7 Support
              </h4>
              <p className="text-sm text-gray-600">
                Get help whenever you need it with our round-the-clock support
                team.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 rounded-xl bg-white border border-gray-200">
            <div className="w-10 h-10 rounded-lg bg-[#45acab]/10 flex items-center justify-center flex-shrink-0">
              <Smartphone className="w-5 h-5 text-[#45acab]" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">
                Mobile Ready
              </h4>
              <p className="text-sm text-gray-600">
                Access your business from anywhere with our mobile-first design.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 rounded-xl bg-white border border-gray-200">
            <div className="w-10 h-10 rounded-lg bg-[#45acab]/10 flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-5 h-5 text-[#45acab]" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">
                Data-Driven
              </h4>
              <p className="text-sm text-gray-600">
                Make informed decisions with real-time analytics and insights.
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
