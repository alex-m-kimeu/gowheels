'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ROUTES } from '@/lib/constants/routes';
import { MdMailOutline, MdOutlinePhone, MdOutlineLocationOn } from 'react-icons/md';

export const Footer = () => {
	return (
		<footer className='flex flex-col mt-[40px] pt-[40px] items-start gap-[40px] bg-[var(--white)] shadow-sm w-full font-poppins'>
			<div className='flex p-[0_80px_40px_80px] w-full justify-between items-center self-stretch border-b-[1px] border-[var(--neutral-dividers)]'>
				<div className='flex flex-col items-start gap-[4px]'>
					<h1 className='self-stretch text-[var(--neutral-high-contrast)] t-style-subtitle'>
						Join our newsletter
					</h1>
					<p className='self-stretch text-[var(--neutral-body-text)] t-style-caption'>
						Get a thoughtful update once a week — no spam, just good stuff.
					</p>
				</div>
				{/* Email Input field */}
			</div>
			<div className='flex px-[80px] justify-between items-start self-stretch'>
				<div className='flex w-[250px] flex-col items-start gap-[24px]'>
					<div>
						<Image
							src='/images/Logo.svg'
							alt='Go Wheels Logo'
							width={116}
							height={42}
							className='w-[70px] h-auto md:w-[100px] 2xl:w-[116px]'
							priority
						/>
					</div>
					<p className='text-[var(--neutral-body-text)] t-style-caption self-stretch'>
						Wherever the Road Takes You, Let Us Be Your Reliable Companion - With Our Dedication to
						Excellence and Passion for Adventure, Your Journey Begins and Ends with Us.
					</p>
					<div className='flex gap-[32px] items-center'>
						<a href='#'>
							<Image
								src='/icons/twitter.svg'
								alt='Twitter Icon'
								width={24}
								height={24}
								className='w-[24px] h-[24px]'
								priority
							/>
						</a>
						<Image
							src='/icons/facebook.svg'
							alt='Facebook Icon'
							width={24}
							height={24}
							className='w-[24px] h-[24px]'
							priority
						/>
						<Image
							src='/icons/instagram.svg'
							alt='Instagram Icon'
							width={24}
							height={24}
							className='w-[24px] h-[24px]'
							priority
						/>
						<Image
							src='/icons/linkedin.svg'
							alt='Linkedin Icon'
							width={24}
							height={24}
							className='w-[24px] h-[24px]'
							priority
						/>
					</div>
				</div>
				<div className='flex flex-col items-start gap-[16px]'>
					<h1 className='self-stretch text-[var(--neutral-headings)] t-style-link'>Company</h1>
					<Link
						href={ROUTES.HOME}
						className='text-[var(--neutral-body-text)] t-style-caption hover:text-[var(--primary)]'
					>
						Home
					</Link>
					<Link
						href={ROUTES.VEHICLES}
						className='text-[var(--neutral-body-text)] t-style-caption hover:text-[var(--primary)]'
					>
						Vehicles
					</Link>
					<Link
						href={ROUTES.ABOUT}
						className='text-[var(--neutral-body-text)] t-style-caption hover:text-[var(--primary)]'
					>
						About Us
					</Link>
					<Link
						href={ROUTES.FAQS}
						className='text-[var(--neutral-body-text)] t-style-caption hover:text-[var(--primary)]'
					>
						FAQs
					</Link>
				</div>
				<div className='flex flex-col items-start gap-[16px]'>
					<h1 className='self-stretch text-[var(--neutral-headings)] t-style-link'>Customer</h1>
					<Link
						href={ROUTES.HOME}
						className='text-[var(--neutral-body-text)] t-style-caption hover:text-[var(--primary)]'
					>
						Client Support
					</Link>
					<Link
						href={ROUTES.HOME}
						className='text-[var(--neutral-body-text)] t-style-caption hover:text-[var(--primary)]'
					>
						Latest blogs
					</Link>
				</div>
				<div className='flex flex-col items-start gap-[16px]'>
					<h1 className='self-stretch text-[var(--neutral-headings)] t-style-link'>Working Hours</h1>
					<p className='text-[var(--neutral-body-text)] t-style-caption self-stretch'>
						Mon - Fri : 8:00 AM - 8:00 PM
					</p>
					<p className='text-[var(--neutral-body-text)] t-style-caption self-stretch'>
						Sat : 8:00 AM - 8:00 PM
					</p>
					<p className='text-[var(--neutral-body-text)] t-style-caption self-stretch'>
						Sun: <span className='text-[var(--primary)]'>Closed</span>
					</p>
				</div>
				<div className='flex flex-col items-start gap-[16px]'>
					<h1 className='self-stretch text-[var(--neutral-headings)] t-style-link'>Contact Information</h1>
					<div className='flex items-center gap-[16px]'>
						<MdMailOutline className='size-[24px] text-[var(--neutral-body-text)]' />
						<p className='text-[var(--neutral-body-text)] t-style-caption self-stretch'>
							info@gowheels.com
						</p>
					</div>
					<div className='flex items-center gap-[16px]'>
						<MdOutlinePhone className='size-[24px] text-[var(--neutral-body-text)]' />
						<p className='text-[var(--neutral-body-text)] t-style-caption self-stretch'>+254 000 0000</p>
					</div>
					<div className='flex items-center gap-[16px]'>
						<MdOutlineLocationOn className='size-[24px] text-[var(--neutral-body-text)]' />
						<p className='text-[var(--neutral-body-text)] t-style-caption self-stretch'>Nairobi, Kenya</p>
					</div>
				</div>
			</div>
			<div className='flex px-[80px] py-[24px] justify-between items-center self-stretch border-t-[1px] border-[var(--neutral-dividers)]'>
				<p className='text-[var(--neutral-body-text)] t-style-caption'>
					© Copyright {new Date().getFullYear()} - GoWheels.
				</p>
				<div className='flex items-center gap-[40px]'>
					<Link
						href={ROUTES.HOME}
						className='text-[var(--primary)] t-style-caption hover:underline underline-offset-[2px] hover:text-[var(--primary-light)]'
					>
						Privacy Policy
					</Link>
					<Link
						href={ROUTES.HOME}
						className='text-[var(--primary)] t-style-caption hover:underline underline-offset-[2px] hover:text-[var(--primary-light)]'
					>
						Legal Notice
					</Link>
					<Link
						href={ROUTES.HOME}
						className='text-[var(--primary)] t-style-caption hover:underline underline-offset-[2px] hover:text-[var(--primary-light)]'
					>
						Terms of Service
					</Link>
				</div>
			</div>
		</footer>
	);
};
