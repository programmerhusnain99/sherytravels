import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { InquireButton } from "@/components/inquiry/InquireButton";
import {
  FOOTER_COLUMNS,
  SOCIALS,
  PHONES,
  CONTACT_EMAIL,
  TAGLINE,
} from "@/data/nav";

const SOCIAL_ICON: Record<string, IconName> = {
  Facebook: "facebook",
  Instagram: "instagram",
  YouTube: "youtube",
  TikTok: "tiktok",
  LinkedIn: "linkedin",
};

export function Footer() {
  return (
    <footer>
      {/* Gold CTA band */}
      <div className="bg-gold">
        <Container className="flex flex-col items-center gap-4 py-8 text-center dt:flex-row dt:justify-between dt:py-9 dt:text-left">
          <h2 className="font-serif text-[24px] font-normal text-navy dt:text-[28px]">
            Ready to begin your <em className="italic">pilgrimage?</em>
          </h2>
          <div className="flex items-center gap-3">
            <InquireButton variant="navy" size="md" className="rounded-md">
              Inquire Now
            </InquireButton>
            <Button href="/contact/" variant="outline" size="md" className="hidden border-navy/30 text-navy dt:inline-flex">
              Contact Us
            </Button>
          </div>
        </Container>
      </div>

      {/* Navy link area */}
      <div className="bg-navy text-white">
        <Container className="py-12 dt:py-14">
          <div className="grid gap-10 dt:grid-cols-[1.4fr_1fr_1fr_1fr] dt:gap-12">
            {/* Brand column */}
            <div className="flex flex-col items-center gap-4 text-center dt:items-start dt:text-left">
              <Image
                src="/images/common/common-logo-white.png"
                alt="Shery Travels"
                width={180}
                height={30}
                className="h-[30px] w-auto dt:h-[34px]"
              />
              <p className="max-w-[320px] text-[14px] leading-relaxed text-white/70">{TAGLINE}</p>
              <div className="flex flex-col gap-2">
                {PHONES.map((p) => (
                  <a key={p.tel} href={`tel:${p.tel}`} className="flex items-center justify-center gap-2 dt:justify-start">
                    <Icon name="phone" size={16} className="text-gold" />
                    <span className="text-[10px] font-bold tracking-[0.14em] text-gold">{p.country}</span>
                    <span className="text-[14px] text-white/90">{p.display}</span>
                  </a>
                ))}
                <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center justify-center gap-2 dt:justify-start">
                  <Icon name="mail" size={16} className="text-gold" />
                  <span className="text-[14px] text-white/90">{CONTACT_EMAIL}</span>
                </a>
              </div>
              <div className="flex gap-3">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-gold hover:text-navy"
                  >
                    <Icon name={SOCIAL_ICON[s.label]} size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            <div className="grid grid-cols-3 gap-8 dt:col-span-3 dt:grid-cols-3">
              {FOOTER_COLUMNS.map((col) => (
                <div key={col.heading}>
                  <h3 className="mb-3 text-[13px] font-semibold uppercase tracking-[0.14em] text-gold">{col.heading}</h3>
                  <ul className="flex flex-col gap-2.5">
                    {col.links.map((l) => (
                      <li key={l.href}>
                        <Link href={l.href} className="text-[14px] text-white/75 transition-colors hover:text-white">
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Container>

        {/* Copyright bar */}
        <div className="border-t border-white/10">
          <Container className="flex flex-col items-center justify-between gap-2 py-5 text-center text-[13px] text-white/60 dt:flex-row dt:text-left">
            {/* Static literal: new Date() in a Server Component breaks the static
                prerender under Cache Components. Bump this at year's end. */}
            <span>© 2026 Shery Travels. All rights reserved.</span>
            <Link href="/privacy-policy/" className="hover:text-white">Privacy Policy</Link>
          </Container>
        </div>
      </div>
    </footer>
  );
}
