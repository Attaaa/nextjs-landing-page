import { useEffect, useRef } from "react";
import { gsap } from "../../utils/gsap";

export default function SectionIntro() {
  const text1 = useRef();
  const bgRef = useRef();
  const contactRef = useRef();

  useEffect(() => {
    const animation = gsap.from(text1.current, {
      y: 200,
      ease: "Power2.easeOut",
    });

    const animation2 = gsap.from(bgRef.current, {
      y: 280,
      delay: 0.6,
      duration: 1,
      ease: "Power2.easeOut",
    });

    const animation3 = gsap.from(contactRef.current, {
      x: -100,
      delay: 0.9,
      duration: 1,
      ease: "Power2.easeOut",
    });
  });

  return (
    <section className="h-[calc(100vh-64px)] relative">
      <div className="absolute bottom-0 w-full">
        <div className="container-screen flex mb-20">
          <div className="nav-logo-width overflow-hidden">
            <div ref={contactRef}>
              <span className="block font-semibold">Contact</span>
              <span className="text-slate-500">atta.</span>
            </div>
          </div>
          <div className="overflow-hidden">
            <p className="text-5xl font-bold -mt-2" ref={text1}>
              <span>A web developer based in</span> <br /> Indonesia
            </p>
          </div>
        </div>
        <div
          className="bg-[url('/img/bg-section1.jpg')] bg-cover bg-center w-full h-[280px] "
          ref={bgRef}
        />
      </div>
    </section>
  );
}
