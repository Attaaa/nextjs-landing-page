import { useEffect, useRef } from "react";

import VisuallyHidden from "@reach/visually-hidden";
import Link from "next/link";
import { gsap } from "../../utils/gsap";

export default function Header() {
  const headerRef = useRef();

  useEffect(() => {
    const animation = gsap.from(headerRef.current, {
      y: -100,
      delay: 0.2,
      duration: 1,
    });

    return () => animation.kill();
  }, []);

  return (
    <header className="container-screen mt-10 overflow-hidden">
      <VisuallyHidden>
        <h1>Atta Company Profile</h1>
      </VisuallyHidden>
      <div className="flex" ref={headerRef}>
        {/* logo */}
        <span className="nav-logo-width" aria-hidden>
          ATTA
        </span>
        {/* navigation */}
        <nav className="hidden md:block">
          <ul>
            <li className="float-left mr-10">
              <Link href="/" passHref>
                <a className="text-slate-600 hover:text-black active:text-black">
                  Home
                </a>
              </Link>
            </li>
            <li className="float-left mx-10">
              <Link href="/portfolio" passHref>
                <a className="text-slate-600 hover:text-black active:text-black">
                  Portfolio
                </a>
              </Link>
            </li>
            <li className="float-left mx-10">
              <Link href="/about" passHref>
                <a className="text-slate-600 hover:text-black active:text-black">
                  About
                </a>
              </Link>
            </li>
            <li className="float-left ml-10">
              <Link href="/company" passHref>
                <a className="text-slate-600 hover:text-black active:text-black">
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        {/* optional nav button */}
        <span className="ml-auto">||</span>
      </div>
    </header>
  );
}
