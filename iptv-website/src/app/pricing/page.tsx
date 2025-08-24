import Container from "@/components/Container";
import Button from "@/components/Button";

export const metadata = {
	title: "Pricing",
	description: "Choose the IPTV plan that fits your needs.",
};

const plans = [
	{ name: "1 Month", price: "$14.99", desc: "Great for testing", features: ["18,000+ Channels", "VOD + Series", "4K/Ultra HD", "24/7 Support"] },
	{ name: "6 Months", price: "$59.99", desc: "Popular choice", features: ["Anti-Freeze", "99.9% Uptime", "Instant Activation", "Secure Payments"] },
	{ name: "12 Months", price: "$89.99", desc: "Best value", features: ["EPG & Catch-up", "Family Friendly", "Multi-Device", "Priority Support"] },
];

export default function PricingPage() {
	return (
		<div className="py-16 sm:py-24">
			<Container>
				<div className="text-center max-w-2xl mx-auto">
					<h1 className="section-title">Transparent pricing, no hidden fees</h1>
					<p className="section-subtitle mt-3">Instant activation after secure checkout.</p>
				</div>
				<div className="mt-10 grid lg:grid-cols-3 gap-6">
					{plans.map((plan) => (
						<div key={plan.name} className="card p-6 flex flex-col">
							<div className="flex items-baseline justify-between">
								<h3 className="text-xl font-semibold">{plan.name}</h3>
								<p className="text-3xl font-bold">{plan.price}</p>
							</div>
							<p className="mt-2 text-sm text-muted">{plan.desc}</p>
							<ul className="mt-4 space-y-2 text-sm text-muted">
								{plan.features.map((f) => (
									<li key={f} className="flex items-center gap-2">
										<span className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-tr from-indigo-600 to-violet-600" />
										<span>{f}</span>
									</li>
								))}
							</ul>
							<a href={`/checkout?plan=${encodeURIComponent(plan.name)}`} className="mt-6">
								<Button className="w-full">Continue</Button>
							</a>
						</div>
					))}
				</div>
			</Container>
		</div>
	);
}