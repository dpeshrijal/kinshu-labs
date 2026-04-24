import { ActionLink, Reveal, SectionPill } from "../primitives";

export function DeveloperCtaSection() {
  return (
    <section id="apply" className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <Reveal className="rounded-[32px] border-2 border-black bg-[var(--color-accent-soft)] p-8 text-center sm:p-10">
          <SectionPill tone="white" className="-rotate-1">
            For developers
          </SectionPill>
          <h2 className="mt-6 text-3xl font-semibold leading-[1.08] tracking-tight text-black sm:text-5xl lg:text-[3.75rem]">
            Nepal based AI engineer?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-black/72 sm:max-w-2xl sm:text-lg sm:leading-8">
            Join a selective network of senior engineers building AI products
            for global teams.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <ActionLink href="mailto:hello@kinshulabs.com" tone="dark">
              Apply as dev
            </ActionLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
