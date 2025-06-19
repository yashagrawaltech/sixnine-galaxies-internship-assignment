"use client";

import { useState } from "react";
import AccordionItem from "./AccordianItem";

// components/AccordionList.tsx
const faq = [
    {
        title: "Are your products safe for sensitive skin?",
        content: `Absolutely! All our products are cruelty-free, and most are vegan.
Check individual product details for specifics.`,
    },
    {
        title: "Are your products cruelty-free?",
        content: `Absolutely! All our products are cruelty-free, and most are vegan.
Check individual product details for specifics.`,
    },
    {
        title: "What’s your return policy?",
        content: `Absolutely! All our products are cruelty-free, and most are vegan.
Check individual product details for specifics.`,
    },
    {
        title: "Do you ship internationally?",
        content: `Absolutely! All our products are cruelty-free, and most are vegan.
Check individual product details for specifics.`,
    },
    {
        title: "How do i choose the right product?",
        content: `Absolutely! All our products are cruelty-free, and most are vegan.
Check individual product details for specifics.`,
    },
];

export default function AccordionList() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };

    return (
        <div className="mt-12 flex flex-col gap-2">
            {faq.map((item, index) => (
                <AccordionItem
                    key={index}
                    index={index}
                    isOpen={openIndex === index}
                    onToggle={handleToggle}
                    title={item.title}
                    content={item.content}
                />
            ))}
        </div>
    );
}
