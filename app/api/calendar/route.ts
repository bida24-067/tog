import { NextResponse } from "next/server";

// Placeholder route for Google Calendar integration
// Can be linked to Google Calendar API / OAuth2 or appointment booking service in later phases
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { serviceName, date, time, clientName, clientPhone } = body;

    // Placeholder validation & mock scheduling
    return NextResponse.json({
      success: true,
      status: "scheduled_placeholder",
      message: "Google Calendar appointment placeholder received.",
      data: {
        service: serviceName || "General Consultation",
        scheduledTime: `${date || "TBD"} ${time || ""}`,
        client: { name: clientName, phone: clientPhone },
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid request payload" },
      { status: 400 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: "active",
    integration: "Google Calendar API placeholder",
    description: "Ready for client OAuth credentials or Google Calendar service account.",
  });
}
