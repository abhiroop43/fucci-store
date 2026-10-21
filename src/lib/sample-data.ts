import {unsplash} from "./unsplash";

// Static page chrome: navigation, campaign copy and editorial imagery.
// Catalogue data lives behind ./products.ts, not here.

export type NavLink = { label: string; href: string };

export const announcement =
    "Complimentary standard shipping and returns on every order";

export const primaryNav: NavLink[] = [
    {label: "New arrivals", href: "/new-arrivals"},
    {label: "Women", href: "/collections/women"},
    {label: "Men", href: "/collections/men"},
    {label: "Bags", href: "/collections/bags"},
    {label: "Shoes", href: "/collections/shoes"},
    {label: "Jewellery", href: "/collections/jewellery"},
];

export const hero = {
    title: "Autumn–Winter 2026",
    body: "Long coats, soft leather and the first knits of the season.",
    cta: {label: "Shop the collection", href: "/new-arrivals"},
    // Read as a diptych: left panel shows alone on small screens.
    images: [
        {
            src: unsplash("1539109136881-3be0616acf4b", 2000),
            alt: "A woman in a powder-blue wool coat and scarf in a cathedral square, pigeons in flight",
            position: "50% 40%",
        },
        {
            src: unsplash("1539533018447-63fcce2678e3", 2000),
            alt: "A camel belted coat worn over black trousers on weathered stone steps",
            position: "50% 30%",
        },
    ],
};

export const featuredEdits = [
    {
        title: "Women",
        body: "Checked overcoats, fluid trousers and knitwear for colder days.",
        cta: {label: "Shop women", href: "/collections/women"},
        image: {
            src: unsplash("1485968579580-b6d095142e6e", 1600),
            alt: "A woman in a dark green checked overcoat walking down a city street",
        },
    },
    {
        title: "Men",
        body: "Unstructured blazers, relaxed trousers and clean leather sneakers.",
        cta: {label: "Shop men", href: "/collections/men"},
        image: {
            src: unsplash("1552374196-1ab2a1c593e8", 1600),
            alt: "A man in a camel blazer and cream trousers seated on a wooden stool",
        },
    },
];

export const appointment = {
    title: "Shop by appointment",
    body: "Reserve an hour with a client advisor at one of our boutiques. We’ll have your sizes ready before you arrive, and alterations on anything you buy are complimentary.",
    cta: {label: "Book an appointment", href: "/appointments"},
    image: {
        src: unsplash("1445205170230-053b83016050", 1600),
        alt: "Coats and knitwear on a rail in a warmly lit boutique",
    },
};

export const services = [
    {
        title: "Complimentary shipping",
        body: "Standard delivery on every order, tracked from the day it leaves us.",
    },
    {
        title: "Returns within 30 days",
        body: "Send back unworn pieces within 30 days of delivery for a full refund.",
    },
    {
        title: "Gift wrapping",
        body: "Add a gift box and a handwritten card to any order at checkout.",
    },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
    {
        title: "Shop",
        links: [
            {label: "New arrivals", href: "/new-arrivals"},
            {label: "Ready-to-wear", href: "/collections/ready-to-wear"},
            {label: "Bags", href: "/collections/bags"},
            {label: "Shoes", href: "/collections/shoes"},
            {label: "Jewellery", href: "/collections/jewellery"},
        ],
    },
    {
        title: "Client services",
        links: [
            {label: "Contact us", href: "/contact"},
            {label: "Shipping", href: "/shipping"},
            {label: "Returns", href: "/returns"},
            {label: "Book an appointment", href: "/appointments"},
        ],
    },
    {
        title: "Your account",
        links: [
            {label: "Sign in", href: "/sign-in"},
            {label: "Create an account", href: "/sign-up"},
            {label: "Orders", href: "/account/orders"},
        ],
    },
];
