export function parseHTMLString(raw: string): string {
  return raw.replace(/```html\n?/, "").replace(/```$/, "");
}