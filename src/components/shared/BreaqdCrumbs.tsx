"use client";

import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";

export default function BreaqdCrumbs() {
	const pathname = usePathname();

	const splited = pathname.split("/");
	if (splited[0] === "") {
		splited.fill("home", 0, 1);
	}

	return (
		<Breadcrumbs size="md">
			{splited.map((path) => (
				<BreadcrumbItem className="capitalize" key={path}>
					<Link href={path}>{path}</Link>
				</BreadcrumbItem>
			))}
		</Breadcrumbs>
	);
}
