"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { InquireButton } from "@/components/inquiry/InquireButton";
import { PRIMARY_NAV, UTILITY_NAV, PHONES } from "@/data/nav";

export function MobileNav({ active = "/" }: { active?: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      {/* Hamburger (two navy bars + one gold) */}
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="flex flex-col gap-[5px] p-3 -m-3"
      >
        <span className="block h-[2px] w-[22px] rounded-sm bg-navy" />
        <span className="block h-[2px] w-[22px] rounded-sm bg-navy" />
        <span className="block h-[2px] w-[14px] rounded-sm bg-gold" />
      </button>

      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[90] bg-navy/50 transition-opacity duration-200 ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
        aria-hidden
      />

      {/* Drawer */}
      <aside
        className={`fixed right-0 top-0 z-[91] flex h-dvh w-[82%] max-w-[340px] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${open ? "translate-x-0" : "translate-x-full"}`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between border-b border-navy/10 px-5 py-4">
          <span className="font-serif text-[17px] font-bold text-navy">Menu</span>
          <button type="button" aria-label="Close menu" onClick={() => setOpen(false)} className="grid h-10 w-10 place-items-center rounded-full bg-navy/5 text-navy">
            <Icon name="close" size={20} />
          </button>
        </div>

        <nav className="flex flex-col px-5 py-2">
          {PRIMARY_NAV.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              aria-current={l.href === active ? "page" : undefined}
              className={`border-b border-navy/5 py-3 text-[16px] ${l.href === active ? "font-semibold text-navy" : "font-medium text-navy/70"}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="mt-1 flex flex-col gap-2 px-5">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-navy/50">Packages</span>
          {UTILITY_NAV.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-[14.5px] font-medium text-navy/75">
              {l.label}
            </Link>
          ))}
        </div>

        <div className="mt-auto flex flex-col gap-3 border-t border-navy/10 px-5 py-5">
          {PHONES.map((p) => (
            <a key={p.tel} href={`tel:${p.tel}`} className="flex items-center gap-2">
              <span className="text-[10.5px] font-bold tracking-[0.14em] text-gold">{p.country}</span>
              <span className="text-[14px] font-semibold text-navy">{p.display}</span>
            </a>
          ))}
          <InquireButton variant="gold" size="md" className="mt-1 w-full rounded-lg">
            Inquire Now
          </InquireButton>
        </div>
      </aside>
    </>
  );
}
