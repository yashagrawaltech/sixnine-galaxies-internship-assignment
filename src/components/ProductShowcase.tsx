"use client";

import { useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const ProductShowcase = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = useCallback((direction: "left" | "right") => {
        if (!scrollRef.current) return;
        const scrollAmount = scrollRef.current.offsetWidth * 0.9;
        scrollRef.current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });
    }, []);

    return (
        <section className="xl:px-32 px-4 sm:px-12 gap-8 flex flex-col mt-32">
            <div className="flex flex-col lg:items-center">
                <h2 className="text-4xl tracking-wide lg:text-center max-w-md">
                    Feel Beautiful Inside and Out with Every Product.
                </h2>
                <div className="mt-8 flex gap-4 overflow-x-auto">
                    <Link
                        href={""}
                        className="capitalize shrink-0 px-8 py-3 bg-foreground text-white rounded-full flex items-center justify-center gap-2"
                    >
                        NEW ARRIVAL
                    </Link>
                    <Link
                        href={""}
                        className="capitalize px-8 py-3 border border-foreground text-foreground rounded-full flex items-center justify-center gap-2 shrink-0"
                    >
                        CLEANSING
                    </Link>
                    <Link
                        href={""}
                        className="capitalize px-8 py-3 border border-foreground text-foreground rounded-full flex items-center justify-center gap-2 shrink-0"
                    >
                        ACNE FIGHTER
                    </Link>
                    <Link
                        href={""}
                        className="capitalize px-8 py-3 border border-foreground text-foreground rounded-full flex items-center justify-center gap-2 shrink-0"
                    >
                        ANTI AGING
                    </Link>
                </div>
            </div>

            <div
                ref={scrollRef}
                className="lg:grid lg:grid-cols-3 overflow-x-auto flex gap-8 mt-12 scroll-smooth"
            >
                <div className="lg:w-full h-140 flex justify-center z-10 shrink-0 w-[90dvw] sm:w-[60dvw] relative">
                    <Image
                        className="rounded-xl object-cover object-center"
                        src="/b5d506ba564dadaf25df9a99f7c08d02000e2a28.jpg"
                        width={1200}
                        height={900}
                        alt="product-1"
                    />
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 items-center p-2 w-[95%] lg:w-[24dvw] bg-white rounded-md">
                        <div className="w-full flex flex-col justify-between gap-2 pl-1">
                            <h5 className="font-semibold">
                                ALYA SKIN CLEANSER.
                            </h5>
                            <p className="text-sm opacity-90">FROM $29.99</p>
                        </div>
                        <span className="w-16 h-16 bg-[#2D3B361A] p-4 shrink-0">
                            <Image
                                className="w-full h-full rounded-full object-cover object-center"
                                src="/cart-large-2-svgrepo-com 1.svg"
                                width={500}
                                height={500}
                                alt="cart"
                            />
                        </span>
                    </div>
                </div>

                <div className="lg:w-full h-140 flex justify-center z-10 shrink-0 w-[90dvw] sm:w-[60dvw] relative">
                    <Image
                        className="rounded-xl object-cover object-center"
                        src="/cdce7d5f9981ad9b73f089ab3f8cffccc4a6eb76.jpg"
                        width={1200}
                        height={900}
                        alt="product-2"
                    />
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 items-center p-2 w-[95%] lg:w-[24dvw] bg-white rounded-md">
                        <div className="w-full flex flex-col justify-between gap-2 pl-1">
                            <h5 className="font-semibold">RITUAL OF SAKURA.</h5>
                            <p className="text-sm opacity-90">FROM $27.99</p>
                        </div>
                        <span className="w-16 h-16 bg-[#2D3B361A] p-4 shrink-0">
                            <Image
                                className="w-full h-full rounded-full object-cover object-center"
                                src="/cart-large-2-svgrepo-com 1.svg"
                                width={500}
                                height={500}
                                alt="cart"
                            />
                        </span>
                    </div>
                </div>

                <div className="lg:w-full h-140 flex justify-center z-10 shrink-0 w-[90dvw] sm:w-[60dvw] relative">
                    <Image
                        className="rounded-xl object-cover object-center"
                        src="/fd338a13c8c498ae831bdf0de86301e74edb43f1.jpg"
                        width={1200}
                        height={900}
                        alt="product-3"
                    />
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 items-center p-2 w-[95%] bg-white rounded-md">
                        <div className="w-full flex flex-col justify-between gap-2 pl-1">
                            <h5 className="font-semibold">THE BODY LOTION.</h5>
                            <p className="text-sm opacity-90">FROM $19.99</p>
                        </div>
                        <span className="w-16 h-16 bg-[#2D3B361A] p-4 shrink-0">
                            <Image
                                className="w-full h-full rounded-full object-cover object-center"
                                src="/cart-large-2-svgrepo-com 1.svg"
                                width={500}
                                height={500}
                                alt="cart"
                            />
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex lg:hidden items-center justify-center gap-12">
                <button onClick={() => scroll("left")}>
                    <span className="w-10 h-10 bg-white border rounded-full flex items-center justify-end">
                        <svg
                            className="w-6"
                            viewBox="0 0 41 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538407 7.04738 0.538407 6.65685 0.928932L0.292893 7.29289ZM1 8L1 9L41 9L41 8L41 7L1 7L1 8Z"
                                fill="#2D3B36"
                            />
                        </svg>
                    </span>
                </button>
                <button onClick={() => scroll("right")}>
                    <span className="w-10 h-10 bg-foreground border rounded-full flex items-center justify-start">
                        <svg
                            className="w-6 rotate-180"
                            viewBox="0 0 41 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538407 7.04738 0.538407 6.65685 0.928932L0.292893 7.29289ZM1 8L1 9L41 9L41 8L41 7L1 7L1 8Z"
                                fill="#FEFFF4"
                            />
                        </svg>
                    </span>
                </button>
            </div>
        </section>
    );
};

export default ProductShowcase;
