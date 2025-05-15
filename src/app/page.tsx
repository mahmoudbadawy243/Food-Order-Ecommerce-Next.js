import Hero from "./_components/Hero";
import BestSellers from "./_components/BestSellers";
import { db } from "@/lib/prisma";

export default async function Home() {
  const products = await db.product.findMany()

  return (
    <main>
      <Hero />
      <BestSellers />
    </main>
  );
}
