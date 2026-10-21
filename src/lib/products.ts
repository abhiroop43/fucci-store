import {categoryRows, type ProductRow, productRows,} from "./sample-catalogue";

// The catalogue's only public surface: pages call these and receive mapped
// types, never rows. Reads come from sample rows until the catalogue tables
// land in the schema; only the bodies below should need to change then.

export type Product = {
    slug: string;
    name: string;
    category: { slug: string; name: string };
    price: number;
    compareAt: number | null;
    image: { src: string; alt: string };
};

export type Collection = {
    slug: string;
    name: string;
    image: { src: string; alt: string };
    pieceCount: number;
};

const categoryName = new Map(categoryRows.map((c) => [c.slug, c.name]));

export function mapProduct(row: ProductRow): Product {
    const packshot =
        row.images.find((image) => image.position === 0) ?? row.images[0];
    return {
        slug: row.slug,
        name: row.name,
        category: {
            slug: row.categorySlug,
            name: categoryName.get(row.categorySlug) ?? row.categorySlug,
        },
        price: row.priceCents / 100,
        compareAt: row.compareAtCents === null ? null : row.compareAtCents / 100,
        image: {src: packshot.url, alt: packshot.alt},
    };
}

function newestFirst() {
    return [...productRows].sort(
        (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
    );
}

/** Homepage: the newest 8 fill the grid, the next 5 the rail. */
export async function getHomepageProducts() {
    const products = newestFirst().map(mapProduct);
    return {grid: products.slice(0, 8), rail: products.slice(8, 13)};
}

/** Categories with an image, each with a live count of its products. */
export async function getCollections(): Promise<Collection[]> {
    return categoryRows.flatMap((category) =>
        category.imageUrl
            ? [
                {
                    slug: category.slug,
                    name: category.name,
                    image: {src: category.imageUrl, alt: category.imageAlt ?? ""},
                    pieceCount: productRows.filter(
                        (p) => p.categorySlug === category.slug,
                    ).length,
                },
            ]
            : [],
    );
}
