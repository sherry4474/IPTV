import Container from "@/components/Container";

export const metadata = { title: "Terms of Service" };

export default function TermsPage() {
	return (
		<div className="py-16 sm:py-24">
			<Container>
				<h1 className="section-title">Terms of Service</h1>
				<div className="prose prose-invert max-w-none mt-6">
					<p>By accessing and using our IPTV service, you agree to the following terms...</p>
					<ul>
						<li>Service is provided for personal use only.</li>
						<li>No redistribution or reselling without written consent.</li>
						<li>We are not affiliated with any TV networks or channel owners.</li>
					</ul>
				</div>
			</Container>
		</div>
	);
}

