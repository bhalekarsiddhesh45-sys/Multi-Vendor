
import Link from "next/link";
import {Poppins} from "next/font/google";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
//import { usePathname } from "next/navigation";

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["700"],
});

interface NavbarItemProps {
    href: string;
    children: React.ReactNode;
    isActive?: boolean;
}   
 const NavbarItem = ({href, children, isActive}: NavbarItemProps) => {
    return (
        <Button
        asChild
        variant="outline"
        className={cn("bg-transparent rounded-full hover:border-primary border-transparent", 
        isActive && "bg-black text-white hover:bg-black/90 hover:text-white"
        )}>
            <Link href={href}>
                {children}
            </Link>
        </Button>
    );
};

const navbarItems = [
    { href: "/", children: "Home" },
    { href: "/about", children: "About Us"},
    { href: "/featured", children: "featured" },
    { href: "/pricing", children: "Pricing" },
    { href: "/contact", children: "Contact Us" },
];

export const navbar = () => {
   // const pathname = usePathname(
    // );
};

export const Navbar = () => {
    return (
        <nav className="h-20 flex border-b justify-between font-medium bg-white">
            <Link href="/" className="pl-6 flex items-center">
            <span className={`${poppins.className} text-5xl font-semibold`}>
                 Silicon Friends
            </span>
            </Link>

            <div className="items-center gap-4 hidden lg:flex">
                {navbarItems.map((item) => (
                    <NavbarItem key={item.href}
                    href={item.href} >
                     {item.children}       
                    </NavbarItem>
                    ))}
            </div>
            </nav>
        );
};