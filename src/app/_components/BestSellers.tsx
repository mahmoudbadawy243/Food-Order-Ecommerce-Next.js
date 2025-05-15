import CardItem from "@/components/Card_item";
import MainHeading from "@/components/main-heading";
import { db } from "@/lib/prisma";
import { getBestSellers } from "@/server/db/product";
// import Image from "next/image";


export default async function BestSellers() {
  
  const bestSellers = await getBestSellers()
  
  return (
    <section className='section-gap'>
      <div className='container'>
        <div className="text-center mb-4">
        <MainHeading title='Best Sellers' subTitle='Best Sellers' />
        </div>
        <CardItem items={bestSellers} />
      </div>
    </section>
  )
}
