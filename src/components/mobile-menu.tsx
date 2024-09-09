import { navLinks } from "@/lib/constants";
import { Sheet, SheetContent, SheetTitle } from "./ui/sheet";
import Link from "next/link";

type MobileMenuProps = {
    isOpen: boolean;
    onClose: () => void;
};

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent>
                <SheetTitle className="mb-4">Menu</SheetTitle>
                <ul className="flex flex-col gap-5 border-y py-4">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <Link
                                href={link.path}
                                className="text-lg capitalize opacity-60 hover:opacity-100 transition-all ease-in-out duration-300"
                                onClick={onClose}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </SheetContent>
        </Sheet>
    )
}

export default MobileMenu