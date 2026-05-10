"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
	const cursorRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const cursor = cursorRef.current;
		if (!cursor) {
			return;
		}

		let rafId = 0;
		let targetX = 0;
		let targetY = 0;

		const update = () => {
			cursor.style.transform = `translate(${targetX}px, ${targetY}px)`;
			rafId = 0;
		};

		const schedule = () => {
			if (rafId) {
				return;
			}
			rafId = window.requestAnimationFrame(update);
		};

		const handleMove = (event: MouseEvent) => {
			targetX = event.clientX;
			targetY = event.clientY;
			cursor.style.opacity = "1";
			schedule();
		};

		const handleLeave = () => {
			cursor.style.opacity = "0";
		};

		window.addEventListener("mousemove", handleMove);
		window.addEventListener("mouseleave", handleLeave);

		return () => {
			window.removeEventListener("mousemove", handleMove);
			window.removeEventListener("mouseleave", handleLeave);
			if (rafId) {
				window.cancelAnimationFrame(rafId);
			}
		};
	}, []);

	return <div ref={cursorRef} className="custom-cursor" />;
}
