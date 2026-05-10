import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

let isRegistered = false;

export const registerGsapPlugins = () => {
	if (!isRegistered) {
		gsap.registerPlugin(ScrollTrigger, SplitText);
		isRegistered = true;
	}
};
