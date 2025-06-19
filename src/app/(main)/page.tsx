import AccordionList from "@/components/AccordianList";
import BestSellingSection from "@/components/BestSellingSection";
import ProductShowcase from "@/components/ProductShowcase";
import TextScroolReveal from "@/components/TextScroolReveal";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";


const page = async () => {

    await new Promise((resolve) => {
        setTimeout(() => {
            resolve("");
        }, 4000);
    });

    return (
        <div className="w-full overflow-clip">
            <section className="pt-12 relative">
                <div className="w-full xl:px-32 md:px-12 flex md:justify-between lg:grid lg:grid-cols-3 items-center">
                    <div className="w-full flex items-center flex-col">
                        <span className="text-[20dvw] md:absolute md:top-80 md:leading-32 lg:hidden leading-20 font-bold uppercase tracking-tighter md:left-1/2 md:-translate-x-1/2">
                            Glowwww
                            <br />
                            Naturally
                        </span>
                        <p className="md:max-w-xs mt-12 md:mt-0 px-4 md:px-0">
                            <span className="md:ml-12"></span>
                            Transform your skincare routine with premium
                            products that restore, protect, and enhance your
                            natural glow every day.
                        </p>
                    </div>

                    <div className="w-full hidden lg:flex justify-center items-center">
                        <h2 className="inline-block text-6xl font-bold uppercase">
                            Glow
                            <br />
                            Natur-
                            <br />
                            ally
                        </h2>
                    </div>

                    <div className="w-full hidden md:flex justify-end items-center">
                        <Image
                            src="/bfa6cb471def1625f335564f2d78bc0748f6b64c.jpg"
                            width={500}
                            height={500}
                            className="w-80 h-80 lg:w-40 lg:h-40 bg-red-200 rounded-md"
                            alt="bfa6cb471def1625f335564f2d78bc0748f6b64c"
                        />
                    </div>
                </div>

                <div className="w-full flex md:ml-12 md:w-fit lg:ml-0 lg:w-full lg:justify-center md:mt-48 lg:mt-16 mt-16 z-10 relative bottom-2">
                    <Image
                        className="md:w-[60dvw] lg:w-[26dvw] h-[90dvw] lg:h-[30dvw] md:rounded-xl object-cover object-center"
                        src={"/eaf98c86e767898b5d5bf09e2afbcbba14d30f51.png"}
                        width={1200}
                        height={900}
                        alt="eaf98c86e767898b5d5bf09e2afbcbba14d30f51"
                    />
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 items-center w-[90dvw] p-2 md:w-[40dvw] lg:w-[22dvw] bg-white rounded-full">
                        <span className="w-16 h-16 rounded-full border-[2px] border-dotted border-black p-1 shrink-0">
                            <Image
                                className="w-full h-full rounded-full object-cover object-center"
                                src={
                                    "/bfa6cb471def1625f335564f2d78bc0748f6b64c.jpg"
                                }
                                width={500}
                                height={500}
                                alt="bfa6cb471def1625f335564f2d78bc0748f6b64c"
                            />
                        </span>
                        <p>
                            While giving you an invigorating cleansing
                            experience.
                        </p>
                    </div>
                </div>

                <div className="w-full md:hidden flex justify-center mt-16 z-10 relative bottom-0">
                    <Image
                        className="md:w-[26dvw] h-[90dvw] lg:h-[30dvw] lg:rounded-xl object-cover object-center"
                        src={"/bfa6cb471def1625f335564f2d78bc0748f6b64c.jpg"}
                        width={1200}
                        height={900}
                        alt="bfa6cb471def1625f335564f2d78bc0748f6b64c"
                    />
                </div>

                <div className="absolute flex justify-center top-1/2 -translate-y-1/2 mt-48 md:mt-0 md:top-auto md:-translate-y-0 md:-bottom-12 w-full">
                    <Link
                        href={""}
                        className="capitalize px-8 py-2 bg-foreground absolute -top-24 md:right-12 w-fit lg:left-32 text-white rounded-full"
                    >
                        shop now
                    </Link>
                    <span className="block text-[21dvw] relative leading-none text-center font-bold uppercase tracking-tighter -z-0">
                        SKINCARE
                    </span>
                </div>
            </section>

            <div className="bg-[#FEFFF4] pb-32">
                <section>
                    <TextScroolReveal
                        text={`Experience the ultimate in skincare with our expertly formulated products,
                        crafted to nourish, protect, and rejuvenate your skin. Combining the finest
                        natural ingredients with advanced science, our collection ensures every
                        skin type can achieve a radiant, healthy glow. Embrace your beauty with
                        confidence every day. Experience the ultimate in skincare with our 
                        expertly formulated products, crafted to nourish, protect, and rejuvenate
                        your skin.`}
                    />
                </section>

                <section className="flex flex-col lg:grid lg:grid-cols-8 lg:px-12 xl:px-32 gap-24">
                    <div className="lg:col-span-4 flex flex-col items-start px-4 sm:px-12 lg:px-0">
                        <Link
                            href={""}
                            className="capitalize px-5 py-3 border text-foreground border-foreground rounded-full flex items-center justify-center gap-2"
                        >
                            <span className="w-4 h-4 rounded-full bg-foreground"></span>{" "}
                            Why Our Products
                        </Link>

                        <div className="mt-12 text-foreground xl:max-w-2xl">
                            <h2 className="text-4xl tracking-wide font-light">
                                YOUR SKIN DESERVES THE BEST CARE.
                            </h2>
                            <p className="mt-4">
                                Discover a curated collection of skincare
                                products designed to rejuvenate, protect, and
                                pamper your skin. Explore our rage crafted with
                                love backed by science, and inspired by nature.
                            </p>

                            <div className="mt-16 flex flex-col gap-12">
                                <div className="flex gap-6">
                                    <h3 className="text-4xl shrink-0 text-grdient">
                                        01
                                    </h3>
                                    <div>
                                        <h4 className="text-2xl tracking-wide font-light">
                                            Bio Ingredients
                                        </h4>
                                        <p className="mt-2">
                                            Get naturally beautiful and
                                            transform with our bio ingredients
                                            creams for healthy, radiant skin.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <h3 className="text-4xl shrink-0 text-grdient">
                                        02
                                    </h3>
                                    <div>
                                        <h4 className="text-2xl tracking-wide font-light">
                                            Everything Natural
                                        </h4>
                                        <p className="mt-2">
                                            Pure ingredients for pure skin. The
                                            Perfect solution for your skin care
                                            needs.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <h3 className="text-4xl shrink-0 text-grdient">
                                        03
                                    </h3>
                                    <div>
                                        <h4 className="text-2xl tracking-wide font-light">
                                            All Handmade
                                        </h4>
                                        <p className="mt-2">
                                            Made with love and care. Just for
                                            you. Give your skin the tender
                                            loving care it deserves.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-4 lg:h-full h-[70dvw]">
                        <div className="w-full h-full flex justify-center z-10 relative">
                            <Image
                                className="lg:rounded-xl h-full object-cover object-center"
                                src={
                                    "/5617a13221609fb0ba6cd721b235ba7e9b1ffa06.png"
                                }
                                layout="fill"
                                alt="5617a13221609fb0ba6cd721b235ba7e9b1ffa06"
                            />
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 items-center p-2 lg:w-[25dvw] xl:w-[20dvw] sm:w-[50dvw] w-[90%] bg-white rounded-full">
                                <span className="w-16 h-16 rounded-full border-[2px] border-dotted border-black shrink-0 flex items-center justify-center">
                                    <span className="w-14 h-14 rounded-full bg-foreground p-3">
                                        <Image
                                            className="w-full h-full rounded-full object-cover object-center"
                                            src={"/award-svgrepo-com 1.svg"}
                                            width={500}
                                            height={500}
                                            alt="award-svgrepo-com 1"
                                        />
                                    </span>
                                </span>
                                <p>Best Skin Care Product Award Wining</p>
                            </div>
                        </div>
                        <div className="w-full px-4 sm:px-12 lg:px-0 flex items-center justify-between mt-3">
                            <p>Since 2001</p>
                            <p>LEARN MORE</p>
                        </div>
                    </div>
                </section>

                <BestSellingSection />

                <section className="sm:px-12 px-4 xl:px-32 mt-32 flex justify-center">
                    <div className="w-full h-[60dvw] md:h-[40dvw] lg:rounded-md overflow-hidden relative">
                        <Image
                            className="w-full h-full object-cover object-center"
                            src={
                                "/193c7506b5761ba24a86531417253435f11954cb.png"
                            }
                            width={1600}
                            height={900}
                            alt="193c7506b5761ba24a86531417253435f11954cb"
                        />
                        <span className="w-full absolute bottom-0 p-8 bg-gradient flex items-center flex-col gap-8">
                            <h2 className="w-full max-w-4xl text-center text-white text-2xl sm:text-4xl md:text-4xl lg:text-5xl tracking-wide lg:leading-14">
                                Feel Beautiful Inside and Out{" "}
                                <br className="hidden lg:inline" />
                                with Every Product.
                            </h2>

                            <Link
                                href={""}
                                className="capitalize px-8 py-3 bg-white text-foreground rounded-full flex items-center justify-center gap-2"
                            >
                                Shop Now
                            </Link>
                        </span>
                    </div>
                </section>

                <ProductShowcase />

                <section className="lg:grid lg:grid-cols-8 gap-24 flex flex-col-reverse lg:px-12 xl:px-32 mt-32 items-stretch">
                    <div className="lg:col-span-4 h-full">
                        <div className="w-full lg:h-full h-[70dvw] flex justify-center z-10 relative">
                            <Image
                                className="lg:rounded-xl h-full w-full object-cover object-center"
                                src={
                                    "/fd338a13c8c498ae831bdf0de86301e74edb43f1.jpg"
                                }
                                layout="fill"
                                alt="fd338a13c8c498ae831bdf0de86301e74edb43f1"
                            />
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 items-center p-2 lg:w-[25dvw] xl:w-[20dvw] sm:w-[50dvw] w-[90%] bg-white rounded-full">
                                <span className="w-16 h-16 rounded-full border-[2px] border-dotted border-black shrink-0 flex items-center justify-center">
                                    <span className="w-14 h-14 rounded-full bg-foreground p-3">
                                        <Image
                                            className="w-full h-full rounded-full object-cover object-center"
                                            src={"/headphone-svgrepo-com 1.svg"}
                                            width={500}
                                            height={500}
                                            alt="headphone-svgrepo-com 1"
                                        />
                                    </span>
                                </span>
                                <p>24/7 We’re Here to Help You</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-4 px-4 sm:px-12 lg:px-0 flex flex-col items-start justify-self-center">
                        <Link
                            href={""}
                            className="capitalize px-5 py-3 border text-foreground border-foreground rounded-full flex items-center justify-center gap-2"
                        >
                            <span className="w-4 h-4 rounded-full bg-foreground"></span>{" "}
                            Frequently Asked Question
                        </Link>

                        <div className="mt-12 text-foreground">
                            <h2 className="text-4xl tracking-wide font-light">
                                Answers to Your Skincare Questions, All in One
                                Place.
                            </h2>

                            <AccordionList />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default page;
