/* eslint-disable @typescript-eslint/no-explicit-any */
// Framer Motion type declarations
declare module 'framer-motion' {
	interface Easing {
		[key: string]: any;
	}

	interface Transition {
		duration?: number;
		delay?: number;
		ease?: any;
		times?: number[];
		repeat?: number;
		repeatType?: 'loop' | 'reverse' | 'mirror';
		repeatDelay?: number;
		from?: number | string;
		velocity?: number;
		stiffness?: number;
		damping?: number;
		mass?: number;
		restSpeed?: number;
		restDelta?: number;
		staggerChildren?: number;
		delayChildren?: number;
		staggerDirection?: number;
		when?: false | 'beforeChildren' | 'afterChildren';
		elapsed?: number;
		driver?: any;
		type?: 'spring' | 'keyframes' | 'tween' | 'inertia' | 'just';
		clipPath?: {
			duration?: number;
			ease?: any;
			delay?: number;
		};
		[key: string]: any;
	}

	interface Variant {
		opacity?: number;
		x?: number | string;
		y?: number | string;
		scale?: number;
		rotate?: number;
		clipPath?: string;
		translateX?: string;
		translateY?: string;
		transition?: Transition;
		[key: string]: any;
	}

	interface Variants {
		[key: string]: Variant;
	}

	interface MotionProps {
		variants?: Variants | any;
		initial?: string | Variant | any;
		animate?: string | Variant | any;
		exit?: string | Variant | any;
		whileHover?: Variant | any;
		whileTap?: Variant | any;
		transition?: Transition | any;
		[key: string]: any;
	}
}

declare module 'motion-dom' {
	interface Easing {
		[key: string]: any;
	}

	interface Transition {
		duration?: number;
		delay?: number;
		ease?: any;
		times?: number[];
		repeat?: number;
		repeatType?: 'loop' | 'reverse' | 'mirror';
		repeatDelay?: number;
		from?: number | string;
		velocity?: number;
		stiffness?: number;
		damping?: number;
		mass?: number;
		restSpeed?: number;
		restDelta?: number;
		staggerChildren?: number;
		delayChildren?: number;
		staggerDirection?: number;
		when?: false | 'beforeChildren' | 'afterChildren';
		elapsed?: number;
		driver?: any;
		type?: 'spring' | 'keyframes' | 'tween' | 'inertia' | 'just';
		clipPath?: {
			duration?: number;
			ease?: any;
			delay?: number;
		};
		[key: string]: any;
	}

	interface Variant {
		opacity?: number;
		x?: number | string;
		y?: number | string;
		scale?: number;
		rotate?: number;
		clipPath?: string;
		translateX?: string;
		translateY?: string;
		transition?: Transition;
		[key: string]: any;
	}

	interface Variants {
		[key: string]: Variant;
	}

	interface MotionProps {
		variants?: Variants | any;
		initial?: string | Variant | any;
		animate?: string | Variant | any;
		exit?: string | Variant | any;
		whileHover?: Variant | any;
		whileTap?: Variant | any;
		transition?: Transition | any;
		[key: string]: any;
	}
}

export interface CarCardProps {
	id: string | number;
	image: string;
	name: string;
	price: number;
	type: string;
	transmission: string;
	doors: number;
	passengers: number;
	hasAC: boolean;
}

export interface CarLogo {
	src: string;
	alt: string;
	width: number;
	height: number;
}
