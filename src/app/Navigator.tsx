import Button from "@/components/Button";

export default function Navigator() {
	return (
		<nav className="sticky top-16 h-[30dvh]">
			<div className="flex gap-4">
				<Button>Experience</Button>
				<Button>Projects</Button>
				<Button>Blogs</Button>
				<Button>Contact</Button>
			</div>
		</nav>
	);
}
