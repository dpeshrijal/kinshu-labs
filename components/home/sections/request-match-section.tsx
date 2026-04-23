import { ArrowRight, Check } from "lucide-react";

import { requestMatchBenefits } from "../home-data";
import {
  ActionButton,
  Field,
  Reveal,
  SectionPill,
  TextareaField,
} from "../primitives";

export function RequestMatchSection() {
  return (
    <section id="match" className="bg-[#F7F7F2]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <Reveal className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-[28px] border-2 border-black bg-white p-6 sm:p-8">
            <SectionPill tone="sand" className="-rotate-1">
              Request a match
            </SectionPill>
            <h2 className="mt-6 text-3xl font-semibold leading-[1.08] tracking-tight text-black sm:text-5xl">
              Ready to build?
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-black/72 sm:text-lg sm:leading-8">
              Tell us about your project. We&apos;ll hand-pick the best fit from
              our network and respond within 48 hours.
            </p>

            <div className="mt-10 hidden space-y-4 sm:block">
              {requestMatchBenefits.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm font-medium text-black"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-black bg-[#D4FF00]">
                    <Check className="h-4 w-4" />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <form
            action="https://formspree.io/f/xyklbkdn"
            method="POST"
            className="rounded-[28px] border-2 border-black bg-white p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                name="founder_name"
                label="Founder name"
                placeholder="Jane Smith"
              />
              <Field
                name="email"
                label="Work email"
                placeholder="jane@startup.com"
                type="email"
              />
              <Field name="company" label="Company" placeholder="Acme AI" />

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-black">
                  Hiring timeline
                </label>
                <select
                  className="h-14 rounded-[20px] border-2 border-black bg-[#FBFBF7] px-4 text-sm outline-none transition duration-300 ease-out focus:bg-white"
                  name="timeline"
                >
                  <option value="immediately">Immediately</option>
                  <option value="1-2-weeks">In 1-2 weeks</option>
                  <option value="1-month">In 1 month</option>
                  <option value="exploring">Just exploring</option>
                </select>
              </div>

              <TextareaField
                name="message"
                label="Who do you need to hire?"
                placeholder="e.g. A Senior LLM Engineer to build a RAG pipeline using Pinecone. Ideally someone with FinTech experience."
                className="sm:col-span-2"
              />

              <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:col-span-2">
                <ActionButton type="submit" fullWidth={false}>
                  Submit request
                  <ArrowRight className="h-4 w-4" />
                </ActionButton>
              </div>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
