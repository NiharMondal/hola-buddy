export const extractMonth = (payload: string) => {
	const date = new Date(payload);

	const day = String(date.getUTCDate()).padStart(2, "0");
	const monthIndex = date.getUTCMonth();
	const year = date.getUTCFullYear();

	const monthNames = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];

	const monthName = monthNames[monthIndex];

	const formattedDate = `${day}-${monthName}-${year}`;

	return formattedDate;
};
