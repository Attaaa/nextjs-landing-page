import Link from "next/link";

export default function SectionService() {
  return (
    <section className="h-screen">
      <div className="bg-[url('/img/bg-section1.jpg')] bg-cover bg-center inline-block w-1/3 md:w-1/2 h-full " />
      <div className="inline-block w-1/2 md:w-1/3 container-screen-right float-right pt-48 h-full relative">
        <h2 className="text-2xl md:text-4xl leading-none font-bold mb-8 w-auto">
          An Efficient <br />
          Development
        </h2>
        <p className="w-[160px] md:w-[240px] text-neutral-400 font-semibold mb-8">
          View all work I did for effective and efficient development to deliver
          website that meets client requirements and expectations.
        </p>
        <Link href="/portfolio">
          <a className="py-4 px-8 bg-gray-800 text-neutral-50 font-semibold hover:bg-gray-600">
            View Project
          </a>
        </Link>
        <div className="absolute bottom-0">
          <h3 className="font-bold">Service</h3>
          <p className="text-neutral-400">Development</p>
        </div>
      </div>
    </section>
  );
}
