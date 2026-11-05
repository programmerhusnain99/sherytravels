import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { InquireButton } from "@/components/inquiry/InquireButton";
import { MobileNav } from "./MobileNav";
import { PRIMARY_NAV, UTILITY_NAV, PHONES } from "@/data/nav";

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

        <nav className="hidden items-center gap-[30px] text-[14.5px] font-medium text-navy dt:flex">
          {PRIMARY_NAV.map((l) =>
            l.href === active ? (
              <Link key={l.href} href={l.href} aria-current="page" className="border-b-2 border-gold pb-[3px] font-semibold">
                {l.label}
              </Link>
            ) : (
              <Link key={l.href} href={l.href} className="opacity-[0.68] transition-opacity hover:opacity-100">
                {l.label}
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
