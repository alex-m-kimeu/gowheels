import { ROUTES } from './routes';

export interface NavLink {
	href: string;
	key: string;
	label: string;
}

export const Links: NavLink[] = [
	{ href: ROUTES.HOME, key: 'home', label: 'Home' },
	{ href: ROUTES.VEHICLES, key: 'vehicles', label: 'Vehicles' },
	{ href: ROUTES.ABOUT, key: 'about', label: 'About' },
	{ href: ROUTES.CONTACT, key: 'contact', label: 'Contact' },
	{ href: ROUTES.FAQS, key: 'faqs', label: 'FAQs' },
];
