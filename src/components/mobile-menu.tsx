"use client";

import Link from "next/link";
import {useRef} from "react";
import type {NavLink} from "@/lib/sample-data";
import {CloseIcon, MenuIcon} from "./icons";

// Native <dialog> gives focus trapping, Escape to close and inert background
// for free; the panel slides in from the left when it opens.
export function MobileMenu({
                               links,
                               className = "",
                           }: {
    links: NavLink[];
    className?: string;
}) {
    const dialog = useRef<HTMLDialogElement>(null);
    const close = () => dialog.current?.close();

    return (
        <div className={className}>
            <button
                type="button"
                className="btn btn-icon -ml-3"
                aria-label="Open menu"
                aria-haspopup="dialog"
                onClick={() => dialog.current?.showModal()}
            >
                <MenuIcon/>
            </button>

            <dialog
                ref={dialog}
                aria-label="Menu"
                className="mobile-menu"
                onClick={(event) => {
                    // A click on the backdrop lands on the dialog element itself.
                    if (event.target === event.currentTarget) close();
                }}
            >
                <div className="flex h-header items-center px-gutter">
                    <button
                        type="button"
                        className="btn btn-icon -ml-3"
                        aria-label="Close menu"
                        onClick={close}
                    >
                        <CloseIcon/>
                    </button>
                </div>
                <nav aria-label="Main" className="px-gutter pb-10">
                    <ul className="flex flex-col">
                        {links.map((link) => (
                            <li key={link.href} className="hairline-b">
                                <Link
                                    href={link.href}
                                    onClick={close}
                                    className="block py-4 text-title"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <ul className="mt-8 flex flex-col gap-3 text-sm text-ink-soft">
                        <li>
                            <Link href="/account" onClick={close} className="link-quiet">
                                Your account
                            </Link>
                        </li>
                        <li>
                            <Link href="/appointments" onClick={close} className="link-quiet">
                                Book an appointment
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" onClick={close} className="link-quiet">
                                Contact us
                            </Link>
                        </li>
                    </ul>
                </nav>
            </dialog>
        </div>
    );
}
