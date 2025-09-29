export const getImageUrl = (
  images: ({ key: string; url: string } | undefined)[] | undefined,
  filename: string
): string => {
  const image = images?.find((img) => img?.key?.includes(filename));
  return image?.url || '';
};
