/* eslint-disable new-cap */
import type { Metadata, Viewport } from 'next';
import { DM_Sans, Poppins } from 'next/font/google';
import '../styles/globals.css';
import { Analytics } from '@vercel/analytics/next';

const dmSans = DM_Sans({
	subsets: ['latin'],
	weight: ['500', '600', '700'],
	variable: '--font-dm-sans',
});

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['300', '400', '500'],
	variable: '--font-poppins',
});

export const metadata: Metadata = {
	title: 'GoWheels',
	description: 'GoWheels - Your premium car service',
};

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className='overflow-x-hidden'>
			<body className={`${dmSans.variable} ${poppins.variable} antialiased bg-white overflow-x-hidden`}>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
