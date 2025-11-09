"use client";

import Image from "next/image";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Features = () => {
  const features = [
    { name: "POS Opening", image: "/app-screenshots/pos-openning.png" },
    { name: "Order Management", image: "/app-screenshots/pos-order-management.png" },
    { name: "POS Shifts", image: "/app-screenshots/pos-shifts.png" },
    { name: "Sync Order", image: "/app-screenshots/sync-order.png" },
    { name: "Purchase Invoice", image: "/app-screenshots/purchase-invoice.png" },
    { name: "Purchase Confirm", image: "/app-screenshots/purchase-confirm.png" },
    { name: "Supplier Table", image: "/app-screenshots/supplier-table.png" },
    { name: "Choose Form", image: "/app-screenshots/chose-fromold-new.png" },
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [api, setApi] = React.useState<any>(null);

  // Track carousel selection
  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrentIndex(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    onSelect(); // Set initial index

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // Get previous 3 images (wrapping around)
  const getPreviousImages = () => {
    const prev = [];
    for (let i = 0; i < 3; i++) {
      const idx = (currentIndex - 3 + i + features.length) % features.length;
      prev.push(features[idx]);
    }
    return prev;
  };

  // Get next 3 images (wrapping around)
  const getNextImages = () => {
    const next = [];
    for (let i = 0; i < 3; i++) {
      const idx = (currentIndex + 1 + i) % features.length;
      next.push(features[idx]);
    }
    return next;
  };

  return (
    <section className="w-full px-4 py-10 ">
      <div className="max-w-6xl mx-auto text-start space-y-4">
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 font-caveat ">POS Features</h2>
        <p className="text-gray-600 max-w-2xl text-start font-caveat text-2xl leading-relaxed">
          A modern and intuitive point of sale experience — built to simplify operations and improve efficiency.
        </p>
      </div>

      {/* Modern layered images section with carousel */}
      <div className="relative mt-20 flex justify-center items-center group">
        {/* Left faint images */}
        <div className="hidden md:flex absolute -left-24 top-1/2 -translate-y-1/2 space-x-[-60px]">
          {getPreviousImages().map((item, i) => (
            <div key={i} className="relative w-[260px] h-[170px] opacity-30 scale-90">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover rounded-xl border border-gray-200 shadow-sm"
              />
            </div>
          ))}
        </div>

        {/* Center main image with carousel */}
        <div className="relative z-10 w-[700px] max-w-full">
          <Carousel
            className="w-full"
            opts={{
              align: "center",
              loop: true,
            }}
            setApi={setApi}
          >
            <CarouselContent>
              {features.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="relative w-full h-[440px] rounded overflow-hidden border border-gray-200 shadow-lg bg-white">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Carousel>
        </div>

        {/* Right faint images */}
        <div className="hidden md:flex absolute -right-24 top-1/2 -translate-y-1/2 space-x-[-60px]">
          {getNextImages().map((item, i) => (
            <div key={i} className="relative w-[260px] h-[170px] opacity-30 scale-90">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover rounded-xl border border-gray-200 shadow-sm"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Text grid */}
      <div className="max-w-5xl mx-auto mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 ">
        {features.map((item, index) => (
          <div key={index} className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              {index === 0 && "Quickly open and initialize your point of sale system."}
              {index === 1 && "Manage and track all orders in real-time."}
              {index === 2 && "Monitor employee shifts with ease."}
              {index === 3 && "Sync orders seamlessly across locations."}
              {index === 4 && "Create and manage purchase invoices effortlessly."}
              {index === 5 && "Confirm purchases before completing transactions."}
              {index === 6 && "Maintain a database of suppliers and vendors."}
              {index === 7 && "Switch between legacy and modern form interfaces."}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
