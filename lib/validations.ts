import { z } from 'zod';

export const searchSchema = z
	.object({
		carBrand: z.string().min(1, 'Car brand is required'),
		pickupDate: z.date({
			required_error: 'Pickup date is required',
		}),
		returnDate: z.date({
			required_error: 'Return date is required',
		}),
	})
	.refine(
		(data) => {
			return !data.pickupDate || !data.returnDate || data.returnDate >= data.pickupDate;
		},
		{
			message: 'Return date cannot be before pickup date',
			path: ['returnDate'],
		},
	);

export type SearchFormData = z.infer<typeof searchSchema>;
