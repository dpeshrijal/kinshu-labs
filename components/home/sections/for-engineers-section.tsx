import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";

import { Reveal } from "../primitives";

export function ForEngineersSection() {
  return (
    <section id="about" className="pt-6 sm:pt-8">
      <div className="mx-auto max-w-7xl px-5 pb-8 sm:px-6 sm:pb-10 lg:px-8">
        <div className="overflow-hidden rounded-[28px] border border-[#ebe7df] bg-white px-5 py-10 shadow-[0_18px_40px_rgba(24,38,24,0.04)] sm:px-8 sm:py-12 lg:px-12 lg:py-16">
          <Reveal className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-3 rounded-[18px] border border-[#deeadf] bg-[#f2f7f3] px-5 py-3 text-[1.02rem] font-medium text-[#255f47]">
              <Users className="h-5 w-5" />
              <span>For AI Engineers</span>
            </div>

            <h2 className="mt-8 max-w-[17ch] text-[2.35rem] font-semibold leading-[1.02] tracking-tight text-[#111111] sm:text-[3.35rem] lg:text-[4rem]">
              Join our <span className="text-[var(--color-accent)]">AI engineer</span> network.
            </h2>

            <p className="mt-7 hidden max-w-[34rem] text-[1.22rem] leading-[1.65] text-[#59615d] sm:block lg:max-w-[46rem] lg:text-[1.3rem]">
              We connect top AI engineers with high-impact projects from innovative startups and enterprises.
            </p>
          </Reveal>

          <Reveal
            delay={0.1}
            className="mx-auto mt-10 flex max-w-[66rem] flex-col items-center text-center lg:mt-12"
          >
            <div className="flex justify-center">
              <Link
                href="/join"
                className="inline-flex min-h-[4.6rem] items-center justify-center gap-4 rounded-[16px] bg-[var(--color-accent)] px-10 text-[1.06rem] font-semibold text-white shadow-[0_16px_36px_rgba(31,79,60,0.18)] transition hover:bg-[#173f31] sm:min-w-[21.5rem]"
              >
                Join the talent pool
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
