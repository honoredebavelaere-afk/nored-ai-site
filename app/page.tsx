import Hero from "@/components/home/Hero";
import ProblemProof from "@/components/home/ProblemProof";
import BeforeAfterSplit from "@/components/home/BeforeAfterSplit";
import AIDemo from "@/components/home/AIDemo";
import ProofBlock from "@/components/home/ProofBlock";
import PricingCTA from "@/components/home/PricingCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemProof />
      <BeforeAfterSplit />
      <AIDemo />
      <ProofBlock />
      <PricingCTA />
    </>
  );
}
