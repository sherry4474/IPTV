import { NextResponse } from "next/server";

type ContactBody = { name?: string; email?: string; message?: string };

export async function POST(request: Request) {
	try {
		const body = (await request.json()) as ContactBody;
		const { name, email, message } = body || {};
		if (!name || !email || !message) {
			return NextResponse.json({ message: "Missing fields" }, { status: 400 });
		}
		// Placeholder: In production, send email via Resend, SendGrid, etc.
		console.log("CONTACT_FORM", { name, email, message });
		return NextResponse.json({ message: "Thanks! We'll get back to you shortly." });
	} catch {
		return NextResponse.json({ message: "Invalid request" }, { status: 400 });
	}
}

