'use client';

import { useEffect, useState } from "react";

export default function EntryLoader() {
	const [isVisible, setIsVisible] = useState(true);
	const [isExiting, setIsExiting] = useState(false);

	useEffect(() => {
		let timeoutId: number | undefined;
		let minimumDelayId: number | undefined;
		const start = Date.now();
		const minimumMs = 2200;

		const finish = () => {
			const elapsed = Date.now() - start;
			const remaining = Math.max(0, minimumMs - elapsed);
			minimumDelayId = window.setTimeout(() => {
				setIsExiting(true);
				timeoutId = window.setTimeout(() => {
					setIsVisible(false);
				}, 700);
			}, remaining);
		};

		if (document.readyState === "complete") {
			finish();
			return () => {
				if (timeoutId) {
					window.clearTimeout(timeoutId);
				}
				if (minimumDelayId) {
					window.clearTimeout(minimumDelayId);
				}
			};
		}

		window.addEventListener("load", finish);
		return () => {
			window.removeEventListener("load", finish);
			if (timeoutId) {
				window.clearTimeout(timeoutId);
			}
			if (minimumDelayId) {
				window.clearTimeout(minimumDelayId);
			}
		};
	}, []);

	if (!isVisible) {
		return null;
	}

	return (
		<div className={`entry-loader${isExiting ? " is-exiting" : ""}`} aria-busy="true">
			<div className="entry-loader__inner">
				<svg
					className="entry-loader__illustration"
					width="180"
					height="180"
					viewBox="0 0 180 180"
					fill="none"
					aria-hidden="true"
				>
					<g className="entry-loader__cosmos">
						{[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
							<ellipse
								key={deg}
								cx="90"
								cy="90"
								rx="10"
								ry="26"
								fill="#2A4C4E"
								opacity="0.85"
								transform={`rotate(${deg} 90 90) translate(0 -20)`}
							/>
						))}
						<circle cx="90" cy="90" r="9" fill="#2A4C4E" opacity="1" />
						<circle cx="90" cy="90" r="3.2" fill="#0B0E16" />
					</g>
				</svg>
				<span className="entry-loader__rule" />
			</div>
		</div>
	);
}
