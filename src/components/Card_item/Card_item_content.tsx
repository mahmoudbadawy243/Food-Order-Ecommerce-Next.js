import Image from "next/image";
import AddToCart_Button from "./AddToCart_Button";
export default function CardItemContent({item}: {item: any}) {
  return (
    <li className="bg-white p-8 rounded-lg shadow-md">
              <div className="relative w-48 h-48 mx-auto">
                <Image src={item.image} alt={item.name} fill className="object-cover" />
              </div>
              <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <strong className="text-accent font-bold">${item.baseprice}</strong>
              </div>
              <p className="text-sm text-gray-500">{item.description}</p>
              <AddToCart_Button item={item} />
    </li>
  )
}
