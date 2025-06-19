import Link from "next/link";

const Footer = () => {
    return (
        <div className="w-full bg-foreground flex flex-col py-24 pb-56 gap-32 relative overflow-clip text-white px-4 sm:px-12 xl:px-32">
            <div className="grid gap-24 lg:grid-cols-2 w-full break-all">
                <div className="flex flex-col gap-24 w-full">
                    <h2 className="text-4xl max-w-md w-full">
                        Join The Skincare Community Now.
                    </h2>
                    <div className="flex items-center justify-between lg:justify-start gap-12 mt-auto flex-wrap">
                        <Link href={"#"}>Facebook</Link>
                        <Link href={"#"}>Instagram</Link>
                        <Link href={"#"}>YouTube</Link>
                    </div>
                </div>
                <div className="flex flex-col gap-24 w-full">
                    <div className="flex flex-col w-full items-end md:items-start gap-1">
                        <p className="opacity-90">Get in touch</p>
                        <p className="text-4xl">contact.skincare.com</p>
                    </div>
                    <div className="flex items-center justify-between lg:justify-start gap-12 mt-auto flex-wrap">
                        <Link href={"#"}>Terms of Service</Link>
                        <Link href={"#"}>Privacy Policy</Link>
                        <Link href={"#"}>Cookies Policy</Link>
                    </div>
                </div>
            </div>
            <div className="absolute left-0 flex justify-center -bottom-4 sm:-bottom-8 md:-bottom-16 lg:-bottom-24 w-full">
                <span className="block text-[24dvw] text-background/10 relative leading-none text-center font-bold uppercase tracking-tighter -z-0">
                    SKINCARE
                </span>
            </div>
        </div>
    );
};

export default Footer;
