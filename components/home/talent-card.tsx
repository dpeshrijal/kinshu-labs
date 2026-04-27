import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";

import type { TalentProfile } from "./home-types";

function PlaceholderPortrait() {
  return (
    <div className="h-full w-full bg-[linear-gradient(180deg,#d9d6cf_0%,#cfcbc4_100%)]" />
  );
}

export function TalentCard({ talent }: { talent: TalentProfile }) {
  const primaryHighlight = talent.highlights[0];
  const secondaryHighlights = talent.highlights.slice(1).join(" / ");

  return (
    <motion.article
      whileHover={{ y: -2 }}
      className="h-full overflow-hidden rounded-[16px] border border-[#e8e2d8] bg-white shadow-[0_10px_28px_rgba(22,34,20,0.045)]"
    >
      <div className="grid h-full grid-cols-[110px_minmax(0,1fr)] items-stretch sm:min-h-[252px] sm:grid-cols-none sm:flex sm:flex-row sm:items-stretch">
        <div className="relative min-h-full overflow-hidden border-r border-[#ece6dd] bg-[#d8d4cd] sm:h-auto sm:w-[182px] sm:flex-none sm:self-stretch">
          {talent.photoUrl ? (
            <Image
              src={talent.photoUrl}
              alt={talent.name}
              fill
              sizes="(max-width: 640px) 110px, 182px"
              className="object-cover object-top sm:object-cover"
            />
          ) : (
            <PlaceholderPortrait />
          )}
        </div>

        <div className="flex min-w-0 flex-1 flex-col bg-[linear-gradient(180deg,#fdfbf7_0%,#faf5ed_100%)] px-3 py-3 sm:px-4 sm:py-[14px]">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className="text-[1rem] font-semibold tracking-tight text-[#111111]">
                {talent.name}
              </h3>
              <p className="mt-1 text-[0.8rem] leading-5 text-[#4f5652]">
                {talent.role}
              </p>
            </div>

            <div className="shrink-0 rounded-full bg-[#f7fbf7] px-2 py-1 text-[9px] font-medium text-[#5a7766]">
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#43c768]" />
                {talent.availability}
              </span>
            </div>
          </div>

          <div className="mt-2 flex flex-wrap gap-1.5">
            {talent.skills.map((skill) => (
              <span
                key={skill.label}
                className="rounded-md border border-[#ebe7df] bg-[#f8f4ed] px-2 py-1 text-[9px] leading-none text-[#676d69]"
              >
                {skill.label}
              </span>
            ))}
          </div>

          <div className="mt-2 space-y-1.5 text-[0.74rem] leading-5 text-[#454c48]">
            <div className="flex items-start gap-2">
              <Plus className="mt-[4px] h-3 w-3 shrink-0 text-[var(--color-accent)]" />
              <span>{primaryHighlight}</span>
            </div>
            <div className="flex items-start gap-2">
              <Plus className="mt-[4px] h-3 w-3 shrink-0 text-[var(--color-accent)]" />
              <span>{secondaryHighlights}</span>
            </div>
          </div>

          <button
            type="button"
            className="mt-auto inline-flex items-center gap-2 pt-2.5 text-[0.8rem] font-semibold text-[#111111] transition hover:text-[var(--color-accent)]"
          >
            View profile
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}
