import CardItem from "@/components/Card_item"
import { getProductsByCategory } from "@/server/db/product"


export default async function MenuPage() {
  
  const categories = await getProductsByCategory()
  
  return (
    <main>
      { categories.map((category) => (
          <section key={category.id} className="section-gap">
            <div className="container text-center">
              <h1 className="text-primary font-bold text-4xl italic mb-6">
                {category.name}
              </h1>
              <CardItem items={category.products} />
            </div>
          </section>
        ))
      }
    </main>
  )
}
