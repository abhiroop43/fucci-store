import type {Metadata, Viewport} from "next";
import {Bodoni_Moda, Geist} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
    display: "swap",
});

const bodoni = Bodoni_Moda({
    variable: "--font-bodoni",
    subsets: ["latin"],
    style: ["normal", "italic"],
    axes: ["opsz"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Fucci",
    description:
        "Ready-to-wear, leather goods, shoes and jewellery, delivered complimentary.",
};

export const viewport: Viewport = {
    themeColor: "#ffffff",
    colorScheme: "light",
};

export default function RootLayout({children}: LayoutProps<"/">) {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${bodoni.variable} h-full antialiased`}
        >
        <body className="min-h-full flex flex-col bg-paper text-ink">
        {children}
        </body>
        </html>
    );
}
