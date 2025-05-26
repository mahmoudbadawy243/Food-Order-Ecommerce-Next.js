import Link from "../link";
import { Routes } from "@/constants/enums";
import Navbar from "./Navbar";
import CartButton from './CartButton';
import getTrans from "@/lib/translation";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import LanguageSwitcher from "./language-switcher";

export default async function Header() {
    const locale = await getCurrentLocale();
    const {navbar} = await getTrans(locale);

    return (
        <header className="py-4 md:py-6">
            <div className="container flex items-center justify-between">
                <Link href={`/${locale}`} className="text-primary font-semibold text-2xl">Pizzza</Link>
                <Navbar translations={navbar} />
                <LanguageSwitcher />
                <CartButton />
            </div>
        </header>
)
}
