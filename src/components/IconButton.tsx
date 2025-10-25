import Image from "next/image";

export default async function IconButton() {
	return (
		<div className="group left-32 flex gap-1 rounded-full bg-(--background-6) p-4 inset-shadow-2xs inset-shadow-white/15 select-none lg:absolute">
			<h2 className="flex flex-row items-center justify-center gap-0 font-bold transition-all">
				<div className="w-6 text-right transition-all delay-100 group-hover:w-0 group-hover:delay-100">
					<Image
						src="/image/icon.svg"
						alt="O"
						width="24"
						height="24"
						className="h-6 w-6 opacity-100 blur-none transition-all delay-200 group-hover:opacity-100 group-hover:blur-sm group-hover:delay-0"
					/>
				</div>
				<div className="w-0 text-center transition-all delay-100 group-hover:w-12 group-hover:delay-100">
					<div className="opacity-0 blur-sm transition-all delay-0 group-hover:opacity-100 group-hover:blur-none group-hover:delay-200">
						Eason
					</div>
				</div>
			</h2>
		</div>
	);
}
