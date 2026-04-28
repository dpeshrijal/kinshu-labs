import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

import { cn } from "@/lib/utils";

const codeLines = [
  { n: "01", text: "// TODO: hire great engineers without summoning chaos", tone: "comment" },
  { n: "02", text: "type StartupProblem = {", tone: "muted" },
  { n: "03", text: "  resumes: 'too_many';", tone: "body" },
  { n: "04", text: "  meetings: 'please_no_more';", tone: "body" },
  { n: "05", text: "  deadline: 'yesterday';", tone: "body" },
  { n: "06", text: "};", tone: "muted" },
  { n: "07", text: "", tone: "body" },
  { n: "08", text: "async function hireWithKinshu(problem: StartupProblem) {", tone: "keyword" },
  { n: "09", text: "  const brief = clarify(problem);", tone: "body" },
  { n: "10", text: "  const vetted = await findDevelopers(brief);", tone: "accent" },
  { n: "11", text: "  const shortlist = vetted.slice(0, 3);", tone: "body" },
  { n: "12", text: "  return startBuilding(shortlist);", tone: "body" },
  { n: "13", text: "}", tone: "keyword" },
  { n: "14", text: "", tone: "body" },
  { n: "15", text: "// Output: fewer tabs, better code, calmer founder", tone: "comment" },
] as const;

const sidebarRows = [
  { label: "brief.md", active: false },
  { label: "vetting.ts", active: false },
  { label: "shortlist.json", active: true },
  { label: "timezone.ok", active: false },
  { label: "ship.log", active: false },
] as const;

const terminalLines = [
  "$ kinshu shortlist --fast",
  "[ok] 3 vetted matches",
  "[ok] timezone aligned",
  "[ok] chaos contained",
] as const;

function codeToneClass(tone: (typeof codeLines)[number]["tone"]) {
  const toneMap = {
    accent: "text-[#1f4f3c]",
    body: "text-[#46504b]",
    comment: "text-[#819089]",
    keyword: "text-[#b04477]",
    muted: "text-[#7a847e]",
  };

  return toneMap[tone];
}

export function HeroAiVisual() {
  return (
    <div className="ml-auto flex w-full max-w-[40rem] justify-end px-2 lg:-mr-1">
      <motion.div
        whileHover={{ y: -2 }}
        className="relative flex min-h-[390px] w-full items-center justify-center overflow-visible sm:aspect-[1.18/1] sm:min-h-0"
      >
        <div className="absolute inset-[-8%] bg-[radial-gradient(circle_at_52%_44%,rgba(224,239,229,0.76),transparent_35%),radial-gradient(circle_at_78%_72%,rgba(239,231,213,0.5),transparent_31%)]" />

        <motion.div
          initial={{ opacity: 0, y: 18, rotate: -0.8 }}
          animate={{ opacity: 1, y: 0, rotate: -0.8 }}
          transition={{ duration: 0.64, ease: [0.2, 0.9, 0.2, 1] }}
          className="relative z-20 w-full max-w-[36rem] overflow-hidden rounded-[20px] border border-[#d8d2c8] bg-[#fbfaf4] shadow-[0_30px_74px_rgba(20,32,18,0.14)]"
        >
          <div className="flex h-10 items-center gap-2 border-b border-[#d8ded5] bg-[linear-gradient(90deg,#17392d,#2f5f48)] px-3.5">
            <span className="h-3 w-3 rounded-full bg-[#ff6b35]" />
            <span className="h-3 w-3 rounded-full bg-[#f6c443]" />
            <span className="h-3 w-3 rounded-full bg-[#5ac46d]" />
            <div className="ml-auto flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/64">
              <Code2 className="h-3.5 w-3.5" />
              hire-with-kinshu.ts
            </div>
          </div>

          <div className="grid min-h-[22rem] grid-cols-[7.7rem_minmax(0,1fr)]">
            <div className="border-r border-[#dbe2d9] bg-[#17392d] px-3 py-4 text-white/78">
              <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/58">
                Workspace
              </div>
              <div className="mt-4 space-y-2">
                {sidebarRows.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-[12px] font-medium"
                  >
                    <span className={cn(
                      "h-2 w-2 shrink-0 rounded-full",
                      row.active ? "bg-white" : "bg-[#cbd8cf]",
                    )} />
                    <span className={row.active ? "text-white" : "text-[#d7e1da]"}>
                      {row.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid min-w-0 grid-rows-[minmax(0,1fr)_8.4rem] bg-[linear-gradient(180deg,#fffdf8,#f8f6ef)] font-mono">
              <div className="min-w-0 px-4 py-4">
                {codeLines.map((line) => (
                  <div
                    key={`${line.n}-${line.text}`}
                    className="grid grid-cols-[1.75rem_minmax(0,1fr)] gap-2.5 text-[12.25px] leading-[1.74]"
                  >
                    <span className="select-none text-right text-[#b1b8b2]">
                      {line.n}
                    </span>
                    <span className={cn("break-words", codeToneClass(line.tone))}>
                      {line.text || "\u00a0"}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-[#d8ded5] bg-[#101412] px-4 py-3 text-[#cfe5d5]">
                <div className="mb-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#b8d4c2]">
                  <span className="h-2 w-2 rounded-full bg-[#78d39b]" />
                  Terminal
                </div>
                <div className="space-y-1.5 text-[11.5px] leading-4">
                  {terminalLines.map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
