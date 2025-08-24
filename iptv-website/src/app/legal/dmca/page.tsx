import Container from "@/components/Container";

export const metadata = { title: "DMCA" };

export default function DMCAPage() {
	return (
		<div className="py-16 sm:py-24">
			<Container>
				<h1 className="section-title">DMCA Notice</h1>
				<div className="prose prose-invert max-w-none mt-6">
					<p>
						We respect intellectual property rights. If you believe your copyrighted work has been
						infringed, please send a DMCA notice to our designated agent with sufficient details.
					</p>
				</div>
			</Container>
		</div>
	);
}

