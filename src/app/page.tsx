import Image from "next/image";
import Link from "next/link";
import {ProductCard} from "@/components/product-card";
import {SiteFooter} from "@/components/site-footer";
import {SiteHeader} from "@/components/site-header";
import {getCollections, getHomepageProducts} from "@/lib/products";
import {appointment, featuredEdits, hero, services,} from "@/lib/sample-data";

const gridSizes = "(min-width: 80rem) 25vw, (min-width: 48rem) 33vw, 50vw";
const railSizes = "(min-width: 80rem) 22vw, (min-width: 48rem) 38vw, 72vw";

export default async function Home() {
    const [{grid, rail}, collections] = await Promise.all([
        getHomepageProducts(),
        getCollections(),
    ]);

    return (
        <>
            <SiteHeader/>

            <main className="flex-1">
                {/* Campaign: a two-photo spread with the title set across the seam.
            The announcement bar is h-8, so the hero fills the first screen. */}
                <section
                    aria-labelledby="hero-title"
                    className="hero min-h-[calc(100svh-var(--spacing-header)-2rem)]"
                >
                    <div className="absolute inset-0 -z-20 grid md:grid-cols-2">
                        {hero.images.map((image, i) => (
                            <div
                                key={image.src}
                                className={i === 0 ? "relative" : "relative hidden md:block"}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    sizes={i === 0 ? "(min-width: 48rem) 50vw, 100vw" : "50vw"}
                                    className="object-cover"
                                    style={{objectPosition: image.position}}
                                    loading={i === 0 ? "eager" : "lazy"}
                                    fetchPriority={i === 0 ? "high" : "auto"}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="hero-content">
                        <h1 id="hero-title" className="font-display text-display">
                            {hero.title}
                        </h1>
                        <p className="max-w-[34ch] text-base">{hero.body}</p>
                        <Link href={hero.cta.href} className="link-cta mt-2">
                            {hero.cta.label}
                        </Link>
                    </div>
                </section>

                <section aria-labelledby="new-arrivals" className="section container-page">
                    <div className="mb-8 flex items-baseline justify-between gap-4 lg:mb-10">
                        <h2 id="new-arrivals" className="text-title">
                            New arrivals
                        </h2>
                        <Link href="/new-arrivals" className="link text-sm">
                            View all
                        </Link>
                    </div>
                    <ul className="grid-products">
                        {grid.map((product) => (
                            <li key={product.slug}>
                                <ProductCard product={product} sizes={gridSizes}/>
                            </li>
                        ))}
                    </ul>
                </section>

                <section aria-label="Women and men" className="split">
                    {featuredEdits.map((edit) => (
                        <Link
                            key={edit.title}
                            href={edit.cta.href}
                            className="group relative isolate flex aspect-portrait items-end overflow-hidden text-paper md:aspect-square"
                        >
                            <Image
                                src={edit.image.src}
                                alt={edit.image.alt}
                                fill
                                sizes="(min-width: 48rem) 50vw, 100vw"
                                className="-z-20 object-cover object-[50%_20%] transition-transform duration-700 group-hover:scale-[1.02]"
                            />
                            <span
                                aria-hidden="true"
                                className="absolute inset-0 -z-10 bg-linear-to-t from-scrim to-transparent to-50%"
                            />
                            <div className="flex flex-col items-start gap-3 p-gutter pb-10 lg:pb-14">
                                <h2 className="font-display text-headline">{edit.title}</h2>
                                <p className="max-w-[36ch] text-sm">{edit.body}</p>
                                <span className="link-cta mt-1">{edit.cta.label}</span>
                            </div>
                        </Link>
                    ))}
                </section>

                <section aria-labelledby="categories" className="section container-page">
                    <h2 id="categories" className="mb-8 text-title lg:mb-10">
                        Shop by category
                    </h2>
                    <ul className="grid grid-cols-2 gap-x-grid gap-y-8 lg:grid-cols-4">
                        {collections.map((collection) => (
                            <li key={collection.slug}>
                                <Link href={`/collections/${collection.slug}`} className="group block">
                                    <div className="product-media aspect-portrait">
                                        <Image
                                            src={collection.image.src}
                                            alt={collection.image.alt}
                                            fill
                                            sizes="(min-width: 64rem) 25vw, 50vw"
                                        />
                                    </div>
                                    <div className="product-meta">
                                        <h3 className="text-sm">{collection.name}</h3>
                                        <p className="text-sm text-ink-muted">
                                            {collection.pieceCount} pieces
                                        </p>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>

                <section aria-labelledby="more-new" className="pb-section">
                    <div className="container-page mb-8 flex items-baseline justify-between gap-4 lg:mb-10">
                        <h2 id="more-new" className="text-title">
                            More new arrivals
                        </h2>
                        <Link href="/new-arrivals" className="link text-sm">
                            View all
                        </Link>
                    </div>
                    <ul className="rail">
                        {rail.map((product) => (
                            <li key={product.slug}>
                                <ProductCard product={product} sizes={railSizes}/>
                            </li>
                        ))}
                    </ul>
                </section>

                <section aria-labelledby="appointment" className="grid md:grid-cols-2">
                    <div className="relative aspect-portrait md:aspect-auto md:min-h-[38rem]">
                        <Image
                            src={appointment.image.src}
                            alt={appointment.image.alt}
                            fill
                            sizes="(min-width: 48rem) 50vw, 100vw"
                            className="object-cover"
                        />
                    </div>
                    <div
                        className="flex flex-col items-start justify-center gap-6 bg-surface px-gutter py-section md:px-[max(var(--spacing-gutter),8%)]">
                        <h2 id="appointment" className="font-display text-headline">
                            {appointment.title}
                        </h2>
                        <p className="prose-body max-w-[42ch]">{appointment.body}</p>
                        <Link href={appointment.cta.href} className="btn btn-secondary mt-2">
                            {appointment.cta.label}
                        </Link>
                    </div>
                </section>

                <section aria-label="Client services" className="container-page py-16 lg:py-20">
                    <ul className="grid gap-10 md:grid-cols-3 md:gap-grid">
                        {services.map((service) => (
                            <li key={service.title} className="flex flex-col gap-2 md:pr-10">
                                <h3 className="text-sm font-medium">{service.title}</h3>
                                <p className="max-w-[40ch] text-sm text-ink-soft">
                                    {service.body}
                                </p>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>

            <SiteFooter/>
        </>
    );
}
