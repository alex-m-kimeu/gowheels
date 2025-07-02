'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ROUTES } from '@/lib/constants';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui';
import { Users, Car, MapPin, Star } from 'lucide-react';

const fadeIn = {
	hidden: { opacity: 0, translateY: '30px' },
	visible: {
		opacity: 1,
		translateY: '0px',
		transition: {
			duration: 1.2,
			ease: [0.25, 0.1, 0.25, 1],
		},
	},
};

const staggerContainer = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			delayChildren: 0.2,
			staggerChildren: 0.1,
			duration: 0.6,
			ease: [0.25, 0.1, 0.25, 1],
		},
	},
};

const featureItem = {
	hidden: { opacity: 0, translateX: '-20px' },
	visible: {
		opacity: 1,
		translateX: '0px',
		transition: {
			duration: 0.8,
			ease: [0.25, 0.1, 0.25, 1],
		},
	},
};

const mobileStaggerContainer = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			delayChildren: 0.1,
			staggerChildren: 0.08,
			duration: 0.5,
			ease: [0.25, 0.1, 0.25, 1],
		},
	},
};

const mobileFadeIn = {
	hidden: { opacity: 0, translateY: '20px' },
	visible: {
		opacity: 1,
		translateY: '0px',
		transition: {
			duration: 0.8,
			ease: [0.25, 0.1, 0.25, 1],
		},
	},
};

const mobileSlideIn = {
	hidden: { opacity: 0, translateX: '-15px' },
	visible: {
		opacity: 1,
		translateX: '0px',
		transition: {
			duration: 0.6,
			ease: [0.25, 0.1, 0.25, 1],
		},
	},
};

const statsContainer = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			delayChildren: 0.8,
			staggerChildren: 0.15,
			duration: 0.4,
			ease: [0.25, 0.1, 0.25, 1],
		},
	},
};

const statItem = {
	hidden: {
		opacity: 0,
		translateX: '40px',
		scale: 0.9,
	},
	visible: {
		opacity: 1,
		translateX: '0px',
		scale: 1,
		transition: {
			duration: 0.7,
			ease: [0.25, 0.1, 0.25, 1],
			type: 'spring',
			stiffness: 100,
			damping: 15,
		},
	},
};

