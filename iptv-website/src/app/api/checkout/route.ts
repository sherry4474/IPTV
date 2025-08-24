import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const domain = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

type PlanName = "1 Month" | "6 Months" | "12 Months";

export async function POST(request: Request) {
	if (!stripeSecretKey) {
		return NextResponse.json({ error: "Missing STRIPE_SECRET_KEY" }, { status: 500 });
	}
	const stripe = new Stripe(stripeSecretKey, { apiVersion: "2023-10-16" });

	try {
		const body = (await request.json()) as { plan?: PlanName };
		const { plan } = body || {};
		const selectedPlan: PlanName = (plan as PlanName) ?? "1 Month";
		const priceMap: Record<PlanName, string> = {
			"1 Month": process.env.STRIPE_PRICE_1M || "",
			"6 Months": process.env.STRIPE_PRICE_6M || "",
			"12 Months": process.env.STRIPE_PRICE_12M || "",
		};

		const priceId: string = priceMap[selectedPlan];
		if (!priceId) {
			return NextResponse.json({ error: "Price not configured" }, { status: 400 });
		}

		const session = await stripe.checkout.sessions.create({
			mode: "payment",
			line_items: [{ price: priceId, quantity: 1 }],
			success_url: `${domain}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
			cancel_url: `${domain}/checkout/cancel`,
			metadata: { plan: selectedPlan },
		});

		return NextResponse.json({ id: session.id, url: session.url });
	} catch (error) {
		const message = error instanceof Error ? error.message : "Unknown error";
		return NextResponse.json({ error: message }, { status: 500 });
	}
}

