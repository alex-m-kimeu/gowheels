import type { CarCardProps } from '@/types/types';
import type { CarLogo, Testimonial } from '@/types/types';

export const CAR_LOGOS: CarLogo[] = [
	{
		src: '/icons/Toyota.svg',
		alt: 'Toyota logo',
		width: 82,
		height: 54,
	},
	{
		src: '/icons/Ford.svg',
		alt: 'Ford logo',
		width: 115,
		height: 44,
	},
	{
		src: '/icons/Mercedes.svg',
		alt: 'Mercedes logo',
		width: 55,
		height: 54,
	},
	{
		src: '/icons/Jeep.svg',
		alt: 'Jeep logo',
		width: 109,
		height: 44,
	},
	{
		src: '/icons/Bmw.svg',
		alt: 'BMW logo',
		width: 55,
		height: 54,
	},
	{
		src: '/icons/Audi.svg',
		alt: 'Audi logo',
		width: 124,
		height: 42,
	},
];

export const POPULAR_CARS: CarCardProps[] = [
	{
		id: 'bmw-x6-1',
		image: '/images/Amg-alt.svg',
		name: 'BMW X6',
		price: 65,
		type: 'SUV',
		transmission: 'Manual',
		doors: 4,
		passengers: 4,
		hasAC: true,
	},
	{
		id: 'bmw-x6-2',
		image: '/images/Amg-alt.svg',
		name: 'BMW X6',
		price: 65,
		type: 'SUV',
		transmission: 'Manual',
		doors: 4,
		passengers: 4,
		hasAC: false,
	},
	{
		id: 'audi-a4-1',
		image: '/images/Amg-alt.svg',
		name: 'Audi A4',
		price: 45,
		type: 'Sedan',
		transmission: 'Automatic',
		doors: 4,
		passengers: 5,
		hasAC: true,
	},
	{
		id: 'bmw-x6-3',
		image: '/images/Amg-alt.svg',
		name: 'BMW X6',
		price: 65,
		type: 'SUV',
		transmission: 'Manual',
		doors: 4,
		passengers: 4,
		hasAC: true,
	},
	{
		id: 'bmw-x6-4',
		image: '/images/Amg-alt.svg',
		name: 'BMW X6',
		price: 65,
		type: 'SUV',
		transmission: 'Manual',
		doors: 4,
		passengers: 4,
		hasAC: false,
	},
	{
		id: 'audi-a4-2',
		image: '/images/Amg-alt.svg',
		name: 'Audi A4',
		price: 45,
		type: 'Sedan',
		transmission: 'Automatic',
		doors: 4,
		passengers: 5,
		hasAC: true,
	},
	{
		id: 'mercedes-c-class-1',
		image: '/images/Amg-alt.svg',
		name: 'Mercedes-Benz',
		price: 55,
		type: 'Sedan',
		transmission: 'Automatic',
		doors: 4,
		passengers: 5,
		hasAC: true,
	},
	{
		id: 'toyota-camry-1',
		image: '/images/Amg-alt.svg',
		name: 'Toyota Camry',
		price: 40,
		type: 'Sedan',
		transmission: 'Automatic',
		doors: 4,
		passengers: 5,
		hasAC: true,
	},
];

export const TESTIMONIALS: Testimonial[] = [
	{
		id: 'testimonial-1',
		name: 'Sarah Johnson',
		description:
			'Amazing service! The car was in perfect condition and the booking process was so smooth. I highly recommend GoWheels for anyone looking for reliable car rentals.',
		profilePic: '/icons/user.svg',
		rating: 5,
	},
	{
		id: 'testimonial-2',
		name: 'Michael Chen',
		description:
			'Excellent customer support and competitive prices. The BMW X6 I rented exceeded my expectations. Will definitely use GoWheels again for my next trip.',
		profilePic: '/icons/user.svg',
		rating: 5,
	},
	{
		id: 'testimonial-3',
		name: 'Emily Rodriguez',
		description:
			'Great experience from start to finish. The staff was professional and the vehicle was spotless. GoWheels made my vacation hassle-free!',
		profilePic: '/icons/user.svg',
		rating: 4,
	},
	{
		id: 'testimonial-4',
		name: 'David Thompson',
		description:
			'Outstanding service! The car was delivered on time and returned without any issues. The pricing is transparent with no hidden fees. Highly recommended!',
		profilePic: '/icons/user.svg',
		rating: 5,
	},
	{
		id: 'testimonial-5',
		name: 'Jessica Park',
		description:
			'Perfect for business trips! The luxury sedan I rented was comfortable and reliable. The entire process was professional and efficient.',
		profilePic: '/icons/user.svg',
		rating: 4,
	},
];
