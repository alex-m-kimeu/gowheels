'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { UseFormReturn } from 'react-hook-form';
import { ROUTES } from '@/lib/constants';
import { motion } from 'framer-motion';
import {
	Button,
	Separator,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Popover,
	PopoverContent,
	PopoverTrigger,
	Calendar,
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui';
import { CalendarDays, CarFront } from 'lucide-react';
import { format } from 'date-fns';
import type { SearchFormData } from '@/lib/validations';
import { carBrands } from '@/lib/constants';

interface HeroProps {
	form: UseFormReturn<SearchFormData>;
	onSubmit: (data: SearchFormData) => void;
}

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
			delayChildren: 0.3,
			staggerChildren: 0.25,
			duration: 0.5,
			ease: 'easeOut',
		},
	},
};

const featureItem = {
	hidden: { opacity: 0, translateX: '-10px' },
	visible: {
		opacity: 1,
		translateX: '0px',
		transition: {
			duration: 0.5,
			ease: 'easeOut',
		},
	},
};

const calendarClassNames = {
	caption_label: 'text-[14px] font-medium text-[var(--primary)] leading-[20px] font-poppins py-2',
	nav_button_previous: 'text-[var(--neutral-strong-text)] !border-none !shadow-none !p-0 absolute left-1',
	nav_button_next: 'text-[var(--neutral-strong-text)] !border-none !shadow-none !p-0 absolute right-1',
	months: 'w-full',
	month: 'w-full space-y-2',
	table: 'w-full border-collapse',
	row: 'flex w-full my-1',
	head_cell:
		'text-center py-2 text-[var(--neutral-strong-text)] text-[14px] font-medium leading-[20px] font-poppins w-[calc(100%/7)]',
	cell: 'p-0 text-center font-poppins w-[calc(100%/7)] py-1',
	day: 'mx-auto size-9 p-0 font-normal flex items-center justify-center text-[var(--neutral-headings)]',
	day_selected:
		'bg-[var(--primary)] text-[var(--white)] hover:bg-[var(--primary-light)] hover:text-[var(--white)] rounded-[4px]',
	day_today: 'bg-[var(--primary)] text-[var(--white)] rounded-[50%]',
	day_disabled: '!text-[var(--neutral-body-text)] opacity-50',
};

