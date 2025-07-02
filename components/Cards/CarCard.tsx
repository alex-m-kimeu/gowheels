'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { CarCardProps } from '@/types/types';

export const CarCard: React.FC<CarCardProps> = ({
	id,
	image,
	name,
	price,
	type,
	transmission,
	doors,
	passengers,
	hasAC,
}) => {
	return (
		<motion.article
			className='flex flex-col items-center pb-[24px] gap-[24px] w-full rounded-[16px] bg-[var(--white)] shadow-soft'
			variants={{
				hidden: {
					opacity: 0,
					y: 60,
					scale: 0.95,
				},
				visible: {
					opacity: 1,
					y: 0,
					scale: 1,
					transition: {
						duration: 1.2,
						ease: [0.25, 0.1, 0.25, 1],
						type: 'spring',
						stiffness: 80,
						damping: 20,
					},
				},
			}}
		>
			<figure
				className='w-full h-[250px] relative overflow-hidden rounded-t-[20px]'
				role='img'
				aria-label={`${name} car image`}
			>
				<motion.div
					whileHover={{ scale: 1.05 }}
					transition={{ duration: 0.3, ease: 'easeInOut' }}
					className='w-full h-full'
				>
					<Image src={image} alt={`${name} - ${type} vehicle`} fill priority className='object-cover' />
				</motion.div>
			</figure>
			<div className='flex flex-col items-start px-[24px] gap-[32px] self-stretch'>
				<header className='flex flex-col items-start gap-[4px] self-stretch'>
					<div className='flex items-center justify-between self-stretch'>
						<h2 className='t-style-h3 text-[var(--neutral-headings)]'>{name}</h2>
						<div
							className='flex items-center gap-[4px]'
							role='text'
							aria-label={`Price: $${price} per day`}
						>
							<span className='t-style-h3 text-[var(--primary)]' aria-label={`${price} dollars`}>
								${price}
							</span>
							<span className='t-style-link text-[var(--neutral-strong-text)]'>/day</span>
						</div>
					</div>
					<ul
						className='flex items-center gap-[8px] self-stretch list-none'
						role='list'
						aria-label='Car specifications'
					>
						<li className='flex items-center gap-[8px]'>
							<span className='size-[8px] rounded-[50px] bg-[var(--primary)]' aria-hidden='true' />
							<span className='t-style-caption text-[var(--neutral-body-text)]'>{type}</span>
						</li>
						<li className='flex items-center gap-[8px]'>
							<span
								className='size-[4px] rounded-[50px] bg-[var(--neutral-body-text)]'
								aria-hidden='true'
							/>
							<span className='t-style-caption text-[var(--neutral-body-text)]'>{transmission}</span>
						</li>
						<li className='flex items-center gap-[8px]'>
							<span
								className='size-[4px] rounded-[50px] bg-[var(--neutral-body-text)]'
								aria-hidden='true'
							/>
							<span className='t-style-caption text-[var(--neutral-body-text)]'>{doors} Doors</span>
						</li>
					</ul>
				</header>
				<dl className='flex justify-between self-stretch' aria-label='Vehicle features'>
					<div className='flex flex-col items-start gap-[16px]'>
						<div className='flex items-center gap-[4px] self-stretch'>
							<span className='t-style-caption' role='img' aria-label='passengers'>
								👩🏻‍🤝‍👨🏾
							</span>
							<dt className='sr-only'>Passengers:</dt>
							<dd className='t-style-caption text-[var(--neutral-body-text)]'>{passengers} Passengers</dd>
						</div>
						<div className='flex items-center gap-[4px] self-stretch'>
							<span className='t-style-caption' role='img' aria-label='transmission'>
								⚙️
							</span>
							<dt className='sr-only'>Transmission:</dt>
							<dd className='t-style-caption text-[var(--neutral-body-text)]'>{transmission}</dd>
						</div>
					</div>
					<div className='flex flex-col items-start gap-[16px]'>
						{hasAC && (
							<div className='flex items-center gap-[4px] self-stretch'>
								<span className='t-style-caption' role='img' aria-label='air conditioning'>
									❄️
								</span>
								<dt className='sr-only'>Air Conditioning:</dt>
								<dd className='t-style-caption text-[var(--neutral-body-text)]'>A/C</dd>
							</div>
						)}
						<div className='flex items-center gap-[4px] self-stretch'>
							<span className='t-style-caption' role='img' aria-label='doors'>
								🚪
							</span>
							<dt className='sr-only'>Doors:</dt>
							<dd className='t-style-caption text-[var(--neutral-body-text)]'>{doors} Doors</dd>
						</div>
					</div>
				</dl>
				<motion.div
					whileHover={{ scale: 1.025 }}
					whileTap={{ scale: 0.98 }}
					transition={{
						type: 'spring',
						stiffness: 500,
						damping: 30,
					}}
					className='w-full'
				>
					<Link
						href={`/vehicles/${id}`}
						className='inline-block text-center text-[var(--white)] t-style-link bg-[var(--primary)] border-none outline-none shadow-none rounded-[8px] px-[16px] py-[8px] hover:bg-[var(--primary-light)] transition-colors duration-200 cursor-pointer w-full'
						aria-label={`View details for ${name}`}
					>
						View Details
					</Link>
				</motion.div>
			</div>
		</motion.article>
	);
};
