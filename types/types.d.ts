export interface CarCardProps {
	id: string | number;
	image: string;
	name: string;
	price: number;
	type: string;
	transmission: string;
	doors: number;
	passengers: number;
	hasAC: boolean;
}

export interface CarLogo {
	src: string;
	alt: string;
	width: number;
	height: number;
}
