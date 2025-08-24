import Container from "@/components/Container";
import Link from "next/link";

export const metadata = { title: "Order Successful" };

export default function SuccessPage() {
	return (
		<div className="py-16 sm:py-24">
			<Container>
				<div className="card p-8 max-w-xl">
					<h1 className="text-2xl font-semibold">Thank you for your purchase!</h1>
					<p className="mt-2 text-muted">Your IPTV subscription will be activated shortly. A confirmation has been sent to your email.</p>
					<Link href="/" className="inline-block mt-6 underline">Back to home</Link>
				</div>
			</Container>
		</div>
	);
}

