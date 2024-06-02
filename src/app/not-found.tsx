"use client";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NotFound() {
	return (
		<section className="grid grid-cols-1 place-content-center place-items-center h-screen">
			<div>
				<Link href="/">
					<Button className="font-medium bg-pink-500 text-white">
						Go Home
					</Button>
				</Link>
				<Image
					src="/img/not-found.png"
					width={600}
					height={600}
					alt="not-found"
				/>
			</div>
		</section>
	);
}
