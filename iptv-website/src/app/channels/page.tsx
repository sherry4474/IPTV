import Container from "@/components/Container";

export const metadata = {
	title: "Channels",
	description: "Browse popular channels included in our IPTV packages.",
};

const categories = [
	{ name: "Sports", items: ["ESPN", "Sky Sports", "beIN Sports", "BT Sport"] },
	{ name: "Movies", items: ["HBO", "Sky Cinema", "Star Movies", "Cinemax"] },
	{ name: "News", items: ["BBC News", "CNN", "Sky News", "Al Jazeera"] },
	{ name: "Kids", items: ["Cartoon Network", "Disney", "Nickelodeon", "BabyTV"] },
];

export default function ChannelsPage() {
	return (
		<div className="py-16 sm:py-24">
			<Container>
				<div className="text-center max-w-2xl mx-auto">
					<h1 className="section-title">Thousands of channels worldwide</h1>
					<p className="section-subtitle mt-3">A small sample of what&apos;s included.</p>
				</div>
				<div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{categories.map((cat) => (
						<div key={cat.name} className="card p-6">
							<h3 className="font-semibold text-lg">{cat.name}</h3>
							<ul className="mt-3 space-y-2 text-sm text-muted">
								{cat.items.map((ch) => (
									<li key={ch} className="flex items-center gap-2">
										<span className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-tr from-indigo-600 to-violet-600" />
										<span>{ch}</span>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</Container>
		</div>
	);
}

