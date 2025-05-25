'use client'
import { Routes } from "@/constants/enums";
import Link from "../link";
import { ShoppingCartIcon } from "lucide-react";
import { getCartQuantity } from "@/lib/cartQuantity";
import { useAppSelector } from "@/redux/hooks";
import { selectItemsOfCart } from "@/redux/features/cart/cartSlice";

export default function CartButton() {
  const cart = useAppSelector(selectItemsOfCart)
  const cartQuantity = getCartQuantity(cart)
  return (
    <Link href={`/${Routes.CART}`} className='relative block group'>
      <span className="absolute -top-4 start-4 w-5 h-5 text-sm bg-primary rounded-full text-white text-center"> { cartQuantity }</span>
      <ShoppingCartIcon className="text-accent group-hover:text-primary duration-200 transition-colors !w-6 !h-6"/>
    </Link>
  )
}
