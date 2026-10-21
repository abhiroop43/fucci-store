import Image from "next/image";
import Link from "next/link";
import {currency} from "@/lib/format";
import type {Product} from "@/lib/products";

export function ProductCard({
                                product,
                                sizes,
                            }: {
    product: Product;
    /** The tile's rendered width at each breakpoint, for next/image. */
    sizes: string;
}) {
    return (
        <Link href={`/products/${product.slug}`} className="group block">
            <div className="product-media">
                <Image src={product.image.src} alt={product.image.alt} fill sizes={sizes}/>
            </div>
            <div className="product-meta">
                <h3 className="text-sm">{product.name}</h3>
                {product.compareAt === null ? (
                    <p className="price text-ink-soft">{currency(product.price)}</p>
                ) : (
                    <p className="flex gap-2">
            <span className="price-sale">
              <span className="sr-only">Now </span>
                {currency(product.price)}
            </span>
                        <span className="price-compare">
              <span className="sr-only">Was </span>
                            {currency(product.compareAt)}
            </span>
                    </p>
                )}
            </div>
        </Link>
    );
}
