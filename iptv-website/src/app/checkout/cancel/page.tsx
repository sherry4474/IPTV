import Container from "@/components/Container";
import Link from "next/link";

export const metadata = { title: "Payment Canceled" };

export default function CancelPage() {
	return (
		<div className="py-16 sm:py-24">
			<Container>
				<div className="card p-8 max-w-xl">
					<h1 className="text-2xl font-semibold">Payment canceled</h1>
					<p className="mt-2 text-muted">Your payment was canceled. You can try again or choose another plan.</p>
					<Link href="/pricing" className="inline-block mt-6 underline">Go to pricing</Link>
				</div>
			</Container>
		</div>
	);
}

