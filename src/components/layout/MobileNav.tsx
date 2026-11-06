"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { InquireButton } from "@/components/inquiry/InquireButton";
import { MENU, PHONES, type MenuItem } from "@/data/nav";

/** Recursive expandable menu node for the mobile drawer. */
function MenuNode({
  item,
  active,
  onNavigate,
  depth = 0,
}: {
  item: MenuItem;
  active: string;
  onNavigate: () => void;
  depth?: number;
}) {
  const [open, setOpen] = useState(false);

  if (!item.children) {
    return (
      <Link
        href={item.href ?? "#"}
        onClick={onNavigate}
        aria-current={item.href === active ? "page" : undefined}
        className={`block py-2.5 text-[15px] ${item.href === active ? "font-semibold text-navy" : "font-medium text-navy/75"}`}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="border-b border-navy/5">
      <div className="flex items-center justify-between">
        {item.href ? (
          <Link href={item.href} onClick={onNavigate} className="flex-1 py-2.5 text-[15px] font-medium text-navy">
            {item.label}
          </Link>
        ) : (
          <button type="button" onClick={() => setOpen((o) => !o)} className="flex-1 py-2.5 text-left text-[15px] font-medium text-navy">
            {item.label}
          </button>
        )}
        <button type="button" onClick={() => setOpen((o) => !o)} aria-label={`Toggle ${item.label}`} aria-expanded={open} className="p-2">
          <ChevronDown size={18} className={`text-navy/60 transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
      </div>
      {open && (
        <div className="mb-1 ml-2 border-l border-navy/10 pl-3">
          {item.children.map((c) => (
            <MenuNode key={c.label} item={c} active={active} onNavigate={onNavigate} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

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

  const close = () => setOpen(false);

  return (
    <>
      {/* Hamburger */}
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="-m-3 flex flex-col gap-[5px] p-3"
      >
        <span className="block h-[2px] w-[22px] rounded-sm bg-navy" />
        <span className="block h-[2px] w-[22px] rounded-sm bg-navy" />
        <span className="block h-[2px] w-[14px] rounded-sm bg-gold" />
      </button>

      {/* Backdrop */}
      <div
        onClick={close}
        className={`fixed inset-0 z-[90] bg-navy/50 transition-opacity duration-200 ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
        aria-hidden
      />

      {/* Drawer */}
      <aside
        className={`fixed right-0 top-0 z-[91] flex h-dvh w-[86%] max-w-[360px] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${open ? "translate-x-0" : "translate-x-full"}`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between border-b border-navy/10 px-5 py-4">
          <span className="font-serif text-[17px] font-bold text-navy">Menu</span>
          <button type="button" aria-label="Close menu" onClick={close} className="grid h-10 w-10 place-items-center rounded-full bg-navy/5 text-navy">
            <Icon name="close" size={20} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-5 py-2">
          {MENU.map((item) => (
            <MenuNode key={item.label} item={item} active={active} onNavigate={close} />
          ))}
        </nav>

        <div className="flex flex-col gap-3 border-t border-navy/10 px-5 py-5">
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
