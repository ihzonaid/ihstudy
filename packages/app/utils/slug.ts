export function createSlug(inputString: string): string {
  const slug = inputString.toLowerCase().replace(/\s+/g, '-')
  return slug
}
