import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionPillTone = "white" | "lime" | "sand";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, delay, ease: [0.2, 0.9, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionPill({
  children,
  tone = "white",
  className,
}: {
  children: ReactNode;
  tone?: SectionPillTone;
  className?: string;
}) {
  const toneClassMap: Record<SectionPillTone, string> = {
    white: "bg-white",
    lime: "bg-[#D4FF00]",
    sand: "bg-[#FFF5C9]",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border-2 border-black px-4 py-2 text-xs font-medium uppercase text-black",
        toneClassMap[tone],
        className,
      )}
    >
      <Sparkles className="h-3.5 w-3.5" />
      {children}
    </div>
  );
}

export function StickerIcon({
  icon: Icon,
  className,
}: {
  icon: React.ComponentType<{ className?: string }>;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex h-14 w-14 items-center justify-center rounded-full border-2 border-black bg-white text-black",
        className,
      )}
    >
      <Icon className="h-6 w-6" />
    </div>
  );
}

export function ActionLink({
  href,
  children,
  tone = "primary",
}: {
  href: string;
  children: ReactNode;
  tone?: "primary" | "secondary" | "dark";
}) {
  const toneClassMap = {
    primary: "border-black bg-[#D4FF00] text-black",
    secondary: "border-black bg-white text-black hover:bg-[#FFF5C9]",
    dark: "border-black bg-black text-white hover:bg-zinc-900",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.01, y: -1 }}
      whileTap={{ scale: 0.985 }}
      className="w-full sm:w-auto"
    >
      <Link
        href={href}
        className={cn(
          "inline-flex w-full items-center justify-center gap-2 rounded-full border-2 px-5 py-2.5 text-sm font-medium transition duration-300 ease-out sm:w-auto sm:px-6 sm:py-3",
          toneClassMap[tone],
        )}
      >
        {children}
      </Link>
    </motion.div>
  );
}

export function ActionButton({
  children,
  type = "button",
  fullWidth = true,
}: {
  children: ReactNode;
  type?: "button" | "submit";
  fullWidth?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.985 }}
      className={fullWidth ? "w-full" : "w-full sm:w-auto"}
    >
      <button
        type={type}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full border-2 border-black bg-[#D4FF00] px-6 py-3 text-sm font-medium text-black transition duration-300 ease-out sm:px-7",
          fullWidth ? "w-full" : "w-full sm:w-auto",
        )}
      >
        {children}
      </button>
    </motion.div>
  );
}

export function Field({
  label,
  name,
  placeholder,
  type = "text",
  className,
  required = false,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  className?: string;
  required?: boolean;
}) {
  return (
    <label className={cn("block", className)}>
      <span className="mb-2 block text-sm font-medium text-black">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        aria-label={label}
        placeholder={placeholder}
        className="h-14 w-full rounded-[20px] border-2 border-black bg-[#FBFBF7] px-4 text-base font-normal text-black outline-none transition duration-300 ease-out placeholder:text-black/40 focus:bg-white"
      />
    </label>
  );
}

export function TextareaField({
  label,
  name,
  placeholder,
  className,
  required = false,
}: {
  label: string;
  name: string;
  placeholder: string;
  className?: string;
  required?: boolean;
}) {
  return (
    <label className={cn("block", className)}>
      <span className="mb-2 block text-sm font-medium text-black">{label}</span>
      <textarea
        name={name}
        required={required}
        aria-label={label}
        placeholder={placeholder}
        rows={5}
        className="w-full rounded-[24px] border-2 border-black bg-[#FBFBF7] px-4 py-4 text-base font-normal leading-7 text-black outline-none transition duration-300 ease-out placeholder:text-black/40 focus:bg-white"
      />
    </label>
  );
}

export function SketchDivider({
  bg,
  fill,
  flip = false,
}: {
  bg: "white" | "lemon";
  fill: "white" | "lemon";
  flip?: boolean;
}) {
  const bgClassMap = {
    white: "bg-white",
    lemon: "bg-[#F7F7F2]",
  };

  const fillClassMap = {
    white: "fill-white",
    lemon: "fill-[#F7F7F2]",
  };

  return (
    <div aria-hidden className={cn(bgClassMap[bg], "leading-none")}>
      <svg
        viewBox="0 0 1440 96"
        className={cn(
          "block h-10 w-full sm:h-16",
          fillClassMap[fill],
          flip && "scale-x-[-1]",
        )}
        preserveAspectRatio="none"
      >
        <path d="M0 34C82 18 145 42 226 35C332 25 420 10 524 31C630 52 728 72 829 49C925 27 1006 13 1111 33C1227 55 1328 45 1440 25V96H0Z" />
        <path
          d="M0 34C82 18 145 42 226 35C332 25 420 10 524 31C630 52 728 72 829 49C925 27 1006 13 1111 33C1227 55 1328 45 1440 25"
          fill="none"
          stroke="#111111"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M16 44C98 27 160 51 240 44C345 34 430 21 534 40C642 60 734 78 838 57C936 36 1018 25 1120 43C1231 63 1330 53 1424 34"
          fill="none"
          opacity="0.72"
          stroke="#D4FF00"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="7"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}
