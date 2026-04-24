import { motion } from "framer-motion";
import { CalendarDays, Clock3 } from "lucide-react";

import type { TalentAvatarPalette, TalentProfile } from "./home-types";
import { anonymizeName, getAvailabilityStyles } from "./home-utils";

function Avatar({ skin, hair, shirt, frame }: TalentAvatarPalette) {
  return (
    <div
      className={`relative h-24 w-24 overflow-hidden rounded-[28px] border-2 border-black ${frame}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,rgba(255,255,255,0.7),transparent_35%)]" />
      <div
        className="absolute left-1/2 top-5 h-14 w-14 -translate-x-1/2 rounded-full border-2 border-black"
        style={{ backgroundColor: skin }}
      />
      <div
        className="absolute left-[14px] top-[34px] h-3.5 w-3.5 rounded-full border-2 border-black"
        style={{ backgroundColor: skin }}
      />
      <div
        className="absolute right-[14px] top-[34px] h-3.5 w-3.5 rounded-full border-2 border-black"
        style={{ backgroundColor: skin }}
      />
      <div
        className="absolute left-1/2 top-2.5 h-12 w-[3.9rem] -translate-x-1/2 rounded-[999px_999px_18px_18px] border-2 border-black"
        style={{ backgroundColor: hair }}
      />
      <div className="absolute left-[33px] top-[42px] h-1.5 w-1.5 rounded-full bg-black" />
      <div className="absolute right-[33px] top-[42px] h-1.5 w-1.5 rounded-full bg-black" />
      <div className="absolute left-[26px] top-[36px] h-1 w-3 rounded-full bg-black" />
      <div className="absolute right-[26px] top-[36px] h-1 w-3 rounded-full bg-black" />
      <div className="absolute left-[29px] top-[50px] h-2.5 w-2.5 rounded-full bg-[#FFB6B6]/60" />
      <div className="absolute right-[29px] top-[50px] h-2.5 w-2.5 rounded-full bg-[#FFB6B6]/60" />
      <div className="absolute left-1/2 top-[56px] h-[7px] w-5 -translate-x-1/2 rounded-b-full border-b-2 border-black" />
      <div
        className="absolute left-1/2 top-[62px] h-5 w-5 -translate-x-1/2 rounded-full border-2 border-black"
        style={{ backgroundColor: skin }}
      />
      <div
        className="absolute inset-x-3 bottom-0 h-10 rounded-t-[20px] border-2 border-black"
        style={{ backgroundColor: shirt }}
      />
    </div>
  );
}

export function TalentCard({ talent }: { talent: TalentProfile }) {
  const displayName = anonymizeName(talent.name);

  return (
    <motion.article
      whileHover={{ scale: 1.012, y: -3, rotate: -0.25 }}
      className="relative h-full rounded-[28px] border-2 border-black bg-white p-5 transition duration-300 ease-out sm:p-6"
    >
      <div className="flex items-start justify-center gap-4 sm:justify-between">
        <div className="rounded-full border-2 border-black bg-[var(--color-accent)] px-3 py-1 text-xs font-medium">
          Verified
        </div>
        {talent.note ? (
          <div className="hidden rotate-1 rounded-full border-2 border-black bg-[var(--color-accent-soft)] px-3 py-1 text-xs font-medium sm:inline-flex">
            {talent.note}
          </div>
        ) : null}
      </div>

      <div className="mt-5 flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
        <Avatar {...talent.avatar} />
        <div className="min-w-0">
          <h3 className="text-xl font-semibold tracking-tight text-black sm:text-2xl">
            {displayName}
          </h3>
          <p className="mt-1 text-sm text-black/60">{talent.role}</p>
        </div>
      </div>

      <p className="mt-5 hidden text-sm leading-7 text-black/72 sm:block">
        {talent.summary}
      </p>

      <div className="mt-5 flex flex-wrap justify-center gap-2 sm:mt-6 sm:justify-start">
        {talent.skills.map((skill, index) => (
          <span
            key={skill.label}
            className={`rounded-full border-2 border-black px-3 py-1 text-xs font-medium text-black ${skill.className} ${
              index > 1 ? "hidden sm:inline-flex" : ""
            }`}
          >
            {skill.label}
          </span>
        ))}
      </div>

      <div className="mt-6 border-t border-zinc-200 pt-5 sm:mt-7">
        <div className="flex items-center justify-between gap-3 text-sm">
          <div className="flex items-center gap-2 text-black/72">
            <Clock3 className="h-4 w-4" />
            Experience
          </div>
          <span className="font-medium text-black">{talent.experience}</span>
        </div>

        <div className="mt-4 flex items-center justify-between gap-3 text-sm">
          <div className="flex items-center gap-2 text-black/72">
            <CalendarDays className="h-4 w-4" />
            Availability
          </div>
          <span
            className={`rounded-full border-2 border-black px-3 py-1 text-xs font-medium text-black ${getAvailabilityStyles(
              talent.availability,
            )}`}
          >
            {talent.availability}
          </span>
        </div>
      </div>
    </motion.article>
  );
}
