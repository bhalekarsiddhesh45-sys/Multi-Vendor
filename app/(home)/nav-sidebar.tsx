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
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent side="left" className="p-0 transition-none">
                <SheetHeader className="p-4 border-b">
                    <div className="flex items-center space-x-4">
                        <SheetTitle className="text-lg font-semibold">Navigation</SheetTitle>
                    </div>
                </SheetHeader>
            </SheetContent>
        </Sheet>
        

       
    );
};