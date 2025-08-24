import Container from "@/components/Container";

export const metadata = { title: "Refund Policy" };

export default function RefundPage() {
	return (
		<div className="py-16 sm:py-24">
			<Container>
				<h1 className="section-title">Refund Policy</h1>
				<div className="prose prose-invert max-w-none mt-6">
					<p>We offer a 7-day money-back guarantee if the service does not work for you.</p>
					<ul>
						<li>Contact support with your order details to request a refund.</li>
						<li>Refunds processed to the original payment method.</li>
					</ul>
				</div>
			</Container>
		</div>
	);
}

