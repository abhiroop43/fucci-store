import Link from "next/link";
import type {ReactNode} from "react";
import {announcement, primaryNav} from "@/lib/sample-data";
import {AccountIcon, BagIcon, SearchIcon} from "./icons";
import {MobileMenu} from "./mobile-menu";
import {Wordmark} from "./wordmark";

// `bag` is an optional slot for a live item count. Catalogue routes leave it
// empty: reading the session here would make them dynamic.
export function SiteHeader({bag}: { bag?: ReactNode }) {
    return (
        <>
            <p className="flex h-8 items-center justify-center bg-ink px-gutter text-center text-2xs text-paper sm:text-xs">
                {announcement}
            </p>
            <header className="site-header">
                <div className="container-page header-grid">
                    <div className="flex items-center">
                        <MobileMenu links={primaryNav} className="xl:hidden"/>
                        <nav aria-label="Main" className="hidden xl:block">
                            <ul className="flex gap-7 text-sm">
                                {primaryNav.map((link) => (
                                    <li key={link.href}>
                                        <Link href={link.href} className="link-quiet">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    <Wordmark className="text-3xl lg:text-4xl"/>

                    <div className="-mr-3 flex items-center">
                        <Link href="/search" aria-label="Search" className="btn btn-icon">
                            <SearchIcon/>
                        </Link>
                        <Link
                            href="/account"
                            aria-label="Your account"
                            className="btn btn-icon hidden sm:inline-flex"
                        >
                            <AccountIcon/>
                        </Link>
                        <Link
                            href="/bag"
                            aria-label="Shopping bag"
                            className="btn btn-icon relative"
                        >
                            <BagIcon/>
                            {bag}
                        </Link>
                    </div>
                </div>
            </header>
        </>
    );
}
