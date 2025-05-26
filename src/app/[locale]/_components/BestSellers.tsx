import CardItem from "@/components/Card_item";
import MainHeading from "@/components/main-heading";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import { db } from "@/lib/prisma";
import getTrans from "@/lib/translation";
import { getBestSellers } from "@/server/db/product";
// import Image from "next/image";


export default async function BestSellers() {
  
  // get bestSellers through caching
  const bestSellers = await getBestSellers()

  const locale = await getCurrentLocale();
  const { home } = await getTrans(locale);
  const { bestSeller } = home;

  return (
    <section className='section-gap'>
      <div className='container'>
        <div className="text-center mb-4">
        <MainHeading subTitle={bestSeller.checkOut} title={bestSeller.OurBestSellers} />
        </div>
        <CardItem items={bestSellers} />
      </div>
    </section>
  )
}
