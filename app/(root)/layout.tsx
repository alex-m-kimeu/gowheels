import React from 'react';
import { Navbar } from '@/components/navbar/Navbar';
import { Footer } from '@/components/footer/Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className='flex flex-col'>
			<Navbar />
			{children}
			<Footer />
		</main>
	);
};

export default Layout;
