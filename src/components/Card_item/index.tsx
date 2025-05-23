import CardItemContent from "../Card_item/Card_item_content";
import { ProductWithItsRelations } from "@/types/product";


export default function CardItem({items}: {items: ProductWithItsRelations[]}) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {items.map((item: any) => (
            <CardItemContent key={item.id} item={item} />
          ))}
        </ul>
  )
}
