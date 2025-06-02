'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

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

const stepCard = {
	hidden: { opacity: 0, translateY: '30px' },
	visible: {
		opacity: 1,
		translateY: '0px',
		transition: {
			duration: 0.6,
			ease: 'easeOut',
		},
	},
};

const stepItemLeft = {
	hidden: { opacity: 0, translateX: '-30px' },
	visible: {
		opacity: 1,
		translateX: '0px',
		transition: {
			duration: 0.6,
			ease: 'easeOut',
		},
	},
};

const stepItemRight = {
	hidden: { opacity: 0, translateX: '30px' },
	visible: {
		opacity: 1,
		translateX: '0px',
		transition: {
			duration: 0.6,
			ease: 'easeOut',
		},
	},
};

const timelineVariant = {
	hidden: { opacity: 0, scaleY: 0 },
	visible: {
		opacity: 1,
		scaleY: 1,
		transition: {
			duration: 1.2,
			delay: 0.3,
			ease: 'easeOut',
		},
	},
};

export const HowItWorks = () => {
	return (
		<motion.section
			className='flex flex-col w-full items-center py-[24px] gap-[32px]'
			style={{
				background: `linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(252,223,207,0.8) 100%), url('/images/Amg-alt.svg')`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
			}}
			aria-labelledby='how-it-works-heading'
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true, amount: 0.2 }}
			variants={staggerContainer}
		>
			<motion.header
				className='flex flex-col justify-center items-center gap-[8px] self-stretch'
				variants={staggerContainer}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 0.5 }}
			>
				<motion.p className='t-style-link text-[var(--primary)]' variants={fadeIn}>
					How it works
				</motion.p>
				<motion.h2
					id='how-it-works-heading'
					className='t-style-h2 text-[var(--neutral-headings)] text-center'
					variants={fadeIn}
				>
					Quick & easy steps to get the car
				</motion.h2>
			</motion.header>

			{/* Mobile Design */}
			<motion.div
				className='flex flex-col items-center gap-[16px] w-full px-[20px] md:hidden'
				role='list'
				aria-label='Car rental process steps'
				variants={staggerContainer}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 0.2 }}
			>
				<motion.div
					className='bg-white/20 backdrop-blur-sm rounded-[12px] p-[20px] shadow-soft w-full max-w-[350px] flex flex-col items-center gap-[12px] border border-white/30'
					role='listitem'
					variants={stepCard}
					whileHover={{
						translateY: '-5px',
						transition: { duration: 0.3, ease: 'easeInOut' },
					}}
				>
					<motion.div
						className='w-[60px] h-[60px] flex-shrink-0'
						aria-hidden='true'
						whileHover={{
							scale: 1.1,
							transition: { duration: 0.3, ease: 'easeInOut' },
						}}
					>
						<Image
							src='/icons/Select.svg'
							alt=''
							width={60}
							height={60}
							priority
							className='w-full h-auto object-cover'
						/>
					</motion.div>
					<div className='flex flex-col gap-[4px] text-center'>
						<h3 className='t-style-body text-[var(--primary)]'>Step 1: Select</h3>
						<p className='t-style-text text-[var(--neutral-headings)]'>
							Choose your desired car from our fleet.
						</p>
					</div>
				</motion.div>

				<motion.div
					className='bg-white/20 backdrop-blur-sm rounded-[12px] p-[20px] shadow-soft w-full max-w-[350px] flex flex-col items-center gap-[12px] border border-white/30'
					role='listitem'
					variants={stepCard}
					whileHover={{
						translateY: '-5px',
						transition: { duration: 0.3, ease: 'easeInOut' },
					}}
				>
					<motion.div
						className='w-[60px] h-[60px] flex-shrink-0'
						aria-hidden='true'
						whileHover={{
							scale: 1.1,
							transition: { duration: 0.3, ease: 'easeInOut' },
						}}
					>
						<Image
							src='/icons/Book.svg'
							alt=''
							width={60}
							height={60}
							priority
							className='w-full h-auto object-cover'
						/>
					</motion.div>
					<div className='flex flex-col gap-[4px] text-center'>
						<h3 className='t-style-body text-[var(--primary)]'>Step 2: Book</h3>
						<p className='t-style-text text-[var(--neutral-headings)]'>
							Reserve your car online or through our app.
						</p>
					</div>
				</motion.div>

				<motion.div
					className='bg-white/20 backdrop-blur-sm rounded-[12px] p-[20px] shadow-soft w-full max-w-[350px] flex flex-col items-center gap-[12px] border border-white/30'
					role='listitem'
					variants={stepCard}
					whileHover={{
						translateY: '-5px',
						transition: { duration: 0.3, ease: 'easeInOut' },
					}}
				>
					<motion.div
						className='w-[60px] h-[60px] flex-shrink-0'
						aria-hidden='true'
						whileHover={{
							scale: 1.1,
							transition: { duration: 0.3, ease: 'easeInOut' },
						}}
					>
						<Image
							src='/icons/Drive.svg'
							alt=''
							width={60}
							height={60}
							priority
							className='w-full h-auto object-cover'
						/>
					</motion.div>
					<div className='flex flex-col gap-[4px] text-center'>
						<h3 className='t-style-body text-[var(--primary)]'>Step 3: Drive</h3>
						<p className='t-style-text text-[var(--neutral-headings)]'>
							Pick up your car and hit the road.
						</p>
					</div>
				</motion.div>

				<motion.div
					className='bg-white/20 backdrop-blur-sm rounded-[12px] p-[20px] shadow-soft w-full max-w-[350px] flex flex-col items-center gap-[12px] border border-white/30'
					role='listitem'
					variants={stepCard}
					whileHover={{
						translateY: '-5px',
						transition: { duration: 0.3, ease: 'easeInOut' },
					}}
				>
					<motion.div
						className='w-[60px] h-[60px] flex-shrink-0'
						aria-hidden='true'
						whileHover={{
							scale: 1.1,
							transition: { duration: 0.3, ease: 'easeInOut' },
						}}
					>
						<Image
							src='/icons/Return.svg'
							alt=''
							width={60}
							height={60}
							priority
							className='w-full h-auto object-cover'
						/>
					</motion.div>
					<div className='flex flex-col gap-[4px] text-center'>
						<h3 className='t-style-body text-[var(--primary)]'>Step 4: Return</h3>
						<p className='t-style-text text-[var(--neutral-headings)]'>
							Bring the car back at the end of your rental period.
						</p>
					</div>
				</motion.div>
			</motion.div>

			{/* Desktop Design */}
			<motion.div
				className='hidden md:flex flex-col items-center relative w-[700px] xl:w-[800px]'
				role='list'
				aria-label='Car rental process steps'
				variants={staggerContainer}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 0.2 }}
			>
				<motion.div
					className='absolute left-1/2 top-0 bottom-0 w-[2px] transform -translate-x-1/2 border-l-2 border-dashed border-[var(--primary)] opacity-70'
					aria-hidden='true'
					variants={timelineVariant}
					style={{ originY: 0 }}
				 />

				<motion.div
					className='flex flex-row w-full'
					role='listitem'
					variants={stepItemLeft}
					whileHover={{
						translateX: '10px',
						transition: { duration: 0.3, ease: 'easeInOut' },
					}}
				>
					<div className='flex p-[32px_24px] justify-center items-center gap-[24px] xl:gap-[32px] relative z-10 w-1/2'>
						<div className='flex flex-col items-end gap-[8px]'>
							<h3 className='t-style-body text-[var(--primary)] text-end'>Step 1: Select</h3>
							<p className='t-style-text text-[var(--neutral-headings)] text-end'>
								Choose your desired car from our fleet.
							</p>
						</div>
						<motion.div
							className='w-[60px] xl:w-[80px] h-[60px] xl:h-[80px]'
							aria-hidden='true'
							whileHover={{
								scale: 1.1,
								transition: { duration: 0.3, ease: 'easeInOut' },
							}}
						>
							<Image
								src='/icons/Select.svg'
								alt=''
								width={80}
								height={80}
								className='w-[60px] xl:w-[80px] h-[60px] xl:h-[80px] object-cover'
							/>
						</motion.div>
					</div>
					<div className='w-1/2' />
				</motion.div>

				<motion.div
					className='flex flex-row w-full'
					role='listitem'
					variants={stepItemRight}
					whileHover={{
						translateX: '-10px',
						transition: { duration: 0.3, ease: 'easeInOut' },
					}}
				>
					<div className='w-1/2' />
					<div className='flex p-[32px_24px] justify-center items-center gap-[24px] xl:gap-[32px] relative z-10 w-1/2'>
						<motion.div
							className='w-[60px] xl:w-[80px] h-[60px] xl:h-[80px]'
							aria-hidden='true'
							whileHover={{
								scale: 1.1,
								transition: { duration: 0.3, ease: 'easeInOut' },
							}}
						>
							<Image
								src='/icons/Book.svg'
								alt=''
								width={80}
								height={80}
								className='w-[60px] xl:w-[80px] h-[60px] xl:h-[80px] object-cover'
							/>
						</motion.div>
						<div className='flex flex-col items-start gap-[8px]'>
							<h3 className='t-style-body text-[var(--primary)] text-start'>Step 2: Book</h3>
							<p className='t-style-text text-[var(--neutral-headings)] text-start'>
								Reserve your car online or through our app.
							</p>
						</div>
					</div>
				</motion.div>

				<motion.div
					className='flex flex-row w-full'
					role='listitem'
					variants={stepItemLeft}
					whileHover={{
						translateX: '10px',
						transition: { duration: 0.3, ease: 'easeInOut' },
					}}
				>
					<div className='flex p-[32px_24px] justify-center items-center gap-[24px] xl:gap-[32px] relative z-10 w-1/2'>
						<div className='flex flex-col items-end gap-[8px]'>
							<h3 className='t-style-body text-[var(--primary)] text-end'>Step 3: Drive</h3>
							<p className='t-style-text text-[var(--neutral-headings)] text-end'>
								Pick up your car and hit the road.
							</p>
						</div>
						<motion.div
							className='w-[60px] xl:w-[80px] h-[60px] xl:h-[80px]'
							aria-hidden='true'
							whileHover={{
								scale: 1.1,
								transition: { duration: 0.3, ease: 'easeInOut' },
							}}
						>
							<Image
								src='/icons/Drive.svg'
								alt=''
								width={80}
								height={80}
								className='w-[60px] xl:w-[80px] h-[60px] xl:h-[80px] object-cover'
							/>
						</motion.div>
					</div>
					<div className='w-1/2' />
				</motion.div>

				<motion.div
					className='flex flex-row w-full'
					role='listitem'
					variants={stepItemRight}
					whileHover={{
						translateX: '-10px',
						transition: { duration: 0.3, ease: 'easeInOut' },
					}}
				>
					<div className='w-1/2' />
					<div className='flex p-[32px_24px] justify-center items-center gap-[24px] xl:gap-[32px] relative z-10 w-1/2'>
						<motion.div
							className='w-[60px] xl:w-[80px] h-[60px] xl:h-[80px]'
							aria-hidden='true'
							whileHover={{
								scale: 1.1,
								transition: { duration: 0.3, ease: 'easeInOut' },
							}}
						>
							<Image
								src='/icons/Return.svg'
								alt=''
								width={80}
								height={80}
								className='w-[60px] xl:w-[80px] h-[60px] xl:h-[80px] object-cover'
							/>
						</motion.div>
						<div className='flex flex-col items-start gap-[8px]'>
							<h3 className='t-style-body text-[var(--primary)] text-start'>Step 4: Return</h3>
							<p className='t-style-text text-[var(--neutral-headings)] text-start'>
								Bring the car back at the end of your rental period.
							</p>
						</div>
					</div>
				</motion.div>
			</motion.div>
		</motion.section>
	);
};
