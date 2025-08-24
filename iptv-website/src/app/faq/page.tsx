import Container from "@/components/Container";

export const metadata = {
	title: "FAQ",
	description: "Common questions about our IPTV service.",
};

const faqs = [
	{ q: "What internet speed do I need?", a: "We recommend at least 15 Mbps for HD, 25 Mbps for 4K." },
	{ q: "Can I use on multiple devices?", a: "Yes, our plans support multi-device usage depending on your subscription." },
	{ q: "Do you provide adult channels?", a: "Yes, adult channels are available and can be hidden on request." },
	{ q: "How do I renew?", a: "You can renew from the pricing page or via your invoice email." },
];

export default function FaqPage() {
	return (
		<div className="py-16 sm:py-24">
			<Container>
				<div className="text-center max-w-2xl mx-auto">
					<h1 className="section-title">Frequently Asked Questions</h1>
					<p className="section-subtitle mt-3">If you still need help, contact us.</p>
				</div>
				<div className="mt-10 grid gap-4">
					{faqs.map((faq) => (
						<div key={faq.q} className="card p-5">
							<p className="font-medium">{faq.q}</p>
							<p className="mt-2 text-sm text-muted">{faq.a}</p>
						</div>
					))}
				</div>
			</Container>
		</div>
	);
}

