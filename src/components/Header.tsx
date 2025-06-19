import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <div className="w-full h-full px-4 sm:px-12 xl:px-32 grid grid-cols-2 lg:grid-cols-3 items-center">
            <Link href={"#"}>
                <span className="font-bold text-lg md:text-2xl tracking-tight">
                    SKINCARE
                </span>
            </Link>
            <nav className="capitalize hidden lg:flex items-center gap-8 justify-self-center">
                <Link href={"#"}>all Products</Link>
                <Link href={"#"}>serum</Link>
                <Link href={"#"}>sunscreen</Link>
                <Link href={"#"}>Bundle</Link>
            </nav>
            <div className="flex items-center justify-end gap-2 md:gap-4">
                <Link href={"#"} className="flex items-center gap-2">
                    <span className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full tracking-tighter flex items-center justify-center">
                        <Image
                            className="w-4 h-4 sm:w-6 sm:h-6"
                            src={"bag-4-svgrepo-com 1.svg"}
                            width={100}
                            height={100}
                            alt="bag-icon"
                        />
                    </span>
                    <span className="hidden md:inline">Cart(1)</span>
                </Link>
                <Link href={"#"} className="flex items-center gap-2">
                    <span className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full tracking-tighter flex items-center justify-center">
                        <Image
                            className="w-4 h-4 sm:w-6 sm:h-6"
                            src={"heart-svgrepo-com (1) 1.svg"}
                            width={100}
                            height={100}
                            alt="heart-icon"
                        />
                    </span>
                </Link>
                <Link href={"#"} className="flex items-center gap-2">
                    <span className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full tracking-tighter flex items-center justify-center">
                        <Image
                            className="w-4 h-4 sm:w-6 sm:h-6"
                            src={"Group 1.svg"}
                            width={100}
                            height={100}
                            alt="profile-icon"
                        />
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default Header;
