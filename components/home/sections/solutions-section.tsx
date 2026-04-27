import { motion } from "framer-motion";

import { techGroups } from "../home-data";
import { StickerIcon } from "../primitives";

export function SolutionsSection() {
  return (
    <div className="rounded-[20px] border border-[#ebe7df] bg-white p-5 shadow-[0_16px_36px_rgba(24,38,24,0.04)] sm:p-6">
      <h2 className="text-[2rem] font-semibold tracking-tight text-[#111111]">
        Solutions we build
      </h2>
      <p className="mt-2 text-[0.98rem] text-[#5c6460]">
        End-to-end Software development tailored to your business.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {techGroups.map((group, index) => {
          const Icon = group.icon;

          return (
            <motion.div
              key={group.title}
              whileHover={{ y: -2 }}
              transition={{ delay: index * 0.02 }}
              className="flex items-start gap-4 rounded-[16px] p-2"
            >
              <StickerIcon icon={Icon} className="h-11 w-11 rounded-xl" />
              <div>
                <h3 className="text-lg font-semibold text-[#111111]">
                  {group.title}
                </h3>
                <p className="mt-1 text-sm leading-6 text-[#5b625d]">
                  {group.items.join(" ")}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
