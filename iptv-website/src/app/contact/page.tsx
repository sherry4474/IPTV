"use client";

import Container from "@/components/Container";
import Button from "@/components/Button";
import { useState } from "react";

export default function ContactPage() {
	const [status, setStatus] = useState<string | null>(null);

	async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setStatus(null);
		const form = event.currentTarget;
		const formData = new FormData(form);
		const payload = Object.fromEntries(formData.entries()) as Record<string, string>;
		const res = await fetch("/api/contact", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(payload),
		});
		const data = await res.json();
		setStatus(data.message || (res.ok ? "Message sent" : "Failed to send"));
		if (res.ok) form.reset();
	}

	return (
		<div className="py-16 sm:py-24">
			<Container>
				<div className="max-w-2xl">
					<h1 className="section-title">Contact us</h1>
					<p className="section-subtitle mt-3">We usually respond within a few hours.</p>
					<form onSubmit={onSubmit} className="mt-8 card p-6 space-y-4">
						<div>
							<label className="text-sm">Name</label>
							<input name="name" required className="mt-1 w-full rounded-md bg-transparent border border-border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-600" />
						</div>
						<div>
							<label className="text-sm">Email</label>
							<input type="email" name="email" required className="mt-1 w-full rounded-md bg-transparent border border-border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-600" />
						</div>
						<div>
							<label className="text-sm">Message</label>
							<textarea name="message" rows={5} required className="mt-1 w-full rounded-md bg-transparent border border-border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-600" />
						</div>
						<Button type="submit">Send message</Button>
						{status && <p className="text-sm text-muted">{status}</p>}
					</form>
				</div>
			</Container>
		</div>
	);
}

