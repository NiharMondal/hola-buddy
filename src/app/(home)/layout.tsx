import Footer from "@/components/Footer";
import StickyNavbar from "@/components/shared/StickyNavbar";
import React from "react";

export default function HomeLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<StickyNavbar />
			{children}
			<Footer />
		</>
	);
}
