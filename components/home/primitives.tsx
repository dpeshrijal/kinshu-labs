import Link from "next/link";
import { motion } from "framer-motion";
import type { ComponentType, ReactNode } from "react";

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
    white: "border-[#e7e2d8] bg-white text-[#222825]",
    lime: "border-[#d9e4dd] bg-[#f1f5f2] text-[#40574a]",
    sand: "border-[#e7e2d8] bg-[#fbfaf6] text-[#40574a]",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-xl border px-3 py-2 text-[11px] font-medium uppercase tracking-[0.12em]",
        toneClassMap[tone],
        className,
      )}
    >
      {children}
    </div>
  );
}

export function StickerIcon({
  icon: Icon,
  className,
}: {
  icon: ComponentType<{ className?: string }>;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex h-12 w-12 items-center justify-center rounded-2xl border border-[#e8e3da] bg-[#f7f8f4] text-[var(--color-accent)]",
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
  className,
}: {
  href: string;
  children: ReactNode;
  tone?: "primary" | "secondary" | "dark";
  className?: string;
}) {
  const toneClassMap = {
    primary:
      "border-[#17392d] bg-[#17392d] text-white shadow-[0_12px_30px_rgba(31,79,60,0.16)] hover:bg-[#123225]",
    secondary:
      "border-[#d5d9d3] bg-white text-[#161b19] hover:bg-[#fbfaf6]",
    dark: "border-[#181b1a] bg-[#181b1a] text-white hover:bg-[#101312]",
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
          "inline-flex w-full items-center justify-center gap-2 rounded-xl border px-5 py-3 text-sm font-medium transition duration-300 ease-out sm:w-auto sm:px-6",
          toneClassMap[tone],
          className,
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
          "inline-flex items-center justify-center gap-2 rounded-xl border border-[#17392d] bg-[#17392d] px-6 py-3 text-sm font-medium text-white shadow-[0_12px_30px_rgba(31,79,60,0.16)] transition duration-300 ease-out sm:px-7",
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
      <span className="mb-2 block text-sm font-medium text-[#2b322f]">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        aria-label={label}
        placeholder={placeholder}
        className="h-14 w-full rounded-2xl border border-[#d9ddd8] bg-white px-4 text-base font-normal text-[#101111] outline-none transition duration-300 ease-out placeholder:text-[#88908a] focus:border-[#8aa494]"
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
      <span className="mb-2 block text-sm font-medium text-[#2b322f]">
        {label}
      </span>
      <textarea
        name={name}
        required={required}
        aria-label={label}
        placeholder={placeholder}
        rows={5}
        className="w-full rounded-[24px] border border-[#d9ddd8] bg-white px-4 py-4 text-base font-normal leading-7 text-[#101111] outline-none transition duration-300 ease-out placeholder:text-[#88908a] focus:border-[#8aa494]"
      />
    </label>
  );
}