export const Hero = ({ form, onSubmit }: HeroProps) => {
	return (
		<motion.section
			className='relative w-full mb-[350px] md:mb-[350px] lg:mb-[180px] xl:mb-[100px]'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				duration: 0.8,
				ease: 'easeInOut',
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
							transition={{ delayChildren: 0.8 }}
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
							transition={{ delay: 1.2 }}
						>
							<motion.div
								whileHover={{ scale: 1.025 }}
								whileTap={{ scale: 0.98 }}
								transition={{
									duration: 0.3,
									type: 'tween',
									stiffness: 300,
									damping: 15,
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
							<motion.div whileHover={{ scale: 1.025 }} transition={{ duration: 0.3 }}>
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
								duration: 1.2,
								delay: 0.6,
								type: 'spring',
								bounce: 0.3,
								damping: 12,
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
						variants={staggerContainer}
						initial='hidden'
						animate='visible'
					>
						<motion.h1
							className='self-stretch text-[var(--neutral-emphasis-text)] t-style-h1 text-center lg:text-start'
							variants={fadeIn}
						>
							Hit the Road in Style
						</motion.h1>

						<motion.p
							className='self-stretch text-[var(--neutral-strong-text)] t-style-body text-center lg:text-start'
							variants={fadeIn}
						>
							Drive your dream car with GoWheels — where luxury meets freedom. From weekend getaways to
							business travel, we&apos;ve got the perfect ride waiting.
						</motion.p>

						<motion.ul
							className='flex flex-wrap items-center justify-center lg:justify-start gap-[8px] list-none p-0 m-0'
							variants={staggerContainer}
							initial='hidden'
							animate='visible'
							transition={{ delayChildren: 0.8 }}
							role='list'
							aria-label='Key features'
						>
							<motion.li className='flex items-center gap-[4px]' variants={featureItem} role='listitem'>
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
							<motion.li className='flex items-center gap-[4px]' variants={featureItem} role='listitem'>
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
							<motion.li className='flex items-center gap-[4px]' variants={featureItem} role='listitem'>
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
							variants={fadeIn}
							transition={{ delay: 1.2 }}
						>
							<motion.div
								whileHover={{ scale: 1.025 }}
								whileTap={{ scale: 0.98 }}
								transition={{
									duration: 0.3,
									type: 'tween',
									stiffness: 300,
									damping: 15,
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
							<motion.div whileHover={{ scale: 1.025 }} transition={{ duration: 0.3 }}>
								<Link
									href={ROUTES.ABOUT}
									className='inline-block text-[var(--primary)] text-[16px] font-medium leading-[24px] font-poppins bg-transparent border-none outline-none shadow-none rounded-none px-0 py-0 hover:underline underline-offset-[4px] transition-colors duration-200 cursor-pointer'
								>
									Why GoWheels?
								</Link>
							</motion.div>
						</motion.nav>
					</motion.div>

					<div className='overflow-hidden flex justify-center lg:justify-end items-center lg:items-end w-full'>
						<motion.figure
							className='m-0 w-full'
							initial={{ opacity: 0, translateX: '50px' }}
							animate={{ opacity: 1, translateX: '0px' }}
							transition={{
								duration: 1.2,
								delay: 0.6,
								type: 'spring',
								bounce: 0.3,
								damping: 12,
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

			<Form {...form}>
				<motion.form
					id='car-search-form'
					onSubmit={form.handleSubmit(onSubmit)}
					className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 items-center p-[16px] sm:p-[20px] md:p-[24px] xl:p-[24px_40px] w-[calc(90vw)] rounded-[15px] sm:rounded-[20px] md:rounded-[25px] bg-[var(--neutral-background)] shadow-primary absolute bottom-[-350px] md:bottom-[-350px] lg:bottom-[-180px] xl:bottom-[-100px] left-1/2 transform -translate-x-1/2 h-auto xl:h-[145px] z-[50] gap-[24px] lg:gap-auto'
					aria-label='Car rental search form'
					aria-describedby='form-description'
					initial={{ opacity: 0, translateY: '30px' }}
					animate={{ opacity: 1, translateY: '0px' }}
					transition={{
						duration: 0.8,
						delay: 0.8,
						type: 'spring',
						stiffness: 70,
						damping: 15,
					}}
					style={{ willChange: 'transform' }}
				>
					<div id='form-description' className='sr-only'>
						Search for available rental cars by selecting your preferred brand and rental dates
					</div>

					<fieldset className='border-0 m-0 p-0 w-full xl:w-auto'>
						<legend className='sr-only'>Car search parameters</legend>

						{/* Car Brand */}
						<FormField
							control={form.control}
							name='carBrand'
							render={({ field }) => (
								<FormItem className='flex flex-col md:flex-row items-start md:items-center justify-center gap-[16px] xl:gap-[24px] w-full'>
									<motion.div
										className='hidden md:block lg:hidden xl:block'
										whileHover={{ scale: 1.1, rotate: 10 }}
										transition={{
											type: 'spring',
											stiffness: 300,
											damping: 15,
										}}
									>
										<CarFront
											className='size-[24px] xl:size-[32px] text-[var(--neutral-strong-text)]'
											aria-hidden='true'
										/>
									</motion.div>
									<div className='flex flex-col items-start gap-[8px] w-full'>
										<FormLabel
											className='text-[var(--neutral-headings)] t-style-link'
											htmlFor='car-brand-select'
										>
											Car Brand
										</FormLabel>
										<FormControl>
											<div className='w-full'>
												<Select onValueChange={field.onChange} defaultValue={field.value}>
													<SelectTrigger
														id='car-brand-select'
														className={`w-full font-poppins text-[14px] font-normal leading-[20px] border-[1px] outline-none shadow-none focus-visible:!ring-0 focus-visible:!ring-transparent p-[8px_12px] rounded-[4px] cursor-pointer ${
															field.value ?
																'text-[var(--primary-light)] border-[var(--primary-extra-light)] focus:border-[var(--primary-extra-light)]'
															:	'text-[var(--neutral-strong-text)] border-[var(--neutral-dividers)] focus:border-[var(--neutral-dividers)]'
														}`}
														aria-label='Select car brand'
														aria-describedby={field.value ? undefined : 'brand-help'}
													>
														<SelectValue placeholder='Select car brand' />
													</SelectTrigger>
													<SelectContent
														className='bg-[var(--neutral-surface)] border-none shadow-none w-[var(--radix-select-trigger-width)] rounded-[4px] h-[400px] overflow-y-auto'
														sideOffset={10}
														side='bottom'
														position='popper'
														align='start'
													>
														{carBrands.map((brand) => (
															<SelectItem
																key={brand.value}
																value={brand.value}
																className={`font-poppins text-[14px] font-normal leading-[20px] cursor-pointer ${
																	field.value === brand.value ?
																		'text-[var(--primary)] font-medium'
																	:	'text-[var(--neutral-strong-text)]'
																}`}
															>
																{brand.label}
															</SelectItem>
														))}
													</SelectContent>
												</Select>
											</div>
										</FormControl>
										{!field.value && (
											<div id='brand-help' className='sr-only'>
												Choose from our available car brands
											</div>
										)}
										<FormMessage className='text-[14px] leading-[20px] font-poppins font-normal text-[var(--error)]' />
									</div>
								</FormItem>
							)}
						/>
					</fieldset>

					<fieldset className='pl-0 lg:pl-[24px] border-l-0 lg:border-l border-[var(--neutral-dividers)] w-full xl:w-auto'>
						<legend className='sr-only'>Pickup date selection</legend>

						{/* Pickup Date */}
						<FormField
							control={form.control}
							name='pickupDate'
							render={({ field }) => (
								<FormItem className='flex flex-col md:flex-row items-start md:items-center gap-[16px] xl:gap-[24px] w-full'>
									<motion.div
										className='hidden md:block lg:hidden xl:block'
										whileHover={{ scale: 1.1, rotate: 10 }}
										transition={{
											type: 'spring',
											stiffness: 300,
											damping: 15,
										}}
									>
										<CalendarDays
											className='size-[24px] xl:size-[32px] text-[var(--neutral-strong-text)]'
											aria-hidden='true'
										/>
									</motion.div>
									<div className='flex flex-col items-start gap-[8px] w-full'>
										<FormLabel
											className='text-[var(--neutral-headings)] t-style-link'
											htmlFor='pickup-date-button'
										>
											Pickup Date
										</FormLabel>
										<Popover>
											<PopoverTrigger asChild>
												<FormControl>
													<div className='w-full'>
														<Button
															id='pickup-date-button'
															className={`text-[14px] font-normal leading-[20px] font-poppins bg-transparent cursor-pointer w-full border-[1px] border-[var(--neutral-dividers)] outline-none shadow-none focus-visible:!ring-0 focus-visible:!ring-transparent focus-visible:!border-transparent p-[8px_12px] justify-start rounded-[4px] ${
																field.value ?
																	'text-[var(--primary-light)] border-[var(--primary-extra-light)]'
																:	'text-[var(--neutral-strong-text)] border-[var(--neutral-dividers)]'
															}`}
															aria-haspopup='dialog'
															aria-expanded={false}
															type='button'
														>
															{field.value ? format(field.value, 'PPP') : 'Choose a date'}
														</Button>
													</div>
												</FormControl>
											</PopoverTrigger>
											<PopoverContent
												className='w-[var(--radix-popover-trigger-width)] p-0 bg-[var(--neutral-surface)] outline-none border-none shadow-none rounded-[4px]'
												align='start'
												sideOffset={10}
												side='bottom'
												role='dialog'
												aria-label='Calendar picker for pickup date'
											>
												<div>
													<Calendar
														mode='single'
														selected={field.value}
														onSelect={field.onChange}
														disabled={(date) => {
															const today = new Date();
															today.setHours(0, 0, 0, 0);

															return date < today;
														}}
														initialFocus
														classNames={calendarClassNames}
													/>
												</div>
											</PopoverContent>
										</Popover>
										<FormMessage className='text-[14px] leading-[20px] font-poppins font-normal text-[var(--error)]' />
									</div>
								</FormItem>
							)}
						/>
					</fieldset>

					<fieldset className='pl-0 xl:pl-[24px] border-l-0 xl:border-l border-[var(--neutral-dividers)] w-full xl:w-auto'>
						<legend className='sr-only'>Return date selection</legend>

						{/* Return Date */}
						<FormField
							control={form.control}
							name='returnDate'
							render={({ field }) => (
								<FormItem className='flex flex-col md:flex-row items-start md:items-center gap-[16px] xl:gap-[24px] w-full'>
									<motion.div
										className='hidden md:block lg:hidden xl:block'
										whileHover={{ scale: 1.1, rotate: 10 }}
										transition={{
											type: 'spring',
											stiffness: 300,
											damping: 15,
										}}
									>
										<CalendarDays
											className='size-[24px] xl:size-[32px] text-[var(--neutral-strong-text)]'
											aria-hidden='true'
										/>
									</motion.div>
									<div className='flex flex-col items-start gap-[8px] w-full'>
										<FormLabel
											className='text-[var(--neutral-headings)] t-style-link'
											htmlFor='return-date-button'
										>
											Return Date
										</FormLabel>
										<Popover>
											<PopoverTrigger asChild>
												<FormControl>
													<div className='w-full'>
														<Button
															id='return-date-button'
															className={`text-[14px] font-normal leading-[20px] font-poppins bg-transparent cursor-pointer w-full border-[1px] border-[var(--neutral-dividers)] outline-none shadow-none focus-visible:!ring-0 focus-visible:!ring-transparent focus-visible:!border-transparent p-[8px_12px] justify-start rounded-[4px] ${
																field.value ?
																	'text-[var(--primary-light)] border-[var(--primary-extra-light)]'
																:	'text-[var(--neutral-strong-text)] border-[var(--neutral-dividers)]'
															}`}
															aria-haspopup='dialog'
															aria-expanded={false}
															type='button'
														>
															{field.value ? format(field.value, 'PPP') : 'Choose a date'}
														</Button>
													</div>
												</FormControl>
											</PopoverTrigger>
											<PopoverContent
												className='w-[var(--radix-popover-trigger-width)] p-0 bg-[var(--neutral-surface)] outline-none border-none shadow-none rounded-[4px]'
												align='start'
												sideOffset={10}
												side='bottom'
												role='dialog'
												aria-label='Calendar picker for return date'
											>
												<div>
													<Calendar
														mode='single'
														selected={field.value}
														onSelect={field.onChange}
														disabled={(date) => {
															const today = new Date();
															today.setHours(0, 0, 0, 0);

															return date < today;
														}}
														initialFocus
														classNames={calendarClassNames}
													/>
												</div>
											</PopoverContent>
										</Popover>
										<FormMessage className='text-[14px] leading-[20px] font-poppins font-normal text-[var(--error)]' />
									</div>
								</FormItem>
							)}
						/>
					</fieldset>

					{/* Search Button */}
					<div className='w-full pl-0 lg:pl-[24px] border-l-0 lg:border-l border-[var(--neutral-dividers)]'>
						<div className='h-[68px] flex items-center justify-center'>
							<motion.div
								whileHover={{ scale: 1.025 }}
								whileTap={{ scale: 0.95 }}
								transition={{
									duration: 0.3,
									type: 'tween',
									stiffness: 300,
									damping: 15,
								}}
								className='w-full'
							>
								<Button
									type='submit'
									className='text-[var(--white)] t-style-link bg-[var(--primary)] border-none outline-none shadow-none rounded-[4px] px-[16px] py-[8px] hover:bg-[var(--primary-light)] transition-colors duration-200 cursor-pointer w-full'
									aria-describedby='search-help'
								>
									Search Cars
								</Button>
								<div id='search-help' className='sr-only'>
									Search for available rental cars based on your selected criteria
								</div>
							</motion.div>
						</div>
					</div>
				</motion.form>
			</Form>
		</motion.section>
	);
};
