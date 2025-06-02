'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const carLogos = [
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

// Animation variants
const staggerContainer = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			delayChildren: 0.2,
			staggerChildren: 0.1,
			duration: 0.5,
			ease: 'easeOut',
		},
	},
};

const logoItem = {
	hidden: { opacity: 0, translateY: '30px', scale: 0.8 },
	visible: {
		opacity: 1,
		translateY: '0px',
		scale: 1,
		transition: {
			duration: 0.6,
			ease: 'easeOut',
		},
	},
};

const fadeIn = {
	hidden: { opacity: 0, translateY: '20px' },
	visible: {
		opacity: 1,
		translateY: '0px',
		transition: {
			duration: 0.7,
			ease: 'easeOut',
		},
	},
};

export const CarLogos = () => {
	return (
		<motion.section
			className='flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 lg:justify-between self-stretch p-[32px_20px] sm:p-[48px_30px] md:p-[64px_40px] rounded-[40px] shadow-primary bg-[var(--white)] w-[calc(100%-32px)] sm:w-[calc(100%-48px)] md:w-[calc(100%-80px)] xl:w-[calc(100%-160px)] 2xl:w-[calc(100%-240px)] mx-auto'
			aria-label='Car brand partners'
			role='region'
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true, amount: 0.2 }}
			variants={staggerContainer}
		>
			<motion.h2 className='sr-only' variants={fadeIn}>
				Our Partner Car Brands
			</motion.h2>
			<motion.ul className='contents' variants={staggerContainer}>
				{carLogos.map((logo) => (
					<motion.li
						key={logo.src}
						className='flex items-center justify-center w-[60px] h-[40px] sm:w-[80px] sm:h-[50px] md:w-[100px] md:h-[60px] lg:w-auto lg:h-auto'
						variants={logoItem}
						whileHover={{
							scale: 1.1,
							translateY: '-5px',
							transition: { duration: 0.3, ease: 'easeInOut' },
						}}
						whileTap={{
							scale: 0.95,
							transition: { duration: 0.1, ease: 'easeInOut' },
						}}
					>
						<Image
							src={logo.src}
							alt={logo.alt}
							width={logo.width}
							height={logo.height}
							className='object-contain w-full h-full max-w-[60px] max-h-[40px] sm:max-w-[80px] sm:max-h-[50px] md:max-w-[100px] md:max-h-[60px] lg:max-w-none lg:max-h-none'
							loading='lazy'
						/>
					</motion.li>
				))}
			</motion.ul>
		</motion.section>
	);
};
