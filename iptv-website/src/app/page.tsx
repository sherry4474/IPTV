import Container from "@/components/Container";
import Button from "@/components/Button";

export default function Home() {
	return (
		<div className="font-sans">
			<section className="relative overflow-hidden">
				<div className="absolute inset-0 -z-10">
					<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_circle_at_50%_-100px,rgba(99,102,241,0.25),transparent_60%)]" />
					<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_circle_at_80%_10%,rgba(168,85,247,0.2),transparent_60%)]" />
				</div>
				<Container className="py-24 sm:py-28">
					<div className="grid gap-10 lg:grid-cols-12 lg:items-center">
						<div className="lg:col-span-7">
							<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
								Watch Everything. Anytime. Anywhere.
							</h1>
							<p className="mt-5 text-lg text-muted max-w-2xl">
								Premium IPTV service with 18,000+ live channels, 60,000+ movies and series,
								99.9% uptime, anti-freeze streaming and 24/7 support.
							</p>
							<div className="mt-8 flex flex-col sm:flex-row gap-3">
								<a href="/pricing">
									<Button className="w-full sm:w-auto">Get Started</Button>
								</a>
								<a href="#features">
									<Button variant="secondary" className="w-full sm:w-auto">Explore Features</Button>
								</a>
							</div>
							<p className="mt-4 text-xs text-muted">Fast activation. Works on Smart TV, Android, iOS, Firestick and more.</p>
						</div>
						<div className="lg:col-span-5">
							<div className="card p-3 md:p-4">
								<div className="aspect-video w-full rounded-xl bg-[url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center" />
								<div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs text-muted">
									<div className="card p-3">
										<p className="font-semibold text-foreground">4K/Ultra HD</p>
										<p>Crystal clear quality</p>
									</div>
									<div className="card p-3">
										<p className="font-semibold text-foreground">99.9% Uptime</p>
										<p>Reliable streaming</p>
									</div>
									<div className="card p-3">
										<p className="font-semibold text-foreground">24/7 Support</p>
										<p>We’ve got you</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</section>

			<section id="features" className="py-20 sm:py-24">
				<Container>
					<div className="text-center max-w-3xl mx-auto">
						<h2 className="section-title">Why Switch to PrimeStream</h2>
						<p className="section-subtitle mt-3">Everything you need for an elite streaming experience.</p>
					</div>
					<div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{[
							{ title: "Global Channels", desc: "18,000+ live channels including sports, news, kids and more." },
							{ title: "VOD & Series", desc: "60,000+ movies and TV series updated daily." },
							{ title: "Anti-Freeze Tech", desc: "Optimized servers for smooth, buffer-free streaming." },
							{ title: "Multi-Device", desc: "Works on Smart TV, Android, iOS, Firestick, MAG, PC." },
							{ title: "EPG & Catch-Up", desc: "Electronic Program Guide and 7-day catch-up on select channels." },
							{ title: "Secure Payments", desc: "Safe checkout powered by Stripe with instant activation." },
						].map((f) => (
							<div key={f.title} className="card p-6">
								<h3 className="font-semibold text-lg">{f.title}</h3>
								<p className="mt-2 text-muted text-sm">{f.desc}</p>
							</div>
						))}
					</div>
				</Container>
			</section>

			<section className="py-20 sm:py-24">
				<Container>
					<div className="grid lg:grid-cols-3 gap-6">
						{[
							{ name: "1 Month", price: "$14.99", features: ["18,000+ Channels", "VOD+Series", "4K/Ultra HD", "24/7 Support"] },
							{ name: "6 Months", price: "$59.99", features: ["Best Value", "Anti-Freeze", "99.9% Uptime", "Instant Activation"] },
							{ name: "12 Months", price: "$89.99", features: ["Family Friendly", "EPG & Catch-up", "Secure Payments", "Multi-Device"] },
						].map((plan) => (
							<div key={plan.name} className="card p-6 flex flex-col">
								<div className="flex items-baseline justify-between">
									<h3 className="text-xl font-semibold">{plan.name}</h3>
									<p className="text-2xl font-bold">{plan.price}</p>
								</div>
								<ul className="mt-4 space-y-2 text-sm text-muted">
									{plan.features.map((it) => (
										<li key={it} className="flex items-center gap-2">
											<span className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-tr from-indigo-600 to-violet-600" />
											<span>{it}</span>
										</li>
									))}
								</ul>
								<a href="/pricing" className="mt-6">
									<Button className="w-full">Choose Plan</Button>
								</a>
							</div>
						))}
					</div>
				</Container>
			</section>

			<section className="py-16 sm:py-24">
				<Container>
					<div className="text-center max-w-2xl mx-auto">
						<h2 className="section-title">Frequently Asked Questions</h2>
						<p className="section-subtitle mt-3">Most answers within seconds. Contact us if you need help.</p>
					</div>
					<div className="mt-10 grid gap-4">
						{[
							{
								q: "What devices are supported?",
								a: "Smart TVs (Samsung/LG), Android, iOS, Firestick, MAG, Enigma, PC and more.",
							},
							{ q: "How fast is activation?", a: "Usually within minutes after payment confirmation via email." },
							{ q: "Do you offer refunds?", a: "Yes, full refund within 7 days if service does not work for you." },
						].map((faq) => (
							<div key={faq.q} className="card p-5">
								<p className="font-medium">{faq.q}</p>
								<p className="mt-2 text-sm text-muted">{faq.a}</p>
							</div>
						))}
					</div>
					<div className="mt-10 text-center">
						<a href="/contact">
							<Button variant="secondary">Still have questions? Contact us</Button>
						</a>
					</div>
				</Container>
			</section>

			<section className="py-20">
				<Container className="text-center">
					<h2 className="text-2xl font-semibold">Ready to start streaming?</h2>
					<p className="mt-2 text-muted">Pick a plan that suits you. No hidden fees.</p>
					<a href="/pricing" className="mt-6 inline-block">
						<Button size="lg">Get Started</Button>
					</a>
				</Container>
			</section>
		</div>
	);
}