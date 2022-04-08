import Head from "next/head";
import SectionIntro from "../components/home/SectionIntro";
import SectionService from "../components/home/SectionService";
import Header from "../components/general/Header";

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

      <Header></Header>

      <main>
        <SectionIntro></SectionIntro>
        <div className="h-40" />
        <SectionService></SectionService>
        <div className="h-52" />
      </main>
    </div>
  );
}
