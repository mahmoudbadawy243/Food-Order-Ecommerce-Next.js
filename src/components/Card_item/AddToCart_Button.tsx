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


export default function AddToCart_Button({ item }: { item: ProductWithItsRelations }) {
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
              <ChooseSize sizes={item.sizes} />
            </div>
            <div>
              <Label htmlFor="extra" className="text-lg font-bold">Any Extras ?</Label>
              <ChooseExtra extras={item.extras} />
            </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="w-full h-10 rounded-full">Add To Cart</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>

    </>
  )
}


function ChooseSize({sizes }: {sizes: Size[]}) {
  return (
    <RadioGroup defaultValue="comfortable">
      {sizes.map((size) => (
        <div className="flex items-center space-x-2" key={size.id}>
          <RadioGroupItem value={size.name} id={size.id} className="border-primary"/>
          <Label htmlFor={size.id}> {size.name} = ${size.price} </Label>
        </div>
      ))}
    </RadioGroup>
  )
}

function ChooseExtra({extras }: {extras: Extra[]}) {
  return (
    <>
      {extras.map((extra) => (
        <div className="space-y-2 space-x-2" key={extra.id}>
          <Checkbox className="border-primary" id={extra.id}  />
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
