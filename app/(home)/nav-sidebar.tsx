import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
}from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";

interface NavbarItems {
    href: string;
    children: React.ReactNode;
}

interface Props {
    items:NavbarItems[];
    open: boolean;
    onOpenChange: (open: boolean) => void;
}
export const NavSidebar = ({items, open, onOpenChange}: Props) => {
    return (
        <div>
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent side="left" className="p-0 transition-none"> 
        </Sheet>
        </div>
    );
};