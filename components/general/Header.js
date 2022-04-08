import VisuallyHidden from "@reach/visually-hidden";
import Link from "next/link";

export default function Header() {
  return (
    <header className="container-screen flex mt-10">
      <VisuallyHidden>
        <h1>Atta Company Profile</h1>
      </VisuallyHidden>
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
    </header>
  );
}
