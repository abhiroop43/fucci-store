import Link from "next/link";
import {footerNav} from "@/lib/sample-data";
import {Wordmark} from "./wordmark";

export function SiteFooter() {
    return (
        <footer className="bg-ink text-paper">
            <div className="container-page pt-16 pb-8 lg:pt-24">
                <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
                    <Wordmark className="pl-[0.12em] text-5xl lg:text-6xl"/>
                    {footerNav.map((group) => (
                        <nav key={group.title} aria-label={group.title}>
                            <h2 className="mb-4 text-sm text-paper/60">{group.title}</h2>
                            <ul className="flex flex-col gap-2.5 text-sm">
                                {group.links.map((link) => (
                                    <li key={link.href}>
                                        <Link href={link.href} className="link-quiet">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    ))}
                </div>
                <div
                    className="mt-16 flex flex-col gap-2 border-t border-paper/20 pt-6 text-xs text-paper/60 sm:flex-row sm:justify-between">
                    <p>© 2026 Fucci</p>
                    <p>Shipping to United States (USD)</p>
                </div>
            </div>
        </footer>
    );
}
