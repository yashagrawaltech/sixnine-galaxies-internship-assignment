import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <header className="w-full h-20 flex items-center justify-center">
                <Header />
            </header>
            <main>{children}</main>
            <footer className="w-full h-40">
                <Footer />
            </footer>
        </>
    );
};

export default layout;
