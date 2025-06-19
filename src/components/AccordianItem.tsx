"use client";

import { useRef, useEffect, useState } from "react";

interface AccordionItemProps {
    index: number;
    title: string;
    content: string;
    isOpen: boolean;
    onToggle: (index: number) => void;
}

export default function AccordionItem({
    index,
    title,
    content,
    isOpen,
    onToggle,
}: AccordionItemProps) {
    const contentRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState("0px");

    useEffect(() => {
        if (contentRef.current) {
            setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
        }
    }, [isOpen]);

    return (
        <div className="flex flex-col gap-2 w-full border p-4 rounded-md transition-all">
            <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => onToggle(index)}
            >
                <h4 className="text-2xl tracking-wide font-light">{title}</h4>
                <svg
                    className={`w-6 h-6 transform transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                    }`}
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M5 15H25M15 5V25"
                        stroke="#2D3B36"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>

            <div
                ref={contentRef}
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: height }}
            >
                <p className="mt-3">{content}</p>
            </div>
        </div>
    );
}
