export function anonymizeName(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .map((part, index) => {
      if (index === 0) {
        const [firstLetter = ""] = Array.from(part);

        return firstLetter ? `${firstLetter}${"*".repeat(4)}` : "";
      }

      return part;
    })
    .filter(Boolean)
    .join(" ");
}

export function getAvailabilityStyles(availability: string) {
  const normalized = availability.toLowerCase();

  if (normalized.includes("available")) {
    return "bg-[#DFF4FF]";
  }

  if (normalized.includes("week")) {
    return "bg-[var(--color-accent-soft)]";
  }

  return "bg-[#F1F1F1]";
}

export function getItemsPerView(width: number) {
  if (width >= 1440) {
    return 4;
  }

  if (width >= 1024) {
    return 3;
  }

  if (width >= 640) {
    return 2;
  }

  return 1;
}

export function getTalentGridClass(itemsPerView: number) {
  switch (itemsPerView) {
    case 1:
      return "grid-cols-1";
    case 2:
      return "grid-cols-2";
    case 3:
      return "grid-cols-3";
    default:
      return "grid-cols-4";
  }
}
