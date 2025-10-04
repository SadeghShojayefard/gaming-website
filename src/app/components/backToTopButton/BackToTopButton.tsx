"use client"
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

export default function BackToTopButton() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 200) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <a
            href="#"
            className={`
        fixed right-5 bottom-10 z-50 grid place-items-center overflow-hidden
        w-[50px] h-[50px]
        font-semibold text-white text-lg
        transition-all duration-300 ease-in-out
        ${visible ? "opacity-100 scale-100" : "opacity-0 scale-0 pointer-events-none"}
        [background-image:linear-gradient(to_right_bottom,hsl(299,100%,52%),hsl(291,100%,58%),hsl(283,100%,60%),hsl(273,100%,62%),hsl(262,100%,63%),hsl(242,100%,69%),hsl(223,100%,62%),hsl(210,100%,50%),hsl(203,100%,50%),hsl(198,100%,50%),hsl(192,100%,48%),hsl(185,90%,48%))]
        before:content-[''] before:absolute before:top-1/2 before:left-1/2
        before:w-[250%] before:pb-[250%] before:[background-color:hsla(267,100%,63%,1)]
        before:rounded-full before:-z-10 before:transition-transform before:duration-300
        before:translate-x-[-50%] before:translate-y-[-50%] before:scale-0
        focus-visible:before:scale-100
      `}
            style={{ clipPath: `var(--clip-path-8)` }}
        >
            <FaArrowUp />
        </a>
    );
}
