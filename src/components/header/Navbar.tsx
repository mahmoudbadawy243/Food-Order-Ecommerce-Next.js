import { Routes } from "@/constants/enums";
import Link from "../link";

export default function Navbar() {

    const links = [
    {
        id: crypto.randomUUID(),
        title: 'menu',
        href: Routes.MENU,
        },
        {
        id: crypto.randomUUID(),
        title: 'about',
        href: Routes.ABOUT,
        },
        {
        id: crypto.randomUUID(),
        title: 'contact',
        href: Routes.CONTACT,
    },
    ];

    
    return (
    <nav>
        <ul>
            {links.map((link) => (
                <li key={link.id}>
                    <Link href={`/${link.href}`}> {link.title} </Link>
                </li>
            ))}
        </ul>
    </nav>
)
}
