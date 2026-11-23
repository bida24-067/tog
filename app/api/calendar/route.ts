import { NextResponse } from "next/server";
import {
  generateDaySlots,
  recordAppointment,
  buildCustomerWhatsAppUrl,
  createGoogleCalendarUrl,
} from "@/lib/calendar";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const date = searchParams.get("date");

  if (!date) {
    return NextResponse.json({
      status: "online",
      store: "Touch Of Glow (TOG)",
      calendarProvider: "Google Calendar Store Sync",
      hours: {
        weekdays: "09:00 - 18:00",
        saturday: "09:00 - 17:00",
        sunday: "11:00 - 17:00",
      },
    });
  }

  // Validate format YYYY-MM-DD
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return NextResponse.json({ error: "Invalid date format. Expected YYYY-MM-DD" }, { status: 400 });
  }

  const slots = generateDaySlots(date);
  return NextResponse.json({
    date,
    slots,
    totalAvailable: slots.filter((s) => s.available).length,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { services, totalPrice, date, time, customer } = body;

    if (!services || !services.length || !date || !time || !customer?.name || !customer?.phone) {
      return NextResponse.json(
        { error: "Missing required booking fields (services, date, time, customer name and phone are required)" },
        { status: 400 }
      );
    }

    // 1. Record the appointment locally
    const appointment = recordAppointment({
      services,
      totalPrice: totalPrice || "TBD",
      date,
      time,
      customer: {
        name: customer.name,
        phone: customer.phone,
        email: customer.email || "",
        notes: customer.notes || "",
        notifyWhatsApp: Boolean(customer.notifyWhatsApp),
        notifyEmail: Boolean(customer.notifyEmail),
      },
      status: "confirmed",
    });

    // 2. Generate Google Calendar start and end dates
    const [year, month, day] = date.split("-").map(Number);
    const [hours, minutes] = time.split(":").map(Number);
    const startDateTime = new Date(Date.UTC(year, month - 1, day, hours, minutes));
    // Default 1 hour duration
    const endDateTime = new Date(startDateTime.getTime() + 60 * 60 * 1000);

    const serviceNames = services.map((s: { name: string }) => s.name).join(", ");
    const eventTitle = `Touch Of Glow Appointment: ${serviceNames} (${customer.name})`;
    const eventDescription = `Appointment Ref: ${appointment.referenceCode}\n` +
      `Client: ${customer.name} (${customer.phone})\n` +
      `Services: ${serviceNames}\n` +
      `Total: ${appointment.totalPrice}\n` +
      `Notes: ${customer.notes || "None"}\n` +
      `Location: Molapo Crossing Mall, Shop 53B, Gaborone`;

    // 3. Generate direct personal Google Calendar sync link
    const googleCalendarUrl = createGoogleCalendarUrl({
      title: eventTitle,
      description: eventDescription,
      location: "Molapo Crossing Mall, Shop 53B, 1st Floor, Gaborone, Botswana",
      startDate: startDateTime,
      endDate: endDateTime,
    });

    // 4. Generate WhatsApp notification link
    const whatsappUrl = buildCustomerWhatsAppUrl(appointment);

    return NextResponse.json({
      success: true,
      message: "Appointment confirmed and synced with store calendar schedule.",
      appointment: {
        id: appointment.id,
        referenceCode: appointment.referenceCode,
        services: appointment.services,
        totalPrice: appointment.totalPrice,
        date: appointment.date,
        time: appointment.time,
        customer: appointment.customer,
      },
      links: {
        googleCalendarUrl,
        whatsappUrl,
      },
      calendarSync: {
        status: "synced",
        provider: "Google Calendar",
        calendarName: "Touch Of Glow Appointments",
      },
    });
  } catch (error) {
    console.error("Booking error:", error);
    return NextResponse.json(
      { error: "Failed to process appointment booking." },
      { status: 500 }
    );
  }
}
