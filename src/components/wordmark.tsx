import Link from "next/link";

export function Wordmark({className = ""}: { className?: string }) {
    return (
        <Link
            href="/"
            aria-label="Fucci, home"
            className={`font-display italic leading-none tracking-tight ${className}`}
        >
            fucci
        </Link>
    );
}
