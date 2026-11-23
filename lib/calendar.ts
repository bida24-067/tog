import { siteConfig } from "@/data/site";

export interface CalendarEventDetails {
  title: string;
  description: string;
  location?: string;
  startDate: Date;
  endDate: Date;
}

export interface BookingSlot {
  time: string; // e.g. "09:30"
  available: boolean;
  reason?: string;
}

export interface AppointmentRecord {
  id: string;
  referenceCode: string;
  services: {
    id: string;
    name: string;
    price: string;
  }[];
  totalPrice: string;
  date: string; // "YYYY-MM-DD"
  time: string; // "HH:mm"
  customer: {
    name: string;
    phone: string;
    email?: string;
    notes?: string;
    notifyWhatsApp: boolean;
    notifyEmail: boolean;
  };
  calendarEventId?: string;
  status: "confirmed" | "pending";
  createdAt: string;
}

// In-memory appointments store for local prototype / persistence during server session
const appointmentStore: AppointmentRecord[] = [];

/**
 * Returns store hours for a given day of the week
 */
export function getStoreHoursForDay(date: Date): { open: number; close: number; isClosed: boolean } {
  const day = date.getDay(); // 0 is Sunday, 6 is Saturday
  if (day === 0) {
    // Sunday: 11:00 - 17:00 (last booking 16:00)
    return { open: 11, close: 17, isClosed: false };
  } else if (day === 6) {
    // Saturday: 09:00 - 17:00 (last booking 16:00)
    return { open: 9, close: 17, isClosed: false };
  } else {
    // Weekdays: 09:00 - 18:00 (last booking 17:00)
    return { open: 9, close: 18, isClosed: false };
  }
}

/**
 * Generates slots for a selected date
 */
export function generateDaySlots(dateString: string): BookingSlot[] {
  const date = new Date(`${dateString}T00:00:00`);
  const { open, close, isClosed } = getStoreHoursForDay(date);

  if (isClosed) return [];

  const slots: BookingSlot[] = [];
  const bookedTimes = appointmentStore
    .filter((a) => a.date === dateString)
    .map((a) => a.time);

  // Interval in minutes (e.g. 45 mins)
  for (let hour = open; hour < close; hour++) {
    for (const minute of [0, 30]) {
      // Don't schedule after closing
      if (hour === close - 1 && minute > 30) continue;
      
      const timeStr = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;
      const isBooked = bookedTimes.includes(timeStr);
      
      slots.push({
        time: timeStr,
        available: !isBooked,
        reason: isBooked ? "Booked" : undefined,
      });
    }
  }

  return slots;
}

/**
 * Saves a new appointment
 */
export function recordAppointment(appointment: Omit<AppointmentRecord, "id" | "referenceCode" | "createdAt">): AppointmentRecord {
  const referenceCode = `TOG-${Math.floor(100000 + Math.random() * 900000)}`;
  const record: AppointmentRecord = {
    ...appointment,
    id: `apt_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    referenceCode,
    createdAt: new Date().toISOString(),
  };

  appointmentStore.push(record);
  return record;
}

/**
 * Formats WhatsApp confirmation URL
 */
export function buildCustomerWhatsAppUrl(record: AppointmentRecord): string {
  const primaryNumber = siteConfig.contact.whatsappNumbers[0];
  const serviceList = record.services.map((s) => s.name).join(", ");
  
  const text = `Hi Touch Of Glow! ✨\nI have confirmed my appointment booking on your website:\n\n` +
    `• Reference: ${record.referenceCode}\n` +
    `• Name: ${record.customer.name}\n` +
    `• Service(s): ${serviceList}\n` +
    `• Date & Time: ${record.date} at ${record.time}\n` +
    `• Total: ${record.totalPrice}\n\n` +
    `Please confirm receipt. Looking forward to my glow session!`;

  return `https://wa.me/${primaryNumber}?text=${encodeURIComponent(text)}`;
}

/**
 * Generates a direct Google Calendar "Add Event" URL that opens the customer's Google Calendar with details pre-filled
 */
export function createGoogleCalendarUrl({
  title,
  description,
  location = "Molapo Crossing Mall, Shop 53B, Gaborone, Botswana",
  startDate,
  endDate,
}: CalendarEventDetails): string {
  const formatUtc = (d: Date) =>
    d.toISOString().replace(/-|:|\.\d\d\d/g, "");

  const start = formatUtc(startDate);
  const end = formatUtc(endDate);

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    title
  )}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(
    location
  )}&dates=${start}/${end}`;
}
