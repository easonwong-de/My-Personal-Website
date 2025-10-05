import Image from "next/image";

export default function SectionHero() {
	return (
		<section className="flex flex-col h-[70dvh] w-full">
			<div className="grow-2"></div>
			<div>
				<h1 className="text-6xl font-black mb-4">Hi, this is Eason</h1>
				<div className="text-2xl font-medium">aka Yixin Wang</div>
			</div>
			<div className="grow-1"></div>
			<div className="text-right text-2xl font-medium mb-4">
				<div>Master student at TU Berlin &</div>
				<div>Software developer</div>
			</div>
			<div className="text-right font-light">
				<span className="flex items-center justify-end gap-2">
					<Image
						src="/svg/globe.europe.africa.svg"
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
