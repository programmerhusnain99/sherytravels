import Image from "next/image";
import { Accessibility, GraduationCap, Users, User, ArrowRight, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AccentHeading } from "@/components/ui/AccentHeading";
import { Button } from "@/components/ui/Button";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { DropBounce } from "@/components/motion/DropBounce";

type Audience = { icon: LucideIcon; title: string; body: string };

const AUDIENCES: Audience[] = [
  { icon: GraduationCap, title: "First-Time Pilgrims", body: "Guided rituals and step-by-step support from Ihram to Jamrat." },
  { icon: Users, title: "Families & Groups", body: "Coordinated travel, communal stays and shared meals." },
  { icon: Accessibility, title: "Older & Assisted", body: "Wheelchair access, medical support and hotels nearest the sites." },
  { icon: User, title: "Solo Pilgrims", body: "Personal reflection with full logistical support throughout." },
];

/** "Hajj experiences for all pilgrims" — navy split: image + audience cards + CTA. */
export function HajjExperiences() {
  return (
    <Section bg="navy" className="relative overflow-hidden py-12 dt:py-16">
      <div aria-hidden className="pointer-events-none absolute -left-32 top-1/4 h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,rgba(219,183,37,0.14),transparent_70%)]" />
      <div aria-hidden className="pointer-events-none absolute -right-28 -bottom-24 hidden h-[420px] w-[420px] rounded-full border border-gold/15 dt:block" />

      <Container className="relative grid items-center gap-12 dt:grid-cols-[0.92fr_1.08fr] dt:gap-16">
        {/* Image */}
        <Reveal as="div" direction="right" className="relative mx-auto w-full max-w-[440px]">
          <div aria-hidden className="pointer-events-none absolute -left-5 -top-5 hidden h-28 w-28 rounded-full border border-gold/25 dt:block" />
          <div className="hero-float relative h-[360px] w-[290px] mx-auto overflow-hidden rounded-t-[160px] rounded-b-[18px] bg-lightblue shadow-[0_44px_90px_-30px_rgba(0,0,0,0.6)] dt:h-[460px] dt:w-full dt:rounded-t-[220px]">
            <Image src="/images/home/home-hajj-hero.webp" alt="Pilgrims performing Hajj" fill sizes="(max-width:900px) 290px, 440px" className="object-cover" />
            <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,rgba(26,62,110,0.4)_100%)]" />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-4 inset-x-0 flex justify-center dt:inset-x-auto dt:left-[-20px] dt:block">
            <DropBounce className="flex w-fit items-center gap-2.5 rounded-2xl border border-white/10 bg-white px-4 py-3 shadow-[0_24px_50px_-18px_rgba(0,0,0,0.5)]">
              <span className="grid h-9 w-9 flex-none place-items-center rounded-full bg-gold/15 text-gold"><Users size={18} /></span>
              <span className="text-left text-[12px] font-light leading-tight text-navy/70">Every pilgrim,<br /><span className="font-serif text-[14px] font-bold text-navy">cared for</span></span>
            </DropBounce>
          </div>
        </Reveal>

        {/* Content */}
        <div className="text-center dt:text-left">
          <Reveal as="div">
            <Eyebrow align="center" tone="white" className="mb-4 dt:justify-start">Hajj for everyone</Eyebrow>
            <AccentHeading
              as="h2"
              before="Hajj Experiences for "
              accent="All"
              after=" Pilgrims"
              className="text-[28px] leading-[1.16] text-white dt:text-[40px]"
            />
            <p className="mx-auto mt-4 max-w-[560px] text-[15.5px] font-light leading-[1.7] text-white/80 dt:mx-0 dt:text-[16.5px]">
              Whether it&apos;s your first pilgrimage or your tenth, travelling solo or with the whole
              family — we shape every detail of Hajj around who you are and what you need.
            </p>
          </Reveal>

          <Stagger as="div" gap={0.1} delay={0.1} className="mt-8 grid gap-4 sm:grid-cols-2">
            {AUDIENCES.map(({ icon: Icon, title, body }) => (
              <StaggerItem
                as="div"
                key={title}
                direction="up"
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-5 text-left transition-colors hover:border-gold/40"
              >
                <span className="grid h-12 w-12 flex-none place-items-center rounded-xl border border-gold/50 text-gold">
                  <Icon size={22} aria-hidden />
                </span>
                <div>
                  <h3 className="font-serif text-[16px] font-bold leading-snug text-white">{title}</h3>
                  <p className="mt-1.5 text-[13px] font-light leading-relaxed text-white/70">{body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <DropBounce delay={0.3} amount={0.4} className="mt-8 flex justify-center dt:justify-start">
            <Button href="/hajj-packages/" variant="gold" size="lg" className="w-full uppercase tracking-[0.06em] dt:w-auto">
              View Hajj Packages
              <ArrowRight size={18} aria-hidden />
            </Button>
          </DropBounce>
        </div>
      </Container>
    </Section>
  );
}
