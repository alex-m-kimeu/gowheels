import React from 'react';
import { Hero, WhyChooseUs, HowItWorks, PopularDeals } from '@/components/home';

const Home = () => {
	return (
		<main className='flex flex-col items-center bg-[var(--white)] gap-[32px] lg:gap-[40px] xl:gap-[48px] 2xl:gap-[56px]'>
			<Hero />
			<WhyChooseUs />
			<HowItWorks />
			<PopularDeals />
		</main>
	);
};

export default Home;
