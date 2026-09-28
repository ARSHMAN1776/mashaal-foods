import type { Metadata } from "next";
import { PremiumMenu } from "@/components/PremiumMenu";

export const metadata: Metadata = {
  title: "Premium Menu Card — Mashaal Food",
  description:
    "The full Mashaal Food menu, presented as a premium printed-style card — pizza, fast foods, shawarma and burgers with every price.",
};

export default function PremiumMenuPage() {
  return <PremiumMenu />;
}
