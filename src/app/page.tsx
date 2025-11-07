import FAQ from "@/components/faq";
import FeaturesPreviews from "@/components/features-previews";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import HeroLights from "@/components/hero-lights";
import UseCases from "@/components/use-case";
import WhyFree from "@/components/why-free";

export default function Page() {
  return (
    <>
      <Hero />
      <HeroLights />
      <FeaturesPreviews />
      <WhyFree />
      <UseCases />
      <FAQ />
      <Footer />
    </>
  );
}