export const Hero = () => {
	// Stats data
	const stats = [
		{
			icon: Users,
			value: '25,000+',
			description: 'Satisfied customers worldwide',
		},
		{
			icon: Car,
			value: '500+',
			description: 'Premium cars in our fleet',
		},
		{
			icon: MapPin,
			value: '50+',
			description: 'Convenient locations',
		},
		{
			icon: Star,
			value: '4.9/5',
			description: 'Average customer rating',
		},
	];

	return (
		<motion.section
			className='relative w-full mb-[520px] md:mb-[120px] lg:mb-[150px] xl:mb-[100px]'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				duration: 1.0,
				ease: [0.25, 0.1, 0.25, 1],
			}}
			aria-label='Hero section with car rental search'
		>
			<header className='p-[16px] sm:p-[24px] md:p-[40px] xl:p-[64px_0px_32px_80px] 2xl:p-[64px_0px_32px_120px] bg-[linear-gradient(180deg,_#FFF_0%,_#FCDFCF_100%)] overflow-hidden'>
				<div className='w-full max-w-[1920px] hidden xl:flex items-center justify-between mx-auto'>
					<motion.div
						className='flex flex-col items-start gap-[24px] shrink-0 w-[600px]'
						variants={staggerContainer}
						initial='hidden'
						animate='visible'
					>
						<motion.h1
							className='self-stretch text-[var(--neutral-emphasis-text)] t-style-h1 text-start'
							variants={fadeIn}
						>
							Hit the Road in Style
						</motion.h1>

						<motion.p
							className='self-stretch text-[var(--neutral-strong-text)] t-style-body text-start'
							variants={fadeIn}
						>
							Drive your dream car with GoWheels — where luxury meets freedom. From weekend getaways to
							business travel, we&apos;ve got the perfect ride waiting.
						</motion.p>

						<motion.ul
							className='flex flex-wrap items-center justify-start gap-[16px] list-none p-0 m-0'
							variants={staggerContainer}
							initial='hidden'
							animate='visible'
							transition={{ delayChildren: 0.6 }}
							role='list'
							aria-label='Key features'
						>
							<motion.li className='flex items-center gap-[4px]' variants={featureItem} role='listitem'>
								<span
									className='flex items-center justify-center text-[18px] w-[24px]'
									aria-hidden='true'
								>
									🚘
								</span>
								<span className='text-[var(--neutral-strong-text)] t-style-caption text-start'>
									Browse premium vehicles
								</span>
							</motion.li>
							<li aria-hidden='true' role='presentation'>
								<Separator
									orientation='vertical'
									className='!h-[40px] md:!h-[20px] !w-[2px] !bg-[var(--neutral-body-text)]'
								/>
							</li>
							<motion.li className='flex items-center gap-[4px]' variants={featureItem} role='listitem'>
								<span
									className='flex items-center justify-center text-[18px] w-[24px]'
									aria-hidden='true'
								>
									🕒
								</span>
								<span className='text-[var(--neutral-strong-text)] t-style-caption text-start'>
									Book in minutes
								</span>
							</motion.li>
							<li aria-hidden='true' role='presentation'>
								<Separator
									orientation='vertical'
									className='!h-[40px] md:!h-[20px] !w-[2px] !bg-[var(--neutral-body-text)]'
								/>
							</li>
							<motion.li className='flex items-center gap-[4px]' variants={featureItem} role='listitem'>
								<span
									className='flex items-center justify-center text-[18px] w-[24px]'
									aria-hidden='true'
								>
									💼
								</span>
								<span className='text-[var(--neutral-strong-text)] t-style-caption text-start'>
									Flexible
								</span>
							</motion.li>
						</motion.ul>

						<motion.nav
							className='flex items-center gap-[16px] mt-[24px]'
							aria-label='Primary navigation'
							variants={fadeIn}
							transition={{ delay: 1.0 }}
						>
							<motion.div
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
								transition={{
									duration: 0.4,
									type: 'spring',
									stiffness: 200,
									damping: 20,
								}}
							>
								<Link
									href={ROUTES.VEHICLES}
									className='inline-block text-[var(--white)] text-[16px] font-medium leading-[24px] font-poppins bg-[var(--primary)] border-none outline-none shadow-none rounded-[4px] px-[16px] py-[8px] hover:bg-[var(--primary-light)] transition-colors duration-200 cursor-pointer'
								>
									Explore Fleet
								</Link>
							</motion.div>
							<span aria-hidden='true' role='presentation'>
								<Separator
									orientation='vertical'
									className='!h-[25px] !w-[2px] !bg-[var(--neutral-body-text)]'
								/>
							</span>
							<motion.div
								whileHover={{ scale: 1.02 }}
								transition={{ duration: 0.4, type: 'spring', stiffness: 200, damping: 20 }}
							>
								<Link
									href={ROUTES.ABOUT}
									className='inline-block text-[var(--primary)] text-[16px] font-medium leading-[24px] font-poppins bg-transparent border-none outline-none shadow-none rounded-none px-0 py-0 hover:underline underline-offset-[4px] transition-colors duration-200 cursor-pointer'
								>
									Why GoWheels?
								</Link>
							</motion.div>
						</motion.nav>
					</motion.div>

					<div className='overflow-hidden flex justify-end items-end w-1/2'>
						<motion.figure
							className='m-0 w-full'
							initial={{ opacity: 0, translateX: '50px' }}
							animate={{ opacity: 1, translateX: '0px' }}
							transition={{
								duration: 1.4,
								delay: 0.5,
								type: 'spring',
								bounce: 0.15,
								damping: 20,
							}}
							style={{ willChange: 'transform' }}
						>
							<Image
								src='/images/Hero.svg'
								alt='Luxury car illustration showcasing GoWheels premium vehicle collection'
								width={957}
								height={566}
								className='w-full max-w-[1000px]'
								priority
							/>
						</motion.figure>
					</div>
				</div>

				{/* Mobile/Tablet Layout */}
				<div className='w-full flex flex-col lg:flex-row xl:hidden items-center justify-between mx-auto gap-[24px] lg:gap-[16px]'>
					<motion.div
						className='flex flex-col items-center lg:items-start gap-[16px] lg:gap-[24px] shrink-0 w-full lg:w-[400px]'
						variants={mobileStaggerContainer}
						initial='hidden'
						animate='visible'
					>
						<motion.h1
							className='self-stretch text-[var(--neutral-emphasis-text)] t-style-h1 text-center lg:text-start'
							variants={mobileFadeIn}
						>
							Hit the Road in Style
						</motion.h1>

						<motion.p
							className='self-stretch text-[var(--neutral-strong-text)] t-style-body text-center lg:text-start'
							variants={mobileFadeIn}
						>
							Drive your dream car with GoWheels — where luxury meets freedom. From weekend getaways to
							business travel, we&apos;ve got the perfect ride waiting.
						</motion.p>

						<motion.ul
							className='flex flex-wrap items-center justify-center lg:justify-start gap-[8px] list-none p-0 m-0'
							variants={mobileStaggerContainer}
							initial='hidden'
							animate='visible'
							transition={{ delayChildren: 0.4 }}
							role='list'
							aria-label='Key features'
						>
							<motion.li className='flex items-center gap-[4px]' variants={mobileSlideIn} role='listitem'>
								<span className='flex items-center justify-center t-style-caption' aria-hidden='true'>
									🚘
								</span>
								<span className='text-[var(--neutral-strong-text)] t-style-caption text-start'>
									Browse premium vehicles
								</span>
							</motion.li>
							<li aria-hidden='true' role='presentation'>
								<Separator
									orientation='vertical'
									className='!h-[20px] !w-[2px] !bg-[var(--neutral-body-text)]'
								/>
							</li>
							<motion.li className='flex items-center gap-[4px]' variants={mobileSlideIn} role='listitem'>
								<span className='flex items-center justify-center t-style-caption' aria-hidden='true'>
									🕒
								</span>
								<span className='text-[var(--neutral-strong-text)] t-style-caption text-start'>
									Book in minutes
								</span>
							</motion.li>
							<li aria-hidden='true' role='presentation'>
								<Separator
									orientation='vertical'
									className='!h-[20px] !w-[2px] !bg-[var(--neutral-body-text)]'
								/>
							</li>
							<motion.li className='flex items-center gap-[4px]' variants={mobileSlideIn} role='listitem'>
								<span className='flex items-center justify-center t-style-caption' aria-hidden='true'>
									💼
								</span>
								<span className='text-[var(--neutral-strong-text)] t-style-caption text-start'>
									Flexible
								</span>
							</motion.li>
						</motion.ul>

						<motion.nav
							className='flex items-center gap-[16px] mt-[24px]'
							aria-label='Primary navigation'
							variants={mobileFadeIn}
							transition={{ delay: 0.8 }}
						>
							<motion.div
								whileHover={{ scale: 1.01 }}
								whileTap={{ scale: 0.99 }}
								transition={{
									duration: 0.2,
									type: 'spring',
									stiffness: 400,
									damping: 25,
								}}
							>
								<Link
									href={ROUTES.VEHICLES}
									className='inline-block text-[var(--white)] text-[16px] font-medium leading-[24px] font-poppins bg-[var(--primary)] border-none outline-none shadow-none rounded-[4px] px-[16px] py-[8px] hover:bg-[var(--primary-light)] transition-colors duration-150 cursor-pointer'
								>
									Explore Fleet
								</Link>
							</motion.div>
							<span aria-hidden='true' role='presentation'>
								<Separator
									orientation='vertical'
									className='!h-[25px] !w-[2px] !bg-[var(--neutral-body-text)]'
								/>
							</span>
							<motion.div
								whileHover={{ scale: 1.01 }}
								transition={{ duration: 0.2, type: 'spring', stiffness: 400, damping: 25 }}
							>
								<Link
									href={ROUTES.ABOUT}
									className='inline-block text-[var(--primary)] text-[16px] font-medium leading-[24px] font-poppins bg-transparent border-none outline-none shadow-none rounded-none px-0 py-0 hover:underline underline-offset-[4px] transition-colors duration-150 cursor-pointer'
								>
									Why GoWheels?
								</Link>
							</motion.div>
						</motion.nav>
					</motion.div>

					<div className='overflow-hidden flex justify-center lg:justify-end items-center lg:items-end w-full'>
						<motion.figure
							className='m-0 w-full'
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{
								duration: 1.0,
								delay: 0.3,
								type: 'spring',
								stiffness: 100,
								damping: 20,
							}}
							style={{ willChange: 'transform' }}
						>
							<Image
								src='/images/Hero-alt.svg'
								alt='Luxury car illustration showcasing GoWheels premium vehicle collection'
								width={957}
								height={566}
								className='w-full'
								priority
							/>
						</motion.figure>
					</div>
				</div>
			</header>

			{/* Stats Section */}
			<motion.div
				className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center p-[16px] sm:p-[20px] md:p-[24px] xl:p-[24px_40px] w-[calc(90vw)] rounded-[15px] sm:rounded-[20px] md:rounded-[25px] bg-[var(--neutral-background)] shadow-primary absolute bottom-[-510px] md:bottom-[-120px] lg:bottom-[-140px] xl:bottom-[-100px] left-1/2 transform -translate-x-1/2 h-auto xl:h-[145px] z-[50] gap-[24px] lg:gap-auto'
				aria-label='Company statistics'
				variants={statsContainer}
				initial='hidden'
				animate='visible'
				style={{ willChange: 'transform' }}
			>
				{stats.map((stat, index) => {
					const IconComponent = stat.icon;

					return (
						<motion.div
							key={stat.value}
							className={`flex flex-col md:flex-row items-center gap-[16px] xl:gap-[24px] w-full ${
								index < 3 ?
									'pb-[24px] border-b border-[var(--neutral-dividers)] md:pb-0 md:border-b-0'
								:	''
							} ${
								index === 1 || index === 3 ?
									'md:pl-[24px] md:border-l md:border-[var(--neutral-dividers)]'
								:	''
							} ${index > 0 ? 'xl:pl-[24px] xl:border-l xl:border-[var(--neutral-dividers)]' : ''}`}
							variants={statItem}
						>
							<motion.div
								className='block'
								whileHover={{ scale: 1.05, rotate: 5 }}
								transition={{
									type: 'spring',
									stiffness: 400,
									damping: 20,
								}}
							>
								<IconComponent
									className='size-[24px] xl:size-[32px] text-[var(--primary)]'
									aria-hidden='true'
								/>
							</motion.div>
							<div className='flex flex-col items-center md:items-start gap-[4px] w-full text-center md:text-left'>
								<span className='text-[var(--primary)] text-[24px] xl:text-[28px] font-bold font-poppins leading-tight'>
									{stat.value}
								</span>
								<span className='text-[var(--neutral-strong-text)] text-[12px] xl:text-[14px] font-normal font-poppins leading-tight'>
									{stat.description}
								</span>
							</div>
						</motion.div>
					);
				})}
			</motion.div>
		</motion.section>
	);
};
