import { cn } from "@/lib/utils";

export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-7 w-7", className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="2.75" y="2" width="5" height="20" rx="2.2" fill="#111111" />
      <path
        d="M10.25 10.8L19.75 2H22L13.7 12L22 22H19.75L10.25 13.2V10.8Z"
        fill="#111111"
      />
    </svg>
  );
}
