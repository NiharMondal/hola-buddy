"use client";

import { useInCommingRequestQuery } from "@/redux/api/buddyApi";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentUser } from "@/redux/slice/authSlice";
import { Accordion, AccordionItem } from "@nextui-org/react";

import RequestList from "./RequestList";

export default function Incomming() {
	const currentUser: any = useAppSelector(selectCurrentUser);
	const { data: inCommingRequest, isLoading } = useInCommingRequestQuery(
		currentUser?.id
	);
	const trips = inCommingRequest?.data?.trip;

	if (isLoading) return <p> Please wait...</p>;
	return (
		<div>
			<h1 className="text-2xl font-semibold">
				From here you can maintain your travel buddy
			</h1>

			<div>
				{trips?.length > 0 &&
					trips?.map((trip: any) => (
						<Accordion key={trip.id}>
							<AccordionItem aria-level={trip?.id} title={trip?.title}>
								{trip?.buddyRequest?.length > 0 ? (
									trip.buddyRequest.map((buddy: any) => (
										<RequestList buddy={buddy} key={buddy?.id} />
									))
								) : (
									<p>Buddy request is empty</p>
								)}
							</AccordionItem>
						</Accordion>
					))}
			</div>
		</div>
	);
}
