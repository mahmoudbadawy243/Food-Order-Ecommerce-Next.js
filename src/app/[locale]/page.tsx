import { db } from "@/lib/prisma";
import BestSellers from "./_components/BestSellers";
import Hero from "./_components/Hero";

export default async function Home() {
  const products = await db.product.findMany()

  return (
    <main>
      <Hero />
      <BestSellers />
    </main>
  );
}
