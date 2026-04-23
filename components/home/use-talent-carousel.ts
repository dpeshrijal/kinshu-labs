import { useEffect, useMemo, useState } from "react";

import type { TalentProfile } from "./home-types";
import { getItemsPerView } from "./home-utils";

export function useTalentCarousel(talent: readonly TalentProfile[]) {
  const [itemsPerView, setItemsPerView] = useState(4);
  const [currentPage, setCurrentPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    function syncItemsPerView() {
      setItemsPerView(getItemsPerView(window.innerWidth));
    }

    syncItemsPerView();
    window.addEventListener("resize", syncItemsPerView);

    return () => window.removeEventListener("resize", syncItemsPerView);
  }, []);

  const pages = useMemo(() => {
    const nextPages: TalentProfile[][] = [];

    for (let index = 0; index < talent.length; index += itemsPerView) {
      nextPages.push(Array.from(talent.slice(index, index + itemsPerView)));
    }

    return nextPages;
  }, [itemsPerView, talent]);

  const safeCurrentPage = Math.min(currentPage, Math.max(pages.length - 1, 0));

  useEffect(() => {
    setCurrentPage(0);
  }, [itemsPerView]);

  useEffect(() => {
    if (pages.length <= 1 || isPaused) {
      return;
    }

    const timer = window.setInterval(() => {
      setCurrentPage((activePage) => (activePage + 1) % pages.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [isPaused, pages.length]);

  return {
    itemsPerView,
    pages,
    currentPage: safeCurrentPage,
    isPaused,
    setIsPaused,
    goToPage: setCurrentPage,
  };
}
