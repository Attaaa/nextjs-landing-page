import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import VisuallyHidden from "@reach/visually-hidden";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Head>
        <title>Next Landing Page</title>
        <meta
          name="description"
          content="Next landing page create by hatta.eka.p@gmail.com"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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

      <main>
        {/* first section */}
        <section className="h-[calc(100vh-64px)] relative">
          <div className="absolute bottom-0 w-full">
            <div className="container-screen flex mb-20">
              <div className="nav-logo-width">
                <span className="block font-semibold">Contact</span>
                <span className="text-slate-500">atta.</span>
              </div>
              <div>
                <p className="text-5xl font-bold -mt-2">
                  A web developer based in <br /> Indonesia
                </p>
              </div>
            </div>
            <div className="bg-[url('/img/bg-section1.jpg')] bg-cover w-full h-[280px] bg-center" />
          </div>
        </section>
      </main>
    </div>
  );
}
