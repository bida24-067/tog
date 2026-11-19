/**
 * Google Calendar Helper Utilities
 */

export interface CalendarEventDetails {
  title: string;
  description: string;
  location?: string;
  startDate?: Date;
  endDate?: Date;
}

/**
 * Generates a direct Google Calendar "Add Event" URL that works in browser without OAuth
 */
export function createGoogleCalendarUrl({
  title,
  description,
  location = "Molapo Crossing Mall, Shop 53B, Gaborone, Botswana",
  startDate,
  endDate,
}: CalendarEventDetails): string {
  const start = startDate ? startDate.toISOString().replace(/-|:|\.\d\d\d/g, "") : "";
  const end = endDate ? endDate.toISOString().replace(/-|:|\.\d\d\d/g, "") : "";
  const dates = start && end ? `&dates=${start}/${end}` : "";

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    title
  )}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(
    location
  )}${dates}`;
}
