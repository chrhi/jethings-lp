import FeaturesPreviews from "@/components/features-previews";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import UseCases from "@/components/use-case";
import WhyFree from "@/components/why-free";

export default function Page() {
  return (
    <>
      <Hero />
      <FeaturesPreviews />
      <WhyFree />
      <UseCases />
      <Footer />
    </>
  );
}
