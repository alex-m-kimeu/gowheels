'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button, Avatar, AvatarFallback, AvatarImage } from '@/components/ui';
import { TESTIMONIALS } from '@/lib/constants/data';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export const Testimonials = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextTestimonial = () => {
		setCurrentIndex((prevIndex) => {
			return prevIndex === TESTIMONIALS.length - 1 ? 0 : prevIndex + 1;
		});
	};

	const prevTestimonial = () => {
		setCurrentIndex((prevIndex) => {
			return prevIndex === 0 ? TESTIMONIALS.length - 1 : prevIndex - 1;
		});
	};

	const currentTestimonial = TESTIMONIALS[currentIndex];

	return (
		<section className='flex flex-col items-center px-[16px] sm:px-[24px] md:px-[40px] xl:px-[80px] 2xl:px-[120px] gap-[32px] w-full'>
			<header className='flex flex-col justify-center items-center gap-[8px] self-stretch'>
				<p className='t-style-link text-[var(--primary)]'>Client Testimonials</p>
				<h2 className='t-style-h2 text-[var(--neutral-headings)] text-center'>What our customers say</h2>
			</header>

			<div className='flex justify-between items-center self-stretch'>
				{/* Navigation Buttons */}
				<Button
					onClick={prevTestimonial}
					className='flex size-[32px] md:size-[40px] py-[8px] px-[10px] justify-center items-center rounded-full bg-[var(--primary)] hover:bg-[var(--primary-light)] cursor-pointer'
					aria-label='Previous testimonial'
				>
					<ArrowLeft className='text-[var(--white)] size-[20px] md:size-[24px]' />
				</Button>
				<div className='flex flex-col items-center gap-[24px]'>
					<div className='flex flex-col gap-[40px] w-[1000px] relative'>
						<figure className='w-[60px] h-[49px] flex justify-start self-start'>
							<Image
								src='/icons/opening.svg'
								alt=''
								width={60}
								height={49}
								className='w-[60px] h-[49px] object-cover'
								priority
								aria-hidden='true'
							/>
						</figure>
						<div className='flex px-[80px] justify-center items-center self-stretch'>
							<p className='text-[var(--neutral-strong-text)] font-poppins t-style-body text-center'>
								{currentTestimonial.description}
							</p>
						</div>
						<figure className='w-[60px] h-[49px] flex justify-end self-end'>
							<Image
								src='/icons/closing.svg'
								alt=''
								width={60}
								height={49}
								className='w-[60px] h-[49px] object-cover'
								priority
								aria-hidden='true'
							/>
						</figure>
					</div>
					<div className='flex flex-col items-center gap-[24px]'>
						<Avatar>
							<AvatarImage src={currentTestimonial.profilePic} />
							<AvatarFallback>
								{currentTestimonial.name
									.split(' ')
									.map((name) => name[0])
									.join('')
									.toUpperCase()}
							</AvatarFallback>
						</Avatar>
						<p className='text-[var(--neutral-strong-text)] font-poppins t-style-caption'>
							{currentTestimonial.name}
						</p>
					</div>
				</div>
				<Button
					onClick={nextTestimonial}
					className='flex size-[32px] md:size-[40px] py-[8px] px-[10px] justify-center items-center rounded-full bg-[var(--primary)] hover:bg-[var(--primary-light)] cursor-pointer'
					aria-label='Next testimonial'
				>
					<ArrowRight className='text-[var(--white)] size-[20px] md:size-[24px]' />
				</Button>

				{/* Dots Indicator */}
				{/* <div className='flex justify-center mt-6 space-x-2'>
					{TESTIMONIALS.map((testimonial, index) => (
						<Button
							key={`dot-${testimonial.id}`}
							onClick={() => setCurrentIndex(index)}
							className={`w-2 h-2 rounded-full transition-colors ${
								index === currentIndex ? 'bg-[var(--primary)]' : 'bg-gray-300'
							}`}
							aria-label={`Go to testimonial ${index + 1}`}
						/>
					))}
				</div> */}
			</div>
		</section>
	);
};
