"use client";

import { useEffect } from "react";
import type { DependencyList, RefObject } from "react";
import gsap from "gsap";
import { registerGsapPlugins } from "../lib/gsap";

export const useGsapScrollTrigger = (
	ref: RefObject<HTMLElement | null>,
	createAnimation: (element: HTMLElement) => gsap.core.Animation,
	deps: DependencyList = []
) => {
	useEffect(() => {
		registerGsapPlugins();
		const element = ref.current;
		if (!element) {
			return;
		}

		const ctx = gsap.context(() => {
			createAnimation(element);
		}, element);

		return () => {
			ctx.revert();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, deps);
};
