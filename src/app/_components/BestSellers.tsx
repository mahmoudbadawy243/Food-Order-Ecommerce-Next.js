import CardItem from "@/components/Card_item";
import MainHeading from "@/components/main-heading";
import Image from "next/image";
export default function BestSellers() {

  const bestSellers = [
    {
      id: crypto.randomUUID(),
      name: 'Product 1',
      description: 'Product 1 description',
      baseprice: 100,
      image: '/assets/images/pizza.png',
    },
    {
      id: crypto.randomUUID(),
      name: 'Product 2',
      description: 'Product 2 description',
      baseprice: 200,
      image: '/assets/images/pizza.png',
    },
    {
      id: crypto.randomUUID(),
      name: 'Product 3',
      description: 'Product 3 description',
      baseprice: 300,
      image: '/assets/images/pizza.png',
    },
  ];
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
