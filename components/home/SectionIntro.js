export default function SectionIntro() {
  return (
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
        <div className="bg-[url('/img/bg-section1.jpg')] bg-cover bg-center w-full h-[280px] " />
      </div>
    </section>
  );
}
