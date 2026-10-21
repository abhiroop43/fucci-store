import {unsplash} from "./unsplash";

// Stand-in for the `categories`, `products` and `product_images` tables until
// they exist in src/db/schema.ts. Rows mirror the planned columns — integer
// cents, slugs as public ids, createdAt driving homepage order — so the query
// functions in ./products.ts can swap to Drizzle without touching any page.

export type CategoryRow = {
    slug: string;
    name: string;
    imageUrl: string | null;
    imageAlt: string | null;
};

export type ProductImageRow = { url: string; alt: string; position: number };

export type ProductRow = {
    slug: string;
    name: string;
    categorySlug: string;
    priceCents: number;
    compareAtCents: number | null;
    createdAt: Date;
    images: ProductImageRow[];
};

export const categoryRows: CategoryRow[] = [
    {
        slug: "ready-to-wear",
        name: "Ready-to-wear",
        imageUrl: unsplash("1558769132-cb1aea458c5e", 1200),
        imageAlt: "Knitwear and a snakeskin-print shirt hanging on a wooden rail",
    },
    {
        slug: "bags",
        name: "Bags",
        imageUrl: unsplash("1591561954557-26941169b49e", 1200),
        imageAlt: "Structured top-handle bag in a painted floral leather",
    },
    {
        slug: "shoes",
        name: "Shoes",
        imageUrl: unsplash("1543163521-1bf539c55dd2", 1200),
        imageAlt: "A pair of floral print stiletto pumps on a pale blue plinth",
    },
    {
        slug: "jewellery",
        name: "Jewellery",
        imageUrl: unsplash("1599643478518-a784e5dc4c8f", 1200),
        imageAlt: "Layered gold chains with a crescent and a blue stone pendant",
    },
    {slug: "accessories", name: "Accessories", imageUrl: null, imageAlt: null},
];

// Newest first. createdAt is backdated from a fixed base so order is stable.
const base = Date.UTC(2026, 9, 20);
const daysAgo = (n: number) => new Date(base - n * 86_400_000);

type Seed = Omit<ProductRow, "createdAt" | "images"> & {
    photo: string;
    alt: string;
};

