// Source URL for an Unsplash photo. next/image resizes it, so this only caps
// the original we fetch at a width larger than any slot it fills.
export function unsplash(photoId: string, width = 2000) {
    return `https://images.unsplash.com/photo-${photoId}?auto=format&fit=crop&w=${width}&q=80`;
}
