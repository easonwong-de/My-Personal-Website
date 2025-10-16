import Image from "next/image";

export default function HeroSection() {
	return (
		<section className="flex flex-col h-[70dvh] w-full">
			<div className="grow-2"></div>
			<div>
				<h1 className="mb-4 text-6xl font-black">Hi, this is Eason</h1>
				<div className="text-2xl font-medium">aka Yixin Wang</div>
			</div>
			<div className="grow-1"></div>
			<div className="mb-4 text-2xl font-medium text-right">
				<div>Master student at TU Berlin &</div>
				<div>Software developer</div>
			</div>
			<div className="font-light text-right">
				<span className="flex items-center justify-end gap-2">
					<Image
						src="/image/globe.europe.africa.svg"
						alt="🌍"
						width={16}
						height={16}
						className="inline w-[1em] h-[1em]"
					/>
					based in Berlin, Germany
				</span>
			</div>
			<div className="grow-1"></div>
		</section>
	);
}
