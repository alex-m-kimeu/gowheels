import React, { Suspense } from 'react';
import { Navbar } from '../../components/navbar/Navbar';

const Layout = async ({ children }: { children: React.ReactNode }) => {
	return (
		<main className='flex flex-col'>
			<Navbar />
			<Suspense>{children}</Suspense>
		</main>
	);
};

export default Layout;
