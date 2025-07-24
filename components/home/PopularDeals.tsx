'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CarCard } from '@/components/cards';
import Link from 'next/link';
import { POPULAR_CARS, ROUTES } from '@/lib/constants';
import { ArrowRight } from 'lucide-react';

// Animation variants
const fadeIn = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] },
	},
};

const fadeInFast = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
	},
};

const stagger = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
			delayChildren: 0.1,
			duration: 0.8,
			ease: [0.25, 0.1, 0.25, 1],
		},
	},
};

const linkTap = {
	scale: 0.98,
	transition: {
		duration: 0.1,
		ease: 'easeInOut',
	},
};

export const PopularDeals: React.FC = () => {
	return (
		<motion.section
			className='flex flex-col items-center px-[16px] sm:px-[24px] md:px-[40px] xl:px-[80px] 2xl:px-[120px] gap-[32px] w-full'
			aria-labelledby='popular-deals-heading'
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true, amount: 0.1, margin: '100px' }}
			variants={stagger}
		>
			{/* Header */}
			<motion.header
				className='flex flex-col justify-center items-center gap-[8px] self-stretch'
				variants={fadeIn}
			>
				<motion.p
					className='t-style-link text-[var(--primary)]'
					role='doc-subtitle'
					aria-label='Section category'
					variants={fadeInFast}
				>
					Popular Deals
				</motion.p>
				<motion.h2
					id='popular-deals-heading'
					className='t-style-h2 text-[var(--neutral-headings)] text-center'
					variants={fadeIn}
				>
					Most popular car rental deals
				</motion.h2>
			</motion.header>

			{/* Car Cards */}
			<motion.div
				className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-[20px] lg:gap-x-[24px] xl:gap-x-[28px] gap-y-[24px] md:gap-y-[32px] w-full'
				role='region'
				aria-label='Available car rental deals'
				variants={stagger}
			>
				{POPULAR_CARS.map((car, index) => (
					<CarCard
						key={car.id}
						{...car}
						aria-label={`Car ${index + 1} of ${POPULAR_CARS.length}: ${car.name}`}
					/>
				))}
			</motion.div>

			{/* Link */}
			<motion.nav aria-label='View more vehicles' variants={fadeIn}>
				<motion.div whileTap={linkTap}>
					<Link
						href={ROUTES.VEHICLES}
						className='flex gap-[8px] items-center t-style-link text-[var(--neutral-headings)] bg-[var(--white)] border-[1px] border-[var(--neutral-dividers)] rounded-[4px] px-[16px] py-[8px] hover:bg-[var(--primary)] hover:text-[var(--white)] transition-colors duration-200 cursor-pointer'
						aria-describedby='show-all-description'
					>
						<span>Show all vehicles</span>
						<motion.div
							animate={{
								translateX: [0, 3, 0],
							}}
							transition={{
								duration: 1.8,
								repeat: Infinity,
								ease: 'easeInOut',
							}}
						>
							<ArrowRight className='size-[20px]' aria-hidden='true' />
						</motion.div>
						<span id='show-all-description' className='sr-only'>
							Navigate to complete vehicle catalog
						</span>
					</Link>
				</motion.div>
			</motion.nav>
		</motion.section>
	);
};
