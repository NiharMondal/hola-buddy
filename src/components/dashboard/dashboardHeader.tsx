import React from "react";
import NavbarActionButton from "../shared/NavbarActionButton";

export default function DashboardHeader() {
	return (
		<header className="pl-16 pt-3 md:p-0 h-16 border-b border-gray-100 flex items-center justify-between shadow">
			<div></div>
			<div className="mr-8 -mt-2 md:mt-0 md:mr-12">
				<NavbarActionButton />
			</div>
		</header>
	);
}
