import Link from "../link";
import { Routes } from "@/constants/enums";
import Navbar from "./Navbar";
import CartButton from './CartButton';

export default function Header() {
    return (
        <header className="py-4 md:py-6">
            <div className="container flex items-center justify-between">
                <Link href={Routes.ROOT} className="text-primary font-semibold text-2xl">Pizzza</Link>
                <Navbar />
                <CartButton />
            </div>
        </header>
)
}
