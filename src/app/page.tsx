import Link from "next/link";

export default function Home() {
	return (
		<main className="flex flex-col items-center mx-1 w-full sm:mx-auto sm:w-5/6 md:w-2/3 max-w-4xl">
			<section id="hero" className="flex flex-col h-[70dvh] w-full">
				<div className="grow-2"></div>
				<div>
					<h1 className="text-6xl font-black mb-4">Hi, this is Eason</h1>
					<div className="text-2xl font-medium">aka Yixin Wang</div>
				</div>
				<div className="grow-1"></div>
				<div className="text-right text-2xl font-medium">
					<div>Master student at TU Berlin &</div>
					<div>Software developer</div>
				</div>
				<div className="text-right font-light">
					<span>based in Berlin, Germany</span>
				</div>
				<div className="grow-1"></div>
			</section>
			<nav className="sticky top-32 h-[30dvh]">
				<div className="flex gap-4">
					<Link
						href="#hero"
						className="hidden items-center justify-center font-medium transition-all rounded-full h-8 px-4 backdrop-blur-lg bg-(--foreground-10) hover:bg-(--foreground-20)"
					>
						Top
					</Link>
					<Link
						href="#experience"
						className="flex items-center justify-center font-medium transition-all rounded-full h-8 px-4 backdrop-blur-lg bg-(--foreground-20) hover:bg-(--foreground-30)"
					>
						Experience
					</Link>
					<Link
						href="#projects"
						className="flex items-center justify-center font-medium transition-all rounded-full h-8 px-4 backdrop-blur-lg bg-(--foreground-20) hover:bg-(--foreground-30)"
					>
						Projects
					</Link>
					<Link
						href="#blogs"
						className="flex items-center justify-center font-medium transition-all rounded-full h-8 px-4 backdrop-blur-lg bg-(--foreground-20) hover:bg-(--foreground-30)"
					>
						Blogs
					</Link>
					<Link
						href="#contact"
						className="flex items-center justify-center font-medium transition-all rounded-full h-8 px-4 backdrop-blur-lg bg-(--foreground-20) hover:bg-(--foreground-30)"
					>
						Contact
					</Link>
				</div>
			</nav>
			<section id="experience" className="h-dvh"></section>
		</main>
	);
}
