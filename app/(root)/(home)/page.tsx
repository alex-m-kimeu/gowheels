'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { searchSchema, type SearchFormData } from '@/lib/validations';
import { Hero } from '@/components/home/Hero';

const Home = () => {
	const form = useForm<SearchFormData>({
		resolver: zodResolver(searchSchema),
		defaultValues: {
			carBrand: '',
			pickupDate: undefined,
			returnDate: undefined,
		},
	});

	const onSubmit = (data: SearchFormData) => {
		console.log('Search Data:', data);
		// handle search logic
	};

	return (
		<main className='flex flex-col items-center bg-[var(--white)] gap-[24px] md:gap-[32px] lg:gap-[40px] xl:gap-[48px] 2xl:gap-[56px]'>
			<Hero form={form} onSubmit={onSubmit} />
		</main>
	);
};

export default Home;
