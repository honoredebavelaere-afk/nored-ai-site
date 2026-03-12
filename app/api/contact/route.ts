import { NextRequest, NextResponse } from "next/server";

const WEBHOOK_URL = process.env.CONTACT_WEBHOOK_URL;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, teamSize, crm, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Nom et email requis." },
        { status: 400 }
      );
    }

    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Email invalide." },
        { status: 400 }
      );
    }

    // Send to webhook if configured
    if (WEBHOOK_URL) {
      const webhookRes = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, teamSize, crm, message }),
      });

      if (!webhookRes.ok) {
        console.error("Webhook error:", webhookRes.status);
        return NextResponse.json(
          { error: "Erreur lors de l'envoi. Reessayez." },
          { status: 500 }
        );
      }
    } else {
      // Log to console when no webhook is configured (dev mode)
      console.log("New contact lead:", { name, email, company, teamSize, crm, message });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Erreur serveur. Reessayez." },
      { status: 500 }
    );
  }
}