const seeds: Seed[] = [
    {
        slug: "chevron-chain-shoulder-bag",
        name: "Chevron chain shoulder bag",
        categorySlug: "bags",
        priceCents: 189_000,
        compareAtCents: null,
        photo: "1566150905458-1bf1fc113f0d",
        alt: "Blush leather shoulder bag with a yellow chevron and a fine chain strap",
    },
    {
        slug: "lambskin-biker-jacket",
        name: "Lambskin biker jacket",
        categorySlug: "ready-to-wear",
        priceCents: 320_000,
        compareAtCents: null,
        photo: "1551028719-00167b16eac5",
        alt: "Black lambskin biker jacket with silver zips, laid flat",
    },
    {
        slug: "croc-embossed-top-handle-bag",
        name: "Croc-embossed top handle bag",
        categorySlug: "bags",
        priceCents: 265_000,
        compareAtCents: null,
        photo: "1575032617751-6ddec2089882",
        alt: "Burgundy croc-embossed bag with a gold clasp, held by its handle",
    },
    {
        slug: "round-metal-sunglasses",
        name: "Round metal sunglasses",
        categorySlug: "accessories",
        priceCents: 52_000,
        compareAtCents: null,
        photo: "1511499767150-a48a237f0083",
        alt: "Round sunglasses with thin gold frames and green lenses",
    },
    {
        slug: "suede-wingtip-brogue",
        name: "Suede wingtip brogue",
        categorySlug: "shoes",
        priceCents: 89_000,
        compareAtCents: null,
        photo: "1560343090-f0409e92791a",
        alt: "Sage green suede wingtip brogue resting on a pink block",
    },
    {
        slug: "hand-crocheted-cotton-poncho",
        name: "Hand-crocheted cotton poncho",
        categorySlug: "ready-to-wear",
        priceCents: 145_000,
        compareAtCents: null,
        photo: "1434389677669-e08b4cac3105",
        alt: "Ivory crocheted poncho with a fringed hem on a wooden hanger",
    },
    {
        slug: "rose-gold-dial-watch",
        name: "Rose gold dial watch",
        categorySlug: "accessories",
        priceCents: 115_000,
        compareAtCents: null,
        photo: "1524592094714-0f0654e20314",
        alt: "Watch with a white dial, rose gold case and taupe leather strap",
    },
    {
        slug: "freshwater-pearl-collar",
        name: "Freshwater pearl collar",
        categorySlug: "jewellery",
        priceCents: 98_000,
        compareAtCents: null,
        photo: "1515562141207-7a88fb7ce338",
        alt: "Strand of freshwater pearls with a knotted silver clasp in its box",
    },
    {
        slug: "washed-silk-bomber",
        name: "Washed silk bomber",
        categorySlug: "ready-to-wear",
        priceCents: 210_000,
        compareAtCents: null,
        photo: "1591047139829-d91aecb6caea",
        alt: "Rust washed-silk bomber jacket held up on a hanger",
    },
    {
        slug: "grained-leather-backpack",
        name: "Grained leather backpack",
        categorySlug: "bags",
        priceCents: 230_000,
        compareAtCents: null,
        photo: "1622560480605-d83c853bc5c3",
        alt: "Cognac grained-leather backpack with a front zip pocket",
    },
    {
        slug: "silk-blend-jogging-trousers",
        name: "Silk-blend jogging trousers",
        categorySlug: "ready-to-wear",
        priceCents: 89_000,
        compareAtCents: 119_000,
        photo: "1594633312681-425c7b97ccd1",
        alt: "Dusty pink silk-blend jogging trousers with cuffed ankles, worn",
    },
    {
        slug: "polished-calfskin-derby",
        name: "Polished calfskin derby",
        categorySlug: "shoes",
        priceCents: 95_000,
        compareAtCents: null,
        photo: "1614252235316-8c857d38b5f4",
        alt: "Close view of a polished tan calfskin derby and its laces",
    },
    {
        slug: "heavyweight-cotton-t-shirt",
        name: "Heavyweight cotton T-shirt",
        categorySlug: "ready-to-wear",
        priceCents: 45_000,
        compareAtCents: null,
        photo: "1521572163474-6864f9cf17ab",
        alt: "Plain white heavyweight cotton T-shirt, worn",
    },
    {
        slug: "floral-print-pump",
        name: "Floral print pump",
        categorySlug: "shoes",
        priceCents: 105_000,
        compareAtCents: null,
        photo: "1543163521-1bf539c55dd2",
        alt: "Blue floral print stiletto pumps, one standing and one mid-air",
    },
    {
        slug: "crescent-pendant-necklace",
        name: "Crescent pendant necklace",
        categorySlug: "jewellery",
        priceCents: 76_000,
        compareAtCents: null,
        photo: "1599643478518-a784e5dc4c8f",
        alt: "Gold crescent pendant layered with a blue stone on fine chains",
    },
    {
        slug: "crystal-drop-earrings",
        name: "Crystal drop earrings",
        categorySlug: "jewellery",
        priceCents: 135_000,
        compareAtCents: null,
        photo: "1535632066927-ab7c9ab60908",
        alt: "Crystal drop earrings set with blue stones, on a monstera leaf",
    },
    {
        slug: "wicker-and-leather-basket-bag",
        name: "Wicker and leather basket bag",
        categorySlug: "bags",
        priceCents: 198_000,
        compareAtCents: null,
        photo: "1590874103328-eac38a683ce7",
        alt: "Orange basket bag in woven wicker with a leather flap and handle",
    },
    {
        slug: "belted-wool-coat",
        name: "Belted wool coat",
        categorySlug: "ready-to-wear",
        priceCents: 390_000,
        compareAtCents: null,
        photo: "1539533018447-63fcce2678e3",
        alt: "Camel belted wool coat worn over black trousers on stone steps",
    },
];

export const productRows: ProductRow[] = seeds.map(
    ({photo, alt, ...row}, i) => ({
        ...row,
        createdAt: daysAgo(i),
        images: [{url: unsplash(photo, 1400), alt, position: 0}],
    }),
);
