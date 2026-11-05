import Image from "next/image";
import { Accessibility, GraduationCap, Users, User, ArrowRight, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AccentHeading } from "@/components/ui/AccentHeading";
import { Button } from "@/components/ui/Button";

type Audience = {
  icon: LucideIcon;
  title: string;
  bodyDesktop: string;
  bodyMobile: string;
};

const AUDIENCES: Audience[] = [
  {
    icon: Accessibility,
    title: "Older & Mobility-Impaired",
    bodyDesktop: "Wheelchair access, medical support, hotels near the sites.",
    bodyMobile: "Wheelchair access and medical support.",
  },
  {
    icon: GraduationCap,
    title: "First-Time Pilgrims",
    bodyDesktop: "Guided rituals and step-by-step support from Ihram to Jamrat.",
    bodyMobile: "Guided rituals, step-by-step help.",
  },
  {
    icon: Users,
    title: "Families & Groups",
    bodyDesktop: "Coordinated travel, communal accommodation and shared meals.",
    bodyMobile: "Coordinated travel, shared meals.",
  },
  {
    icon: User,
    title: "Solo Pilgrims",
    bodyDesktop: "Personal reflection with full logistical support throughout.",
    bodyMobile: "Safe, well-planned personal journey.",
  },
];

/** Hajj services — navy band with an arch photo and an overlapping white panel of audience cards. */
export function HajjSection() {
  return (
    <Section bg="navy" className="relative overflow-hidden">
      {/* Decorative ring */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-[280px] w-[280px] rounded-full border border-gold/15 dt:left-1/2 dt:right-auto dt:h-[1000px] dt:w-[1000px] dt:-translate-x-1/2 dt:-top-0"
      />

      {/* Header + arch photo */}
      <Container className="relative pt-12 dt:pt-[88px]">
        <div className="mx-auto mb-8 max-w-[740px] text-center dt:mb-12">
          <Eyebrow align="center" tone="white" className="mb-4">
            The fifth pillar
          </Eyebrow>
          <AccentHeading
            as="h2"
            before="Our "
            accent="Hajj"
            after=" Services"
            className="mb-4 text-[32px] leading-[1.2] text-white dt:text-[50px] dt:leading-[1.14]"
          />
          <p className="mx-auto max-w-[620px] text-[16px] font-light leading-[1.68] text-white/90 text-pretty dt:text-[17px] dt:leading-[1.72]">
            As one of the five pillars of Islam, Hajj is an obligation for every Muslim who is
            physically and financially able. We ensure every pilgrim is comfortable and fully guided.
          </p>
        </div>

        <div className="relative mx-auto h-[370px] w-[300px] overflow-hidden rounded-t-[150px] rounded-b-[14px] bg-lightblue shadow-[0_30px_56px_-22px_rgba(0,0,0,0.5)] dt:h-[460px] dt:w-[520px] dt:rounded-t-[260px] dt:rounded-b-[16px] dt:shadow-[0_40px_70px_-26px_rgba(0,0,0,0.55)]">
          <Image
            src="/images/home/home-hajj-hero.webp"
            alt="Pilgrims at the Kaaba"
            fill
            sizes="(max-width: 900px) 300px, 520px"
            className="object-cover"
          />
        </div>
      </Container>

      {/* Overlapping white panel */}
      <div className="relative -mt-10 rounded-t-[22px] bg-white text-navy dt:-mt-20">
        <Container className="pb-11 pt-[68px] dt:pb-[72px] dt:pt-[110px]">
          {/* Sub-heading (desktop only) */}
          <div className="mb-10 hidden text-center dt:block">
            <AccentHeading
              as="h3"
              before="Hajj experiences for "
              accent="all"
              after=" pilgrims"
              className="mb-3 text-[32px] leading-[1.2] text-navy"
            />
            <p className="mx-auto max-w-[640px] text-[16.5px] font-light leading-[1.68] text-navy/85 text-pretty">
              Whether you are travelling solo, with family, for the first time, or need extra
              support — we tailor the journey to you.
            </p>
          </div>

          {/* Audience cards — mobile 2x2 grid */}
          <div className="grid grid-cols-2 gap-3 dt:hidden">
            {AUDIENCES.map(({ icon: Icon, title, bodyMobile }) => (
              <div
                key={title}
                className="rounded-2xl border border-navy/10 bg-ice p-5 text-center"
              >
                <span className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full border-[1.5px] border-gold bg-lightblue">
                  <Icon size={22} className="text-navy" aria-hidden />
                </span>
                <h4 className="mb-1.5 font-serif text-[15px] font-bold leading-[1.3] text-navy">
                  {title}
                </h4>
                <p className="text-[13px] font-light leading-[1.5] text-navy/85 text-pretty">
                  {bodyMobile}
                </p>
              </div>
            ))}
          </div>

          {/* Audience cards — desktop row with dividers */}
          <div className="mx-auto hidden max-w-[1100px] grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-start dt:grid">
            {AUDIENCES.map(({ icon: Icon, title, bodyDesktop }, i) => (
              <div key={title} className="contents">
                {i > 0 && <div aria-hidden className="mx-2 self-stretch w-px bg-navy/10" />}
                <div className="px-4 text-center">
                  <span className="mx-auto mb-4 grid h-[60px] w-[60px] place-items-center rounded-full border-[1.5px] border-gold bg-ice">
                    <Icon size={26} className="text-navy" aria-hidden />
                  </span>
                  <h4 className="mb-2 font-serif text-[17px] font-bold leading-[1.3] text-navy">
                    {title}
                  </h4>
                  <p className="text-[14px] font-light leading-[1.55] text-navy/85 text-pretty">
                    {bodyDesktop}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-7 text-center dt:mt-10">
            <Button
              href="/hajj/usa-packages/"
              variant="gold"
              size="lg"
              className="w-full tracking-[0.06em] uppercase dt:w-auto"
            >
              <span>View Hajj Packages</span>
              <ArrowRight size={18} aria-hidden />
            </Button>
          </div>
        </Container>
      </div>
    </Section>
  );
}
