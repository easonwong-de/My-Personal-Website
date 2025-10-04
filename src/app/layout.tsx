import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Eason",
	description: "Get to know Yixin Wang, aka Eason.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body className={"antialiased"}>{children}</body>
		</html>
	);
}
