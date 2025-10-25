import Button from "@/components/Button";

export default function Navigator() {
	return (
		<nav className="sticky top-16 z-50 mb-[30dvh]">
			<div className="flex gap-4">
				<Button>Experience</Button>
				<Button>Repertoire</Button>
				<Button>Blogs</Button>
				<Button>Contact</Button>
			</div>
		</nav>
	);
}
