const wholeDollars = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
});

// Catalogue prices only — rounds to whole dollars. Anything computed from
// cents (bag, checkout, receipts) needs an exact formatter instead.
export function currency(dollars: number) {
    return wholeDollars.format(dollars);
}
