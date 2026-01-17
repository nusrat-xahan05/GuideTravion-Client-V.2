"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

export default function StickyNavbarWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        handleScroll(); // initial check
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={clsx(
                "fixed top-0 left-0 w-full z-50 transition-all duration-300",
                scrolled
                    ? "bg-[rgba(255,255,255,0.6)] shadow-md backdrop-blur"
                    : "bg-transparent"
            )}
        >
            {children}
        </header>
    );
}
