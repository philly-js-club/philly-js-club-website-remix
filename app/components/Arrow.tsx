import { clsx } from "clsx";
import { cva } from "styled-system/css";

interface ArrowProps {
	className?: string;
	direction: "back" | "out";
	label: string;
}

const arrow = cva({
	base: {
		margin: 0,
	},
	variants: {
		direction: {
			back: {
				height: "0.7em",
				marginLeft: "0.1em",
				transform: `rotate(180deg)`,
				width: "0.7em",
			},
			out: {
				height: "1em",
				marginBottom: "-0.1em",
				marginLeft: "0.1em",
				transform: `rotate(-45deg)`,
				width: "1em",
			},
		},
	},
});

export function Arrow({ className, label, direction }: ArrowProps) {
	return (
		<svg
			aria-label={label}
			className={clsx(arrow({ direction }), className)}
			fill="none"
			viewBox="0 0 20 16"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M19.1924 8.70711C19.5829 8.31658 19.5829 7.68343 19.1924 7.29289L12.8284 0.928933C12.4379 0.538412 11.8047 1.24551 11.4142 1.63604C11.0237 2.02656 10.3166 2.65973 10.7071 3.05025L15.6569 8L10.7071 12.9497C10.3166 13.3403 11.0237 13.9734 11.4142 14.364C11.8047 14.7545 12.4379 15.4616 12.8284 15.0711L19.1924 8.70711ZM0.100505 9.41421H17.0711V6.58579H0.100505V8V9.41421Z"
				fill="currentColor"
			/>
		</svg>
	);
}
