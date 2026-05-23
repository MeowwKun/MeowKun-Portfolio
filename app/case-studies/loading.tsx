export default function Loading() {
	return (
		<main className="min-h-screen bg-[linear-gradient(180deg,#090c13_0%,#06070b_100%)] px-4 py-24 text-white sm:px-6 lg:px-8">
			<div className="mx-auto max-w-7xl animate-pulse space-y-6">
				<div className="h-6 w-40 rounded-full bg-white/10" />
				<div className="h-20 w-full max-w-4xl rounded-[2rem] bg-white/8" />
				<div className="grid gap-6 lg:grid-cols-[1fr_280px]">
					<div className="space-y-6">
						<div className="h-80 rounded-[2rem] bg-white/8" />
						<div className="h-56 rounded-[1.8rem] bg-white/6" />
						<div className="h-56 rounded-[1.8rem] bg-white/6" />
					</div>
					<div className="hidden rounded-[1.8rem] bg-white/6 lg:block" />
				</div>
			</div>
		</main>
	);
}
