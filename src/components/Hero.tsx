export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen overflow-hidden px-[5%] pb-16 pt-32 lg:px-[8%]"
    >
      <div
        data-hero-bg
        className="absolute inset-0 bg-[#fdf8f5] bg-[radial-gradient(circle_at_12%_16%,rgba(230,87,143,0.12),transparent_26%),linear-gradient(110deg,rgba(253,248,245,0.82),rgba(253,248,245,0.38)_50%,rgba(253,248,245,0.10)),url('/heronova.png')] bg-cover bg-center"
      />

      <div data-hero-copy className="relative z-10 my-auto max-w-[720px] text-center md:text-left">
        <span
          data-hero-item
          className="mb-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-[#c2185b] before:block before:h-px before:w-6 before:bg-[#c2185b]"
        >
          Cibersegurança & Desenvolvimento
        </span>
        <h1 className="mb-6 font-serif text-[clamp(44px,6vw,72px)] font-semibold leading-[1.05] text-[#1a1018]">
          <span data-hero-title className="block overflow-hidden">
            <span className="block">Código com</span>
          </span>
          <span data-hero-title className="block overflow-hidden">
            <span className="block">
              alma <em className="text-[#c2185b]">criativa.</em>
            </span>
          </span>
        </h1>
        <p
          data-hero-item
          className="mx-auto mb-10 max-w-[460px] text-[17px] font-light leading-8 text-[#4a3f47] md:mx-0"
        >
          Olá! Sou Ana Vitória, estudante de Engenharia de Software com foco em cibersegurança e
          interesse em desenvolvimento de software, incluindo web, back-end, front-end e mobile,
          buscando construir aplicações seguras e bem estruturadas.
        </p>
        <div data-hero-item className="flex flex-wrap justify-center gap-3 md:justify-start">
          <a className="portfolio-button" href="#projetos">
            Ver projetos
          </a>
          <a className="portfolio-button" href="#contato">
            Falar comigo
          </a>
        </div>
      </div>
    </section>
  );
}
