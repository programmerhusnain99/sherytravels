import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { InquireButton } from "@/components/inquiry/InquireButton";
import { MobileNav } from "./MobileNav";
import { MENU, UTILITY_NAV, PHONES, type MenuItem } from "@/data/nav";

/** Desktop dropdown for a nav item with children (CSS hover/focus — no JS). */
function NavDropdown({ item, active }: { item: MenuItem; active: string }) {
  const isActive = item.href === active;
  const columns = item.children!.filter((c) => c.children?.length);
  const extras = item.children!.filter((c) => !c.children?.length);
  const isMega = columns.length > 0;

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
      <div className="invisible absolute left-0 top-full z-50 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div
          className={`rounded-xl border border-navy/10 bg-white p-4 shadow-[0_24px_54px_-24px_rgba(26,62,110,0.4)] ${
            isMega ? "w-[640px]" : "w-[220px]"
          }`}
        >
          {isMega ? (
            <>
              <div className="grid grid-cols-3 gap-x-5 gap-y-1">
                {columns.map((col) => (
                  <div key={col.label}>
                    {col.href ? (
                      <Link href={col.href} className="mb-1 block font-serif text-[14px] font-bold text-navy hover:text-gold">
                        {col.label}
                      </Link>
                    ) : (
                      <span className="mb-1 block font-serif text-[14px] font-bold text-navy">{col.label}</span>
                    )}
                    <ul>
                      {col.children!.map((g) => (
                        <li key={g.label}>
                          <Link href={g.href ?? "#"} className="block rounded-md px-2 py-1.5 text-[13px] text-navy/75 hover:bg-ice hover:text-navy">
                            {g.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              {extras.length > 0 && (
                <div className="mt-3 flex gap-5 border-t border-navy/10 pt-3">
                  {extras.map((e) => (
                    <Link key={e.label} href={e.href ?? "#"} className="text-[13.5px] font-semibold text-navy hover:text-gold">
                      {e.label} →
                    </Link>
                  ))}
                </div>
              )}
            </>
          ) : (
            <ul className="flex flex-col">
              {item.children!.map((c) => (
                <li key={c.label}>
                  <Link href={c.href ?? "#"} className="block rounded-md px-3 py-2 text-[14px] text-navy/80 hover:bg-ice hover:text-navy">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
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
