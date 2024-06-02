import React from "react";
import {
	Navbar,
	NavbarBrand,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
	NavbarContent,
	NavbarItem,
	Button,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import NavbarActionButton from "./NavbarActionButton";

export default function StickyNavbar() {
	const menuItems = [
		"Profile",
		"Dashboard",
		"Activity",
		"Analytics",
		"System",
		"Deployments",
		"My Settings",
		"Team Settings",
		"Help & Feedback",
		"Log Out",
	];

	return (
		<Navbar disableAnimation isBordered>
			<NavbarContent className="sm:hidden" justify="start">
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarContent className="sm:hidden pr-3" justify="start">
				<NavbarBrand>
					<Image src="/img/logo.png" width={50} height={50} alt="logo" />
					<p className="font-bold text-inherit">VoyageVibe</p>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex gap-4" justify="end">
				<NavbarBrand>
					<Link href="/" className="text-sm">
						<Image
							src="/img/logo.png"
							width={30}
							height={30}
							alt="logo"
							className="w-fit mx-auto"
						/>
						<p className="font-bold text-inherit leading-none">
							VoyageVibe
						</p>
					</Link>
				</NavbarBrand>
				<NavbarItem>
					<Link href="/">Home</Link>
				</NavbarItem>
				<NavbarItem>
					<Link href="/about-us">About us</Link>
				</NavbarItem>
			</NavbarContent>

			<NavbarContent justify="end">
				<NavbarItem>
					<NavbarActionButton />
				</NavbarItem>
			</NavbarContent>

			<NavbarMenu>
				{menuItems.map((item, index) => (
					<NavbarMenuItem key={`${item}-${index}`}>
						<Link
							className="w-full"
							color={
								index === 2
									? "warning"
									: index === menuItems.length - 1
									? "danger"
									: "foreground"
							}
							href="#"
						>
							{item}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	);
}
