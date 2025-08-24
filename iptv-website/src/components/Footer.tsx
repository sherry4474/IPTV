import Link from "next/link";
import Container from "@/components/Container";

export default function Footer() {
	return (
		<footer className="border-t border-black/10 dark:border-white/10">
			<Container className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
				<div>
					<div className="flex items-center gap-2 font-semibold text-base">
						<span className="inline-block h-7 w-7 rounded-md bg-gradient-to-tr from-indigo-600 to-violet-600" />
						<span>PrimeStream IPTV</span>
					</div>
					<p className="mt-3 text-black/70 dark:text-white/70">
						Premium IPTV subscriptions with global channels, movies, and sports.
					</p>
				</div>
				<div>
					<h3 className="font-semibold mb-3">Product</h3>
					<ul className="space-y-2 text-black/80 dark:text-white/80">
						<li><Link href="/pricing" className="hover:text-indigo-600">Pricing</Link></li>
						<li><Link href="/channels" className="hover:text-indigo-600">Channels</Link></li>
						<li><Link href="/faq" className="hover:text-indigo-600">FAQ</Link></li>
					</ul>
				</div>
				<div>
					<h3 className="font-semibold mb-3">Company</h3>
					<ul className="space-y-2 text-black/80 dark:text-white/80">
						<li><Link href="/contact" className="hover:text-indigo-600">Contact</Link></li>
					</ul>
				</div>
				<div>
					<h3 className="font-semibold mb-3">Legal</h3>
					<ul className="space-y-2 text-black/80 dark:text-white/80">
						<li><Link href="/legal/terms" className="hover:text-indigo-600">Terms</Link></li>
						<li><Link href="/legal/privacy" className="hover:text-indigo-600">Privacy</Link></li>
						<li><Link href="/legal/refund" className="hover:text-indigo-600">Refund</Link></li>
						<li><Link href="/legal/dmca" className="hover:text-indigo-600">DMCA</Link></li>
					</ul>
				</div>
			</Container>
			<div className="border-t border-black/10 dark:border-white/10">
				<Container className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-black/60 dark:text-white/60">
					<p>© {new Date().getFullYear()} PrimeStream IPTV. All rights reserved.</p>
					<p>Secure payments with Stripe</p>
				</Container>
			</div>
		</footer>
	);
}

