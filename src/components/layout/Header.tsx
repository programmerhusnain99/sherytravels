import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { InquireButton } from "@/components/inquiry/InquireButton";
import { MobileNav } from "./MobileNav";
import { MENU, UTILITY_NAV, PHONES, type MenuItem } from "@/data/nav";

/** Desktop dropdown with nested flyout submenus (CSS hover/focus — no JS). */
function NavDropdown({ item, active }: { item: MenuItem; active: string }) {
  const isActive = item.href === active;

  return (
    <div className="group relative">
      <Link
        href={item.href ?? "#"}
        className={`flex items-center gap-1 transition-opacity ${
          isActive ? "font-semibold text-navy" : "text-navy opacity-[0.68] group-hover:opacity-100"
        }`}
      >
        {item.label}
        <ChevronDown size={14} className="transition-transform duration-150 group-hover:rotate-180" />
      </Link>

      {/* First-level panel: the main options */}
      <div className="invisible absolute left-0 top-full z-50 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <ul className="w-[264px] rounded-xl border border-navy/10 bg-white p-2 shadow-[0_24px_54px_-24px_rgba(26,62,110,0.4)]">
          {item.children!.map((child) =>
            child.children?.length ? (
              <li key={child.label} className="group/sub relative">
                <div className="flex items-center justify-between gap-2 rounded-md px-3 py-2 text-[14px] text-navy/80 group-hover/sub:bg-ice group-hover/sub:text-navy">
                  {child.href ? (
                    <Link href={child.href} className="flex-1">{child.label}</Link>
                  ) : (
                    <span className="flex-1">{child.label}</span>
                  )}
                  <ChevronRight size={15} className="flex-none text-navy/45" />
                </div>
                {/* Second-level flyout to the right */}
                <div className="invisible absolute left-full top-0 z-50 pl-2 opacity-0 transition-all duration-150 group-hover/sub:visible group-hover/sub:opacity-100">
                  <ul className="w-[252px] rounded-xl border border-navy/10 bg-white p-2 shadow-[0_24px_54px_-24px_rgba(26,62,110,0.4)]">
                    {child.children!.map((g) => (
                      <li key={g.label}>
                        <Link href={g.href ?? "#"} className="block rounded-md px-3 py-2 text-[13.5px] text-navy/75 hover:bg-ice hover:text-navy">
                          {g.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ) : (
              <li key={child.label}>
                <Link href={child.href ?? "#"} className="block rounded-md px-3 py-2 text-[14px] text-navy/80 hover:bg-ice hover:text-navy">
                  {child.label}
                </Link>
              </li>
            ),
          )}
        </ul>
      </div>
    </div>
  );
}

/** Site header: navy utility strip + logo/nav row. `active` highlights the current nav item. */
export function Header({ active = "/" }: { active?: string }) {
  return (
    <header>
      {/* Utility strip */}
      <div className="bg-navy text-white">
        <Container className="flex items-center justify-center py-2.5 dt:justify-between dt:py-[11px]">
          <nav className="hidden items-center gap-[22px] text-[12.5px] font-medium dt:flex">
            {UTILITY_NAV.map((l, i) => (
              <Fragment key={l.href}>
                {i > 0 && <span className="opacity-30">|</span>}
                <Link href={l.href} className="opacity-90 transition-opacity hover:opacity-100">
                  {l.label}
                </Link>
              </Fragment>
            ))}
          </nav>
          <div className="flex items-center gap-4 dt:gap-5">
            {PHONES.map((p, i) => (
              <Fragment key={p.tel + i}>
                {i > 0 && <span className="h-3.5 w-px bg-white/30" />}
                <a href={`tel:${p.tel}`} className="flex items-center gap-2">
                  <span className="text-[10.5px] font-bold tracking-[0.14em] text-gold">{p.country}</span>
                  <span className="whitespace-nowrap text-[12.5px] font-semibold text-white dt:text-[13.5px]">
                    {p.display}
                  </span>
                </a>
              </Fragment>
            ))}
          </div>
        </Container>
      </div>

      {/* Logo + nav row */}
      <Container className="flex items-center justify-between border-b border-navy/10 py-4 dt:py-5">
        <Link href="/" aria-label="Shery Travels — home">
          <Image
            src="/images/common/common-logo-lockup.webp"
            alt="Shery Travels"
            width={210}
            height={57}
            priority
            className="h-[34px] w-auto dt:h-[42px]"
          />
        </Link>

        <nav className="hidden items-center gap-[26px] text-[14.5px] font-medium text-navy dt:flex">
          {MENU.map((item) =>
            item.children ? (
              <NavDropdown key={item.label} item={item} active={active} />
            ) : item.href === active ? (
              <Link key={item.label} href={item.href} aria-current="page" className="border-b-2 border-gold pb-[3px] font-semibold">
                {item.label}
              </Link>
            ) : (
              <Link key={item.label} href={item.href ?? "#"} className="opacity-[0.68] transition-opacity hover:opacity-100">
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden dt:block">
          <InquireButton size="sm" className="rounded px-6 py-3">
            Inquire Now
          </InquireButton>
        </div>

        <div className="dt:hidden">
          <MobileNav active={active} />
        </div>
      </Container>
    </header>
  );
}
