"use client";

import Link from "next/link";
import { useState } from "react";
import Container from "@/components/Container";
import Button from "@/components/Button";

export default function Header() {
	const [open, setOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 w-full border-b border-black/10 dark:border-white/10 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<Container className="flex h-16 items-center justify-between">
				<div className="flex items-center gap-3">
					<Link href="/" className="flex items-center gap-2 text-xl font-semibold tracking-tight">
						<span className="inline-block h-8 w-8 rounded-md bg-gradient-to-tr from-indigo-600 to-violet-600" />
						<span>PrimeStream IPTV</span>
					</Link>
				</div>
				<nav className="hidden md:flex items-center gap-8 text-sm">
					<Link href="/pricing" className="hover:text-indigo-600 transition-colors">Pricing</Link>
					<Link href="/channels" className="hover:text-indigo-600 transition-colors">Channels</Link>
					<Link href="/faq" className="hover:text-indigo-600 transition-colors">FAQ</Link>
					<Link href="/contact" className="hover:text-indigo-600 transition-colors">Contact</Link>
				</nav>
				<div className="hidden md:flex items-center gap-3">
					<Link href="/pricing">
						<Button size="sm">Get Started</Button>
					</Link>
				</div>
				<button
					className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/10 dark:border-white/10"
					aria-label="Toggle Menu"
					onClick={() => setOpen((v) => !v)}
				>
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M4 6H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
						<path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
						<path d="M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
					</svg>
				</button>
			</Container>
			{open && (
				<div className="md:hidden border-t border-black/10 dark:border-white/10">
					<Container className="py-4">
						<div className="flex flex-col gap-3">
							<Link href="/pricing" onClick={() => setOpen(false)} className="py-2">Pricing</Link>
							<Link href="/channels" onClick={() => setOpen(false)} className="py-2">Channels</Link>
							<Link href="/faq" onClick={() => setOpen(false)} className="py-2">FAQ</Link>
							<Link href="/contact" onClick={() => setOpen(false)} className="py-2">Contact</Link>
							<Link href="/pricing" onClick={() => setOpen(false)} className="pt-2">
								<Button className="w-full">Get Started</Button>
							</Link>
						</div>
					</Container>
				</div>
			)}
		</header>
	);
}

