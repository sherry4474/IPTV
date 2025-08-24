import Container from "@/components/Container";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
	return (
		<div className="py-16 sm:py-24">
			<Container>
				<h1 className="section-title">Privacy Policy</h1>
				<div className="prose prose-invert max-w-none mt-6">
					<p>We value your privacy. This policy explains how we collect and use your data...</p>
					<ul>
						<li>We collect minimal personal information required to deliver the service.</li>
						<li>We never sell your data to third parties.</li>
						<li>Payments are processed securely by Stripe.</li>
					</ul>
				</div>
			</Container>
		</div>
	);
}

