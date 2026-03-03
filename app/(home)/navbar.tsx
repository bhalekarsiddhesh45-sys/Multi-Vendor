
import React from "react";
import Link from "next/link";
import {Poppins} from "next/font/google";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import { Dice1 } from "lucide-react";
import { NavSidebar } from "./nav-sidebar";
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

//export const navbar = () => {

export const Navbar = () => {
    const [open, setOpen] = React.useState(True);

    return (
        <nav className="h-20 flex border-b justify-between font-medium bg-white">
            <Link href="/" className="pl-6 flex items-center">
            <span className={`${poppins.className} text-5xl font-semibold`}>
                 Silicon Friends
            </span>
            </Link>
        <NavSidebar items={navbarItems} open={open} onOpenChange={setOpen}/>

            <div className="items-center gap-4 hidden lg:flex">
                {navbarItems.map((item) => (
                    <NavbarItem key={item.href}
                    href={item.href} >
                     {item.children}    
                    </NavbarItem>
                    ))}
            </div>
            <div className="hidden lg:flex"> 
                    <Button 
                    asChild
                    variant="secondary" className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-white hover:bg-yellow-400 transition-colors text-lg">
                        <Link href="/Sign-In">
                              Log in
                        </Link>
                    </Button>
                    <Button asChild variant="outline" className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-white hover:bg-black hover:text-black transition-colors text-lg 
                        isActive && bg-white text-black hover:bg-black/90 hover:text-white">
                      <Link href="/Sign-Up">
                    Start Selling
                      </Link>
                    </Button>
                    
            </div>
            </nav>
        );
};