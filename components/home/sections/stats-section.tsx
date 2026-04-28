import { Heart, ShieldCheck, Users } from "lucide-react";

import { stats } from "../home-data";

const statIcons = [Users, Users, ShieldCheck, Heart] as const;

export function StatsSection() {
  return (
    <section id="stats">
      <div className="mx-auto max-w-7xl px-5 py-4 sm:px-6 sm:py-6 lg:px-8">
        <div className="grid gap-4 rounded-[20px] border border-[#ebe7df] bg-white p-5 shadow-[0_16px_36px_rgba(24,38,24,0.04)] sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = statIcons[index];

            return (
              <div key={stat.label} className="flex items-center gap-4 rounded-[16px] bg-[#fbfaf7] px-4 py-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#e6e1d8] bg-white text-[var(--color-accent)]">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[2rem] font-semibold tracking-tight text-[#111111]">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[#5c6460]">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
