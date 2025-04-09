import Link from "../link";
import { Routes } from "@/constants/enums";
import Navbar from "./Navbar";

export default function Header() {
    return (
        <header>
            <div className="container">
                <Link href={Routes.ROOT} >Pizzza</Link>
                <Navbar />
            </div>
        </header>
)
}
