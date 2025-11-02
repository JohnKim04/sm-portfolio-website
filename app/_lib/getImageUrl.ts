export const getImageUrl = (
  images: ({ key: string; url: string } | undefined)[] | undefined,
  filename: string
): string => {
  if (!images || images.length === 0) {
    console.warn(`[getImageUrl] No images provided for filename: ${filename}`);
    return '';
  }

  const image = images.find((img) => img?.key?.includes(filename));
  
  if (!image || !image.url) {
    console.warn(`[getImageUrl] Image not found: ${filename}`);
    console.log(`[getImageUrl] Available keys:`, images.filter(Boolean).map(img => img?.key));
    return '';
  }

  return image.url;
};
