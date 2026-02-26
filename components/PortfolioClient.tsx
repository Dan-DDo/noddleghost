"use client";

import { useEffect, useState } from "react";
import PortfolioList from "@/components/PortfolioList";
import {
  loadPortfolioItems,
  PORTFOLIO_STORAGE_KEY,
  PORTFOLIO_UPDATED_EVENT,
  PortfolioItem,
} from "@/lib/portfolio-store";

export default function PortfolioClient() {
  const [items, setItems] = useState<PortfolioItem[]>([]);

  const refresh = () => {
    setItems(loadPortfolioItems());
  };

  useEffect(() => {
    refresh();

    const onStorage = (e: StorageEvent) => {
      if (e.key === PORTFOLIO_STORAGE_KEY) refresh();
    };
    const onUpdated = () => refresh();

    window.addEventListener("storage", onStorage);
    window.addEventListener(PORTFOLIO_UPDATED_EVENT, onUpdated);

    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener(PORTFOLIO_UPDATED_EVENT, onUpdated);
    };
  }, []);

  return <PortfolioList items={items} />;
}