declare module "tailwindcss/lib/util/flattenColorPalette" {
  // Replace `any` with a more specific type if known
  const flattenColorPalette: (
    colors: Record<string, string | Record<string, string>>
  ) => Record<string, string>;
  export default flattenColorPalette;
}
