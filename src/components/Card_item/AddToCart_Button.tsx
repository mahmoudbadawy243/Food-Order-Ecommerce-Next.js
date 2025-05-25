'use client'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Extra, Size } from "@prisma/client"
import { ProductWithItsRelations } from "@/types/product"
import { useState } from "react"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { addItemToCart, deleteItemFromCart, removeItemFromCart, selectItemsOfCart } from "@/redux/features/cart/cartSlice"
import { getItemQuantity } from "@/lib/cartQuantity"

// =================================================================================================

export default function AddToCart_Button({ item }: { item: ProductWithItsRelations }) {
  
  const [selectedSize, setSelectedSize] = useState<Size>();
  const [selectedExtras, setSelectedExtras] = useState<Extra[]>();
  const dispatch = useAppDispatch()
  const cart = useAppSelector(selectItemsOfCart);
  const itemQuantity = getItemQuantity(item.id , cart)

  // ----------------------------------------------------------------------------------------------
  // let totalPrice = item.baseprice;
  let totalPrice = 0;
  if (selectedSize) {
    totalPrice += selectedSize.price;
  }
  if (selectedExtras && selectedExtras.length > 0) {
    for (const extra of selectedExtras) {
      totalPrice += extra.price;
    }
  }
// -------------------------------------------------------------------------------------------------
  const handleAddToCart = () => {
    dispatch(
      addItemToCart({
        basePrice: item.baseprice,
        id: item.id,
        image: item.image,
        name: item.name,
        size: selectedSize,
        extra: selectedExtras,
      })
    );
  };
  // ----------------------------------------------------------------------------------------------
  return (
    <>
    <Dialog>
      <DialogTrigger asChild>
      <Button type="button" size="lg" className=" mt-4 text-white hover:bg-primary/90 rounded-full">Add to Cart</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-h-[80vh] overflow-y-auto">
          <DialogHeader className="flex flex-col items-center justify-center">
            <Image src={item.image} alt={item.name} width={150} height={150} />
          <DialogTitle>{item.name}</DialogTitle>
          <DialogDescription>
            {item.description}
          </DialogDescription>
        </DialogHeader>
          <div className="space-y-8">
            <div>
              <Label htmlFor="size" className="text-lg font-bold">Choose your Size</Label>
              <ChooseSize 
                sizes={item.sizes} 
                selectedSize={selectedSize || item.sizes[0]} 
                setSelectedSize={setSelectedSize as React.Dispatch<React.SetStateAction<Size>>}
              />
            </div>
            <div>
              <Label htmlFor="extra" className="text-lg font-bold">Any Extras ?</Label>
              <ChooseExtra 
                extras={item.extras} selectedExtras={selectedExtras || []} setSelectedExtras={setSelectedExtras as React.Dispatch<React.SetStateAction<Extra[]>>}
              />
            </div>
        </div>
          <DialogFooter>
            {itemQuantity === 0 ?  
              ( <Button type="submit" onClick={handleAddToCart} className="w-full h-10 rounded-full hover:cursor-pointer">Add To Cart {totalPrice}</Button> )
              :
              ( <ChooseQuantity quantity={itemQuantity} item={item} selectedSize={selectedSize!} selectedExtras={selectedExtras!} /> )
            }
        </DialogFooter>
      </DialogContent>
    </Dialog>
    </>
  )
}
// -------------------------------------------------------------------------------------------------
function ChooseSize({ sizes, selectedSize, setSelectedSize }: {
  sizes: Size[], selectedSize: Size, setSelectedSize: React.Dispatch<React.SetStateAction<Size>>
}) {
  return (
    <RadioGroup defaultValue="comfortable">
      {sizes.map((size) => (
        <div className="flex items-center space-x-2" key={size.id}>
          <RadioGroupItem value={selectedSize.name}
            checked={selectedSize.id === size.id}
            onClick={() => setSelectedSize(size)}
            id={size.id} className="border-primary"/>
          <Label htmlFor={size.id}> {size.name} = ${size.price} </Label>
        </div>
      ))}
    </RadioGroup>
  )
}
// ---------------------------------------------------------------------------------------------------
function ChooseExtra({ extras, selectedExtras, setSelectedExtras }: {
  extras: Extra[] , selectedExtras: Extra[] , setSelectedExtras: React.Dispatch<React.SetStateAction<Extra[]>>}) {

  const handleExtra = (extra: Extra) => {
    if (selectedExtras.find((e) => e.id === extra.id)) {
      setSelectedExtras(selectedExtras.filter((e) => e.id !== extra.id))
    } else {
      setSelectedExtras([...selectedExtras, extra])
    }
  }
  return (
    <>
      {extras.map((extra) => (
        <div className="space-y-2 space-x-2" key={extra.id}>
          <Checkbox className="border-primary" id={extra.id}
            onClick={() => handleExtra(extra)}
            checked={Boolean(selectedExtras.find((e) => e.id === extra.id))} />
          <label
            htmlFor={extra.id}
            className=" text-sm text-accent font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-80">
            {extra.name} = ${extra.price}
          </label>
        </div>
      ))}
    </>
  )
}
// ------------------------------------------------------------------------------------------------
const ChooseQuantity = ({
  quantity,
  item,
  selectedExtras,
  selectedSize,
}: {
  quantity: number;
  item: ProductWithItsRelations;
  selectedSize: Size;
  selectedExtras: Extra[];
}) => {
  const dispatch = useAppDispatch();
  return (
    <div className='flex items-center flex-col gap-2 mt-4 w-full'>
      <div className='flex items-center justify-center gap-2'>
        <Button variant='outline' onClick={() => dispatch(removeItemFromCart({ id: item.id }))}>
          -
        </Button>
        <div>
          <span className='text-black'>{quantity} in cart</span>
        </div>
        <Button variant='outline'
                onClick={() => dispatch(addItemToCart({
                basePrice: item.baseprice,
                id: item.id,
                image: item.image,
                name: item.name,
                extra: selectedExtras,
                size: selectedSize,
              })
            )
          }
        >
          +
        </Button>
      </div>
      <Button size='sm' onClick={() => dispatch(deleteItemFromCart({ id: item.id }))} >
        Remove
      </Button>
    </div>
  );
};
