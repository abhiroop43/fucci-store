import type {SVGProps} from "react";

// 24px line icons drawn on a shared 1.25 stroke so they sit with the type.
function Icon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="square"
            aria-hidden="true"
            focusable="false"
            {...props}
        />
    );
}

export function MenuIcon() {
    return (
        <Icon>
            <path d="M3 7h18M3 12h18M3 17h18"/>
        </Icon>
    );
}

export function CloseIcon() {
    return (
        <Icon>
            <path d="M5 5l14 14M19 5L5 19"/>
        </Icon>
    );
}

export function SearchIcon() {
    return (
        <Icon>
            <circle cx="10.5" cy="10.5" r="6.5"/>
            <path d="M15.5 15.5L21 21"/>
        </Icon>
    );
}

export function AccountIcon() {
    return (
        <Icon>
            <circle cx="12" cy="8" r="4"/>
            <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/>
        </Icon>
    );
}

export function BagIcon() {
    return (
        <Icon>
            <path d="M4.5 8h15l-1 13h-13z"/>
            <path d="M8.5 8V6.5a3.5 3.5 0 017 0V8"/>
        </Icon>
    );
}
