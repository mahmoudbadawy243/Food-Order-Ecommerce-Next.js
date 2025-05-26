import CartItem from "./_components/CartItem";
import Checkout from "./_components/Checkout";

export default function Cartpage() {
  return (
    <main>
      <section className='section-gap'>
        <div className="container">
          <h1 className="text-primary text-center text-4xl font-bold mb-10">Cart</h1>
        
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <CartItem />
            <Checkout />
        </div>
        </div>

      </section>
    </main>
  )
}
