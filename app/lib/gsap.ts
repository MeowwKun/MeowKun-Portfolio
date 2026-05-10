import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let isRegistered = false;

export const registerGsapPlugins = () => {
	if (!isRegistered) {
		gsap.registerPlugin(ScrollTrigger);
		isRegistered = true;
	}
};
