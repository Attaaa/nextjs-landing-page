import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.defaults({
  duration: 1.5,
});

export * from "gsap";
export * from "gsap/ScrollTrigger";
