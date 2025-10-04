"use client"
import { useEffect, useState } from "react";

export default function MouseFollowerCircle() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        // تشخیص دقیق دسکتاپ با pointer و hover
        const isFinePointer = window.matchMedia("(pointer:fine)").matches;
        const canHover = window.matchMedia("(hover:hover)").matches;

        const isReallyDesktop = isFinePointer && canHover;
        setIsDesktop(isReallyDesktop);

        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        if (isReallyDesktop) {
            window.addEventListener("mousemove", handleMouseMove);
        }

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    if (!isDesktop) return null;

    return (
        <div
            className={`fixed z-50 pointer-events-none ${isDesktop ? "block" : "hidden"}`}
            style={{
                top: position.y,
                left: position.x,
                width: "25px",
                height: "25px",
                borderRadius: "50%",
                backgroundColor: "hsla(267, 100%, 63%, 0.5)",
                transform: "translate(-50%, -50%)",
            }}
        />
    );
}
