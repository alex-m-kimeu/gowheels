'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const features = [
	{
		icon: '/icons/wallet.svg',
		title: 'Best price guaranteed',
		description: "Find a lower price? We'll refund you 100% of the difference.",
		alt: 'Best price guarantee icon',
	},
	{
		icon: '/icons/user.svg',
		title: 'Experienced drivers',
		description: "Don't have a driver? Don't worry, we have many experienced drivers for you.",
		alt: 'Experienced drivers icon',
	},
	{
		icon: '/icons/support.svg',
		title: '24 hour car delivery',
		description: 'Book your car anytime and we will deliver it directly to you.',
		alt: '24 hour delivery icon',
	},
	{
		icon: '/icons/messages.svg',
		title: '24/7 technical support',
		description: 'Have a question? Contact GoWheels support any time when you have a problem.',
		alt: 'Technical support icon',
	},
];

// Animation variants
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

const staggerContainer = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			delayChildren: 0.2,
			staggerChildren: 0.15,
			duration: 0.5,
			ease: 'easeOut',
		},
	},
};

const featureItem = {
	hidden: { opacity: 0, translateX: '-20px' },
	visible: {
		opacity: 1,
		translateX: '0px',
		transition: {
			duration: 0.6,
			ease: 'easeOut',
		},
	},
};

const featureItemRight = {
	hidden: { opacity: 0, translateX: '20px' },
	visible: {
		opacity: 1,
		translateX: '0px',
		transition: {
			duration: 0.6,
			ease: 'easeOut',
		},
	},
};

const carImageVariant = {
	hidden: { opacity: 0, scale: 0.8, translateY: '30px' },
	visible: {
		opacity: 1,
		scale: 1,
		translateY: '0px',
		transition: {
			duration: 0.8,
			delay: 0.3,
			ease: 'easeOut',
		},
	},
};

export const WhyChooseUs: React.FC = () => {
	return (
		<motion.section
			className='flex flex-col items-center px-[16px] sm:px-[24px] md:px-[40px] xl:px-[80px] 2xl:px-[120px] gap-[32px]'
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true, amount: 0.2 }}
			variants={staggerContainer}
			aria-label='Why Choose Us section'
		>
			{/* Section Header */}
			<motion.header
				className='flex flex-col justify-center items-center gap-[8px] self-stretch'
				variants={staggerContainer}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 0.5 }}
			>
				<motion.p
					className='t-style-link text-[var(--primary)]'
					variants={fadeIn}
					aria-label='Section category'
				>
					Why Choose GoWheels?
				</motion.p>
				<motion.h2
					className='t-style-h2 text-[var(--neutral-headings)] text-center'
					variants={fadeIn}
					id='why-choose-us-heading'
				>
					We offer the best experience with our rental deals
				</motion.h2>
			</motion.header>

			{/* Features Section */}
			<motion.div
				className='grid grid-cols-1 xl:grid-cols-3 gap-[32px] lg:gap-[40px] xl:gap-[56px] items-center'
				variants={staggerContainer}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 0.2 }}
				role='region'
				aria-labelledby='why-choose-us-heading'
			>
				{/* First Two Features */}
				<motion.ul
					className='flex flex-col md:flex-row xl:flex-col gap-[32px] md:gap-[40px] xl:gap-[56px] list-none p-0 m-0 w-full'
					variants={staggerContainer}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.3 }}
					role='list'
					aria-label='Primary features'
				>
					{features.slice(0, 2).map((feature) => (
						<motion.li
							key={feature.title}
							className='flex flex-row md:flex-col xl:flex-row items-center gap-[24px] w-full md:w-1/2 xl:w-full'
							variants={featureItem}
							whileHover={{
								translateX: '5px',
								transition: { duration: 0.3, ease: 'easeInOut' },
							}}
							role='listitem'
						>
							<div
								className='flex size-[64px] flex-col justify-center items-center rounded-[16px] bg-[var(--primary-extra-light)]'
								aria-hidden='true'
							>
								<div className='w-[24px] h-[24px]'>
									<Image
										src={feature.icon}
										alt=''
										width={24}
										height={24}
										className='w-[24px] h-[24px] object-cover'
										priority
										aria-hidden='true'
									/>
								</div>
							</div>

							<div className='flex flex-col items-start md:items-center xl:items-start gap-[8px] flex-1'>
								<h3 className='t-style-subtitle text-[var(--neutral-headings)] text-start md:text-center xl:text-start'>
									{feature.title}
								</h3>
								<p className='t-style-text text-[var(--neutral-strong-text)] text-start md:text-center xl:text-start'>
									{feature.description}
								</p>
							</div>
						</motion.li>
					))}
				</motion.ul>

				{/* Car Image Section */}
				<motion.div
					className='flex justify-center order-2 lg:order-none'
					variants={carImageVariant}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.4 }}
					role='img'
					aria-label='Luxury AMG car showcasing our premium vehicle collection'
				>
					<motion.div className='w-full max-w-[350px] h-auto'>
						<Image
							src='/images/Amg.svg'
							alt='Luxury AMG car showcasing our premium vehicle collection'
							width={650}
							height={390}
							className='w-full h-auto object-cover rounded-[25px]'
							priority
						/>
					</motion.div>
				</motion.div>

				{/* Last Two Features */}
				<motion.ul
					className='flex flex-col md:flex-row xl:flex-col gap-[32px] md:gap-[40px] xl:gap-[56px] list-none p-0 m-0 order-3 lg:order-none w-full'
					variants={staggerContainer}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.3 }}
					role='list'
					aria-label='Additional features'
				>
					{features.slice(2, 4).map((feature) => (
						<motion.li
							key={feature.title}
							className='flex flex-row md:flex-col xl:flex-row items-center gap-[24px] w-full md:w-1/2 xl:w-full'
							variants={featureItemRight}
							whileHover={{
								translateX: '-5px',
								transition: { duration: 0.3, ease: 'easeInOut' },
							}}
							role='listitem'
						>
							<div
								className='flex size-[64px] flex-col justify-center items-center rounded-[16px] bg-[var(--primary-extra-light)]'
								aria-hidden='true'
							>
								<div className='w-[24px] h-[24px]'>
									<Image
										src={feature.icon}
										alt=''
										width={24}
										height={24}
										className='w-[24px] h-[24px] object-cover'
										priority
										aria-hidden='true'
									/>
								</div>
							</div>

							<div className='flex flex-col items-start md:items-center xl:items-start gap-[8px] flex-1'>
								<h3 className='t-style-subtitle text-[var(--neutral-headings)] text-start md:text-center xl:text-start'>
									{feature.title}
								</h3>
								<p className='t-style-text text-[var(--neutral-strong-text)] text-start md:text-center xl:text-start'>
									{feature.description}
								</p>
							</div>
						</motion.li>
					))}
				</motion.ul>
			</motion.div>
		</motion.section>
	);
};
