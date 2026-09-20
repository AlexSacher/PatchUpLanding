/**
 * Formats a date-only ISO string (e.g. "2026-08-05") for display.
 *
 * `new Date("2026-08-05")` parses date-only ISO strings as UTC midnight, so
 * formatting with `toLocaleDateString` in the viewer's local timezone can
 * render the previous day for anyone west of UTC. Parsing the components
 * directly and constructing a local date avoids that shift.
 */
export function formatDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number)
  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}
