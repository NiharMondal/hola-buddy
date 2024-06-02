import DashboardHeader from "@/components/dashboard/dashboardHeader";
import DashboardSideBar from "@/components/dashboard/dashboardSideBar";
import React from "react";

export default function DSubLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex w-full">
			<DashboardSideBar />
			<div className="w-full">
				<DashboardHeader />
				<div className="p-5">{children}</div>
			</div>
		</section>
	);
}
