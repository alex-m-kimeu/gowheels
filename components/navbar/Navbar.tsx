'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Links, NavLink } from '@/lib/constants/links';
import { ROUTES } from '@/lib/constants/routes';
import { Button, Separator } from '@/components/ui';
import { MdMenu, MdClose } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
	const pathname = usePathname();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	// Animation variants
	const backdropVariants = {
		hidden: {
			opacity: 0,
			clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
		},
		visible: {
			opacity: 1,
			clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
			transition: {
				duration: 0.8,
				ease: [0.25, 0.46, 0.45, 0.94],
				clipPath: {
					duration: 0.8,
					ease: [0.76, 0, 0.24, 1],
				},
			},
		},
		exit: {
			opacity: 0,
			clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
			transition: {
				duration: 0.6,
				ease: [0.76, 0, 0.24, 1],
				clipPath: {
					duration: 0.6,
					ease: [0.76, 0, 0.24, 1],
				},
			},
		},
	};

	const menuVariants = {
		hidden: {
			x: '100%',
			opacity: 0,
			clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
		},
		visible: {
			x: 0,
			opacity: 1,
			clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
			transition: {
				duration: 0.9,
				ease: [0.25, 0.46, 0.45, 0.94],
				staggerChildren: 0.15,
				delayChildren: 0.4,
				clipPath: {
					duration: 0.9,
					ease: [0.76, 0, 0.24, 1],
				},
			},
		},
		exit: {
			x: '100%',
			opacity: 0,
			clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
			transition: {
				duration: 0.7,
				ease: [0.55, 0.06, 0.68, 0.19],
				staggerChildren: 0.05,
				staggerDirection: -1,
				clipPath: {
					duration: 0.7,
					ease: [0.76, 0, 0.24, 1],
				},
			},
		},
	};

	const itemVariants = {
		hidden: {
			x: 30,
			opacity: 0,
			scale: 0.8,
		},
		visible: {
			x: 0,
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.6,
				ease: [0.25, 0.46, 0.45, 0.94],
			},
		},
		exit: {
			x: 30,
			opacity: 0,
			scale: 0.8,
			transition: {
				duration: 0.4,
				ease: [0.55, 0.06, 0.68, 0.19],
			},
		},
	};

	const buttonVariants = {
		hidden: {
			y: 30,
			opacity: 0,
			scale: 0.95,
		},
		visible: {
			y: 0,
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.6,
				ease: [0.25, 0.46, 0.45, 0.94],
			},
		},
		exit: {
			y: 30,
			opacity: 0,
			scale: 0.95,
			transition: {
				duration: 0.3,
				ease: [0.55, 0.06, 0.68, 0.19],
			},
		},
	};

	return (
		<header className='sticky top-0 z-100 bg-[var(--white)]'>
			<nav
				className='flex items-center justify-between py-[8px] px-[16px] md:px-[32px] lg:px-[40px] xl:px-[80px] 2xl:px-[120px]'
				aria-label='Main navigation'
			>
				{/* Logo */}
				<div className='flex pr-[0px] xl:pr-[85px]'>
					<Link href={ROUTES.HOME} aria-label='Go Wheels Home'>
						<Image
							src='/images/Logo.svg'
							alt='Go Wheels Logo'
							width={116}
							height={42}
							className='w-[70px] h-auto md:w-[100px] 2xl:w-[116px]'
							priority
						/>
					</Link>
				</div>

				{/* Desktop Navigation Links */}
				<nav
					className='hidden xl:flex p-[16px] rounded-[50px] bg-[var(--white)] shadow-primary'
					aria-label='Desktop navigation'
				>
					<ul className='flex gap-[48px] items-center' role='menubar'>
						{Links.map((link: NavLink) => {
							const isActive =
								pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));

							return (
								<li key={link.key} role='none'>
									<Link
										href={link.href}
										className={`text-[16px] font-normal leading-[24px] font-poppins hover:text-[var(--primary)] transition-colors duration-200 ${
											isActive ? 'text-[var(--primary)]' : 'text-[var(--neutral-headings)]'
										}`}
										role='menuitem'
										aria-current={isActive ? 'page' : undefined}
									>
										{link.label}
									</Link>
								</li>
							);
						})}
					</ul>
				</nav>

				{/* Desktop Action Buttons */}
				<div className='hidden xl:flex items-center gap-[16px]' role='group' aria-label='User actions'>
					<Link href={ROUTES.VEHICLES}>
						<Button className='text-[var(--primary)] text-[16px] font-medium leading-[24px] font-poppins bg-[var(--white)] border-none outline-none shadow-none rounded-none px-0 py-0 hover:underline underline-offset-[4px] transition-colors duration-200 cursor-pointer'>
							Rent a car
						</Button>
					</Link>
					<Separator
						orientation='vertical'
						className='!h-[25px] !w-[1.5px] !bg-[var(--neutral-body-text)]'
						aria-hidden='true'
					/>
					<Link href={ROUTES.SIGNIN}>
						<Button className='text-[var(--white)] text-[16px] font-medium leading-[24px] font-poppins bg-[var(--primary)] border-none outline-none shadow-none rounded-[4px] px-[16px] py-[8px] hover:bg-[var(--primary-light)] transition-colors duration-200 cursor-pointer'>
							Sign in
						</Button>
					</Link>
				</div>

				{/* Mobile Menu Button */}
				<div className='xl:hidden'>
					<motion.div
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						transition={{ duration: 0.3, ease: 'easeInOut' }}
					>
						<Button
							onClick={toggleMenu}
							className='border-none outline-none shadow-none rounded-none'
							aria-expanded={isMenuOpen}
							aria-controls='mobile-menu'
							aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
						>
							<motion.div
								animate={{ rotate: isMenuOpen ? 180 : 0 }}
								transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
							>
								{isMenuOpen ?
									<MdClose className='size-[20px] text-[var(--primary)]' aria-hidden='true' />
								:	<MdMenu className='size-[20px] text-[var(--primary)]' aria-hidden='true' />}
							</motion.div>
						</Button>
					</motion.div>
				</div>

				{/* Mobile Menu */}
				<AnimatePresence>
					{isMenuOpen && (
						<>
							{/* Mobile Menu Backdrop */}
							<motion.div
								className='fixed inset-0 bg-transparent backdrop-blur-sm z-50'
								onClick={closeMenu}
								aria-hidden='true'
								variants={backdropVariants}
								initial='hidden'
								animate='visible'
								exit='exit'
							/>

							{/* Mobile Menu Overlay */}
							<motion.aside
								id='mobile-menu'
								className='fixed top-0 right-0 h-full w-[80vw] md:w-[50vw] bg-[var(--accent)] z-100'
								inert={!isMenuOpen || undefined}
								role='dialog'
								aria-modal='true'
								aria-label='Mobile navigation menu'
								variants={menuVariants}
								initial='hidden'
								animate='visible'
								exit='exit'
							>
								<motion.div className='flex justify-end p-4' variants={itemVariants}>
									<motion.div
										whileHover={{ scale: 1.1, rotate: 90 }}
										whileTap={{ scale: 0.9 }}
										transition={{ duration: 0.3, ease: 'easeInOut' }}
									>
										<Button
											onClick={closeMenu}
											className='border-none outline-none shadow-none rounded-none px-0 py-0'
											aria-label='Close mobile menu'
										>
											<MdClose className='size-[24px] text-[var(--primary)]' aria-hidden='true' />
										</Button>
									</motion.div>
								</motion.div>

								<div className='px-6 py-8 flex flex-col gap-[48px]'>
									<motion.nav aria-label='Mobile navigation' variants={itemVariants}>
										<ul className='flex flex-col gap-6' role='menu'>
											{Links.map((link: NavLink, index) => {
												const isActive =
													pathname === link.href ||
													(link.href !== '/' && pathname.startsWith(link.href));

												return (
													<motion.li
														key={link.key}
														role='none'
														variants={itemVariants}
														custom={index}
														whileHover={{ x: 15 }}
														transition={{ duration: 0.3, ease: 'easeOut' }}
													>
														<Link
															href={link.href}
															onClick={closeMenu}
															className={`text-[18px] font-medium leading-[24px] font-poppins hover:text-[var(--primary)] transition-colors duration-200 ${
																isActive ? 'text-[var(--primary)]' : (
																	'text-[var(--white)]'
																)
															}`}
															role='menuitem'
															aria-current={isActive ? 'page' : undefined}
														>
															{link.label}
														</Link>
													</motion.li>
												);
											})}
										</ul>
									</motion.nav>

									<motion.div
										className='flex flex-col gap-[24px]'
										role='group'
										aria-label='Mobile user actions'
										variants={itemVariants}
									>
										<motion.div variants={buttonVariants}>
											<Link href={ROUTES.VEHICLES} onClick={closeMenu}>
												<motion.div
													whileHover={{ scale: 1.03 }}
													whileTap={{ scale: 0.97 }}
													transition={{ duration: 0.3, ease: 'easeInOut' }}
												>
													<Button className='w-full text-[var(--white)] text-[16px] font-medium leading-[24px] font-poppins bg-[var(--primary)] border-none outline-none rounded-[4px] px-[16px] py-[8px] hover:bg-[var(--primary-light)] transition-colors duration-200'>
														Rent a car
													</Button>
												</motion.div>
											</Link>
										</motion.div>
										<motion.div variants={buttonVariants}>
											<Link href={ROUTES.SIGNIN} onClick={closeMenu}>
												<motion.div
													whileHover={{ scale: 1.02 }}
													whileTap={{ scale: 0.98 }}
													transition={{ duration: 0.2 }}
												>
													<Button className='w-full text-[var(--white)] text-[16px] font-medium leading-[24px] font-poppins bg-[var(--primary)] border-none outline-none rounded-[4px] px-[16px] py-[8px] hover:bg-[var(--primary-light)] transition-colors duration-200'>
														Sign in
													</Button>
												</motion.div>
											</Link>
										</motion.div>
									</motion.div>
								</div>
							</motion.aside>
						</>
					)}
				</AnimatePresence>
			</nav>
		</header>
	);
};
