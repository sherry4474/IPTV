"use client";

import Container from "@/components/Container";
import Button from "@/components/Button";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";

function CheckoutContent() {
	const params = useSearchParams();
	const plan = params.get("plan") || "1 Month";
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	async function handleCheckout() {
		setLoading(true);
		setError(null);
		try {
			const res = await fetch("/api/checkout", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ plan }),
			});
			const data: { error?: string; url?: string } = await res.json();
			if (!res.ok || !data.url) throw new Error(data.error || "Checkout failed");
			window.location.href = data.url as string;
		} catch (e) {
			const message = e instanceof Error ? e.message : "Unexpected error";
			setError(message);
		} finally {
			setLoading(false);
		}
	}

	return (
		<div className="max-w-xl">
			<h1 className="section-title">Checkout</h1>
			<p className="section-subtitle mt-3">Plan: {plan}</p>
			<div className="card p-6 mt-6 space-y-4">
				<p className="text-sm text-muted">You will be redirected to Stripe for secure payment.</p>
				<Button onClick={handleCheckout} disabled={loading}>{loading ? "Redirecting..." : "Proceed to Payment"}</Button>
				{error && <p className="text-sm text-red-400">{error}</p>}
			</div>
		</div>
	);
}

export default function CheckoutPage() {
	return (
		<div className="py-16 sm:py-24">
			<Container>
				<Suspense fallback={<div className="text-sm text-muted">Loading checkout...</div>}>
					<CheckoutContent />
				</Suspense>
			</Container>
		</div>
	);
}

