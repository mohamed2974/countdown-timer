import Image from "next/image";
import "./globals.css";

import { Red_Hat_Text } from "next/font/google";

// Red Hat Text font configuration
const redhat = Red_Hat_Text({
    subsets: ["latin"],
    weight: ["400","700"],
    display: "swap",
});

export default function RootLayout({ children }) {
    return (
        <html lang="de">
            <body className={`text-center box-border antialiased bg-VeryDarkBlue font-Redhat text-Blue text-Static select-none ${redhat.className} px-4 lg:p-0`}>
                <Image className="absolute top-0 left-0 object-cover pointer-events-none -z-10" alt="Stars BG" src="/images/bg-stars.svg" fill/>                
                <Image className="absolute bottom-0 left-0 h-1/4 w-auto lg:h-auto lg:w-full pointer-events-none -z-10" alt="Pattern" src="/images/pattern-hills.svg" width={500} height={100} />                
                {children}
                
            </body>
        </html>
    );
}
