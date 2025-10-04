"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import CustomButton from "@/app/components/customButton/CustomButton";
import Logo from "@/app/components/logo/logo";

interface NavBarType {
    mobile?: boolean;
}

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const changeLanguage = (locale: string) => {
        const newPath = pathname.replace(/^\/(en|fa)/, `/${locale}`);
        router.push(newPath);
        setIsOpen(false);
    };

    return (
        <header
            className="fixed top-0 w-full h-20 bg-[#0d0c36] flex text-white
        items-center px-4 z-50  animate-slideDown"
            key={"siteHeader"}
            dir="rtl"
        >

            {/* موبایل */}
            <div className="flex md:hidden w-full items-center justify-evenly">
                {/* دکمه همبرگر / ضربدر */}
                <button
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="p-2 bg-transparent text-white rounded-md w-12 h-12 flex items-center justify-center"
                >
                    {isOpen ? (
                        <X className="w-8 h-8 cursor-pointer" />
                    ) : (
                        <Menu className="w-8 h-8 cursor-pointer" />
                    )}
                </button>

                {/* لوگو */}
                <Logo width={170} height={63} />
            </div>

            {/* منو موبایل */}

            <div
                className={`absolute top-20 left-1/2 transform -translate-x-1/2 w-[95%] overflow-hidden bg-[#0d0c36] md:hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <NavBarMenu mobile={true} />
            </div>






            {/* دسکتاپ */}
            <div className="hidden md:flex items-center gap-36 justify-center w-full">
                <CustomButton clipPath="--clip-path-3" text="Join Our Team" />
                <NavBarMenu />

                <div className="mx-5">
                    <Logo width={160} height={63} />
                </div>
            </div>
        </header>
    );
}

function NavBarMenu({ mobile = false }: NavBarType) {
    const pathname = usePathname();
    const routes = [
        { name: "HOME", href: `#` },
        { name: "TOURNOMENT", href: `#` },
        { name: "NEWS", href: `/#` },
        { name: "CONTACT", href: `#` },
    ];

    return (
        <nav
            className={`flex  ${mobile
                ? "flex-col gap-4 w-full p-4 "
                : "flex-row gap-6 items-center"
                } text-base font-semibold`}
        >
            <ul
                className={`flex w-full ${mobile
                    ? "flex-col items-start gap-5  "
                    : "flex-row items-center gap-6"
                    }`}
            >
                {routes.map((item, index) => {
                    const isActive = pathname === item.href;
                    return (
                        <li key={index}
                            className={
                                ` ${mobile ? "border-b-[1px] border-[hsla(267,100%,63%,0.3)] w-full flex flex-row items-center justify-end " :
                                    "border-none"} `
                            }>
                            <Link
                                href={item.href}
                                className={
                                    isActive
                                        ? "active-menu flex items-center gap-1"
                                        : "group menu_a_tag flex items-center gap-1"
                                }
                            >
                                <span >{item.name}</span>
                                <span className="menu_hover_animate"></span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

