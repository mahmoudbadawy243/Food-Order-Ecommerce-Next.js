import CardItem from "@/components/Card_item";
import MainHeading from "@/components/main-heading";
import { db } from "@/lib/prisma";
// import Image from "next/image";


export default async function BestSellers() {
  
  const bestSellers = await db.product.findMany({
    where: {
      order: {
        gt: 0  // Only get products with order > 0
      }
    },
    orderBy: {
  order: 'desc'
},
    take: 3, // limit the number of displaying products to 3
    include: {
      sizes: true,
      extras: true,
    }, 
  })

  

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
